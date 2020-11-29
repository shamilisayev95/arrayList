const {assert} = require("chai");
const ArrayList = require("../arrayList.js");


describe("ArrayList methods", () => {
  describe("init",() => {
    const aList = new ArrayList();
    const testData = [
      {
      initialArray: [1, 2, 3],
      expectedSize: 3,
      expectedString: "[1, 2, 3]"
      },
      {
        initialArray: [1, 2, 3, 4],
        expectedSize: 4,
        expectedString: "[1, 2, 3, 4]"
      },
      {
        initialArray: [1, 2, 3, 4, 5],
        expectedSize: 5,
        expectedString: "[1, 2, 3, 4, 5]"
      }
    ];

    testData.forEach(({initialArray, expectedSize, expectedString}) => {
      it(`should return size ${expectedSize} and ${expectedString}`, () => {
        aList.init(initialArray)

        assert.deepEqual(aList.getSize(), expectedSize);
        assert.strictEqual(aList.myToString(), expectedString);
      });
    })
  })


  describe("push",() => {
    const aList = new ArrayList();
    const testData = [
      {
        arg: 2,
        initialArray: [1, 2, 3],
        expectedSize: 4,
        expectedString: "[1, 2, 3, 2]"
      },
      {
        arg: 2,
        initialArray: [1, 2, 3, 4],
        expectedSize: 5,
        expectedString: "[1, 2, 3, 4, 2]"
      },
      {
        arg: 2,
        initialArray: [1, 2, 3, 4, 5],
        expectedSize: 6,
        expectedString: "[1, 2, 3, 4, 5, 2]"
      }
    ];

    testData.forEach(({arg, initialArray, expectedSize, expectedString}) => {
      it(`should return size ${expectedSize} and ${expectedString}`, () => {
        aList.init(initialArray)

        assert.deepEqual(aList.myPush(arg), expectedSize);
        assert.deepEqual(aList.myToString(), expectedString)
      });
    })
  })

  describe("pop",() => {
    const aList = new ArrayList();
    const testData = [
      {
        initialArray: [1, 2, 3],
        lastElement: 3,
        expectedSize: 2,
      },
      {
        initialArray: [1, 2, 3, 4],
        lastElement: 4,
        expectedSize: 3,
      },
      {
        initialArray: [1, 2, 3, 4, 5],
        lastElement: 5,
        expectedSize: 4,
      }
    ];

    testData.forEach(({initialArray, expectedSize, lastElement}) => {
      it(`should return  ${lastElement} and ${expectedSize}`, () => {
        aList.init(initialArray)

        const actual = aList.myPop()

        assert.deepEqual(actual, lastElement);
        assert.deepEqual(aList.getSize(), expectedSize)
      });
    })
  })

  describe("myShift",() => {
    const aList = new ArrayList();
    const testData = [
      {
        initialArray: [1, 2, 3],
        firstElement: 1,
        expectedSize: 2,
      },
      {
        initialArray: [1, 2, 3, 4],
        firstElement: 1,
        expectedSize: 3,
      },
      {
        initialArray: [1, 2, 3, 4, 5],
        firstElement: 1,
        expectedSize: 4,
      }
    ];

    testData.forEach(({initialArray, expectedSize, firstElement}) => {
      it(`should return  ${firstElement} and ${expectedSize}`, () => {
        aList.init(initialArray)

        const actual = aList.myShift()

        assert.deepEqual(actual, firstElement);
        assert.deepEqual(aList.getSize(), expectedSize)
      });
    })
  })

  describe("myUnShift",() => {
    const aList = new ArrayList();
    const testData = [
      {
        arg: 2,
        initialArray: [1, 2, 3],
        expectedSize: 4,
        expectedString: "[2, 1, 2, 3]"
      },
      {
        arg: 2,
        initialArray: [1, 2, 3, 4],
        expectedSize: 5,
        expectedString: "[2, 1, 2, 3, 4]"
      },
      {
        arg: 2,
        initialArray: [1, 2, 3, 4, 5],
        expectedSize: 6,
        expectedString: "[2, 1, 2, 3, 4, 5]"
      }
    ];

    testData.forEach(({arg, initialArray, expectedSize, expectedString}) => {
      it(`should return size ${expectedSize} and ${expectedString}`, () => {
        aList.init(initialArray)

        assert.deepEqual(aList.myUnShift(arg), expectedSize);
        assert.deepEqual(aList.myToString(), expectedString)
      });
    })
  })

  describe("myClear",() => {
    const aList = new ArrayList();
    const testData = [
      {
        initialArray: [1, 2, 3],
        expectedSize: 0,
        expectedString: "[]"
      },
      {
        initialArray: [1, 2, 3, 4],
        expectedSize: 0,
        expectedString: "[]"
      },
      {
        initialArray: [1, 2, 3, 4, 5],
        expectedSize: 0,
        expectedString: "[]"
      }
    ];

    testData.forEach(({arg, initialArray, expectedSize, expectedString}) => {
      it(`should return size ${expectedSize} and ${expectedString}`, () => {
        aList.init(initialArray)
        aList.myClear();


        assert.deepEqual(aList.getSize(), expectedSize);
        assert.deepEqual(aList.myToString(), expectedString)
      });
    })
  })

  describe("myClear",() => {
    const aList = new ArrayList();
    const testData = [
      {
        initialArray: [1, 2, 3],
        reversed: [3, 2, 1],
      },
      {
        initialArray: [1, 2, 3, 4],
        reversed: [4, 3, 2, 1],
      },
      {
        initialArray: [1, 2, 3, 4, 5],
        reversed: [5 ,4, 3, 2, 1],
      }
    ];

    testData.forEach(({initialArray, reversed, expectedString}) => {
      it(`should return size ${reversed}`, () => {
        aList.init(initialArray)

        assert.deepEqual(aList.myReverse(), reversed);
      });
    })
  })

  describe("mySlice",() => {
    const aList = new ArrayList();
    const testData = [
      {
        arg: 0,
        arg2: 2,
        initialArray: [1, 2, 3],
        expectedSize: [1, 2],
      },
      {
        arg: 2,
        arg2: 4,
        initialArray: [1, 2, 3, 4],
        expectedSize: [3, 4],
      },
      {
        arg: 1,
        arg2: 4,
        initialArray: [1, 2, 3, 4, 5],
        expectedSize: [2, 3, 4],
      }
    ];

    testData.forEach(({arg,arg2, initialArray, expectedSize, expectedString}) => {
      it(`should return size ${expectedSize}`, () => {
        aList.init(initialArray)

        assert.deepEqual(aList.mySlice(arg, arg2), expectedSize);
      });
    })
  })

})