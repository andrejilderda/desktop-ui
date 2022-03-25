import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Checkbox, CheckboxProps } from './Checkbox';
import { CheckedState } from '@radix-ui/react-checkbox';
import { styled } from 'src/reactDesktop.config';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
} as Meta;

export const Default = ({
  checked,
  ...props
}: CheckboxProps & { checked?: CheckedState }) => {
  const [checkedState, setCheckedState] = useState<CheckedState>(
    checked || false,
  );
  const onCheckedChange = (value: CheckedState) => {
    setCheckedState(value);
    action('onCheckedChange')('checked', value);
  };

  return (
    <Checkbox
      checked={checkedState}
      onCheckedChange={onCheckedChange}
      {...props}
    />
  );
};

export const Checked = () => <Default defaultChecked={true} checked={true} />;
export const Indeterminate = () => <Default checked="indeterminate" />;
export const Disabled = () => <Default disabled />;
export const WithLabel = (props: CheckboxProps) => (
  <Default label="Text" {...props} />
);

export const AllVariants = () => {
  const Wrapper = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginBottom: '1.5rem',
    '.heading': {
      fontWeight: '600',
    },
  });

  return (
    <>
      <Wrapper>
        <span className="heading">Default</span>
        <Default />
        <Indeterminate />
        <Checked />
      </Wrapper>

      <Wrapper>
        <span className="heading">Disabled</span>
        <Disabled />
        <Default disabled checked="indeterminate" />
        <Default disabled checked />
      </Wrapper>

      <Wrapper>
        <span className="heading">With label</span>
        <WithLabel label="Default" />
        <WithLabel label="Disabled" disabled />
        <WithLabel label="Disabled checked" disabled checked />
      </Wrapper>

      <Wrapper>
        <span className="heading">Within form</span>
        <form>
          <Default />
        </form>
      </Wrapper>
    </>
  );
};
