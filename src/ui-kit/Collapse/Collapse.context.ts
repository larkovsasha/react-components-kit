import { createContext, useContext } from 'react';

interface CollapseContext {
  openedItems: Set<string>;
  onHeadItemClick: (name: string) => void;
}

const CollapseContext = createContext<CollapseContext | null>(null);

export const CollapseProvider = CollapseContext.Provider;

export const useCollapseItem = (name: string) => {
  const context = useContext(CollapseContext);
  if (!context) {
    throw Error('Cannot use `CollapseContext` outside `<Collapse/>`');
  }
  const { openedItems, onHeadItemClick } = context;
  return {
    isOpened: openedItems.has(name),
    onHeadItemClick,
  };
};
