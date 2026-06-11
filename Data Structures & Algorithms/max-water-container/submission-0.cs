public class Solution
{
    public int MaxArea(int[] heights)
    {
        int maxArea = 0;
        for (int i = 0; i < heights.Length; i++)
        { 
            for(int j = 0; j < heights.Length; j++)
            {
                int smallest = heights[i] < heights[j] ? heights[i] : heights[j];
                int currentArea = smallest * (j - i);
                maxArea = currentArea > maxArea ? currentArea : maxArea;
            }
        }
        return maxArea;
    }
}
