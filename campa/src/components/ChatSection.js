import React from 'react'


function
ChatBox (){
  return(
    <div className='chatbox' style={{width:'250px', height:'639px', backgroundColor:'grey'}}>

      <div className='haeder'>
        AI Forest Assistant
      </div>

      <div className='messsages'>

        <div className='bot message'>         
          Welcome, I am your personal AI bot.Let me know what can I help you with?        
        </div>

        <div className='user message'>
          Hey, I would like to know recent about recent changes in soil condition in this particular area. Give me the important details. Provide a visual data along with that.
        </div>

        <div className='bot message'>
          Sure. Here is the data you requested.
          <ul>
            <li>ABC</li>
            <li>XYZ</li>
          </ul>
        </div>

        <div className='user message'>
          That's Great. Thanks
        </div>

        <div className='bot message'>
          Can I help you with more data? <br/> Let me know and I'll create it.
        </div>




        

        
        
        
      </div>  
    </div>
  )
}

export default ChatBox