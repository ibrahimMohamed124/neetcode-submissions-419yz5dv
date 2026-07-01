class MinStack:

    def __init__(self):
        self.__items = []
    def push(self, val: int) -> None:
        self.__items.append(val)
    def pop(self) -> None:
        self.__items.pop()
    def top(self) -> int:
        return self.__items[-1]
    def getMin(self) -> int:
        return min(self.__items)