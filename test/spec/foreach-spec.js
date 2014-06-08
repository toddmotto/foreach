/**
 * forEach.js
 */
describe('forEach', function () {

  /**
   * Arrays
   */
  describe('Array looping', function () {

    var myArray;

    beforeEach(function () {
      myArray = [
        'A',
        'B',
        'C',
        'D'
      ];
    });

    it('should pass the index', function () {
      forEach(myArray, function (value, index) {
        expect(index).toMatch(/[0-9]/);
      });
    });

    it('should pass the element', function () {
      forEach(myArray, function (value, index) {
        expect(value).toMatch(/[A-D]/);
      });
    });

  });

  /**
   * Object
   */
  describe('Object looping', function () {

    var myObject;

    beforeEach(function () {
      myObject = {
        testA: 'A',
        testB: 'B',
        testC: 'C',
        testD: 'D'
      };
    });

    it('should pass the value', function () {
      forEach(myObject, function (value, prop, obj) {
        expect(value).toMatch(/[A-D]/);
      });
    });

    it('should pass the property name', function () {
      forEach(myObject, function (value, prop, obj) {
        expect(prop).toMatch(/test[A-D]/);
      });
    });

    it('should pass the initial object', function () {
      forEach(myObject, function (value, prop, obj) {
        expect(Object.prototype.toString.call(obj)).toBe('[object Object]');
      });
    });

  });

  /**
   * Context
   */
  describe('Context changing', function () {

    var myObject;
    var myArray;

    beforeEach(function () {
      myArray = [
        'A',
        'B',
        'C',
        'D'
      ];
      myObject = {
        testA: 'A',
        testB: 'B',
        testC: 'C',
        testD: 'D'
      };
    });

    it('should change the context to the iterated Object', function () {
      forEach(myObject, function (value, prop, obj) {
        expect(this.testA).toEqual('A');
      }, myObject);
    });

    it('should change the context to the iterated Array', function () {
      forEach(myArray, function (value, index) {
        expect(this[0]).toEqual('A');
      }, myArray);
    });

  });

});
