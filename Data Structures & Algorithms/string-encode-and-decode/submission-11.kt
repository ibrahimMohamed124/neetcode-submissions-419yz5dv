class Solution {

    fun encode(strs: List<String>): String {
        val res = StringBuilder()
        for (s in strs) {
            res.append(s.length).append('#').append(s)
        }
        return res.toString()
    }

    fun decode(s: String): List<String> {
        val res = mutableListOf<String>()
        var i = 0
        while (i < s.length) {
            var j = i
            while (s[j] != '#') {
                j++
            }
            
            val length = s.substring(i, j).toInt()
            
            val start = j + 1
            val end = start + length
            res.add(s.substring(start, end))
            
            i = end
        }
        return res
    }
}