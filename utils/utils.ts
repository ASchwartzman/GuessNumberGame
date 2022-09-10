export function generateRandomNumberBetween(
  min: number,
  max: number,
  exclude: number
): number {
  let rndNum = Math.floor(Math.random() * (max - min) + min)
  if (exclude === rndNum) {
    return generateRandomNumberBetween(min, max, exclude)
  }
  return rndNum
}
