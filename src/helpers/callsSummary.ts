import { ECallDirection, ICall } from "../api/respTypes";

interface IAccumCalls {
  inbound: number;
  outbound: number;
  total: number;
}


const callsSummary = (calls: ICall[]) => calls.reduce<IAccumCalls>(
  (accum, call) => {
    if (call.direction === ECallDirection.inbound) {
      accum.inbound++;
    } else {
      accum.outbound++;
    }
    accum.total++;
    return accum;
  },
  { inbound: 0, outbound: 0, total: 0 }
);

export default callsSummary