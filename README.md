# benchmark

A set of benchmark comparing dart/node performance

##Prerequisits
dart installed, node/npm installed

##Installation

    npm install
    pub get

## Running the benchmarks
    dart bin/server.dart&
    node bin/server.js&

    #node
    ab -n 10000 -c 100 http://localhost:1234/<benchmark name>
    #dart
    ab -n 10000 -c 100 http://localhost:8080/<benchmark name>

## Benchmark description

### mongo1
A small existing document is retrieved from a mongo collection and send.

### mongo2
A bigger existing document is retrieved from a mongo collection and send.

## TODO
- Add benchmarks
- Automate benchmarks run
- Collect and produce reports, comparison charts.
