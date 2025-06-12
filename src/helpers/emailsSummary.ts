import { EEmailStatus, IEmail } from "../api/respTypes";

interface IAccumEmails {
  sent: number;
  received: number;
  queued: number;
  total: number;
}

// const a =  {
//     "id": "em001",
//     "client_id": "client001",
//     "subject": "Welcome to our service!",
//     "body": "Thank you for registering with us.",
//     "status": "sent",
//     "sent_at": "2025-06-01 09:00:00"
//   }

const emailsSummary = (emails: IEmail[]) =>
  emails.reduce<IAccumEmails>(
    (accum, email) => {
      if (email.status === EEmailStatus.sent) {
        accum.sent++;
      } else if (email.status === EEmailStatus.received) {
        accum.received++;
      } else if (email.status === EEmailStatus.queued) accum.queued++;

      accum.total++;
      return accum;
    },
    { sent: 0, received: 0, queued: 0, total: 0 }
  );

export default emailsSummary;
