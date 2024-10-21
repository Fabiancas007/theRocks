import "./Contact.css";
import { Button } from "../../../components/Button";
import { SearchInput } from "../../../components/SearchInput";
import { useState } from "react";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <section id="contact">
      <div className="contact-section">
        <h2 className="subtitle">Contáctanos</h2>
        <p className="contact-description">
          ¿Tienes alguna duda o quieres saber más sobre nuestros servicios?
          ¡Envíanos un mensaje!
        </p>

        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <SearchInput
              placeholder="Tu nombre"
              value={name}
              onSearch={setName}
              id="name"
              name="name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <SearchInput
              placeholder="Tu correo electrónico"
              value={email}
              onSearch={setEmail}
              id="email"
              name="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Escribe tu mensaje"
              required
            ></textarea>
          </div>

          <Button label="Enviar mensaje" className="primary" />
        </form>
      </div>
    </section>
  );
};
