import React from "react";
import { StyleSheet, Text, TextStyle } from "react-native";
import normalize from "../utils/normalize";

interface TypoProps {
  copy: string;
  color?: TextStyle["color"];
  caligraphy?: boolean;
}

export const H1: React.FC<TypoProps> = ({ copy, color, caligraphy }) => {
  return (
    <Text
      style={[
        caligraphy ? styles.caligraphy : styles.baseFont,
        styles.h1,
        {
          color: color ? color : "#FFF",
        },
      ]}
      children={copy}
    />
  );
};

export const H2: React.FC<TypoProps> = ({ copy, color, caligraphy }) => {
  return (
    <Text
      style={[
        caligraphy ? styles.caligraphy : styles.baseFont,
        styles.h2,
        {
          color: color ? color : "#FFF",
        },
      ]}
      children={copy}
    />
  );
};

export const H3: React.FC<TypoProps> = ({ copy, color, caligraphy }) => {
  return (
    <Text
      style={[
        caligraphy ? styles.caligraphy : styles.baseFont,
        styles.h3,
        {
          color: color ? color : "#FFF",
        },
      ]}
      children={copy}
    />
  );
};

export const Subtile: React.FC<TypoProps> = ({ copy, color, caligraphy }) => {
  return (
    <Text
      style={[
        caligraphy ? styles.caligraphy : styles.baseFont,
        styles.subtile,
        {
          color: color ? color : "#FFF",
        },
      ]}
      children={copy}
    />
  );
};

export const Caption: React.FC<TypoProps> = ({ copy, color, caligraphy }) => {
  return (
    <Text
      style={[
        caligraphy ? styles.caligraphy : styles.baseFont,
        styles.caption,
        {
          color: color ? color : "#FFF",
        },
      ]}
      children={copy}
    />
  );
};

export const Body: React.FC<TypoProps> = ({ copy, color, caligraphy }) => {
  return (
    <Text
      style={[
        caligraphy ? styles.caligraphy : styles.baseFont,
        styles.body,
        {
          color: color ? color : "#FFF",
        },
      ]}
      children={copy}
    />
  );
};

export const Typo = {
  H1,
  H2,
  H3,
  Subtile,
  Caption,
  Body,
};

export default Typo;

const styles = StyleSheet.create({
  baseFont: {
    fontFamily: "NotoSans",
  },
  caligraphy: {
    fontFamily: "zhi mang xing",
  },
  h1: {
    fontSize: normalize(48.83),
    color: "#FFF",
  },
  h2: {
    fontSize: normalize(39.06),
    color: "#FFF",
  },
  h3: {
    fontSize: normalize(31.25),
    color: "#FFF",
  },
  subtile: {
    fontSize: normalize(25),
    color: "#FFF",
  },
  caption: {
    fontSize: normalize(20),
    color: "#FFF",
  },
  body: {
    fontSize: normalize(16),
    color: "#FFF",
  },
});
