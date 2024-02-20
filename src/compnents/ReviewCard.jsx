import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt={customerName}
        className="rounded-full object-cover w-[120px] h-[120px]"
      />
      <p className="info-text mt-6 max-w-sm text-center">{feedback}</p>

      <div className="flex mt-3 justify-center items-center gap-2.5">
        <img src={star} width={24} height={24} className="object-contain m-0" />
        <p className="text-xl font-montserrat text-slate-gray">{rating}</p>
      </div>

      <h4 className="mt-1 font-palanquin text-3xl text-center font-bold">
        {customerName}
      </h4>
    </div>
  );
};

export default ReviewCard;
