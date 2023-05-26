import 'uno.css';
// Register icon sprite
import 'virtual:svg-icons-register';

import { createApp } from 'vue';
import EntCore, { registerAntGlobComp } from 'fe-ent-core';
import { initAppConfigStore, setupErrorHandle } from 'fe-ent-core/es/logics';
import { setupGlobDirectives } from 'fe-ent-core/es/directives';
import { setupStore } from 'fe-ent-core/es/store';
import { entRouter, setupRouterGuard } from 'fe-ent-core/es/router';
import { setupI18n } from 'fe-ent-core/es/locales';
import { initApplication } from '/@/init-application';

import 'ant-design-vue/dist/antd.css';
import 'fe-ent-core/dist/style.css';
import 'fe-ent-layout/dist/style.css';
import 'fe-ent-login/dist/style.css';

import { getBasicRoutes, initRouteAndLayout } from 'fe-ent-layout';
import { LoginRoute } from 'fe-ent-login';

import App from './App.vue';
async function bootstrap() {
  const app = createApp(App);

  // Configure store
  setupStore(app);

  // Initialize internal system configuration
  await initAppConfigStore();

  //初始化全局变量
  await initApplication();

  // Multilingual configuration
  // Asynchronous case: language files may be obtained from the server side
  await setupI18n(app);

  // Register ant global components
  registerAntGlobComp(app);

  initRouteAndLayout(app, entRouter);

  app.use(EntCore);

  entRouter.addBasicRoutes([LoginRoute]);
  entRouter.addBasicRoutes(getBasicRoutes());
  entRouter.addAuthRoutes(import.meta.globEager(`/src/routes/modules/**/*.ts`));

  app.use(entRouter);

  // router-guard
  setupRouterGuard(entRouter);

  // Register global directive
  setupGlobDirectives(app);

  // Configure global error handling
  setupErrorHandle(app);

  // https://next.router.vuejs.org/api/#isready
  // await router.isReady();

  app.mount('#app');
}

bootstrap();
