public class Solution
{
    public bool IsAnagram(string s, string t)
    {
        if (s.Length != t.Length)
            return false;

        char[] sl = s.ToCharArray();
        char[] tl = t.ToCharArray();

        Array.Sort(sl);
        Array.Sort(tl);

        return sl.SequenceEqual(tl);
    }
}
