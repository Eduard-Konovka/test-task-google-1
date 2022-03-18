const fn = (arr) => {
  const beforeIncrease = [];

  for (let i = 0; i < arr.length; i++) {
    let count = 0;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        count += 1;
      } else {
        count += 1;
        break;
      }
    }

    beforeIncrease.push(count);
  }

  return beforeIncrease;
};

console.log(fn([13, 12, 15, 11, 9, 12, 16]));
