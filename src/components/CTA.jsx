import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>
        Ready to join a dynamic team? <br className='sm:block hidden' />
        Let's collaborate and build something great together!
      </p>
      <Link to='/contact' className='btn'>
        Contact me
      </Link>
    </section>
  );
};

export default CTA;
