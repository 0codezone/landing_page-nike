import ServiceCard from "../compnents/ServiceCard";
import { services } from "../constants";
const Services = () => {
  return (
    <section
      id="services"
      className="max-container flex justify-center flex-wrap gap-9 "
    >
      {services.map((service, index) => {
        return <ServiceCard key={index} {...service} />;
      })}
    </section>
  );
};

export default Services;
