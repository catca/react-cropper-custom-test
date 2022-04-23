import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import type { State } from './types';

export const Hello = () => {
  const [state, setState] = useState<State>({ state: '' });
  useEffect(() => {
    setState({ state: 'hello' });
  }, []);

  return <div>{state.state} World!</div>;
};
