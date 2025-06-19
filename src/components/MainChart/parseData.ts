import { DataPoint } from ".";

interface IData {
  dataX: number[];
  dataY: number[];
}

const parseData = (data: DataPoint[]) => {
  const updatedData = {
    dataX: [],
    dataY: [],
  };

  return data.reduce<IData>((accum, item) => {
    accum.dataY.push(item.value);
    accum.dataX.push(Date.parse(item.date));
    return accum;
  }, updatedData);
};

export default parseData