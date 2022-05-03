import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ToggleSwitch, { ToggleSwitchProps } from './ToggleSwitch';

export default {
  title: 'Components/ToggleSwitch',
  component: ToggleSwitch,
} as Meta;

export const Default = ({ checked, ...props }: ToggleSwitchProps) => {
  const [checkedState, setCheckedState] = useState<boolean>(checked || false);
  const onCheckedChange = (value: boolean) => {
    setCheckedState(value);
    action('onCheckedChange')('checked', value);
  };

  return (
    <ToggleSwitch
      checked={checkedState}
      onCheckedChange={onCheckedChange}
      {...props}
    />
  );
};

export const Checked = () => <Default defaultChecked={true} checked={true} />;
export const Disabled = () => <Default disabled />;

export const AllVariants = () => {
  const wrapperStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginBottom: '1.5rem',
  };

  return (
    <>
      <div styles={wrapperStyles}>
        <span className="heading">Default</span>
        <Default />
        <Checked />
      </div>

      <div styles={wrapperStyles}>
        <span className="heading">Disabled</span>
        <Disabled />
        <Default disabled defaultChecked={true} checked={true} />
      </div>
    </>
  );
};
