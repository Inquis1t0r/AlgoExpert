#include <vector>
using namespace std;

vector<int> twoNumberSum(vector<int> array, int targetSum) {
  // Write your code here.

  vector<int> resultList;
  for(int i = 0; i<array.size(); i++){
    for(int j = 0; j < array.size(); j++){
      int localSum = array[i] + array[j];
      if(targetSum == localSum && i != j){
        resultList.push_back(array[i]);
      }
    }
  }
  
  return resultList;
}
