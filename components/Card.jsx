"use client"
import React, { useState, useEffect } from "react";
import ImageCard from "./ImageCard";
import axios from "axios";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const Card = () => {
  const [card, setCard] = useState([]);

  useEffect(() => {
    axios
      .get("https://backendofpixel-e8b606781a1f.herokuapp.com/posts")
      .then((res) => {
        const shuffledCard = shuffleArray(res.data);
        setCard(shuffledCard);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="grid  lg:grid-cols-2 xl:grid-cols-3 lg:grid-rows- md:grid-cols-2 z-10">
        {card.map(
          ({
            shopBanner,
            shopProfileImg,
            shopName,
            shopDesc,
            shopLink,
            createdAt,
            _id,
          }) => (
            <div key={_id}>
              <ImageCard
                _id={_id}
                image={shopBanner}
                shopProfileImg={shopProfileImg}
                shopName={shopName}
                shopDesc={shopDesc}
                shopLink={shopLink}
                createdAt={createdAt}
              />
            </div>
          )
        )}
      </div>
    </>
  );
};

export default Card;
