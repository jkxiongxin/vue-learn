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
    },
    'headers': [
            {"name": "Content-Type", "values": ["application/json; charset=utf-8"]},
            {"name": "Cache-Control", "values": ["no-cache, no-store"]}
        ]
  }, 
  'times': {
    'remainingTimes': 100,
    'unlimited': false
  }
});