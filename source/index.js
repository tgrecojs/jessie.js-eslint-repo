const makeCounter = () => {
let count = 0;
    return harden({
      incr: () => (count += 1),
      decr: () => (count -= 1),
    });
  };

let counter = makeCounter()
counter.incr()