import "./ImageUploader.css";
import { useState } from "react";

function ImageUploader() {
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError("⚠️ El archivo no es una imagen válida");
      setImage(null);
      return;
    }

    setError("");
    setImage(URL.createObjectURL(file));
  };

  return (
    <div className="uploader-page">
      <h1>Validador de imágenes</h1>
      <p>Subir Imagen</p>

      <div className="uploader-container">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="file-input"
        />

        {error && <p className="error-text">{error}</p>}

        {image && (
          <div className="preview">
            <h3>Vista previa:</h3>
            <img src={image} alt="preview" />
          </div>
        )}
      </div>
    </div>
  );
}

export default ImageUploader;
