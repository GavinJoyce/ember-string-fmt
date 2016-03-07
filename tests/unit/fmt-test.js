import { module, test } from 'qunit';
import fmt from 'ember-string-fmt';

module('fmt');

test('\'Hello %@ %@\'.fmt(\'John\', \'Doe\') => \'Hello John Doe\'', function(assert) {
  assert.equal(fmt('Hello %@ %@', ['John', 'Doe']), 'Hello John Doe');
});

test('\'Hello %@2 %@1\'.fmt(\'John\', \'Doe\') => \'Hello Doe John\'', function(assert) {
  assert.equal(fmt('Hello %@2 %@1', ['John', 'Doe']), 'Hello Doe John');
});

test('\'%@08 %@07 %@06 %@05 %@04 %@03 %@02 %@01\'.fmt(\'One\', \'Two\', \'Three\', \'Four\', \'Five\', \'Six\', \'Seven\', \'Eight\') => \'Eight Seven Six Five Four Three Two One\'', function(assert) {
  assert.equal(fmt('%@08 %@07 %@06 %@05 %@04 %@03 %@02 %@01', ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight']), 'Eight Seven Six Five Four Three Two One');
});

test('\'data: %@\'.fmt({ id: 3 }) => \'data: {id: 3}\'', function(assert) {
  assert.equal(fmt('data: %@', [{ id: 3 }]), 'data: {id: 3}');
});

test('works with argument form', function(assert) {
  assert.equal(fmt('%@', 'John'), 'John');
});
