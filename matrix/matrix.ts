export class Matrix {
  matrix: number[][]

  constructor(matrix: string) {
    this.matrix = []
    const rows = matrix.split("\n")
    rows.forEach((r) => {
      const values = r.split(" ").map((v) => Number(v))
      this.matrix.push(values)
    })
  }

  get rows(): number[][] {
    return this.matrix
  }

  get columns(): number[][] {
    const cols: number[][] = []
    for (let row = 0; row < this.matrix.length; row++) {
      for (let col = 0; col < this.matrix[row].length; col++) {
        if (cols[col] === undefined) {
          cols.push([])
        }
        cols[col].push(this.matrix[row][col])
      }
    }
    return cols
  }
}
