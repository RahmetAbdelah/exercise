import "./serviceCard.css";

function ServiceCard({ name, price, description }) {
  return (
    <div className="service-card">
      <h3 className="service-card-title">{name}</h3>
      <p className="service-card-desc">{description}</p>
      <p className="service-card-price">Price: ${price}</p>
      <button className="service-card-btn">Book Now</button>
    </div>
  );
}

export default ServiceCard;
