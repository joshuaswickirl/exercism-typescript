const colorMap: {[color: string] : string} = {
  "black": "0",
  "brown": "1",
  "red": "2",
  "orange": "3",
  "yellow": "4",
  "green": "5",
  "blue": "6",
  "violet": "7",
  "grey": "8",
  "white": "9",
}

export function decodedResistorValue(colors: string[]): string {
  const v = colorMap[colors[0]] + colorMap[colors[1]] + "0".repeat(Number(colorMap[colors[2]]))
  return v.slice(-3) === "000" ? `${v.slice(0, -3)} kiloohms` : `${v} ohms`
}
