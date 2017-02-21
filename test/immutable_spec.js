import {expect} from 'chai';

describe('immutdeh', () => {

  describe('bilangan', () => {

    function increment(currentState) {
      return currentState + 1;
    }

    it('gak berubah lho', () => {
      let state = 42;
      let nextState = increment(state);

      expect(nextState).to.equal(43);
      expect(state).to.equal(42);
    });

  });

});
