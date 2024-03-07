function mainFilterFunction(filterObj, data, updateData) {
  //remove falsy properties => "" or null
  const filteredObj = Object.keys(filterObj).reduce((acc, item) => {
    const property = filterObj[item];
    if (property) {
      acc[item] = property;
    }
    return acc;
  }, {});

  console.log(filteredObj);

  //filteredObj {end_year: 2022, topic: 'agriculture', pestle: 'Healthcare'},
  //data [{a,b,c,d},{b,c,d,d}] where a,b,c,d are end_year,topic etc...

  const totallyFilteredData = data.filter((item) => {
    return Object.keys(filteredObj).every(
      (key) => item[key] === filteredObj[key]
    );
  });
  console.log(totallyFilteredData);
  updateData(totallyFilteredData);
}

export default mainFilterFunction;
