import React from 'react';
import { Meta } from '@storybook/react';
import Hyperlink, { HyperlinkProps } from './Hyperlink';

export default {
  title: 'Components/Hyperlink',
  component: Hyperlink,
} as Meta;

export const Default = ({ ...props }: HyperlinkProps) => (
  <Hyperlink {...props}>Nothing here yet…</Hyperlink>
);
