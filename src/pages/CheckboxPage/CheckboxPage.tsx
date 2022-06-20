import React, { useState } from 'react';
import { Checkbox } from 'ui-kit';
import { CheckboxGroup } from '../../ui-kit/Checkbox/CheckboxGroup';
import { CheckboxGroupItem } from '../../ui-kit/Checkbox/CheckboxGroup/CheckboxGroupItem';

export interface ICheckboxGroupOption {
  option: {
    optionNameRu: string;
    optionNameOnBackend: string;
  };
  entities: string[];
}

export const CheckboxPage = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const [resultObject, setResultObject] = useState<TValuesObject<true>>({});

  const checkboxGroupOptions: ICheckboxGroupOption[] = [
    {
      option: { optionNameRu: 'Категория', optionNameOnBackend: 'category' },
      entities: ['Smartphones', 'Notebooks'],
    },
    {
      option: { optionNameRu: 'Форма', optionNameOnBackend: 'form' },
      entities: ['Круглая', 'Овальная', 'Прямоугольная', 'Фигурная'],
    },
  ];

  const handleChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  const handleChangeCheckboxGroup = (checkedItems: TValuesObject<true>) => {
    setResultObject(checkedItems);
  };
  return (
    <>
      <Checkbox
        id="1"
        label="Single"
        isChecked={checked}
        onChange={handleChangeCheckbox}
      />
      {`${checked}`}
      {checkboxGroupOptions.map((group) => {
        const groupName = group.option.optionNameOnBackend;
        return (
          <CheckboxGroup
            groupName={group.option.optionNameRu}
            key={groupName}
            onChange={handleChangeCheckboxGroup}
          >
            {group.entities.map((entity) => {
              return (
                <CheckboxGroupItem
                  key={`${groupName}:${entity}`}
                  label={entity}
                  id={`${groupName}:${entity}`}
                />
              );
            })}
          </CheckboxGroup>
        );
      })}
      <pre>{JSON.stringify(resultObject)}</pre>
    </>
  );
};
