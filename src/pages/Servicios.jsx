import React from "react";
import "./Servicios.css";

// 👇 Importamos las imágenes locales
import simple from "../assets/simple.jpg";
import doble from "../assets/doble.jpg";
import deluxe from "../assets/deluxe.jpg";

const habitaciones = [
  {
    id: 1,
    nombre: "Habitación Simple",
    descripcion: "Ideal para una persona, equipada con lo básico.",
    precio: 50000,
    imagen: simple 
  },
  {
    id: 2,
    nombre: "Habitación Doble",
    descripcion: "Perfecta para dos personas, amplia y luminosa.",
    precio: 100000,
    imagen: doble
  },
  {
    id: 3,
    nombre: "Suite Deluxe",
    descripcion: "Con vista al mar y todos los lujos incluidos.",
    precio: 150000,
    imagen: deluxe
  }
];

function Servicios() {
  return (
    <div className="servicios-page">
      <h1 className="servicios-title">Nuestros Servicios</h1>
      <div className="servicios-grid">
        {habitaciones.map((hab) => (
          <div key={hab.id} className="servicio-card">
            <img src={hab.imagen} alt={hab.nombre} className="servicio-img" />
            <h2>{hab.nombre}</h2>
            <p>{hab.descripcion}</p>
            <p className="precio">
              <strong>${hab.precio} </strong>/ noche
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Servicios;
