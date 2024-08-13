/***
 * nested element in react
 * 
 * 
 * reactElement(object)=>HTML(Browser understands)
 * to give more than one siblings we can pass array of children like this.
 * [React.createElement("h1", {}, "I am a h1 tag"), React.createElement("h2", {}, "I am a h2 tag")]
 */

const parent= React.createElement("div",
   {id:"parent"},
    React.createElement("div", {id:"child"},
       [React.createElement("h1", {}, "I am a h1 tag"), React.createElement("h2", {}, "I am a h2 tag")]));
       console.log(parent);

       //





const heading=React.createElement("h1", {id:"heading"}, "hello world from react inside it.")
console.log(heading);  // react element(object);
  const root1= ReactDOM.createRoot(document.getElementById("root1"));
  root1.render(heading);