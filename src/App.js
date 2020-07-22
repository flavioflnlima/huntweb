import React, { Component } from "react";
import Header from "./components/Header";

//criando componente por class
// class App extends Component{
//   render() {
//     return (
//       <div className="App">
//         <Header/>
//       </div>
//     );
//   }
// }

//criando componente por function
// function App() {
//   return (
//     <div className="App">
//       <Header/>
//     </div>
//   );
// }

//criando o componente por function menos verbosa
const App = () => (
  <div className="App">
    <Header></Header>
  </div>
);
export default App;
