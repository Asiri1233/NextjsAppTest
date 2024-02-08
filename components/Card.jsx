"use client";
import React, { useState, useEffect } from "react";
import ImageCard from "./ImageCard";
import axios from "axios";
import moment from "moment";
import { Divider } from "@chakra-ui/react";

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
      .get("https://pixelbackend.onrender.com/posts")
      .then((res) => {
        const shuffledCard = shuffleArray(res.data);
        setCard(shuffledCard);
      })
      .catch((err) => console.log(err));
  }, []);

  const staticCard = {
    shopBanner: "https://i.imgur.com/y8lOM4d.jpg",
    shopProfileImg: "https://i.imgur.com/I1vvzGr.jpeg",
    shopName: "MemeShop",
    shopDesc: `✅ Are you looking for high-quality accounts and fast and friendly support? You are in the right place.

    ✅ We sell NFA/FA products, and we do lots of drops and giveaways in our channel. I can guarantee that you won't be disappointed with our service.
    
    ✅ Shop link: memeshop.cc
    ✅ Channel link: https://t.me/memeshopback
    ✅ Chat link: https://t.me/memeshopchat
    ✅ Support: @memeplugsupport`,
    shopLink: "http://memeshop.cc/",
  };

  return (
    <>
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 lg:grid-rows- md:grid-cols-2 z-10">
        <div>
          <ImageCard
            _id="static-card"
            image={staticCard.shopBanner}
            shopProfileImg={staticCard.shopProfileImg}
            shopName={staticCard.shopName}
            shopDesc={staticCard.shopDesc}
            shopLink={staticCard.shopLink}
            createdAt={moment().toISOString()}
          />
        </div>
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
