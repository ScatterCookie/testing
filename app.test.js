import { test, expect, describe } from "vitest";
import { add, isPalindrome } from "./app";

describe("adding numbers together", function () {
  test("1 plus 2", function () {
    const result = add(1, 2);
    const expected = 3;
    expect(result).toBe(expected);
  });
});

// let wording = "steve";

describe("Words that are palindromic", function () {
  test("test is this a palindrome", function () {
    const result = isPalindrome("steve");
    expect(result).toBe(false);
  });
});
