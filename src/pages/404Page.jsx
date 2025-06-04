import {Link} from "../Link.jsx";

export default function NotFoundPage() {
  return (
    <>
      <h1>404</h1>
      <img src="https://media1.tenor.com/m/X4unZ7V_oGkAAAAC/waiting-family-guy.gif" alt="404" />
      <p>Page not found</p>
      <Link to="/">Home...</Link>
    </>
  )
}