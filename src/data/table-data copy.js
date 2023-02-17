
import commissionCardData from "@/data/commission-data";
import GeneralCardData from "@/data/General-data";
import AccountingCardData from "@/data/Accounting-data";

export const tableCardData = [
    {
        subject:"Commission Invoice",
        tablelist:commissionCardData,
    },
    {
        subject:"General Invoice",
        tablelist:GeneralCardData,
    },
    {
        subject:"Accounting",
        tablelist:AccountingCardData,
    },
  ];
export default tableCardData;