#include <vector>
#include <algorithm>
using namespace std;

class MinStack {
    vector<int> arr;

public:
    // Default constructor
    MinStack() {

    }

    void push(int val) {
        arr.push_back(val);
    }

    void pop() {
        if (!arr.empty()) {
            arr.pop_back();
        }
    }

    int top() {
        return arr.back();
    }

    int getMin() {
        return *min_element(arr.begin(), arr.end());
    }
};