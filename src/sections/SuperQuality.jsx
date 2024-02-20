import { shoe8 } from "../assets/images";
import Button from "../compnents/Button";
import { motion } from "framer-motion";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-xl:flex-col gap-10 w-full max-container "
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full">
        <h2 className="text-4xl font-palanquin font-bold capitalize lg:max-w-lg">
          We Provide You
          <span className="text-coral-red"> Super</span>
          <br />
          <span className="text-coral-red"> Quality</span> Shoes
        </h2>

        <p className="mt-4 lg:max-w-lg info-text">
          Ensuringn premium comfort and style, our meticulously crafted footwear
          is designed to meet your needs., providing you with the best quality
          and value.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensure your satisfaction.
        </p>
        <div className="mt-11">
          <Button label="View Details" />
        </div>
      </div>

      <div className="flex flex-1 justify-center items-center">
        <motion.img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        />
      </div>
    </section>
  );
};

export default SuperQuality;
