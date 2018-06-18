import java.util.*;
import java.io.*;

public class example {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        HashMap<Integer, Integer> map = new HashMap<>();
        int t = Integer.parseInt(br.readLine());
        String[] arr = br.readLine().trim().split("\\s+");
        int search = Integer.parseInt(br.readLine());

        for (int i = 0; i < arr.length; i++) {
            int temp = Integer.parseInt(arr[i]);
            if (map.containsKey(temp)) {
                map.put(temp, map.get(temp) + 1);
            } else {
                map.put(temp, 1);
            }
        }

        int min = Integer.MAX_VALUE;
        for (Map.Entry<Integer, Integer> entry : map.entrySet()) {
            Integer key = entry.getKey();
            Integer value = entry.getValue();
            if (search == value) {
                if (min > key) {
                    min = key;
                }
            }
        }
        System.out.println(min);
    }
}
