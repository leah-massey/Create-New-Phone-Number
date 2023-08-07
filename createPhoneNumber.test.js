const createPhoneNumber = require("./createPhoneNumber");

describe("createPhoneNumber", () => {
  test("it does not return a null value", () => {
    expect(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).not.toEqual(null);
  });

  test("it has a length of 14", () => {
    expect(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toHaveLength(14);
  });
});
