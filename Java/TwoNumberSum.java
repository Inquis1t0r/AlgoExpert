import java.util.*;

class Program {
  public static int[] twoNumberSum(int[] array, int targetSum) {
     int[] result = new int[2];
    // Write your code here.
            for (int i = 0; i < array.length - 1; i++) {
              for (int j = i + 1; j < array.length; j++) {
                  if (array[i] + array[j] == targetSum) {
                      result[0] = array[i];
                      result[1] = array[j];
                      return result;
                  }
              }
        }
    return new int[]{};
  }
}
