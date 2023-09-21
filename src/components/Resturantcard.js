import React from 'react';
import { CDN_URL } from '../utils/constant';

const Resturantcard = (props) => {
    const {resData} = props;
    const{Imgid,name,cusine,averageRating,price} = resData;
    return (
       <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
        <img src={ CDN_URL + Imgid} className="res-logo" />
              <h3>{name}</h3>
         <h4>{cusine}</h4>
         <h4>{averageRating}</h4>
         <h4>${price}</h4>
         
       </div>
    )
  }

export default Resturantcard;