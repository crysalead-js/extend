var extend = require('..').extend;

describe(".extend()", function() {

  it("extends objects", function() {

    var a = { a: 'foo' };
    var b = { b: 'bar' };

    expect(extend({}, a, b)).toEqual({ a: 'foo', b: 'bar' });

  });

  it("replaces former values", function() {

    var a = { a: 'foo' };
    var b = { a: 'bar' };

    expect(extend({}, a, b)).toEqual({ a: 'bar' });

  });

  it("supports `undefined`", function() {

    var a = { a: undefined };
    var b = { b: 'foo' };

    expect(extend({}, a, b)).toEqual({ b: 'foo' });
    expect(extend({}, b, a)).toEqual({ b: 'foo' });

  });

  it("supports `0`", function() {

    var a = { a: "default" };
    var b = { a: 0 };

    expect(extend({}, a, b)).toEqual({ a: 0 });
    expect(extend({}, b, a)).toEqual({ a: "default" });

  })

  it("supports `null` argument", function() {

    var a = { foo: 'bar' };
    var b = null;
    var c = void 0;

    expect(extend({}, a, b, c)).toEqual({ foo: 'bar' });
    expect(extend({}, b, a, c)).toEqual({ foo: 'bar' });

  });

  it("is mutable", function () {

    var a = { foo: 'bar' };

    extend(a, { foo: 'baz' });
    expect(a.foo).toEqual('baz');

  });

  it("is immutable with {} as target", function () {

    var a = { foo: 'bar' };

    extend({}, a, { foo: 'baz' });
    expect(a.foo).toEqual('bar');

  });

});