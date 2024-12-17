import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  vite: {
    ssr: {
        noExternal: ['webcoreui']
    },
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern-compiler'
            }
        }
    }
  },
  integrations: [
    tailwind(), 
    react(), 
    icon()
  ]
});