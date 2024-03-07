function filterFunction(data, filterValue, isString) {
  const uniqueSet = new Set();
  let filteredAndSortedArray = [];
  let filteredArray = [];
  if (isString) {
    filteredArray = data.filter((item) => item[filterValue] !== "");
    filteredAndSortedArray = filteredArray.sort((a, b) =>
      a[filterValue].localeCompare(b[filterValue])
    );
  } else {
    filteredArray = data.filter((item) => item[filterValue] !== null);
    filteredAndSortedArray = filteredArray.sort(
      (a, b) => a[filterValue] - b[filterValue]
    );
  }

  filteredAndSortedArray.forEach((item) => uniqueSet.add(item[filterValue]));
  return uniqueSet;
}

export default filterFunction;
