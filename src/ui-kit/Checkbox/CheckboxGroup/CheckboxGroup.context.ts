import { createContext, useContext } from 'react';

interface CheckboxContext {
  onCheckBoxItemClick: (name: string) => void;
  checkedItems: string[];
}

const CheckboxGroupContext = createContext<CheckboxContext | null>(null);

export const CheckboxGroupProvider = CheckboxGroupContext.Provider;

export const useCheckboxItem = (label: string) => {
  const context = useContext(CheckboxGroupContext);
  if (!context) {
    throw new Error('Cannot use `CheckboxProvider` outside `<CheckboxGroup/>`');
  }
  const { onCheckBoxItemClick, checkedItems } = context;
  return {
    onCheckBoxItemClick,
    isChecked: checkedItems.includes(label),
  };
};
