import { Children, useEffect, useState } from 'react';
import { EVENTS } from './utils.js';
import { match } from 'path-to-regexp';

export function Router({ children, routes = [], defaultComponent: DefaultComponent = () => <h1>404</h1> }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange);
    window.addEventListener(EVENTS.POPSTATE, onLocationChange);

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange);
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange);
    };
  }, []);

  let routeParams = {};

  const routesFromChildren = Children.map(children, ({ props, type }) => {
    const { name } = type;
    const isRoute = name === 'Route';

    return isRoute ? props : null;
  }).filter(Boolean);

  const routesToUse = routes.concat(routesFromChildren);

  const Page =
    routesToUse.find(({ path }) => {
      if (path === currentPath) return true;

      const matchUrl = match(path, { decode: decodeURIComponent });

      const matched = matchUrl(currentPath);

      if (!matched) return false;

      routeParams = matched.params;
      return true;
    })?.component || DefaultComponent;

  return Page ? <Page routeParams={routeParams} /> : <DefaultComponent />;
}
