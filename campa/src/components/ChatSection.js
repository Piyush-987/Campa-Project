import React from 'react'
import "./ChatBox.css";
function ChatBox (){
  return(
    <div className='rightChatbox'>

      <div className='chatbox-header'>
        AI Forest Assistant 
      </div>
    
      <div className='chatbox-messsages'>

        <div className='bot-message'>         
          
          Welcome, I am your personal AI bot.Let me know what can I help you with?
              
        </div>
         

        <div className='user-message'>
          Hey, I would like to know recent about recent changes in soil condition in this particular area. Give me the important details. Provide a visual data along with that.
        </div>

        <div className='bot-message'>
          Sure. Here is the data you requested.
          <ul>
            <li>ABC</li>
            <li>XYZ</li>
          </ul>
        </div>

        <div className='user-message'>
          That's Great. Thanks
        </div>

        <div className='bot-message'>
          Can I help you with more data? Let me know and I'll create it.
        </div>

        <div className='user-message'>
          No. That's all!
        </div>

        

        </div>

        <div className='chatbox-suggestion'>
          <button>What can you do?</button>
          <button>Forest Fire Detection!</button>
        </div>

        <div className='chatbox-input'>
          <input type='text' placeholder='Your message here...'/>
          <button className='send-button'>➤</button>



      </div>  
    </div>
  )
}

export default ChatBox