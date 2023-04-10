import { ConfigEnv, UserConfigExport } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { viteMockServe } from 'vite-plugin-mock'
import { join } from "path";

// https://vitejs.dev/config/
export default ({ command }: ConfigEnv): UserConfigExport => {
  let prodMock = true
  return {
    resolve: {
      alias: {
        '@': join(__dirname, "src"),
      }
    },
    plugins: [
      vue(),
      vueJsx({}),
      viteMockServe({
        // default
        mockPath: 'mock',
        localEnabled: command === 'serve',
        prodEnabled: command !== 'serve' && prodMock,
        injectCode: `
          import { setupProdMockServer } from './mockProdServer';
          setupProdMockServer();
        `,
      }),

    ],
  }
}
