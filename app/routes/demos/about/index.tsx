import { Link } from 'remix';

const AboutIndex = () => (
  <div>
    <p>
      You are looking at the index route for the
      {' '}
      <code>/about</code>
      {' '}
      URL
      segment, but there are nested routes as well!
    </p>
    <p>
      <strong>
        <Link to="whoa">Check out one of them here.</Link>
      </strong>
    </p>
  </div>
);

export default AboutIndex;
