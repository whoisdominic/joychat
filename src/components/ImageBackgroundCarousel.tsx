import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

interface ImageBackgroundCarouselProps {
  images: string[];
}

export const ImageBackgroundCarousel: React.FC<
  ImageBackgroundCarouselProps
> = ({ children, images }) => {
  if (images.length < 2) {
    console.error("ImageBackgroundCarousel: Minimum length is 2");
  }

  const fadeSpeed = 2000;

  const [nextImage, setNextImage] = useState(1);
  const [imageInFocus, setImageInFocus] = useState<"left" | "right">("left");
  let lastImageIndex = images.length - 1;

  const [leftImage, setLeftImage] = useState(images[0]);
  const [rightImage, setRightImage] = useState(images[1]);
  const [firstRender, setFirstRender] = useState(true);

  const leftOpacity = useSharedValue(0);
  const rightOpacity = useSharedValue(0);

  const leftStyle = useAnimatedStyle(() => {
    return {
      opacity: leftOpacity.value,
    };
  });

  const rightStyle = useAnimatedStyle(() => {
    return {
      opacity: rightOpacity.value,
    };
  });

  const fadeInRight = () => {
    setImageInFocus("right");
    rightOpacity.value = withTiming(1, {
      duration: fadeSpeed * 0.7,
      easing: Easing.bezier(0, 0.35, 0.8, 1),
    });
    leftOpacity.value = withTiming(0, {
      duration: fadeSpeed,
      easing: Easing.bezier(0, 0.35, 0.8, 1),
    });
  };

  const fadeInLeft = () => {
    setImageInFocus("left");
    leftOpacity.value = withTiming(1, {
      duration: fadeSpeed * 0.7,
      easing: Easing.bezier(0, 0.35, 0.75, 1),
    });
    rightOpacity.value = withTiming(0, {
      duration: fadeSpeed,
      easing: Easing.bezier(0, 0.35, 0.75, 1),
    });
  };

  const rotateToNextImage = async () => {
    if (imageInFocus === "left") {
      // fade in right
      fadeInRight();
      // set next to opposite
      setRightImage(images[nextImage]);
    } else if (imageInFocus === "right") {
      // fade in left
      fadeInLeft();
      setLeftImage(images[nextImage]);
      // set next to opposite
    }
    // Select the next image
    if (lastImageIndex === nextImage) {
      setNextImage(0);
    } else {
      setNextImage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (firstRender) {
      leftOpacity.value = withTiming(1, {
        duration: 500,
        easing: Easing.bezier(0, 0.25, 0.75, 1),
      });
      setFirstRender(true);
    }
    let timer = setInterval(() => {
      rotateToNextImage();
    }, 10000);

    return () => {
      clearInterval(timer);
    };
  }, [nextImage]);

  return (
    <Animated.View style={[{ flex: 1 }]}>
      <Animated.Image
        resizeMode="cover"
        source={{
          uri: leftImage,
        }}
        style={[styles.image, leftStyle]}
      />
      <Animated.Image
        resizeMode="cover"
        source={{
          uri: rightImage,
        }}
        style={[styles.image, rightStyle]}
      />
      <View style={StyleSheet.absoluteFill}>{children}</View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: 0,
  },
});
