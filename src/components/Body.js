import RestaurantCard from "./RestaurantCard";
import React from "react";
import { useState } from "react";

const Body=()=>{
// super powerful varable- hooks

const [listOfRestaurents, setlistOfRestaurents]=useState([]);




// const listOfRestaurents=[
//   {
//     name: "deepak"
//   }
// ];



  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={()=>{
          
          const filteredList=listOfRestaurents.filter(
            (res)=>res.data.avgRating>4
          );
          setlistOfRestaurents(filteredList);
        }}>Top Rated restaurant</button>
      </div>
      <div className="res-container">
        {
          listOfRestaurents.map((restaurent)=>(<RestaurantCard  key= {restaurant.data.id} resData={restaurant}/>))
        }
       

      </div>

    </div>
  )
}

export default Body;