import { Router5 } from 'router5';
import historyPlugin from 'router5-history';

export default function createRouter() {
  const router = new Router5()
    .setOption('useHash', true)
    .setOption('defaultRoute', 'home')
    .setOption('trailingSlash', false)
    // Routes
    .addNode('home', '/')
    .addNode('counter', '/counter')
    // Plugins
    .usePlugin(historyPlugin());

  if (__CLIENT__ && process.env.NODE_ENV !== 'production') {
    router.usePlugin(Router5.loggerPlugin());
  }

  return router;
}
