public class Solution {
    public bool IsAnagram(string s, string t) {
        string sorteds = new string(s.OrderBy(c => c).ToArray());
        string sortedt = new string(t.OrderBy(c => c).ToArray());
        return sorteds.SequenceEqual(sortedt); 
    }
}
