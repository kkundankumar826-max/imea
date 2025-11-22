import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <div>
      <section className="hero">
        <h1>Indian Market Education Academy (IMEA)</h1>
        <p>Learn Stock Market from Zero to Expert with simple & trusted education.</p>
        <Link to="/courses"><button>Start Learning →</button></Link>
      </section>

      <section className="grid">
        <div className="card">
          <h3>Why IMEA?</h3>
          <ul>
            <li>Easy language lessons</li>
            <li>Beginner → Advanced roadmap</li>
            <li>Live market examples</li>
            <li>Free notes & PDFs</li>
          </ul>
        </div>
        <div className="card">
          <h3>Featured Course</h3>
          <p>Basic Stock Market Course — Free</p>
        </div>
      </section>
    </div>
  )
}
