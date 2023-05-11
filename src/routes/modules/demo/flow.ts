import type { AppRouteModule } from 'fe-ent-core/lib/router/types';

import { t } from 'fe-ent-core/lib/hooks/web/use-i18n';

const charts: AppRouteModule = {
  path: '/flow',
  name: 'FlowDemo',
  component: 'LAYOUT',
  redirect: '/flow/flowChart',
  meta: {
    orderNo: 5000,
    icon: 'tabler:chart-dots',
    title: t('routes.demo.flow.name'),
  },
  children: [
    {
      path: 'flowChart',
      name: 'flowChartDemo',
      component: () => import('/@/views/demo/comp/flow-chart/index.vue'),
      meta: {
        title: t('routes.demo.flow.flowChart'),
      },
    },
  ],
};

export default charts;
