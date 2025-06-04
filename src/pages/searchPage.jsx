import { useEffect } from 'react';
import { Link } from '../Link.jsx';

export default function SearchPage({ routeParams }) {
  useEffect(() => {
    document.title = `router: ${routeParams.query}`;
  }, [routeParams.query]);

  return (
    <>
      <h1>Searching</h1>
      <p>
        You have searched: <strong> {routeParams.query} </strong>
      </p>
      <img src="https://media.tenor.com/7rkESXPrQ0YAAAAi/saitama.gif" alt="searching" />
      <Link to="/"> Home </Link>
    </>
  );
}
