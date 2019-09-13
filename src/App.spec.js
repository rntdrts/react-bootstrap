import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow'; // ES6
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

it('renders without crashing', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<App />);
  const result = renderer.getRenderOutput();

  expect(result.type).toBe(Router);
});
