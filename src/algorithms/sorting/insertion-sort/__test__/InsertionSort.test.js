import Sorter from '../Optimise_Insertion_Sort'; // Import the Sorter class
import {
  equalArr,
  notSortedArr,
  reverseArr,
  sortedArr,
  SortTester,
} from '../../SortTester'; // Assuming these are helper methods

// Complexity constants.
const SORTED_ARRAY_VISITING_COUNT = 19;
const NOT_SORTED_ARRAY_VISITING_COUNT = 100;
const REVERSE_SORTED_ARRAY_VISITING_COUNT = 209;
const EQUAL_ARRAY_VISITING_COUNT = 19;

// Setup comparator and callbacks for the Sorter
const callbacks = {
  visitingCallback: (value) => {
    // Optionally, you can log or track visited elements here
  },
};

const comparator = {
  lessThan: (a, b) => a < b, // Custom comparator for less than
};

describe('Sorter', () => {
  it('should sort array', () => {
    const sorter = new Sorter(callbacks, comparator);
    SortTester.testSort(sorter); // Assuming testSort uses the class with a sort method
  });

  it('should sort array with custom comparator', () => {
    const sorter = new Sorter(callbacks, comparator);
    SortTester.testSortWithCustomComparator(sorter);
  });

  it('should do stable sorting', () => {
    const sorter = new Sorter(callbacks, comparator);
    SortTester.testSortStability(sorter);
  });

  it('should sort negative numbers', () => {
    const sorter = new Sorter(callbacks, comparator);
    SortTester.testNegativeNumbersSort(sorter);
  });

  it('should visit EQUAL array element specified number of times', () => {
    const sorter = new Sorter(callbacks, comparator);
    SortTester.testAlgorithmTimeComplexity(
      sorter,
      equalArr,
      EQUAL_ARRAY_VISITING_COUNT,
    );
  });

  it('should visit SORTED array element specified number of times', () => {
    const sorter = new Sorter(callbacks, comparator);
    SortTester.testAlgorithmTimeComplexity(
      sorter,
      sortedArr,
      SORTED_ARRAY_VISITING_COUNT,
    );
  });

  it('should visit NOT SORTED array element specified number of times', () => {
    const sorter = new Sorter(callbacks, comparator);
    SortTester.testAlgorithmTimeComplexity(
      sorter,
      notSortedArr,
      NOT_SORTED_ARRAY_VISITING_COUNT,
    );
  });

  it('should visit REVERSE SORTED array element specified number of times', () => {
    const sorter = new Sorter(callbacks, comparator);
    SortTester.testAlgorithmTimeComplexity(
      sorter,
      reverseArr,
      REVERSE_SORTED_ARRAY_VISITING_COUNT,
    );
  });
});
