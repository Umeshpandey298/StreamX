import React from "react";
import { useSelector } from "react-redux";

const BannerHome = () => {
  const bannerData = useSelector((state) => state.movieoData.bannerData);
  console.log("banner home", bannerData);
  return (
    <div>
      bannerHome
      <div>
        {bannerData.map((data, index) => {
          return <div></div>;
        })}
      </div>
    </div>
  );
};

export default BannerHome;
