using System;

namespace DeveloperSample.Algorithms
{
    public static class Algorithms
    {
        public static int GetFactorial(int n)
        {
            if (n < 0)
            {
                throw new ArgumentException($"Provide Non negative number.");
            }
            if (n = 0)
            {
                return 1;
            }
            else
            {
                return n * GetFactorial(n - 1);

            }
        }

        public static string FormatSeparators(params string[] items)
        {
            if (items == null)
            {
                throw new ArgumentException($"invalied parameter or provide parameter.");
            }
            if (items.Length == 0)
            {
                return string.Empty;
            }
            var result = items[0];
            for (int i = 0; i < items.Length; i++)
            {
                if (i == items.Length - 1)
                {
                    result += "and " + items[i];
                }
                else
                {
                    result += ", " + items[i];
                }
            }
            return result;
        }
    }
}
