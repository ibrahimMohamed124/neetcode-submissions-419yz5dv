class Solution {
    fun isPalindrome(s: String): Boolean {

        val clean = s
            .lowercase()
            .replace(Regex("[^a-z0-9]"), "")

        val reversed = buildString {
            for (i in clean.lastIndex downTo 0) {
                append(clean[i])
            }
        }

        return clean == reversed
    }
}