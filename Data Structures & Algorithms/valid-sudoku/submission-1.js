class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */

    hasDuplicates(arr) {
        const seen = new Set();

        for (let val of arr) {
            if (val === ".") continue; // ignore empty cells
            if (seen.has(val)) return true;
            seen.add(val);
        }
        return false;
    }

    isValidSudoku(board) {

        for (let row of board) {
            if (this.hasDuplicates(row)) return false;
        }

        for (let col = 0; col < 9; col++) {
            let column = [];
            for (let row = 0; row < 9; row++) {
                column.push(board[row][col]);
            }
            if (this.hasDuplicates(column)) return false;
        }

        for (let boxRow = 0; boxRow < 9; boxRow += 3) {
            for (let boxCol = 0; boxCol < 9; boxCol += 3) {

                let box = [];

                for (let i = 0; i < 3; i++) {
                    for (let j = 0; j < 3; j++) {
                        box.push(board[boxRow + i][boxCol + j]);
                    }
                }

                if (this.hasDuplicates(box)) return false;
            }
        }

        return true;
    }
}