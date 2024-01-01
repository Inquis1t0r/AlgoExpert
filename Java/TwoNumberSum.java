import java.util.*;

class Program {
  public static int[] twoNumberSum(int[] array, int targetSum) {

    List<int> resultList = new ArrayList<int>();
    // Write your code here.
    for(int i = 0; i<array.length;i++){
      for(int j = array.length; j>0;j--){
        if(i + j == targetSum){
          System.out.println(targetSum +" "+i + " " + j);
          resultList.add(i);
          resultList.add(j);
        }
      }
    }

    int[] result = resultList.toArray(new int[0]);
    return result;
  }
}
