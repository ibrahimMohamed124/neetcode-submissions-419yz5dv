class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        seen = set()
    
        for i in range(9):
            for j in range(9):
                num = board[i][j]
                if num != ".":
                    row_key = f"row{i}-{num}"
                    col_key = f"col{j}-{num}"
                    box_key = f"box{i//3}{j//3}-{num}"
                
                    if row_key in seen or col_key in seen or box_key in seen:
                        return False
                
                    seen.add(row_key)
                    seen.add(col_key)
                    seen.add(box_key)
    
        return True
