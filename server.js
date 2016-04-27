const WebSocketServer = require('ws').Server;
const {createStore, applyMiddleware} = require('redux');
const toAction = require('./lib/toAction');
const reducers = require('./reducers');
// redux-node-logger and devtools dont play nice.
// const createNodeLogger = require('redux-node-logger');
const middleware = [];

// if (process.env.NODE_ENV === 'development') {
//   const logger = createNodeLogger();
//   middleware.push(logger);
// }

const wss = new WebSocketServer({
  host: 'localhost',
  port: 15449
});

wss.on('connection', (ws) => {
  // store per socket connection
  const store = createStore(reducers, applyMiddleware(...middleware));
  store.subscribe(() => {
    console.log(store.getState());
  });

  // map events
  ws.on('open', (msg) => toAction(msg, store.dispatch));
  ws.on('close', (msg) => toAction(msg, store.dispatch));
  ws.on('error', (msg) => toAction(msg, store.dispatch));
  ws.on('message', (msg) => toAction(msg, store.dispatch));
});
