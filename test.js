
import R from 'ramda';

const foo = {
  a: "foo",
  b: "bar",
  c: null,
  d: undefined,
  e: 0,
  f: {
    a: "fuz",
    b: null,
    c: {
      a: "biz",
      b: "buz",
      c: [
        {
          a: "foo",
          b: "bar",
          c: null,
          d: undefined,
          e: 0,
          f: false,
        },
        {
          a: "foo",
          b: "bar",
          c: null,
          d: undefined,
          e: 0,
        },
        {
          a: "foo",
          b: "bar",
          c: null,
          d: undefined,
          e: 0,
        },
      ],
    },
  },
};

/** ************************************
  Your challenge is to refactor the cleanse function so its return value is a
  clone of its received object, absent all `null` and `undefined` values.
   - You can use Ramda.js or vanilla JavaScript to solve
   - You may not mutate foo

  Example:
  const foo = { a : 1, b : 2, c : 0, d : false, e : undefined, f : null, g : 'hello' };
  cleanse(foo); // { a : 1, b : 2, c : 0, d : false, g : 'hello' };
  foo remains unmutated // { a : 1, b : 2, c : 0, d : false, e : undefined, f : null, g : 'hello' };
 ************************************ **/

const cleanse = (o) => R.pipe( R.reject( R.either( R.isNil, R.isEmpty ) ), R.map( R.when( R.is(Object), cleanse ) ) )(o);

console.log('foo cleansed:', cleanse(foo).f.c.c);
