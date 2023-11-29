export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">¡Hola! Somos DAMS</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Grupo de Desarrollo</span>{" "}
            <br />
            FULL STACK
          </h1>
          <p className="hero--section-description">
            Un pequeño grupo desarrolladores a tu servicio para asesorarte y hacer realidad tus ideas.
            <br /> ¿Quieres saber más?
          </p>
        </div>
        <button className="btn btn-primary">Contáctanos</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
