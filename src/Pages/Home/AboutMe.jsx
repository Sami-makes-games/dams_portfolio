export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/about-me.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">¿Quiénes somos?</p>
          <h1 className="skills-section--heading">Sobre nosotros</h1>
          <p className="hero--section-description">
            Somos un grupo de jóvenes venezolanos que decidimos unirnos para crear un grupo de desarrollo.
          </p>
          <p className="hero--section-description">
            ¿Quieres saber más? Echale un vistazo a nuestro portafolio.
          </p>
        </div>
      </div>
    </section>
  );
}
