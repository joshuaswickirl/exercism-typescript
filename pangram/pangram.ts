export function isPangram(str: string): boolean {
  const usedLetters: { [letter: string]: boolean } = {}
  str.toLowerCase().split("").forEach((char) => {
    if (isUnicode(char)) {
      usedLetters[char] = true;
    }
  })
  return Object.keys(usedLetters).length === 26
}

function isUnicode(str: string): boolean {
  return RegExp(/^\p{L}/,'u').test(str)
}
