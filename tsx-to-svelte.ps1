param(
    [string]$Path = "."
)

# Step 1: Rename *.tsx to *.svelte
Get-ChildItem -Path $Path -Filter *.tsx -File -Recurse | ForEach-Object {
    $newName = $_.DirectoryName + "\" + $_.BaseName + ".svelte"
    Rename-Item $_.FullName $newName
}

# Step 2: Process all .svelte files
Get-ChildItem -Path $Path -Filter *.svelte -File -Recurse | ForEach-Object {
    $file = $_.FullName

    # Read content as a single string
    $content = Get-Content $file -Raw

    # Replace @ with $lib
    $content = $content -replace '@', '$lib'

    # Replace lucide-react with @lucide/svelte
    $content = $content -replace 'lucide-react', '@lucide/svelte'

    # Replace className with class
    $content = $content -replace 'className', 'class'

    # Replace $lib/lib/utils with $lib/utils
    $content = $content -replace [Regex]::Escape('$lib/lib/utils'), '$lib/utils'

    # Split content into lines for line-based removal
    $lines = $content -split "`r?`n"

    # Remove lines starting with 'export default'
    $lines = $lines | Where-Object { $_ -notmatch '^\s*export default' }

    # Remove lines containing exactly 'use client' (quotes included)
    $lines = $lines | Where-Object { $_ -notmatch "'use client'" }

    # Re-join lines
    $content = ($lines -join "`r`n")

    # Add script tag to top
    $header = '<script lang="ts">' + "`r`n" + '  ' + "`r`n" + '</script>' + "`r`n`r`n"
    $content = $header + $content

    # Save changes
    Set-Content $file $content
}
