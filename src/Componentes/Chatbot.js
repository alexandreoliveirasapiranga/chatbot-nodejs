import './Chat/chat.css'
import React, {Component} from 'react'

import ChatHeader from './Chat/ChatHeader'
import ChatConversa from './Chat/ChatConversa'
import ChatMenssagem from './Chat/ChatMenssagem'


class Chatbot extends Component {

    render(){
        return(
            <div className="chatbot">                                      
                    <ChatHeader/>
                    <ChatConversa/>
                    <ChatMenssagem/>                 
                </div>
            
             
           
        )

    }

}
export default Chatbot

