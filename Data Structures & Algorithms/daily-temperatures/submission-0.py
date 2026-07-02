class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        res = []

        for i in range(len(temperatures)):
            found = False

            for j in range(i + 1, len(temperatures)):
                if temperatures[j] > temperatures[i]:
                    res.append(j - i)
                    found = True
                    break

            if not found:
                res.append(0)

        return res