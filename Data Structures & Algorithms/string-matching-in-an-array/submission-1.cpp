#include <vector>
#include <string>

class Solution {
public:
    std::vector<std::string> stringMatching(std::vector<std::string>& words) {
        std::vector<std::string> result;
        int n = words.size();

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (i == j) continue;

                if (words[j].find(words[i]) != std::string::npos) {
                    result.push_back(words[i]);
                    break; 
                }
            }
        }

        return result;
    }
};