import java.util.*;

class Program {
  public static int getNthFib(int n) {
    if (n == 1) {
        return 0;
    } else {
        return getNthFib(n - 1) + getNthFib(n - 2);
    }
  }
}
