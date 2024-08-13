// // // const parent= React.createElement("div",
// // //    {id:"parent"},
// // //     React.createElement("div", {id:"child"},
// // //        [React.createElement("h1", {}, "I am a h1 tag"), React.createElement("h2", {}, "I am a h2 tag")]));
// // //        console.log(parent);
// //        const heading=React.createElement("h1", {id:"heading"}, "hello world from react inside it.")
// //        console.log(heading);  // react element(object);
// //          const root1= ReactDOM.createRoot(document.getElementById("root"));
// //          root1.render(heading);

// import React from "react";
// import ReactDOM from "react-dom/client"

// // ract element

// const heading = React.createElement("h1", {id: "heading"}, "I am deepak kumar");

// // react component
// const HeadingComponent =()=>(
  
//    <h1> Namaste react functional component </h1>
   
  
// )
  
// const jsxHeading=<h1 id="heading"> Nmaste using React using JSX</h1>;
// const root= ReactDOM. createRoot(document.getElementById("root"));
// root.render(<HeadingComponent/>);


// Headers
// logo 
// nav items 

// body 
// - search 
// - restaurent Container
// -restaurantcard
//-image
//-name
//-star rating, cusines, delivery time
// footer
// -copyright
// -links
// -address
// contact

import React from "react";
import ReactDOM from "react-dom/client"

const Header=()=>{
  return (
    <div className="header">
      <div className="logo">
        <img src="https://pbs.twimg.com/profile_images/1382744658137128962/5bpJUdv-_400x400.jpg"/>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

const RestaurentCard=(props)=>{
  const{resData}=props;
  
  return (
    <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
    <img className="res-logo" 
    alt="res-logo"
    src="https://pbs.twimg.com/profile_images/1382744658137128962/5bpJUdv-_400x400.jpg"
    />
    
      <h3>{props.resName}</h3>
      <h4>Biryani</h4>
      <h4>4.4 stars</h4>
      <h4>38 mins</h4>

    </div>
  )
}

const Body=()=>{
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {
          resList.map((restaurent)=>(<RestaurentCard  key= {restaurant.data.id} resData={restaurent}/>))
        }
       

      </div>

    </div>
  )
}

const AppLayout=()=>{
  return(
   <div className="app">
    {/* // Header
    // bofy
    // foooter */}
    <Header />
    <Body/>

   </div>
  )
}


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)
 