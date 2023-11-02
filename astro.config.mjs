import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";
import svelte from "@astrojs/svelte";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  adapter: vercel(),
  integrations: [svelte(), partytown()]
});