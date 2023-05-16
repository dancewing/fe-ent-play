import { defineApplicationConfig } from 'fe-ent-build';

export default defineApplicationConfig({
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
          login: 'login.html',
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
        '/upload': {
          target: 'http://localhost:3300/upload',
          changeOrigin: true,
          ws: true,
          rewrite: (path) => path.replace(new RegExp(`^/upload`), ''),
        },
      },
    },
  },
});
