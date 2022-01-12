const dnaComplements: { [dnaNucleotide: string]: string } = {
  "G": "C",
  "C": "G",
  "T": "A",
  "A": "U",
}

export function toRna(dna: string): string {
  return dna.split("").map(getRNAComplement).join("")
}

function getRNAComplement(dnaNucleotide: string): string {
  const complement = dnaComplements[dnaNucleotide]
  if (complement === undefined) {
    throw "Invalid input DNA."
  }
  return complement
}
