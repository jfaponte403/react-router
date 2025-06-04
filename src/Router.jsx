import { Children, useEffect, useState } from 'react';
import {EVENTS, getCurrentPath} from './utils.js';
import { match } from 'path-to-regexp';

export function Router({ children, routes = [], defaultComponent: DefaultComponent = () => <h1>404</h1> }) {
  const [currentPath, setCurrentPath] = useState(getCurrentPath());

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(getCurrentPath());
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
  });

  const routesToUse = routes.concat(routesFromChildren).filter(Boolean);

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
