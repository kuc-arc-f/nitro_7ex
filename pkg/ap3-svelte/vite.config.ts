import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import tsconfigPaths from 'vite-tsconfig-paths';
import buildCommon from './src/lib/buildCommon';

const directoryPath = './src/client';

export default defineConfig(async() => {
  const entryFiles = await buildCommon.getEntryItems(directoryPath);
console.log(entryFiles);

  return {
    plugins: [
      svelte(),
      tsconfigPaths({
        projects: ['./tsconfig.app.json'],
      }),
    ], 
    define: {
      "process.env.NODE_ENV": '"production"',
    },
    build: {
      lib: {
        //entry: entryFiles,
        //entry: ["./src/client/page3.ts"],
        entry: ["./src/client/Login.ts"],
        formats: ['es'],
        fileName: '[name]',
      },
      rollupOptions: {
        output: {
          dir: './public/static'
        }
      },
      emptyOutDir: false,
      copyPublicDir: false
    }
  }

})
/*
*/