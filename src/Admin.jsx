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

const Admin = () => {
  const [imageURI, setImageURI] = useState("");

  useEffect(() => {});
  const generateReference = (uri) => {
    const timeStamp = new Date().getTime();
    const imageName = uri.split("/")[uri.split("/").length - 1];
    return `${timeStamp}-${imageName}`;
    // return `${userID}-${timeStamp}-${imageName}`;
  };

  const uploadProduct = async () => {
    const uniqueRefString = generateReference(imageURI);
    const response = await fetch(imageURI);
    const blob = await response.blob();
    const newUploadRef = ref(storage, uniqueRefString);
    uploadBytes(newUploadRef, blob).then(async (snapshot) => {
      console.log("File has been uploaded successfully");
      const imageURL = await getDownloadURL(snapshot.ref);

      addDoc(collection(db, "products"), {
        id: "9",
        name: "Jacket",
        brand: "Mondo Di Marco",
        size: "L",
        color: "Black",
        material: "N/A",
        pictures: [imageURL],
        isChecked: false,
      });
      //   db.collection("users").doc(doc.id).update({ foo: "bar" });
    });
  };

  return (
    <div>
      <input type="text" id="id" />
      <input type="text" id="name" />
      <input type="text" id="brand" />
      <input type="text" id="size" />
      <input type="text" id="color" />
      <input type="text" id="material" />
      <input
        type="file"
        accept="image/png, image/jpeg"
        value={imageURI}
        onChange={(e) => {
          setImageURI(e.target.value);
        }}
      />
      <button
        type="submit"
        onClick={() => {
          uploadProduct();
        }}
      >
        Upload
      </button>
    </div>
  );
};

export default Admin;
