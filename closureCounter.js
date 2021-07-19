const closureCounter = (length, step, startIndex) => {
  const increment = step || 1;
  const wrap = length - 1;
  const index = startIndex || (increment > 0) ? -increment : wrap - increment;
  let counter = index;

  if (increment > 0) {
    return () => {
      counter += increment;
      if (counter > wrap) {
        counter -= length;
      }
      return counter;
    }
  } else {
    return () => {
      counter += increment;
      if (counter < 0) {
        counter += length;
      }
      return counter;
    }
  }
};
