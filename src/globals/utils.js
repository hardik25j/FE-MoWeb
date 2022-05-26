export const getDates = () => {
  var d = new Date();
  d.setMonth(d.getMonth() - 4);

  const dFrom = new Date(d);
  const dTo = new Date();

  let daysArr = [new Date(dFrom)];
  let tempDate = dFrom;

  while (tempDate < dTo) {
    tempDate.setUTCDate(tempDate.getUTCDate() + 1);
    daysArr.push(new Date(tempDate));
  }
  return daysArr;
};
