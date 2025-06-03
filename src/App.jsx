import './App.css'

function HomePage() {
  return (
    <>
    <h1>Home</h1>
      <p>idk bro</p>
      <a href="/about"> HOME </a>
    </>
  )
}

function AboutPage() {
  return (
    <>
      <h1>ABOUT</h1>
      <p>idk bro this an about</p>
      <a href="/"> HOME </a>
    </>
  )
}

function App() {

  return (
    <main>
      <HomePage />
      <AboutPage />
    </main>
  )
}

export default App
