var test = require('ava');
var reducer = require('../../reducers');

test('default state has user property set to null', (t) => {
  const nextState = reducer(undefined, {type: '@@/redux'});
  t.is(nextState.user, null);
  t.pass();
});

test('auth action updates state for user set to a value', (t) => {
  const initialState = {
    user: null
  };
  const nextState = reducer(initialState, {type: 'AUTH', payload: 'ws-user'});
  t.is(nextState.user, 'ws-user');
  t.notDeepEqual(nextState, initialState);
  t.pass();
});
