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
        "service_abc123", // ✅ tu Service ID real
        "template_aivn5na", // ✅ tu Template ID real
        {
          name: form.nombre, // 👈 deben coincidir con tu template
          email: form.correo,
          message: form.mensaje,
        },
        "nueOCebbkx_vs4R8c" // ✅ tu Public Key real
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
  </div>
);
}
