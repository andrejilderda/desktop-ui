import React from 'react';
import type * as Stitches from '@stitches/react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { styled } from 'src/reactDesktop.config';

export type LabelProps = Stitches.ComponentProps<typeof LabelPrimitive>;
const StyledLabel = styled(LabelPrimitive.Root, {
  fontSize: '$2',
  lineHeight: '$2',
  userSelect: 'none',
});

const Label = StyledLabel;
export default Label;

export const useLabelContext = LabelPrimitive.useLabelContext;
