import { ECallDirection, IEmail } from "../api/respTypes";

interface IAccumCalls {
  inbound: number;
  outbound: number;
  total: number;
}


const emailsSummary = (emails: IEmail[]) => emails.reduce<IAccumCalls>(
  (accum, email) => {
    if (email.status === ECallDirection.inbound) {
      accum.inbound++;
    } else {
      accum.outbound++;
    }
    accum.total++;
    return accum;
  },
  { inbound: 0, outbound: 0, total: 0 }
);

export default emailsSummary