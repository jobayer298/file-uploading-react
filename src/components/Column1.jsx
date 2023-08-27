
import Utils from "../Utils/Utils";
import SingleCard from "./SingleCard";

const Incomplete = ({text, color}) => {
  const [card] = Utils();
  return (
    <div className="h-screen bg-slate-100 overflow-y-auto ">
      <div className="flex justify-between text-[#a09f9f] p-4">
        <div className="flex gap-2 items-center">
          <p className={`h-9 w-9 ${color}  rounded-l-2xl`}></p>
          <h2 className="font-medium text-2xl">{text}</h2>
        </div>
        <p className="font-medium text-2xl">0</p>
      </div>
      <div className="p-2">
        {card.map((d, i) => (
          <SingleCard d={d} key={i}></SingleCard>
        ))}
      </div>
    </div>
  );
};

export default Incomplete;
