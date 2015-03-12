# Mongo 1
NODE: Time per request:       36.481 [ms] (mean)
DART: Time per request:       22.789 [ms] (mean)

##NODE:

    Server Hostname:        localhost
    Server Port:            1234

    Document Path:          /mongo
    Document Length:        124 bytes

    Concurrency Level:      100
    Time taken for tests:   3.648 seconds
    Complete requests:      10000
    Failed requests:        0
    Total transferred:      3130000 bytes
    HTML transferred:       1240000 bytes
    Requests per second:    2741.12 [#/sec] (mean)
    Time per request:       36.481 [ms] (mean)
    Time per request:       0.365 [ms] (mean, across all concurrent requests)
    Transfer rate:          837.86 [Kbytes/sec] received

    Connection Times (ms)
                  min  mean[+/-sd] median   max
    Connect:        0    0   0.5      0       8
    Processing:     9   36   9.4     34      79
    Waiting:        9   36   9.4     34      79
    Total:         13   36   9.3     34      79

    Percentage of the requests served within a certain time (ms)
      50%     34
      66%     38
      75%     41
      80%     43
      90%     50
      95%     56
      98%     62
      99%     65
     100%     79 (longest request)


##DART:
    Server Hostname:        localhost
    Server Port:            8080

    Document Path:          /mongo
    Document Length:        138 bytes

    Concurrency Level:      100
    Time taken for tests:   2.279 seconds
    Complete requests:      10000
    Failed requests:        0
    Total transferred:      3580000 bytes
    HTML transferred:       1380000 bytes
    Requests per second:    4388.17 [#/sec] (mean)
    Time per request:       22.789 [ms] (mean)
    Time per request:       0.228 [ms] (mean, across all concurrent requests)
    Transfer rate:          1534.15 [Kbytes/sec] received

    Connection Times (ms)
                  min  mean[+/-sd] median   max
    Connect:        0    1   1.3      0      12
    Processing:     4   22   5.3     22      40
    Waiting:        4   22   4.9     22      36
    Total:         11   23   4.9     22      41

    Percentage of the requests served within a certain time (ms)
      50%     22
      66%     24
      75%     25
      80%     26
      90%     29
      95%     31
      98%     35
      99%     37
     100%     41 (longest request)

# Mongo 2
Node: Time per request:       102.883 [ms] (mean)
Dart: Time per request:       93.812 [ms] (mean)

## Node:
    Server Hostname:        localhost
    Server Port:            1234

    Document Path:          /mongo2
    Document Length:        5201 bytes

    Concurrency Level:      100
    Time taken for tests:   10.288 seconds
    Complete requests:      10000
    Failed requests:        0
    Total transferred:      54040000 bytes
    HTML transferred:       52010000 bytes
    Requests per second:    971.98 [#/sec] (mean)
    Time per request:       102.883 [ms] (mean)
    Time per request:       1.029 [ms] (mean, across all concurrent requests)
    Transfer rate:          5129.46 [Kbytes/sec] received

    Connection Times (ms)
                  min  mean[+/-sd] median   max
    Connect:        0    0   0.4      0       6
    Processing:    31  102  32.5    101     254
    Waiting:       31  102  32.5    101     254
    Total:         31  102  32.5    101     254

    Percentage of the requests served within a certain time (ms)
      50%    101
      66%    115
      75%    125
      80%    130
      90%    145
      95%    157
      98%    171
      99%    181
     100%    254 (longest request)

## Dart:
    Server Hostname:        localhost
    Server Port:            8080

    Document Path:          /mongo2
    Document Length:        5215 bytes

    Concurrency Level:      100
    Time taken for tests:   9.381 seconds
    Complete requests:      10000
    Failed requests:        0
    Total transferred:      54350000 bytes
    HTML transferred:       52150000 bytes
    Requests per second:    1065.96 [#/sec] (mean)
    Time per request:       93.812 [ms] (mean)
    Time per request:       0.938 [ms] (mean, across all concurrent requests)
    Transfer rate:          5657.72 [Kbytes/sec] received

    Connection Times (ms)
                  min  mean[+/-sd] median   max
    Connect:        0    0   1.1      0      12
    Processing:    15   93  12.3     91     163
    Waiting:       15   93  12.2     91     163
    Total:         15   93  12.4     91     163

    Percentage of the requests served within a certain time (ms)
      50%     91
      66%     94
      75%     96
      80%     98
      90%    105
      95%    116
      98%    126
      99%    141
     100%    163 (longest request)
