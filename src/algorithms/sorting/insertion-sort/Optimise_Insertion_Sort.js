class Sorter {
  constructor(callbacks, comparator) {
    this.callbacks = callbacks;
    this.comparator = comparator;
  }

  sort(originalArray) {
    const array = [...originalArray]; // Create a copy of the original array

    // Go through all array elements...
    for (let i = 1; i < array.length; i += 1) {
      let currentIndex = i;
      let tmp = array[i]; // Store the current element

      // Call visiting callback.
      this.callbacks.visitingCallback(array[i]);

      // Go and check if previous elements are greater than the current one.
      // If this is the case then swap those elements.
      while (
        currentIndex > 0 &&
        this.comparator.lessThan(tmp, array[currentIndex - 1])
      ) {
        // Call visiting callback.
        this.callbacks.visitingCallback(array[currentIndex - 1]);

        // Swap the elements.
        array[currentIndex] = array[currentIndex - 1];

        // Shift current index left.
        currentIndex -= 1;
      }

      array[currentIndex] = tmp; // Place the current element in its correct position
    }

    return array; // Return the sorted array
  }
}

// Example usage:
const callbacks = {
  visitingCallback: (value) => console.log('Visiting:', value),
};

const comparator = {
  lessThan: (a, b) => a < b,
};

const sorter = new Sorter(callbacks, comparator);
const sortedArray = sorter.sort([3, 1, 2, 5, 6]);
console.log(sortedArray);