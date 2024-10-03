import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDescription = () => {
  const { id } = useParams();
  const [desc, setDesc] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setDesc(json));
  }, [id]);

  if (!desc) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{desc.title}</h2>
      <p>{desc.description}</p>
      <p>Price: ${desc.price}</p>
      <img src={desc.image} alt={desc.title} style={{ width: "200px" }} />
    </div>
  );
};

export default ProductDescription;
