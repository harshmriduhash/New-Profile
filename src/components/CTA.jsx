import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>
        I'm Ready to join a dynamic team, so if you have some freelance project or full time opportunity <br className='sm:block hidden' />
        Please do reach out to me.
      </p>
      <Link to='/contact' className='btn'>
        Contact me
      </Link>
    </section>
  );
};

export default CTA;
