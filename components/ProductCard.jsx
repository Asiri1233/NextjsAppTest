import React from "react";
// w-[280px] h-[230px] md:w-[320px] md:h-[280px] hover:scale-105 duration-300 flex flex-col shadow-md border border-white rounded-lg items-center justify-center glass
const ProductCard = ({ title, price, duration, hide , cut , image , dkey ,dprecent}) => {
  return (
    <div className="">
      <div className="">
        <div></div>
        <div className="group border-gray-100/30 flex w-full max-w-[40rem] flex-col self-center overflow-hidden rounded-lg border bg-gray-700 shadow-md">
          <a
            className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
            href="#"
          >
            <img
              className="peer absolute top-0 right-0 h-full w-full object-cover"
              src={image}
              alt="product image"
            />
            <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
              {dprecent}% OFF
            </span>
          </a>
          <div className="mt-4 px-5 pb-5">
            <a href="#">
              <h5 className="text-xl tracking-tight text-white">
                {title}
              </h5>
            </a>
            <div className="mt-2 mb-5 flex items-center justify-between">
              <p className="">
                <span className="text-3xl font-bold text-white">${price}</span>
                <span className="text-sm text-white line-through">${cut}</span>
              </p>
            </div>
            <div className="flex flex-row items-center w-[100%] justify-center">
            <button
              data-sellix-product={dkey}
              data-sellix-css="https://cdn.sellix.io/static/css/custom-embed-styles.css"
               type="submit"
               alt="Buy Now with sellix.io"
           
              className="hover:border-white/40 flex items-center justify-center rounded-md border border-transparent bg-purple-600 hover:bg-purple-900/90  px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-blue-300"
            >
              <svg className="mr-5 " fill="none" height="20" viewBox="0 0 71 20" width="71" xmlns="http://www.w3.org/2000/svg"><path d="M5.29468 5.37022L10.8052 3.53059L10.4343 5.09783C10.912 5.21098 11.4317 5.36184 12.0057 5.56717C13.2797 6.02184 14.4341 6.54984 15.4713 7.14908L17.7635 2.31954C16.6719 1.62811 15.3854 1.07287 13.9019 0.655917C12.4185 0.236868 10.933 0.0273438 9.44117 0.0273438C7.80478 0.0273438 6.36745 0.282964 5.12916 0.792108C3.89087 1.30125 2.93753 2.03459 2.26496 2.98792C1.59239 3.94545 1.25505 5.06012 1.25505 6.33193C1.25505 7.64146 1.58191 8.68699 2.23772 9.47061C2.89144 10.2521 3.66877 10.8304 4.56973 11.2034C5.47068 11.5763 6.59373 11.9346 7.93888 12.2803C8.30136 12.3704 8.62193 12.4563 8.92155 12.5443L9.27774 11.0379L13.5583 14.4091L8.04993 16.2487L8.34536 14.9958C7.63716 14.8533 6.85564 14.6186 5.97564 14.2603C4.52154 13.6674 3.31049 12.9529 2.34667 12.1169L0 16.892C1.25505 17.8558 2.74267 18.6143 4.46287 19.1695C6.18097 19.7247 7.8865 20.0013 9.57736 20.0013C11.0692 20.0013 12.4248 19.7729 13.6442 19.3183C14.8637 18.8636 15.8317 18.168 16.5503 17.2314C17.269 16.2948 17.6294 15.1361 17.6294 13.7533C17.6294 12.406 17.292 11.3207 16.6195 10.4931C15.9469 9.66547 15.1591 9.05994 14.2581 8.67861C13.3572 8.29727 12.2257 7.91384 10.8617 7.53251C10.516 7.44032 10.2122 7.35232 9.92517 7.26641L9.57526 8.74146L5.29468 5.37022Z" fill="#121417"></path><path d="M25.5395 6.13672C21.2841 6.13672 18.3633 9.21882 18.3633 13.0405C18.3633 17.3798 21.5816 19.9716 25.7029 19.9716C27.6662 19.9716 30.0149 19.4541 31.3245 18.3331L29.3046 15.3055C28.6509 15.8775 27.0124 16.2337 26.2749 16.2337C24.6658 16.2337 23.7103 15.4145 23.438 14.5701H32.3867V13.5602C32.3888 8.9192 29.4136 6.13672 25.5395 6.13672ZM23.3835 11.4565C23.5469 10.8573 24.0372 9.87463 25.5374 9.87463C27.1214 9.87463 27.5844 10.8845 27.7206 11.4565H23.3835Z" fill="#121417"></path><path d="M38.9894 1.44531H34.0781V19.6446H38.9894V1.44531Z" fill="#121417"></path><path d="M46.63 1.44531H41.7188V19.6446H46.63V1.44531Z" fill="#121417"></path><path d="M54.2706 6.46875H49.3594V19.6478H54.2706V6.46875Z" fill="#121417"></path><path d="M51.8159 0C50.2885 0 49.0586 1.22781 49.0586 2.75525C49.0586 4.28268 50.2864 5.51259 51.8159 5.51259C53.3434 5.51259 54.5712 4.28477 54.5712 2.75525C54.5712 1.22781 53.3434 0 51.8159 0Z" fill="#121417"></path><path d="M65.8414 12.8802L69.8789 6.46875H64.5046L62.7299 9.55295L60.9574 6.46875H55.581L59.6206 12.8802L55.3086 19.6478H60.6557L62.7572 16.1551L64.8042 19.6478H70.1785L65.8414 12.8802Z" fill="#121417"></path></svg>
             Sellix Pay &nbsp; &nbsp; &nbsp; 
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
