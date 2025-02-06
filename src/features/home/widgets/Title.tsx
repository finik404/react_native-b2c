import React from 'react';
import {StyleSheet, View} from 'react-native';
import {UIText} from '@/src/common/widgets/Text';

interface HomeTitleProps {
  style?: object;
  label: string;
  marginBottom?: number;
}

export const HomeTitle: React.FC<HomeTitleProps> = ({
  label,
  marginBottom = 24,
}) => {
  return (
    <View style={[{marginBottom}, ss.row]}>
      <UIText style={ss.label} text={label} />
    </View>
  );
};

const ss = StyleSheet.create({
  row: {
    display: 'flex',
    marginBottom: 24,
    paddingHorizontal: 24,
  },
  label: {
    fontSize: 20,
  },
});
