import React, { useState } from "react";
import SimpleSlider from "./SimpleSlider";
import Product from "./Product";
import "./Home.css";

const Home = () => {
  const [confirmedList, setConfirmedList] = useState([]);

  const toggleSelection = (id) => {
    if (confirmedList.includes(id)) {
      setConfirmedList(val => val.filter(item => item !== id));
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
          brand: "Axis Modern Coast",
          size: "M",
          color: "Black",
          pictures: [
            "5CFC68C7-7AB6-4EE9-B1C8-6C8B3F110A5D.jpg",
            "9E85509F-700A-4836-8CF6-A83513F53793.jpg",
          ],
        }}
        confirmedList={confirmedList}
        toggleSelection={toggleSelection}
      />
      <Product
        info={{
          id: "2",
          name: "Jacket",
          brand: "Bluemist",
          size: "M",
          color: "Black",
          pictures: [
            "C9551E8A-3D0F-4CAB-B6AC-EB931209228E.jpg",
            "74BE7C66-4845-463D-A924-29D13DF4B483.jpg",
          ],
        }}
        confirmedList={confirmedList}
        toggleSelection={toggleSelection}
      />
    </div>
  );
};

export default Home;
