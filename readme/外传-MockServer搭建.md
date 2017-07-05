# 外传-MockServer搭建
1.创建目录
```shell
mkdir mock-server1
```
2.进入目录，并初始化项目，将mockserver-netty-3.10.7-jar-with-dependencies.jar文件拷贝到该目录
```shell
cd mock-server1
npm init
```
初始化过程一路回车就行
3.全局安装grunt 
```shell
npm i grunt -g
```
4.添加mockserver依赖
```shell
npm i mockserver-grunt -S
```
5.添加mockserver-client依赖
```shell
npm i mockserver-client -S
```
如果报错，不用管
6.添加mockserver启动文件start.js
```js
var mockserver = require('mockserver-grunt');
mockserver.start_mockserver({
    serverPort: 2080,
    proxyPort: 2090,
    verbose: true
});
```
7.添加mockclient文件client1.js
```js
var mockServer = require('mockserver-client'),
    mockServerClient = mockServer.mockServerClient,
    proxyClient = mockServer.proxyClient;

var remote = mockServerClient('localhost', 2080),
    remoteProxy = proxyClient('localhost', 2090);

remote.mockAnyResponse({
  'httpRequest': {
    'method': 'GET',
    'path': '/users',
  }, 
  'httpResponse': {
    'statusCode': 200,
    'body': JSON.stringify({name: '小明',age: '15'}),
    'delay': {
      'timeUnit': 'MILLISECONDS',
      'value': 250
    }
  }, 
  'times': {
    'remainingTimes': 100,
    'unlimited': false
  }
});
```
8.启动mockserver
```shell
node start.js
```
9.另起一个命令框，附加client到mockserver上
```shell
node client1.js
```
10.访问测试，打开浏览器，访问http://localhost:2080/users，观察是否有结果
