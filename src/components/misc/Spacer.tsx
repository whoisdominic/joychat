import React from 'react';
import { View } from 'react-native';
import { normalize } from '../../utils';

interface SpacerProps {
  // Margin
  all?: number;
  // Margin left
  left?: number;
  // Margin right
  right?: number;
  // Margin top
  top?: number;
  // Margin bottom
  bottom?: number;
  // marginVertical
  vert?: number;
  // marginHorizontal
  horz?: number;
}

export const Spacer: React.FC<SpacerProps> = ({ all, left, right, bottom, vert, horz, top }) => {
  return (
    <View
      style={{
        margin: normalize(all),
        marginBottom: normalize(bottom),
        marginTop: normalize(top),
        marginRight: normalize(right),
        marginLeft: normalize(left),
        marginHorizontal: normalize(horz),
        marginVertical: normalize(vert),
      }}
    />
  );