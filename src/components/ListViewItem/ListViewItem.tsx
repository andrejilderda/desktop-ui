import React, { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import useStyles from './ListViewItem.styles';
import { CaretDown } from 'phosphor-react';

export type ListViewItemProps = {
  children: ReactNode;
  orientation: 'vertical' | 'horizontal';
  icon: ReactNode;
  layout: 'textOnly' | 'iconOnly' | 'iconBefore';
  selected: boolean;
  expanded?: boolean | null;
  asChild?: boolean;
  onClick(): void;
};

const ListViewItem = (props: ListViewItemProps) => {
  const {
    children,
    orientation,
    icon,
    layout,
    selected,
    expanded = null,
    asChild = false,
  } = props;
  const styles = useStyles({ orientation, selected, asChild, expanded });
  const Element = asChild ? Slot : 'button';

  if ((layout === 'iconOnly' || layout === 'iconBefore') && !icon)
    throw new Error(
      `\`layout\` was set to \`${layout}\`, but no icon was provided`,
    );

  return (
    <Element
      className={styles.base}
      data-state={selected === true ? 'selected' : null}
    >
      {layout === 'textOnly' ? null : (
        <div className={styles.iconWrapper}>
          {/* zero-width space character for aligning the icon vertically */}
          &#8203;
          {icon}
        </div>
      )}
      <div className={styles.labelWrapper}>
        {layout === 'iconOnly' ? null : children}
        {expanded === undefined || expanded === null ? null : (
          <div className={styles.iconWrapper}>
            {/* zero-width space character for aligning the icon vertically */}
            &#8203;
            <CaretDown className={styles.caret} />
          </div>
        )}
      </div>
    </Element>
  );
};

export default ListViewItem;
