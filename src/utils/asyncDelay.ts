export function asyncDelay(time?: number) {
  if (!time) {
    return;
  }
  return new Promise((res) => setTimeout(res, time));
}
