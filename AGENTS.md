# Repository Guide for Agents

## Svelte 5 Conventions

- **Reactivity:** Use Runes! `$state`, `$derived`, `$effect`. NO `$:`.
- **Props:** Use `let { prop } = $props();` instead of `export let prop`.
- **Events:** Use `onclick={handler}` instead of `on:click`.
- **Snippets:** Use `{#snippet}` and `{@render}` instead of `<slot>`.
- **Async:** Use `<svelte:boundary>` and `{#await}`.

## General Rules

- **Conciseness:** Be extremely concise.
- **Types:** Do NOT write explicit return types unless necessary.

## btca

Trigger: user says "use btca" (for codebase/docs questions).

Run:

- btca ask -t <tech> -q "<question>"

Available <tech>: svelte, tailwindcss, runed, motion-svelte
