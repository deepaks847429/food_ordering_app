->CDN-content delivery network and add cdn at the end of the project.
-> most costly thing in frontend is of manupulaTING  dom and react does in  very optimize way.
-> order of our file matters and they are always in the sequence.
->library(it can be used anywhere in footer, header it work independently) vs framework

-> npm- it manages packages.

what is bundler?
-> webpack, vite.
-> it bundles our app so that it can be sent to production.

^ -> automatically update it's minor version.
~ ->automatically update it's major version.
package-lock json- keeps the track of exact version of our dependencies.

Transitive dependncy-> one dependency dependent on other dependency is known as transitive dependency.

-> npx - it means executing our package and for installation we use npm.


# parcel
-> dev build
-> local server
-> HMR- hot module replacment, making live changes.
-> file watching algorthim written in c++.
-> caching-> (.parcel-cache)faster builts.
-> image optimization 
-> minification
-> bundling
-> compressing
-> consistant hasing
-> code splitting
-> diffrential bundling - support older browser
-> Daignostic
-> better error handling
-> we can host on https using parcel
-> tree shaking -> remove unused code for you.
-> differnt build for dev and prod buildes
-> for build use command npx parcel build index.html
-> browserList


# component
-> class based component
-> functional based component

# props
- normal arguments to a function. it is a object.
-config driven ui(data can be different for different place for mumabai, delhi, pune).

# commented-part
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


import and exports

# react hooks
Normal js utility functions.
- two very important hooks
-useState() - superpowerful state variables
-useEffect()
- when a state variable changes react re-renders automatically.



