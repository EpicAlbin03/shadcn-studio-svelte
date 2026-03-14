import { CSSSVG, JSONSVG, SVELTESVG, TypeScriptSVG } from "$lib/assets/svg";
import { FileIcon } from "@lucide/svelte";

export function getIconForLanguageExtension(language: string) {
  switch (language) {
    case 'svelte':
      return SVELTESVG;
    case 'json':
      return JSONSVG;
    case 'css':
      return CSSSVG;
    case 'ts':
    case 'js':
    case 'typescript':
      return TypeScriptSVG;
    default:
      return FileIcon;
  }
}