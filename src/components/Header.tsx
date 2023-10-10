import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';
import {colors} from '../theme/colors';
import {HEADER_HEIGHT} from '../theme/dimensions';

interface HeaderProps {
  centerComponent: React.JSX.Element | {title: string; style?: TextStyle};
  centerComponentStyle?: ViewStyle;
  containerStyle?: ViewStyle;
  leftComponent?: React.JSX.Element;
  leftComponentStyle?: ViewStyle;
  rightComponent?: React.JSX.Element;
  rightComponentStyle?: ViewStyle;
}

export const Header = (props: HeaderProps) => {
  const [statusBarHeight, setStatusBarHeight] = useState<number>(0);

  useEffect(() => {
    setStatusBarHeight(0);
  }, []);

  return (
    <View
      style={[
        styles.container,
        props.containerStyle,
        {height: HEADER_HEIGHT + statusBarHeight},
      ]}>
      <View style={styles.header}>
        <View style={[styles.leftComponent, props.leftComponentStyle]}>
          {props.leftComponent}
        </View>
        <View style={[styles.centerComponent, props.centerComponentStyle]}>
          {typeof props.centerComponent === 'object' &&
          'title' in props.centerComponent ? (
            <Text style={[styles.title, props.centerComponent.style]}>
              {props.centerComponent.title}
            </Text>
          ) : (
            props.centerComponent
          )}
        </View>
        <View style={[styles.rightComponent, props.rightComponentStyle]}>
          {props.rightComponent}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    backgroundColor: colors.primary_color,
    paddingBottom: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.white,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
  },
  leftComponent: {
    flex: 1,
    paddingHorizontal: 10,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  title: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  rightComponent: {
    flex: 1,
    paddingHorizontal: 10,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  centerComponent: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
