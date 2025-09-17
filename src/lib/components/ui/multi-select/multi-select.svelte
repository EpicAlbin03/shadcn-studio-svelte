<script lang="ts">
	import { Command as CommandPrimitive } from 'bits-ui';
	import { XIcon } from '@lucide/svelte';
	import * as Command from '$lib/components/ui/command';
	import { cn } from '$lib/utils';
	import { Debounced } from 'runed';
	import type { GroupOption, MultiSelectProps, Option } from './types';

	function transToGroupOption(options: Option[], groupBy?: string) {
		if (options.length === 0) {
			return {};
		}

		if (!groupBy) {
			return {
				'': options
			};
		}

		const groupOption: GroupOption = {};

		options.forEach((option) => {
			const key = (option[groupBy] as string) || '';

			if (!groupOption[key]) {
				groupOption[key] = [];
			}

			groupOption[key].push(option);
		});

		return groupOption;
	}

	function removePickedOption(groupOption: GroupOption, picked: Option[]) {
		const cloneOption = JSON.parse(JSON.stringify(groupOption)) as GroupOption;

		for (const [key, value] of Object.entries(cloneOption)) {
			cloneOption[key] = value.filter((val) => !picked.find((p) => p.value === val.value));
		}

		return cloneOption;
	}

	function isOptionsExist(groupOption: GroupOption, targetOption: Option[]) {
		for (const [, value] of Object.entries(groupOption)) {
			if (value.some((option) => targetOption.find((p) => p.value === option.value))) {
				return true;
			}
		}

		return false;
	}

	let {
		value = $bindable(),
		onChange,
		placeholder,
		defaultOptions: arrayDefaultOptions = [],
		options: arrayOptions,
		delay,
		onSearch,
		onSearchSync,
		loadingIndicator,
		emptyIndicator,
		maxSelected = Number.MAX_SAFE_INTEGER,
		onMaxSelected,
		hidePlaceholderWhenSelected,
		disabled,
		groupBy,
		class: className,
		badgeClassName,
		selectFirstItem = true,
		creatable = false,
		triggerSearchOnFocus = false,
		commandProps,
		inputProps,
		hideClearAllButton = false
	}: MultiSelectProps = $props();

	let inputRef = $state<HTMLInputElement>(null!);
	let dropdownRef = $state<HTMLDivElement>(null!);
	let open = $state(false);
	let onScrollbar = $state(false);
	let isLoading = $state(false);
	let selected = $state<Option[]>(value || []);
	let options = $state<GroupOption>(transToGroupOption(arrayDefaultOptions, groupBy));
	let inputValue = $state('');
	const debouncedSearchTerm = new Debounced(() => inputValue, delay || 500);
	const selectables = $derived.by<GroupOption>(() => removePickedOption(options, selected));

	function commandFilter() {
		if (commandProps?.filter) {
			return commandProps.filter;
		}

		if (creatable) {
			return (value: string, search: string) => {
				return value.toLowerCase().includes(search.toLowerCase()) ? 1 : -1;
			};
		}

		// Using default filter in `cmdk`. We don't have to provide it.
		return undefined;
	}

	function handleClickOutside(event: MouseEvent | TouchEvent) {
		if (
			dropdownRef &&
			!dropdownRef.contains(event.target as Node) &&
			inputRef &&
			!inputRef.contains(event.target as Node)
		) {
			open = false;
			inputRef.blur();
		}
	}

	function handleUnselect(option: Option) {
		const newOptions = selected.filter((s) => s.value !== option.value);
		selected = newOptions;
		onChange?.(newOptions);
	}

	function handleKeyDown(e: KeyboardEvent) {
		if (inputRef) {
			if (e.key === 'Delete' || e.key === 'Backspace') {
				if (inputRef.value === '' && selected.length > 0) {
					const lastSelectOption = selected[selected.length - 1];

					// If last item is fixed, we should not remove it.
					if (!lastSelectOption.fixed) {
						handleUnselect(selected[selected.length - 1]);
					}
				}
			}

			// This is not a default behavior of the <input /> field
			if (e.key === 'Escape') {
				inputRef.blur();
			}
		}
	}

	$effect(() => {
		if (open) {
			document.addEventListener('mousedown', handleClickOutside);
			document.addEventListener('touchend', handleClickOutside);
		} else {
			document.removeEventListener('mousedown', handleClickOutside);
			document.removeEventListener('touchend', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
			document.removeEventListener('touchend', handleClickOutside);
		};
	});

	$effect(() => {
		/** If `onSearch` is provided, do not trigger options updated. */
		if (!arrayOptions || onSearch) {
			return;
		}

		const newOption = transToGroupOption(arrayOptions || [], groupBy);

		if (JSON.stringify(newOption) !== JSON.stringify(options)) {
			options = newOption;
		}
	});

	$effect(() => {
		/** sync search */
		function doSearchSync() {
			const res = onSearchSync?.(debouncedSearchTerm.current);
			options = transToGroupOption(res || [], groupBy);
		}

		async function exec() {
			if (!onSearchSync || !open) return;

			if (triggerSearchOnFocus) {
				doSearchSync();
			}

			if (debouncedSearchTerm) {
				doSearchSync();
			}
		}

		void exec();
	});

	$effect(() => {
		/** async search */
		async function doSearch() {
			isLoading = true;
			const res = await onSearch?.(debouncedSearchTerm.current);

			options = transToGroupOption(res || [], groupBy);
			isLoading = false;
		}

		async function exec() {
			if (!onSearch || !open) return;

			if (triggerSearchOnFocus) {
				await doSearch();
			}

			if (debouncedSearchTerm) {
				await doSearch();
			}
		}

		void exec();
	});
</script>

{#snippet CreatableItem()}
	{#if creatable && !(isOptionsExist( options, [{ value: inputValue, label: inputValue }] ) || selected.find((s) => s.value === inputValue))}
		{#if (!onSearch && inputValue.length > 0) || (onSearch && debouncedSearchTerm.current.length > 0 && !isLoading)}
			<Command.Item
				value={inputValue}
				class="cursor-pointer"
				onmousedown={(e) => {
					e.preventDefault();
					e.stopPropagation();
				}}
				onSelect={() => {
					if (selected.length >= maxSelected) {
						onMaxSelected?.(selected.length);
						return;
					}

					const newOptions = [...selected, { value: inputValue, label: inputValue }];
					selected = newOptions;
					onChange?.(newOptions);
					inputValue = '';
				}}
			>
				Create "{inputValue}"
			</Command.Item>
		{/if}
	{/if}
{/snippet}

{#snippet EmptyItem()}
	{#if emptyIndicator}
		{#if onSearch && !creatable && Object.keys(options).length === 0}
			<Command.Item value="-" disabled>
				{@render emptyIndicator()}
			</Command.Item>
		{:else}
			<Command.Empty>{@render emptyIndicator()}</Command.Empty>
		{/if}
	{/if}
{/snippet}

<Command.Root
	bind:ref={dropdownRef}
	{...commandProps}
	onkeydown={(e) => {
		handleKeyDown(e);
		commandProps?.onkeydown?.(e);
	}}
	class={cn('h-auto overflow-visible bg-transparent', commandProps?.class)}
	shouldFilter={commandProps?.shouldFilter !== undefined ? commandProps.shouldFilter : !onSearch}
	filter={commandFilter()}
>
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class={cn(
			'relative min-h-[38px] rounded-md border border-input text-sm transition-[color,box-shadow] outline-none focus-within:border-ring focus-within:ring-[3px] focus-within:ring-ring/50 has-disabled:pointer-events-none has-disabled:cursor-not-allowed has-disabled:opacity-50 has-aria-invalid:border-destructive has-aria-invalid:ring-destructive/20 dark:has-aria-invalid:ring-destructive/40',
			{
				'p-1': selected.length !== 0,
				'cursor-text': !disabled && selected.length !== 0
			},
			!hideClearAllButton && 'pe-9',
			className
		)}
		onclick={() => {
			if (disabled) return;
			inputRef?.focus();
		}}
	>
		<div class="flex flex-wrap gap-1">
			{#each selected as option (option.value)}
				<div
					class={cn(
						'animate-fadeIn relative inline-flex h-7 cursor-default items-center rounded-md border bg-background ps-2 pe-7 pl-2 text-xs font-medium text-secondary-foreground transition-all hover:bg-background disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 data-fixed:pe-2',
						badgeClassName
					)}
					data-fixed={option.fixed}
					data-disabled={disabled || undefined}
				>
					{option.label}
					<button
						class="absolute -inset-y-px -end-px flex size-7 items-center justify-center rounded-e-md border border-transparent p-0 text-muted-foreground/80 outline-hidden transition-[color,box-shadow] outline-none hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
						onkeydown={(e) => {
							if (e.key === 'Enter') {
								handleUnselect(option);
							}
						}}
						onmousedown={(e) => {
							e.preventDefault();
							e.stopPropagation();
						}}
						onclick={() => handleUnselect(option)}
						aria-label="Remove"
					>
						<XIcon size={14} aria-hidden="true" />
					</button>
				</div>
			{/each}
			<!-- Avoid having the "Search" Icon -->
			<CommandPrimitive.Input
				{...inputProps}
				bind:ref={inputRef}
				bind:value={inputValue}
				{disabled}
				onblur={(event) => {
					if (!onScrollbar) {
						open = false;
					}

					inputProps?.onblur?.(event);
				}}
				onfocus={(event) => {
					open = true;

					if (triggerSearchOnFocus) {
						onSearch?.(debouncedSearchTerm.current);
					}

					inputProps?.onfocus?.(event);
				}}
				placeholder={hidePlaceholderWhenSelected && selected.length !== 0 ? '' : placeholder}
				class={cn(
					'flex-1 bg-transparent outline-hidden placeholder:text-muted-foreground/70 disabled:cursor-not-allowed',
					{
						'w-full': hidePlaceholderWhenSelected,
						'px-3 py-2': selected.length === 0,
						'ml-1': selected.length !== 0
					},
					inputProps?.class
				)}
			/>
			<button
				type="button"
				onclick={() => {
					selected = selected.filter((s) => s.fixed);
					onChange?.(selected.filter((s) => s.fixed));
				}}
				class={cn(
					'absolute end-0 top-0 flex size-9 items-center justify-center rounded-md border border-transparent text-muted-foreground/80 transition-[color,box-shadow] outline-none hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50',
					(hideClearAllButton ||
						disabled ||
						selected.length < 1 ||
						selected.filter((s) => s.fixed).length === selected.length) &&
						'hidden'
				)}
				aria-label="Clear all"
			>
				<XIcon size={16} aria-hidden="true" />
			</button>
		</div>
	</div>
	<div class="relative">
		<div
			class={cn(
				'absolute top-2 z-10 w-full overflow-hidden rounded-md border border-input',
				'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
				!open && 'hidden'
			)}
			data-state={open ? 'open' : 'closed'}
		>
			{#if open}
				<Command.List
					class="bg-popover text-popover-foreground shadow-lg outline-hidden"
					onmouseleave={() => {
						onScrollbar = false;
					}}
					onmouseenter={() => {
						onScrollbar = true;
					}}
					onmouseup={() => {
						inputRef?.focus();
					}}
				>
					{#if isLoading}
						{@render loadingIndicator?.()}
					{:else}
						{@render EmptyItem()}
						{@render CreatableItem()}
						{#if !selectFirstItem}
							<Command.Item value="-" class="hidden" />
						{/if}
						{#each Object.entries(selectables) as [key, dropdowns] (key)}
							<Command.Group heading={key} class="h-full overflow-auto">
								{#each dropdowns as option (option.value)}
									<Command.Item
										value={option.value}
										disabled={option.disable}
										onmousedown={(e) => {
											e.preventDefault();
											e.stopPropagation();
										}}
										onSelect={() => {
											if (selected.length >= maxSelected) {
												onMaxSelected?.(selected.length);
												return;
											}

											inputValue = '';
											const newOptions = [...selected, option];
											selected = newOptions;
											onChange?.(newOptions);
										}}
										class={cn(
											'cursor-pointer',
											option.disable && 'pointer-events-none cursor-not-allowed opacity-50'
										)}
									>
										{option.label}
									</Command.Item>
								{/each}
							</Command.Group>
						{/each}
					{/if}
				</Command.List>
			{/if}
		</div>
	</div>
</Command.Root>
