import React from 'react';
import { useCollapseItem } from '../Collapse.context';

interface HeaderProps {
  onClick: (e: React.MouseEvent) => void;
}

interface CollapseItemChildrenProps {
  headerProps: HeaderProps;
  contentVisible: boolean;
}

interface CollapseItemProps {
  name: string;
  children: (props: CollapseItemChildrenProps) => React.ReactElement;
}

export const CollapseItem: React.FC<CollapseItemProps> = ({
  name,
  children,
}) => {
  const { isOpened, onHeadItemClick } = useCollapseItem(name);
  return children({
    contentVisible: isOpened,
    headerProps: { onClick: () => onHeadItemClick(name) },
  });
};
