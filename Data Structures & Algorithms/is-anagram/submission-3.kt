class Solution {
    fun isAnagram(s: String, t: String): Boolean {
        val sLower = s.lowercase()
        val tLower = t.lowercase()

        if (sLower.length != tLower.length) return false

        return sLower.toCharArray().sortedArray().contentEquals(
               tLower.toCharArray().sortedArray()
        )
    }
}