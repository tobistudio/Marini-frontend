import { string } from "prop-types";

export function StatisticsCard({title, value}) {
  return (
    <div className='bg-white rounded-xl py-12'>
      <div className="  flex flex-col justify-center items-center" key={`${title}-${value}-scard`}>
        <p className=" text-[43px] text-[#280559] text-center font-medium" key={`${title}-${value}-scard1`}>{value}</p>
        <p className=" text-[16px] text-[#92929D] text-center font-medium" key={`${title}-${value}-scard2`}>{title}</p>
      </div>
      
    </div>
  );
}

StatisticsCard.displayName = "/src/widgets/cards/statistics-card.jsx";

export default StatisticsCard;
