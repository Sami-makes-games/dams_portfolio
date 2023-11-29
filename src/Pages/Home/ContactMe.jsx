export default function ContactMe() {
  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">¿Estás interesado?</p>
        <h2>Contáctanos</h2>
        <p className="text-lg">
          Estamos a la distancia de un click.
        </p>
      </div>
      <form className="contact--form--container">
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">Nombre</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Apellido</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="last-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Correo</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Número de teléfono</span>
            <input
              type="number"
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
              required
            />
          </label>
        </div>
        <label htmlFor="choode-topic" className="contact--label">
          <span className="text-md">Selecciona tu servicio</span>
          <select id="choose-topic" className="contact--input text-md">
            <option>Aquí el servicio que quieres contratar</option>
            <option>Más información</option>
            <option>Asesoría</option>
            <option>Contrato</option>
          </select>
        </label>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Mensaje</span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows="8"
            placeholder="Cuéntanos más sobre tu solicitud..."
          />
        </label>
        <label htmlFor="checkboc" className="checkbox--label">
          <input type="checkbox" required name="checkbox" id="checkbox" />
          <span className="text-sm">Acepto los términos y condiciones de servicio</span>
        </label>
        <div>
          <button className="btn btn-primary contact--form--btn">Enviar</button>
        </div>
      </form>
    </section>
  );
}
