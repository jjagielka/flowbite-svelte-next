import { enhancedImages } from "@sveltejs/enhanced-img";
import { sveltekit } from "@sveltejs/kit/vite";
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { defineConfig } from "vite";
import svelteKitPackage from "./node_modules/@sveltejs/kit/package.json" with { type: "json" };
import sveltePackage from "./node_modules/svelte/package.json" with { type: "json" };
import tailwindcssPackage from "./node_modules/tailwindcss/package.json" with { type: "json" };
import vitePackage from "./node_modules/vite/package.json" with { type: "json" };
import pkg from "./package.json" with { type: "json" };

export default defineConfig({
  plugins: [enhancedImages(), sveltekit(), tailwindcss()],
  build: {
    minify: false
  },
  resolve: {
    alias: {
      'flowbite-svelte': path.resolve(process.cwd(), './src/lib/index.js'),
      'flowbite-svelte-blocks': path.resolve(process.cwd(), './node_modules/flowbite-svelte-blocks/dist/index.js')
    }
  },
  define: {
    __NAME__: JSON.stringify(pkg.name),
    __VERSION__: JSON.stringify(pkg.version),
    __GITHUBURL__: JSON.stringify(pkg.repository.url),
    __SVELTEVERSION__: JSON.stringify(sveltePackage.version),
    __SVELTEKITVERSION__: JSON.stringify(svelteKitPackage.version),
    __VITEVERSION__: JSON.stringify(vitePackage.version),
    __TAILWINDCSSVERSION__: JSON.stringify(tailwindcssPackage.version)
  }
});
