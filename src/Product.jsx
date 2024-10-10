import React from "react";
import SimpleSlider from "./SimpleSlider";
import "./Product.css";
import {
  onSnapshot,
  query,
  collection,
  where,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase";
// import firebase from "firebase";

const Product = ({ info, confirmedList, toggleSelection }) => {
  const isSelected = async (id) => {
    const ref = doc(db, "products", id);
    await updateDoc(ref, {
      isChecked: !info.isChecked,
    });
    // onSnapshot(
    //   query(collection(db, "products"), where("id", "==", id)),
    //   (docs) => {
    //     docs.forEach((doc) => {
    //       db.collection("products").doc(doc.id).set({ isChecked: !isChecked });
    //       console.log(doc.id);
    //     });
    //   }
    // );

    let check = document.getElementById(id);

    console.log(check.checked);
    // if (check.checked == true) {
    //   window.prompt("Yes");
    // } else {
    //   window.prompt("No");
    // }
  };
  // useEffect(() => {
  //   if(user) {

  //   db.collection('users').doc(user?.uid).collection('orders').orderBy('created', 'desc').onSnapshot(snapshot => (
  //     setOrders(snapshot.docs.map(doc => ({
  //       id: doc.id,
  //       data: doc.data()
  //     })))
  //   ))
  //   } else {
  //     setOrders([])
  //   }

  // }, [user])

  return (
    <div className="product">
      <div className="product__image">
        <SimpleSlider>
          {info.pictures.map((picture, index) => (
            <div className="photo" key={index}>
              <img src={picture} alt={picture} />
            </div>
          ))}
        </SimpleSlider>
      </div>
      <div className="product__description">
        {" "}
          <h2 className="product__name">{info.name}</h2>
          <span className="product__info">Brand: {info.brand}</span>
          <span className="product__info">Size: {info.size}</span>
          <span className="product__info">Material: {info.material}</span>
          <span className="product__info">Color: {info.color}</span>
        <div className="product__buttons">
          <span className="product__buttons-text">No</span>
          <label className="switch">
            <input
              type="checkbox"
              id={info.id}
              name="selected"
              onClick={() => isSelected(info.id)}
              defaultChecked={info.isChecked}
            />
            <span className="slider round"></span>
          </label>
          <span className="product__buttons-text">Yes</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
