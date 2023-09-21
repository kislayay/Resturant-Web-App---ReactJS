import React from 'react';
import { useState,useEffect } from 'react';
import Resturantcard from './Resturantcard';
import resObj from '../utils/mockData';
import Shimmer from './Shimmer';
const Body = () => {

    const[obj,setObj] = useState(resObj);
    const[text,setText] = useState("");
   

    const filterData = () => {
       const jrs =   resObj.filter((info) => info.averageRating > 4);
       return jrs;
         
    }

    const filterText = () => {
        
       const fun =  obj.filter((tax) => tax.name.toLowerCase().includes(text.toLowerCase()))
       return fun;
    }

   {/*
    useEffect(() => {
       fetchData();
    },[])
*/}
      
  {/*
    const fetchData = async () => {

      const data = await  fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      
      
     
      
       
         const json = await data.json();
         console.log(json);
          setObj(json.data.cards[2].card.card);
           
    }

*/}

 
  
    return obj.length === 0 ? (<Shimmer /> ): (
        <div className='body'>
            <div className='button'> 
             <button onClick={() => setObj(filterData())}>Top Rating Resturant</button>
            </div>

            <div className='search'>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                <button onClick={() => setObj(filterText())}>Search</button>
            </div>
           
           
            <div className="res-container">
      {
        obj?.map((item) => {
          return (
            <Resturantcard resData={item} />
          )
        })
      }
        
       
      </div>
        </div>
    )

}

export default Body; 