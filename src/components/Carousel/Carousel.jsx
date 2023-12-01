import React, { useEffect, useState } from "react";
import Slider from "../Slider/Slider";

const Carousel = ({ pictures }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(pictures);
  }, [data, pictures]);

  return (
    <div className="carousel">
      <Slider pictures={data} />
    </div>
  );
};

export default Carousel;
