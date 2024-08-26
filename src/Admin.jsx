import React, { useEffect, useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  Timestamp,
} from "firebase/firestore";
import { db, storage } from "./firebase";
import { v4 as uuidv4 } from "uuid";
import "./Admin.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

const Admin = () => {
  const [imageURI, setImageURI] = useState("");
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("XXS");
  const [color, setColor] = useState("");
  const [material, setMaterial] = useState("");
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {});
  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        setUser(user);
        window.alert("Signed in successfully");
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(error, errorCode, errorMessage);
        window.alert("Signed in failed");

        // ..
      });
  };
  const generateReference = (uri) => {
    const timeStamp = new Date().getTime();
    const imageName = uri.name;
    return `${timeStamp}-${imageName}`;
  };

  const uploadProduct = async () => {
    let imageList = [];

    if (name && size && imageURI) {
      for (let i = 0; i < imageURI.length; i++) {
        const uniqueRefString = generateReference(imageURI[i]);
        const newUploadRef = ref(storage, uniqueRefString);

        uploadBytes(newUploadRef, imageURI[i])
          .then(async (snapshot) => {
            const imageURL = await getDownloadURL(snapshot.ref);

            return imageURL;
            //   db.collection("users").doc(doc.id).update({ foo: "bar" });
          })
          .then((imageURL) => {
            imageList.push(imageURL);
            if (i == imageURI.length - 1) {
              addDoc(collection(db, "products"), {
                id: uuidv4(),
                name: name != "" ? name : "N/A",
                brand: brand != "" ? brand : "N/A",
                size: size != "" ? size : "N/A",
                color: color != "" ? color : "N/A",
                material: material != "" ? material : "N/A",
                pictures: imageList,
                isChecked: false,
              });
              window.alert("Product added successfully");
              setName("");
              setBrand("");
              setSize("XXS");
              setColor("");
              setMaterial("");
              setImageURI(null);
              document.querySelector("#images").value = "";
            }
          });
      }
    } else {
      window.alert("Form missing data. Failed to add product");
    }
  };

  return !user ? (
    <div className="admin">
      <form className="login__form">
        <label htmlFor="email">Email:</label>
        <input
          className="login__input"
          type="text"
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label htmlFor="password">Password:</label>
        <input
          className="login__input"
          type="password"
          id="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button
          className="login__button"
          onClick={(e) => {
            e.preventDefault();
            signIn();
          }}
        >
          Sign in
        </button>
      </form>
    </div>
  ) : (
    <div className="admin">
      <div className="product__form">
        <div>
          <label htmlFor="name">* Name:</label>
          <input
            className="product__input"
            type="text"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />
        </div>
        <div>
          <label htmlFor="size">* Size:</label>
          <select
            className="product__input"
            type="text"
            id="size"
            name="size"
            value={size}
            onChange={(e) => {
              setSize(e.target.value);
            }}
          >
            <option value="XXS">XXS</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        </div>
        <div>
          * Add Images:
          <input
            id="images"
            className="product__upload"
            type="file"
            onChange={(e) => {
              setImageURI(e.target.files);
            }}
            multiple
          />
        </div>
        <div>
          <label htmlFor="brand">Brand:</label>
          <input
            className="product__input"
            type="text"
            id="brand"
            value={brand}
            onChange={(e) => {
              setBrand(e.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="color">Color:</label>
          <input
            className="product__input"
            type="text"
            id="color"
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="material">Material:</label>
          <input
            className="product__input"
            type="text"
            id="material"
            value={material}
            onChange={(e) => {
              setMaterial(e.target.value);
            }}
          />
        </div>
        <p>* required fields</p>
        <div className="product__inputBox">
          <button
            className="product__input"
            type="submit"
            onClick={() => {
              uploadProduct();
            }}
          >
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
