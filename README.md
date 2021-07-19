# closureCounter
Sets up a counter function that rotates through the range provided by a length property as though it were an array index (i.e., returned values will be between `0` and `length - 1`))

#### Examples
```
const nextIndex = closureCounter(3);

nextIndex(); // 0
nextIndex(); // 1
nextIndex(); // 2
nextIndex(); // 0

const prevIndex = closureCounter(3, -1);

prevIndex(); // 2
prevIndex(); // 1
prevIndex(); // 0
prevIndex(); // 2

const everyOtherIndex = closureCounter(6, 2);

everyOtherIndex(); // 0
everyOtherIndex(); // 2
everyOtherIndex(); // 4
everyOtherIndex(); // 0

```
