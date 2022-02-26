import React, { Component } from "react";
import { Alert, Badge } from "reactstrap";
import { connect} from 'react-redux'
class ChatConversa extends Component {

    renderMensagens(msg,autor){
    return(
        <div>
            {
            autor == 'user' && <span> 
                <Badge color="primary"> Você disse:</Badge>                            
                <Alert color="primary"> {msg}</Alert>            
            </span>
            }
            {
            autor == 'chatbot' && <span> 
                <Badge color="warning"> chatbot disse:</Badge>                 
                <Alert color="warning"> {msg}</Alert>            
            </span>
            }        
     </div>
    )

    }
    render(){
    return(
        <div className="chat-convesa">
                {
                    this.props.mensagens.map(Key => {
                        return this.renderMensagens(Key, 'user')
                    }
        )}

        </div>

    )
    }
}

const mapStateToProps =(state) => {
    return{
        mensagens: state.chat.mensagens
    }
}

export default connect(mapStateToProps, null) (ChatConversa)


