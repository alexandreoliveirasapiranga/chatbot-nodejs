import React, { Component } from 'react'; 
import './App.css';
import { Provider } from 'react-redux'

import store from './store'; 

//import { render } from '@testing-library/react';
import Header from './Componentes/Header';
import Home from './Componentes/Homer';
import Chatbot from './Componentes/Chatbot';
import Footer from './Componentes/Footer';
//import ChatConversa from './Componentes/Chat/ChatHeader';

class App  extends Component{  
  render(){
    return (    
    <Provider store={store}>
    <div className="conteudo">                      
        <Header/>  
        <Home/> 
        <Chatbot/>           
        <Footer/> 
    </div>
    </Provider>
   
  );
}

}

export default App
