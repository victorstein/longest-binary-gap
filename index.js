function solution (N) {
  // get the binary representation of n amd turn it to Array
  const binary = N.toString(2).split('')

  // Determine the binary gap
  return binary.reduce((x, u, i) => {
    // Check if we are starting a binary gap
    if (u === '1') {
      // Check if the collected binary gap is longer than the existing bainary gap
      if (x.currentCount > x.longestBinaryGap) {
        x.longestBinaryGap = x.currentCount
      }
      // Reset current binary gap count
      x.currentCount = 0
    } else {
      // Increase the binary gap count
      x.currentCount++
    }
    return x
  }, {
    longestBinaryGap: 0,
    currentCount: 0
  }).longestBinaryGap
}

console.log(solution(32))
