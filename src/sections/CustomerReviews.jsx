import ReviewCard from "../compnents/ReviewCard";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section id="customer-review" className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold  ">
        What Our
        <span className="text-coral-red"> Customers </span>
        Say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center text-slate-gray">
        Hear genuine stories from our satisfied customers about their
        experiences with us.
      </p>

      <div className="mt-24 flex felx-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
