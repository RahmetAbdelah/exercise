import ServiceCard from "../components/ServiceCard";
import "./services.css";

function Services() {
  const services = [
    {
      id: 1,
      name: "Bridal Makeup",
      price: 150,
      description: "Full bridal makeup for your special day",
    },
    {
      id: 2,
      name: "Evening Glam",
      price: 80,
      description: "Glamorous evening makeup for parties or events",
    },
    {
      id: 3,
      name: "Photoshoot Makeup",
      price: 120,
      description: "Professional makeup for photo and video shoots",
    },
    {
      id: 4,
      name: "Makeup Workshop",
      price: 100,
      description: "Learn professional makeup techniques in small groups",
    },
    {
      id: 5,
      name: "Casual Day Look",
      price: 50,
      description: "Fresh, natural look for everyday events",
    },
    {
      id: 6,
      name: "Special Effects Makeup",
      price: 200,
      description: "Creative makeup for costume events or film shoots",
    },
  ];

  return (
    <section className="services-page">
      <div className="services-hero">
        <h1>Our Services</h1>
        <p>Professional makeup services tailored for every occasion</p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            name={service.name}
            price={service.price}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Services;
