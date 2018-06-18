t = int(input())
while t > 0:
    length, k = [int(i) for i in input().split()]
    arr = [int(x) for x in input().split()]
    tempK = k
    while tempK != 0:
        print(arr[(length - tempK) % length], end = ' ')
        tempK = tempK - 1

    for i in range(0, length - k):
        print(arr[i], end = ' ')
    print()
    t = t - 1
