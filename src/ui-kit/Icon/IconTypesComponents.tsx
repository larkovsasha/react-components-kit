import React, { ReactElement } from 'react';
import { newId } from 'utils/newId';
import ArrowDown from 'ui-kit/assets/icons/ArrowDown.svg';
import { ReactComponent as ArrowLeft } from 'ui-kit/assets/icons/ArrowLeft.svg';
import { ReactComponent as ArrowRight } from 'ui-kit/assets/icons/ArrowRight.svg';
import { ReactComponent as Center } from 'ui-kit/assets/icons/Center.svg';
import { ReactComponent as Checkbox } from 'ui-kit/assets/icons/CheckboxArrow.svg';
import { ReactComponent as Close } from 'ui-kit/assets/icons/Close.svg';
import { ReactComponent as Copy } from 'ui-kit/assets/icons/Copy.svg';
import { ReactComponent as Edit } from 'ui-kit/assets/icons/Edit.svg';
import { ReactComponent as Exit } from 'ui-kit/assets/icons/Exit.svg';
import { ReactComponent as Home } from 'ui-kit/assets/icons/Home.svg';
import { ReactComponent as Minus } from 'ui-kit/assets/icons/Minus.svg';
import { ReactComponent as Excel } from 'ui-kit/assets/icons/files/Excell-ico.svg';
import { ReactComponent as Plus } from 'ui-kit/assets/icons/Plus.svg';
import { ReactComponent as Search } from 'ui-kit/assets/icons/Search.svg';
import { ReactComponent as Spinner } from 'ui-kit/assets/icons/Spinner.svg';
import { ReactComponent as Telegram } from 'ui-kit/assets/icons/Telegram.svg';
import { ReactComponent as Visibility } from 'ui-kit/assets/icons/Visibility.svg';
import { ReactComponent as VisibilityOff } from 'ui-kit/assets/icons/VisibilityOff.svg';

const iconTypes = [
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'Center',
  'Checkbox',
  'Close',
  'Copy',
  'Edit',
  'Exit',
  'Home',
  'Minus',
  'Excel',
  'Plus',
  'Search',
  'Spinner',
  'Telegram',
  'Visibility',
  'VisibilityOff',
] as const;

export type IconType = typeof iconTypes[number];

type IIconTypesComponents = {
  // eslint-disable-next-line no-unused-vars
  [K in IconType]: ReactElement;
};

export const iconTypesComponents: IIconTypesComponents = {
  ArrowDown: <ArrowDown key={newId()} />,
  ArrowLeft: <ArrowLeft key={newId()} />,
  ArrowRight: <ArrowRight key={newId()} />,
  Center: <Center key={newId()} />,
  Checkbox: <Checkbox key={newId()} />,
  Close: <Close key={newId()} />,
  Copy: <Copy key={newId()} />,
  Edit: <Edit key={newId()} />,
  Exit: <Exit key={newId()} />,
  Home: <Home key={newId()} />,
  Minus: <Minus key={newId()} />,
  Excel: <Excel key={newId()} />,
  Plus: <Plus key={newId()} />,
  Search: <Search key={newId()} />,
  Spinner: <Spinner key={newId()} />,
  Telegram: <Telegram key={newId()} />,
  Visibility: <Visibility key={newId()} />,
  VisibilityOff: <VisibilityOff key={newId()} />,
};
