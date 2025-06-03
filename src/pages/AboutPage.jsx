import {navigate} from "../App.jsx";

export default function AboutPage() {
  return (
    <>
      <h1>ABOUT</h1>
      <p>idk bro this an about</p>
      <button onClick={() => navigate('/')}>Go to home</button>
      {/*<a href="/"> HOME </a>*/}
    </>
  )
}