var test = require('ava');
var toAction = require('../../lib/toAction');
var sinon = require('sinon');

test('dispatch is called after parsing', (t) => {
  var spy = sinon.spy();
  toAction(JSON.stringify({type: 'AUTH', payload: 'test'}), spy);
  t.true(spy.called);
  t.pass();
});

test('catches error for invalid json', (t) => {
  var spy = sinon.spy();
  t.throws(toAction("'''3'''", spy));
  t.pass();
});

test('dispatch isnt called with invalid json', (t) => {
  var spy = sinon.spy();
  toAction("'''3'''", spy);
  t.falsy(spy.called);
  t.pass();
});
