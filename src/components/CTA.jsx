import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text">
        Reach out to me if you have any freelance project or full time job
        opportunity <br className="sm:block hidden" />
      </p>
      <Link to="/contact" className="btn">
        Contact me
      </Link>
    </section>
  );
};

export default CTA;
