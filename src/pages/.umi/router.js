import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';
import history from '@tmp/history';
import RendererWrapper0 from '/Users/jean/antd-course/src/pages/.umi/LocaleWrapper.jsx'

const Router = require('dva/router').routerRedux.ConnectedRouter;

const routes = [
  {
    "path": "/",
    "component": require('../../layout').default,
    "routes": [
      {
        "path": "/",
        "component": require('../Helloworld').default,
        "exact": true
      },
      {
        "path": "/helloworld",
        "component": require('../Helloworld').default,
        "exact": true
      },
      {
        "path": "/puzzlecards",
        "component": require('../puzzlecards').default,
        "exact": true
      },
      {
        "path": "/list",
        "component": require('../list').default,
        "exact": true
      },
      {
        "path": "/css-modules-with-less",
        "component": require('../css-modules-with-less').default,
        "exact": true
      },
      {
        "path": "/css-modules-with-antd",
        "component": require('../css-modules-with-antd').default,
        "exact": true
      },
      {
        "path": "/fetchUpload",
        "component": require('../upload/fetchUpload').default,
        "exact": true
      },
      {
        "path": "/antdUpload",
        "component": require('../upload/antdUpload').default,
        "exact": true
      },
      {
        "path": "/fetchDownload",
        "component": require('../download/fetchDownload').default,
        "exact": true
      },
      {
        "path": "/dashboard",
        "routes": [
          {
            "path": "/dashboard/analysis",
            "component": require('../Dashboard/Analysis').default,
            "exact": true
          },
          {
            "path": "/dashboard/monitor",
            "component": require('../Dashboard/Monitor').default,
            "exact": true
          },
          {
            "path": "/dashboard/workplace",
            "component": require('../Dashboard/Workplace').default,
            "exact": true
          },
          {
            "component": () => React.createElement(require('/Users/jean/antd-course/node_modules/_umi-build-dev@1.9.2@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "component": () => React.createElement(require('/Users/jean/antd-course/node_modules/_umi-build-dev@1.9.2@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
      }
    ]
  },
  {
    "component": () => React.createElement(require('/Users/jean/antd-course/node_modules/_umi-build-dev@1.9.2@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
  }
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

// route change handler
function routeChangeHandler(location, action) {
  plugins.applyForEach('onRouteChange', {
    initialValue: {
      routes,
      location,
      action,
    },
  });
}
history.listen(routeChangeHandler);
routeChangeHandler(history.location);

export { routes };

export default function RouterWrapper() {
  return (
<RendererWrapper0>
          <Router history={history}>
      { renderRoutes(routes, {}) }
    </Router>
        </RendererWrapper0>
  );
}
