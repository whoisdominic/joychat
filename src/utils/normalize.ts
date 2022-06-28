import { Dimensions, PixelRatio } from "react-native";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const scale = SCREEN_WIDTH / 400;

/**
 * Use on the majority of non-dimension based styling, this will normalize the styles accross platforms and screens styles
 * Such as fontSize, width, height, margin, padding
 *
 * Known unworking attributes
 * - borderWidth
 *
 *
 * @param size number
 * @returns number
 */
export function normalize(size?: number) {
  if (!size) {
    return undefined;
  }
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

export default normalize;
