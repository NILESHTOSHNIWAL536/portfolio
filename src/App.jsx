import "./App.css";

function App() {
  return (
    <div className="container">

      <nav className="navbar">
        <div className="logo">NT</div>

        <ul>
          <li>About</li>
          <li>Experience</li>
          <li>Projects</li>
          <li>Skills</li>
          <li>Contact</li>
        </ul>
      </nav>

      <section className="hero">

        <div className="left">

          <h1>Kamlesh toshniwal Toshniwal</h1>

          <h3>Full-Stack & Cross-Platform Developer kamlesh toshniwal</h3>

          <p>
            I build scalable financial and business applications using
            React, Next.js, Flutter and Node.js.
          </p>

          <div className="stats">

            <div>
              <h2>3+</h2>
              <span>Years Experience</span>
            </div>

            <div>
              <h2>2</h2>
              <span>Live Apps</span>
            </div>

            <div>
              <h2>15K+</h2>
              <span>Active Users</span>
            </div>

          </div>

          <div className="buttons">
            <button>Resume</button>
            <button>StakePlot</button>
            <button className="outline">Valeasy</button>
          </div>

        </div>

        <div className="right">

          <div className="card">

            <h2>Frontend</h2>

            <div className="tags">
              <span>React</span>
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>Tailwind</span>
            </div>

            <h2>Mobile</h2>

            <div className="tags">
              <span>Flutter</span>
              <span>Bloc</span>
              <span>Riverpod</span>
            </div>

            <h2>Backend</h2>

            <div className="tags">
              <span>Node.js</span>
              <span>Express</span>
              <span>MongoDB</span>
              <span>PostgreSQL</span>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default App;