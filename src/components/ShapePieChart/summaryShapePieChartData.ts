import { IShapePieChartData } from ".";

const summaryShapePiChartData = (data: IShapePieChartData[]) => {
  return data.reduce<IShapePieChartData[]>((accum, item) => {
    const index = accum.findIndex((val) => val.name === item.name);
    if (index !== -1) accum[index].value += item.value;
    else accum.push(item);
    return accum;
  }, []);
};

export default summaryShapePiChartData