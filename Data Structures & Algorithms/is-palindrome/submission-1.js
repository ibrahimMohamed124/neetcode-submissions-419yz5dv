class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0;
        let right = s.length - 1;

        while (left < right) {

            // skip non-alphanumeric (left)
            while (left < right && !this.isAlphaNum(s[left])) {
                left++;
            }

            // skip non-alphanumeric (right)
            while (left < right && !this.isAlphaNum(s[right])) {
                right--;
            }

            // compare (case-insensitive)
            if (s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false;
            }

            left++;
            right--;
        }

        return true;
    }

    isAlphaNum(ch) {
        return (
            (ch >= 'a' && ch <= 'z') ||
            (ch >= 'A' && ch <= 'Z') ||
            (ch >= '0' && ch <= '9')
        );
    }
}