import React, { Component} from "react";
import { connect } from "react-redux";
import { InputGroup, Button } from "reactstrap";  
import {enviaMensagem} from './../../store/actions/chat'

class ChatMenssagem extends Component{
    constructor (props){
        super(props) 

        this.inputBuscaTexto = this.inputBuscaTexto.bind(this)

    }

    //inputEnviaTexto(e){
      //  if(e.keycode === 13){
        //    console.log(e.target.value)
        //}
    //}

    inputBuscaTexto(e){
        if(e.keyCode ===13){
            console.log(e.target.value)
            this.props.enviaTexto(e.target.value)
            e.target.value = ''
        }
        
    }

    render(){
        
    return(
        <div className="chat-Menssagem">            
            <InputGroup>            
            <input type="text" placeholder="Busca" onKeyDown={(e) => this.inputBuscaTexto(e)}/><Button color="success"> Enviar</Button>           
            </InputGroup>
        </div>
    )

    }    

}

const mapdispatchtoProps = (dispatch) =>{
    return{
        enviaTexto: (msg) => dispatch(enviaMensagem(msg))
    }

}


export default connect(null, mapdispatchtoProps)(ChatMenssagem) 