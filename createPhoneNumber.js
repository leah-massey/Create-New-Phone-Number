function createPhoneNumber(numbers) {
  partOne = numbers.slice(0, 3).join("");
  partTwo = numbers.slice(3, 6).join("");
  partThree = numbers.slice(6, 10).join("");

  console.log(partOne);
  console.log(partTwo);
  console.log(partThree);
  console.log(`(${partOne}) ${partTwo}-${partThree}`);

  return `(${partOne}) ${partTwo}-${partThree}`;
}

module.exports = createPhoneNumber;
