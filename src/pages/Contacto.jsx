import { useState } from "react";
import emailjs from "emailjs-com";
import "./Contacto.css";

export default function Contacto() {
  const [form, setForm] = useState({ nombre: "", correo: "", mensaje: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.nombre || !form.correo || !form.mensaje) {
      setStatus("⚠️ Todos los campos son obligatorios");
      return;
    }

    emailjs
      .send(
        "service_abc123", // ⚠️ tu Service ID real
        "template_aivn5na", // ⚠️ tu Template ID real
        {
          name: form.nombre,
          email: form.correo,
          message: form.mensaje,
        },
        "nueOCebbkx_vs4R8c" // ⚠️ tu Public Key real
      )
      .then(() => {
        setStatus("✅ Correo enviado correctamente");
        setForm({ nombre: "", correo: "", mensaje: "" });
      })
      .catch(() => {
        setStatus("❌ Error al enviar el correo");
      });
  };

  return (
    <div className="contact-page">
      <div className="contact-wrapper">
        {/* Formulario */}
        <div className="contact-container">
          <h2>Contacto</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={form.nombre}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="correo"
              placeholder="Dirección de Correo"
              value={form.correo}
              onChange={handleChange}
              required
            />

            <textarea
              name="mensaje"
              placeholder="Escriba su mensaje..."
              value={form.mensaje}
              onChange={handleChange}
              required
            />

            <button type="submit">Enviar</button>
          </form>
          {status && <p className="status">{status}</p>}
        </div>

        {/* Mapa embebido con tu ubicación */}
        <div className="map-container">
          <iframe
            title="mapa-hotel"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57899.92696391188!2d-65.44326887529951!3d-24.90666345004696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941bdc0d2b50cdb1%3A0x26acd455b658dce6!2sCamping%20La%20Marrupe%C3%B1a%20-%20Caba%C3%B1as!5e0!3m2!1ses-419!2sar!4v1758956146279!5m2!1ses-419!2sar"
            width="100%"
            height="100%"
            style={{ border: "0", borderRadius: "12px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
