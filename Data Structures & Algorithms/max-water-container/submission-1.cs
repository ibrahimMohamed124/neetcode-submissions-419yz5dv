public class Solution
{
    public int MaxArea(int[] heights)
    {
        int maxArea = 0;

        for (int i = 0; i < heights.Length; i++)
        {
            for (int j = i + 1; j < heights.Length; j++)
            {
                int smallest = Math.Min(heights[i], heights[j]);
                int currentArea = smallest * (j - i);
                maxArea = Math.Max(currentArea, maxArea);
            }
        }

        return maxArea;
    }
}