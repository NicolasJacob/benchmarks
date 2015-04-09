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

## Calc 1: find a item in a list of 10000 items

   Dart: Time per request:       15.151 [ms] (mean)
   Node: Time per request:       32.184 [ms] (mean)
   
### NODE
  
      Document Path:          /calc1
      Document Length:        0 bytes
      
      Concurrency Level:      100
      Time taken for tests:   3.218 seconds
      Complete requests:      10000
      Failed requests:        0
      Non-2xx responses:      10000
      Total transferred:      1990000 bytes
      HTML transferred:       0 bytes
      Requests per second:    3107.18 [#/sec] (mean)
      Time per request:       32.184 [ms] (mean)
      Time per request:       0.322 [ms] (mean, across all concurrent requests)
      Transfer rate:          603.84 [Kbytes/sec] received
      
      Connection Times (ms)
                    min  mean[+/-sd] median   max
      Connect:        0    0   0.7      0      10
      Processing:     4   32   7.2     28      70
      Waiting:        4   32   7.2     28      70
      Total:         13   32   7.2     28      70
      
      Percentage of the requests served within a certain time (ms)
        50%     28
        66%     33
        75%     35
        80%     36
        90%     40
        95%     47
        98%     55
        99%     65
       100%     70 (longest request)
       
### Dart
   
      Document Path:          /calc1
      Document Length:        3 bytes
      
      Concurrency Level:      100
      Time taken for tests:   1.515 seconds
      Complete requests:      10000
      Failed requests:        0
      Total transferred:      2230000 bytes
      HTML transferred:       30000 bytes
      Requests per second:    6600.42 [#/sec] (mean)
      Time per request:       15.151 [ms] (mean)
      Time per request:       0.152 [ms] (mean, across all concurrent requests)
      Transfer rate:          1437.40 [Kbytes/sec] received
      
      Connection Times (ms)
                    min  mean[+/-sd] median   max
      Connect:        0    0   0.7      0      10
      Processing:     4   15   3.6     16      33
      Waiting:        4   15   3.6     16      33
      Total:         11   15   3.7     16      35
      
      Percentage of the requests served within a certain time (ms)
        50%     16
        66%     16
        75%     16
        80%     16
        90%     17
        95%     23
        98%     28
        99%     31
       100%     35 (longest request)
 
 ## Calc 2: generate a list of 10000 items   
    
  Node: Time per request:       645.797 [ms] (mean)
  Dart: Time per request:       125.642 [ms] (mean)
  
 Node:
 
    Document Path:          /calc2
    Document Length:        29090 bytes
    
    Concurrency Level:      100
    Time taken for tests:   64.580 seconds
    Complete requests:      10000
    Failed requests:        9895
       (Connect: 0, Receive: 0, Length: 9895, Exceptions: 0)
    Total transferred:      293143916 bytes
    HTML transferred:       291103916 bytes
    Requests per second:    154.85 [#/sec] (mean)
    Time per request:       645.797 [ms] (mean)
    Time per request:       6.458 [ms] (mean, across all concurrent requests)
    Transfer rate:          4432.87 [Kbytes/sec] received
    
    Connection Times (ms)
                  min  mean[+/-sd] median   max
    Connect:        0    0   0.4      0       6
    Processing:    19  642  35.4    639     739
    Waiting:       19  642  35.4    639     739
    Total:         25  643  35.1    639     739
    
    Percentage of the requests served within a certain time (ms)
      50%    639
      66%    644
      75%    648
      80%    650
      90%    664
      95%    672
      98%    722
      99%    725
     100%    739 (longest request)
 
 Dart:
 
    Document Path:          /calc2
    Document Length:        29046 bytes
    
    Concurrency Level:      100
    Time taken for tests:   12.564 seconds
    Complete requests:      10000
    Failed requests:        9964
       (Connect: 0, Receive: 0, Length: 9964, Exceptions: 0)
    Total transferred:      292211633 bytes
    HTML transferred:       290011633 bytes
    Requests per second:    795.91 [#/sec] (mean)
    Time per request:       125.642 [ms] (mean)
    Time per request:       1.256 [ms] (mean, across all concurrent requests)
    Transfer rate:          22712.35 [Kbytes/sec] received
    
    Connection Times (ms)
                  min  mean[+/-sd] median   max
    Connect:        0    0   0.5      0       6
    Processing:     5  125   7.7    124     195
    Waiting:        4  125   7.7    124     195
    Total:         11  125   7.6    124     198
    
    Percentage of the requests served within a certain time (ms)
      50%    124
      66%    126
      75%    127
      80%    129
      90%    132
      95%    135
      98%    138
      99%    141
     100%    198 (longest request)
   