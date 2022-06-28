export function asyncDelay(time: number) {
  return new Promise((res) => setTimeout(res, time));
}
