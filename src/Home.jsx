import React, { useState } from "react";
import SimpleSlider from "./SimpleSlider";
import Product from "./Product";
import "./Home.css";

const Home = () => {
  const [confirmedList, setConfirmedList] = useState([]);

  const toggleSelection = (id) => {
    if (confirmedList.includes(id)) {
      setConfirmedList((val) => val.filter((item) => item !== id));
      console.log(confirmedList);
    } else {
      setConfirmedList((confirmedList) => [...confirmedList, id]);
      console.log(confirmedList);
    }
  };

  return (
    <div className="home">
      <Product
        info={{
          id: "1",
          name: "Jacket",
          brand: "Axis",
          size: "M",
          color: "Beige",
          material: "75% Cotton, 23% Rayon, 2% Lycra",
          pictures: ["Axis_BeigeJacket-Front.JPG", "Axis_BeigeJacket-Back.JPG"],
          isChecked: true,
        }}
        confirmedList={confirmedList}
        toggleSelection={toggleSelection}
      />
      <Product
        info={{
          id: "2",
          name: "Jacket",
          brand: "Axis",
          size: "L",
          color: "Beige",
          material: "N/A",
          pictures: ["Axis_SuadeJacket-Front.JPG", "Axis_SuadeJacket-Back.JPG"],
          isChecked: false,
        }}
        confirmedList={confirmedList}
        toggleSelection={toggleSelection}
      />
      <Product
        info={{
          id: "3",
          name: "Jacket",
          brand: "Axis Denim",
          size: "XL",
          color: "Beige",
          material: "55% Tencel Lyocell, 45% Cotton",
          pictures: ["AxisDenim_Jacket-Front.JPG", "AxisDenim_Jacket-Back.JPG"],
          isChecked: true,
        }}
        confirmedList={confirmedList}
        toggleSelection={toggleSelection}
      />
      <Product
        info={{
          id: "4",
          name: "Jacket",
          brand: "Axis Modern Coast",
          size: "M",
          color: "Beige",
          material: "100% Cotton",
          pictures: [
            "AxisModernCoast_CottonJacket-Front.JPG",
            "AxisModernCoast_CottonJacket-Back.JPG",
          ],
          isChecked: false,
        }}
        confirmedList={confirmedList}
        toggleSelection={toggleSelection}
      />
      <Product
        info={{
          id: "5",
          name: "Jacket",
          brand: "Axis Modern Coast",
          size: "M",
          color: "Black",
          material: "70% Wool, 30% Acrylic",
          pictures: [
            "AxisModernCoast_Jacket-Front.JPG",
            "AxisModernCoast_Jacket-Back.JPG",
          ],
          isChecked: false,
        }}
        confirmedList={confirmedList}
        toggleSelection={toggleSelection}
      />
      <Product
        info={{
          id: "6",
          name: "Jacket",
          brand: "Bluemist",
          size: "M",
          color: "Black",
          material: "89% Polyester, 11% Nylon",
          pictures: ["Bluemist_Jacket-Front.JPG", "Bluemist_Jacket-Back.JPG"],
          isChecked: false,
        }}
        confirmedList={confirmedList}
        toggleSelection={toggleSelection}
      />
      <Product
        info={{
          id: "7",
          name: "Jacket",
          brand: "Bluemist",
          size: "M",
          color: "Brown",
          material: "100% Cotton",
          pictures: ["Brown_Jacket-Front.JPG"],
          isChecked: false,
        }}
        confirmedList={confirmedList}
        toggleSelection={toggleSelection}
      />
      <Product
        info={{
          id: "8",
          name: "Jacket",
          brand: "N/A",
          size: "N/A",
          color: "Grey",
          material: "N/A",
          pictures: ["DenimJacket-Front.JPG"],
          isChecked: false,
        }}
        confirmedList={confirmedList}
        toggleSelection={toggleSelection}
      />
      <Product
        info={{
          id: "9",
          name: "Jacket",
          brand: "Mondo Di Marco",
          size: "L",
          color: "Black",
          material: "N/A",
          pictures: ["Mondo_Jacket-Front.JPG", "Mondo_Jacket-Back.JPG"],
          isChecked: false,
        }}
        confirmedList={confirmedList}
        toggleSelection={toggleSelection}
      />
    </div>
  );
};

export default Home;
