import data from "../../data/index.json";

export default function Testimonial() {
  return (
    <section className="testimonial--section" id="testimonial">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Conoce a nuestro grupo de desarrollo</p>
          <h2 className="sections--heading">Nuestro Equipo</h2>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.testimonial?.map((item, index) => (
          <div key={index} className="testimonial--section--card">
            <img src={item.src} alt="Avatar" />
            <p className="text-md testimonial--author--name">{item.author_name}</p>
            <p className="text-md testimonial--author--designation">{item.author_designation}</p>
            <p className="text-md">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
