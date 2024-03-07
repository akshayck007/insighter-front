function findBest5(data, property) {
  const countsObj = data.reduce((acc, item) => {
    const propertyToBeFound = item[property];
    acc[propertyToBeFound] = (acc[propertyToBeFound] || 0) + 1;
    return acc;
  }, {});

  // console.log(countsObj);
  const filteredTop5Array = Object.keys(countsObj)
    .sort((a, b) => countsObj[b] - countsObj[a])
    .filter((item) => countsObj[item] !== "")
    .slice(0, 5);
  // console.log(filteredTop5Array);
  return filteredTop5Array;
}

export default findBest5;
