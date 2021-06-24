import React, { createContext, useContext, useReducer, ReactNode } from 'react';

const defaultState = { count: 0 };

export type Action = 'increment' | 'over';
export type Dispatch = (action: Action) => void;
export type State = typeof defaultState;

const CounterContext =
  createContext<{ state: State; dispatch: Dispatch | undefined }>(undefined);

function counterReducer(state: State, action: Action) {
  switch (action) {
    case 'increment':
      return {
        count: state.count + 1,
      };
    case 'over':
      return {
        count: -1,
      };
  }
}

export function CounterProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(counterReducer, defaultState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
}

export function useCounter() {
  const context = useContext(CounterContext);
  if (!context) throw new Error('useCounter must be inside CounterProvider');
  return context;
}
