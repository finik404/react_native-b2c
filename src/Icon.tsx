import React from 'react';
import {Text, StyleSheet} from 'react-native';

// Создаем компонент для кастомного шрифта
const CustomIcon = ({
  name,
  size = 24,
  color = '#000',
  fontFamily = 'FontAwesome',
}) => {
  const iconCode = name.startsWith('0x')
      ? String.fromCharCode(parseInt(name, 16)) // Если формат 0xf007
      : name.charAt(0) === '\\'
          ? String.fromCharCode(parseInt(name.replace('\\u', ''), 16)) // Если формат \uf007
          : name;

  return (
    <Text style={[styles.icon, {fontSize: size, color, fontFamily}]}>
      &#xf13c
    </Text>
  );
};

// Стили для шрифта
const styles = StyleSheet.create({
  icon: {
    fontFamily: 'FontAwesome',
    // fontWeight: 'bold',
  },
});

export default CustomIcon;
