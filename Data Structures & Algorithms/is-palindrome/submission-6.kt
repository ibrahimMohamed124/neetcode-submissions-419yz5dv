class Solution {
    fun isPalindrome(s: String): Boolean {
        val clean = s
            .lowercase()
            .replace(Regex("[^a-z0-9]"), "")

        var start = 0
        var end = clean.lastIndex

        while (start < end) {
            if (clean[start] != clean[end]) {
                return false
            }

            start++
            end--
        }

        return true
    }
}