import React, { useEffect, useState } from "react";
import SimpleSlider from "./SimpleSlider";
import Product from "./Product";
import "./Home.css";
import { db } from "./firebase";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  Timestamp,
} from "firebase/firestore";
const Home = () => {
  const [confirmedList, setConfirmedList] = useState([]);
  const [productList, setProductList] = useState([]);

  const toggleSelection = (id) => {
    if (confirmedList.includes(id)) {
      setConfirmedList((val) => val.filter((item) => item !== id));
      console.log(confirmedList);
    } else {
      setConfirmedList((confirmedList) => [...confirmedList, id]);
      // console.log(confirmedList);
      console.log(productList);
    }
  };

  useEffect(() => {
    onSnapshot(
      query(collection(db, "products"), orderBy("name", "desc")),
      (docs) => {
        let newProducts = [];

        docs.forEach((doc) => {
          let currentDoc = doc.data();
          currentDoc["id"] = doc.id
         
          console.log(currentDoc)
          newProducts.push(currentDoc);
        });
        setProductList(newProducts);
      }
    );
  }, []);

  return (
    <div className="home">

      {productList.map((product, index) => (
        <Product
          key={index}
          info={{
            id: product.id,
            name: product.name,
            brand: product.brand,
            size: product.size,
            color: product.color,
            material: product.material,
            pictures: product.pictures,
            isChecked: product.isChecked,
          }}
          confirmedList={confirmedList}
          toggleSelection={toggleSelection}
        />
      ))}

    </div>
  );
};

export default Home;
