import React from "react";
import { StyleSheet, Text, TextStyle } from "react-native";

interface TypoProps {
  copy: string;
  color?: TextStyle["color"];
}

export const H1: React.FC<TypoProps> = ({ copy, color }) => {
  return (
    <Text
      style={[
        styles.baseFont,
        styles.h1,
        {
          color: color ? color : "#FFF",
        },
      ]}
      children={copy}
    />
  );
};

export const H2: React.FC<TypoProps> = ({ copy, color }) => {
  return (
    <Text
      style={[
        styles.baseFont,
        styles.h2,
        {
          color: color ? color : "#FFF",
        },
      ]}
      children={copy}
    />
  );
};

export const H3: React.FC<TypoProps> = ({ copy, color }) => {
  return (
    <Text
      style={[
        styles.baseFont,
        styles.h3,
        {
          color: color ? color : "#FFF",
        },
      ]}
      children={copy}
    />
  );
};

export const Subtile: React.FC<TypoProps> = ({ copy, color }) => {
  return (
    <Text
      style={[
        styles.baseFont,
        styles.subtile,
        {
          color: color ? color : "#FFF",
        },
      ]}
      children={copy}
    />
  );
};

export const Caption: React.FC<TypoProps> = ({ copy, color }) => {
  return (
    <Text
      style={[
        styles.baseFont,
        styles.caption,
        {
          color: color ? color : "#FFF",
        },
      ]}
      children={copy}
    />
  );
};

export const Body: React.FC<TypoProps> = ({ copy, color }) => {
  return (
    <Text
      style={[
        styles.baseFont,
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
    fontFamily: "zhi mang xing",
  },
  h1: {
    fontSize: 48.83,
    color: "#FFF",
  },
  h2: {
    fontSize: 39.06,
    color: "#FFF",
  },
  h3: {
    fontSize: 31.25,
    color: "#FFF",
  },
  subtile: {
    fontSize: 25,
    color: "#FFF",
  },
  caption: {
    fontSize: 20,
    color: "#FFF",
  },
  body: {
    fontSize: 16,
    color: "#FFF",
  },
});
