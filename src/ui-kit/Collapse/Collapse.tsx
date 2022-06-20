import React, { useMemo } from 'react';
import { CollapseProvider } from './Collapse.context';

export interface CollapseProps {
  openedItems: string[];
  onChange: (openedItems: string[]) => void;
  children: React.ReactElement[];
  mode?: 'default' | 'accordion';
}

export const ACCORDION_MODE_ERROR =
  '<Collapse /> can only accept 1 opened item in `accordion` mode';

export const Collapse: React.FC<CollapseProps> = ({
  mode,
  onChange,
  openedItems,
  children,
}) => {
  const openedItemsSet = useMemo<Set<string>>(() => {
    if (mode === 'accordion' && openedItems.length > 1) {
      console.warn(ACCORDION_MODE_ERROR);
      return new Set<string>(openedItems.slice(0, 1));
    }
    return new Set<string>(openedItems);
  }, [openedItems]);

  const onHeadItemClick = (name: string): void => {
    const isOpened = openedItemsSet.has(name);
    if (mode === 'default') {
      const newOpenedItems = isOpened
        ? openedItems.filter((el) => el !== name)
        : [...openedItems, name];
      onChange(newOpenedItems);
      return;
    }
    onChange(isOpened ? [] : [name]);
  };

  return (
    <CollapseProvider value={{ openedItems: openedItemsSet, onHeadItemClick }}>
      {React.Children.toArray(children)}
    </CollapseProvider>
  );
};
