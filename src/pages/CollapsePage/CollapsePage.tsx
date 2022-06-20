import React, { useState } from 'react';
import { Collapse, CollapseItem } from 'ui-kit';
const contentStyles = {
  height: 300,

  background: 'lightgrey',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const headerStyles = {
  border: '1px solid lightgrey',
  padding: 8,
  cursor: 'pointer',
  borderBottom: 'none',
};
export const CollapsePage = () => {
  const [openedItems, setOpenedItems] = useState<string[]>([]);
  return (
    <section className="CollapsePage">
      <Collapse
        openedItems={openedItems}
        onChange={setOpenedItems}
        mode="default"
      >
        <CollapseItem name="first">
          {({ headerProps, contentVisible }) => {
            return (
              <div>
                <div
                  {...headerProps}
                  style={{
                    ...headerStyles,
                  }}
                >
                  First collapse item
                </div>
                {contentVisible && <div style={contentStyles}>1</div>}
              </div>
            );
          }}
        </CollapseItem>

        <CollapseItem name="first">
          {({ headerProps, contentVisible }) => {
            return (
              <div>
                <div
                  {...headerProps}
                  style={{
                    ...headerStyles,
                  }}
                >
                  First collapse item
                </div>
                {contentVisible && <div style={contentStyles}>1</div>}
              </div>
            );
          }}
        </CollapseItem>

        <CollapseItem name="second">
          {({ headerProps, contentVisible }) => (
            <div>
              <div {...headerProps} style={headerStyles}>
                Second collapse item
              </div>
              {contentVisible && <div style={contentStyles}>2</div>}
            </div>
          )}
        </CollapseItem>

        <CollapseItem name="third">
          {({ headerProps, contentVisible }) => (
            <div>
              <div
                {...headerProps}
                style={{
                  ...headerStyles,
                  borderBottom: '1px solid lightgrey',
                }}
              >
                Third collapse item
              </div>
              {contentVisible && <div style={contentStyles}>3</div>}
            </div>
          )}
        </CollapseItem>
      </Collapse>
    </section>
  );
};
