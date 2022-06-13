import { useCollapseItem } from '../Collapse.context';
import React from 'react';

interface CollapseItemChildrenHeaderProps {
  onClick: React.MouseEventHandler;
}

interface CollapseItemChildrenProps {
  headerProps: CollapseItemChildrenHeaderProps;
  contentVisible: boolean;
}

interface CollapseItemProps {
  name: string;
  children: (props: CollapseItemChildrenProps) => React.ReactElement;
}

export function CollapseItem({ name, children }: CollapseItemProps) {
  const { isOpened, onHeaderClick } = useCollapseItem(name);

  return children({
    headerProps: { onClick: () => onHeaderClick(name) },
    contentVisible: isOpened,
  });
}
