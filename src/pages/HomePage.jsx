import {navigate} from "../App.jsx";

export default function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <p>idk bro</p>
      <button onClick={() => navigate('/about')}>Go to about</button>
      {/*<a href="/about"> About </a>*/}
    </>
  )
}