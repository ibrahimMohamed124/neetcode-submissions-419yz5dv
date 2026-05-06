class Solution {

    fun encode(strs: List<String>): String {
        val res = StringBuilder()
        for (str in strs) {
        res.append(str.length)
        res.append("#")
        res.append(str)
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
        val word = s.substring(j + 1, j + 1 + length)

        res.add(word)
        i = j + 1 + length
    }

    return res
}
}
