import { defineProjectConfig } from 'fe-ent-vue-scripts';
import {defineConfig} from 'vite';

export default defineConfig(({command, mode} )=> {

  return defineProjectConfig({
    command,
    mode,
    options: {
      cssModify: {
        primaryColor: '#1f883d',
      },
    },
    overrides: {
      build: {
        rollupOptions: {
          input: {
            index: 'index.html',
          },
        },
        minify: false,
        cssCodeSplit: true,
      },
      server: {
        port: 3300,
        proxy: {
          '/api': {
            target: 'http://localhost:3300',
            changeOrigin: true,
            ws: true,
            // rewrite: (path) => path.replace(new RegExp(`^/api`), ''),
            // only https
            // secure: false
          },
        },
      },
    },
  })
});
