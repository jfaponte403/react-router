import { describe, it, expect, beforeEach, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { Router } from './Router.jsx';
import { getCurrentPath, EVENTS } from './utils.js';

vi.mock('./utils.js', () => ({
  getCurrentPath: vi.fn(),
  EVENTS: {
    PUSHSTATE: 'pushstate',
    POPSTATE: 'popstate',
  },
}));

describe('Router', () => {
  beforeEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it('should work without problems', () => {
    render(<Router routes={[]} />);
    expect(true).toBeTruthy();
  });

  it('should render 404', () => {
    render(<Router routes={[]} defaultComponent={() => <h1>404</h1>} />);
    expect(screen.getByText('404')).toBeTruthy();
  });

  it('should render the component of the first route that matches the path', () => {
    getCurrentPath.mockReturnValue('/about');

    const routes = [
      { path: '/about', component: () => <h1>About</h1> },
      { path: '/', component: () => <h1>Home</h1> },
    ];

    render(<Router routes={routes} />);

    expect(screen.getByText('About')).toBeTruthy();
  });
});
