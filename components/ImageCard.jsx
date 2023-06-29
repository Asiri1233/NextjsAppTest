import { Divider } from '@chakra-ui/react';
import React from 'react';
import moment from 'moment';

const ImageCard = ({ image, shopProfileImg, shopName, shopLink, shopDesc, _id, createdAt }) => {
  return (
    <div key={_id} className="">
      <div className="mb-5 flex flex-col justify-center px-4">
        <div className="card w-[100%] max-w-[25rem] h-[100%] min-h-[42rem] max-h-[42rem] glass flex">
          <figure>
            <div
              className="w-[100%] h-[13rem] bg-cover bg-center relative bg-no-repeat hover:scale-110 duration-300 cursor-pointer"
              style={{ backgroundImage: `url(${image})` }}
            />
            {/* <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-gray-500">
              {moment(createdAt).fromNow()}
            </span> */}
          </figure>
          <div className="card-body">
            <div className="flex gap-2">
              <img className="w-[55px] h-[55px] rounded-full " src={shopProfileImg} alt="Rounded avatar" />
              <h2 className="card-title text-white font-bold">{shopName}</h2>
            </div>
            <Divider />
            <div>
              {shopDesc.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-2">{paragraph}</p>
              ))}
            </div>
            <div className="card-actions justify-end absolute bottom-0 right-0 mb-7 mr-6">
              <a href={shopLink} target="_blank" className="btn bg-transparent border border-white hover:bg-blue-400 hover:text-white">
                Visit now!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
