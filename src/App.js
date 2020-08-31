import React, { Component } from "react";
import Routes from './routes';

import './styles.css'

import Header from "./components/Header";
import Main from './pages/main';

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
    <Header/>
    <Routes/>
  </div>
);

export default App;
