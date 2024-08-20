import React from "react";
import SimpleSlider from "./SimpleSlider";
import "./Product.css";
// import { db } from "./firebase";
// import firebase from "firebase";

const Product = ({ info, confirmedList, toggleSelection }) => {
  const isSelected = (id) => {
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
              <img src={picture} alt="asdf" />
            </div>
          ))}

          {/* <div className="photo">
            <img
              src="public/9E85509F-700A-4836-8CF6-A83513F53793.jpg"
              alt="asdf"
            />
          </div> */}
        </SimpleSlider>
      </div>
      <div className="product__description">
        <h2>{info.name}</h2>
        <span>Brand: {info.brand}</span>
        <span>Color: {info.color}</span>
        <span>Size: {info.size}</span>
        <div className="product__buttons">
          No
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
          {/* <button
            className={`product__button 
              ${
                confirmedList && confirmedList.includes(info.id)
                  ? "selected"
                  : ""
              }
            `}
            onClick={() => {
              console.log(info.id);
              toggleSelection(info.id);
              
            }}
          >
            {confirmedList.includes(info.id) ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="50"
                height="50"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="#000"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                  d="M21 6L9 18 4 13"
                ></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="50"
                height="50"
                viewBox="0 0 24 24"
              >
                <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"></path>
              </svg>
            )}
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Product;
