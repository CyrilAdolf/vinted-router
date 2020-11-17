import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Dropzone from "react-dropzone";

const Publish = ({ token }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState();
  const [file, setFile] = useState();

  const history = useHistory();

  // Needed when file format is used
  const formData = new FormData();
  formData.append("title", title);
  formData.append("description", description);
  formData.append("brand", brand);
  formData.append("size", size);
  formData.append("color", color);
  formData.append("condition", condition);
  formData.append("city", location);
  formData.append("price", price);
  formData.append("picture", file);

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    try {
      const response = await axios.post(
        "https://vinted-api-phoenix2020.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            authorization: `Bearer ${token}`,
            // "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
      response.status === 200
        ? alert(
            "Votre demande à été prise en compte et est en cours de traitement"
          )
        : alert("Une erreur s'est produite.. vérifiez votre formulaire");
      history.push("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="container container-form">
      <h3>Vends ton article</h3>
      <form className="publishForm" onSubmit={handleSubmit}>
        <div>
          {/* DROPZONE FOR PICTURE */}
          <Dropzone onDrop={(acceptedFiles) => setFile(acceptedFiles[0])}>
            {({ getRootProps, getInputProps }) => (
              <section>
                <div className="dropZone" {...getRootProps()}>
                  <input {...getInputProps()} />
                  <p>+ Ajouter une photo</p>
                </div>
              </section>
            )}
          </Dropzone>
        </div>
        <div>
          <p>Titre</p>
          <input
            type="text"
            value={title}
            onChange={(ev) => {
              setTitle(ev.target.value);
            }}
            placeholder="ex: Pull à capuche"
          />
        </div>
        <div>
          <p>Décris ton article</p>
          <input
            type="text"
            value={description}
            onChange={(ev) => {
              setDescription(ev.target.value);
            }}
            placeholder="ex: Un trou pour la tête, deux pour les bras et un autre pour les jambes"
          />
        </div>
        <div>
          <p>Marque</p>
          <input
            type="text"
            value={brand}
            onChange={(ev) => {
              setBrand(ev.target.value);
            }}
            placeholder="ex: Zara"
          />
        </div>
        <div>
          <p>Taille</p>
          <input
            type="text"
            value={size}
            onChange={(ev) => {
              setSize(ev.target.value);
            }}
            placeholder="ex: XL"
          />
        </div>
        <div>
          <p>Couleur</p>
          <input
            type="text"
            value={color}
            onChange={(ev) => {
              setColor(ev.target.value);
            }}
            placeholder="ex: Bleu"
          />
        </div>
        <div>
          <p>État</p>
          <input
            type="text"
            value={condition}
            onChange={(ev) => {
              setCondition(ev.target.value);
            }}
            placeholder="ex: Tout doux mais troué"
          />
        </div>
        <div>
          <p>Lieu</p>
          <input
            type="text"
            value={location}
            onChange={(ev) => {
              setLocation(ev.target.value);
            }}
            placeholder="ex: Paris"
          />
        </div>
        <div>
          <p>Prix</p>

          <input
            type="number"
            value={price}
            onChange={(ev) => {
              setPrice(ev.target.value);
            }}
            placeholder="0,00 €"
          />
        </div>
        <div>
          <input type="submit" value="Ajouter" />
        </div>
      </form>
    </div>
  );
};

export default Publish;
