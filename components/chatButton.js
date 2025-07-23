// components/ChatButton.js
'use client';
import {  useCallback, useState } from 'react';
import { MessageSquare, X } from 'lucide-react';

export default function ChatButton() {
  const [message ,  setMessage ] = useState("") ;
  const [isOpen, setIsOpen] = useState(false);
  const [messageArr ,  setMessageArr] = useState(
    [
      {text:"كيفك حبيب شو الأخبار كيف فينا نساعدك اليوم؟", time: GetMessageTimeNow(), server: true}, 
    {text: "أهلا بالغالي كيفك انت بدي منك تساعدني بحمل هالغراض" , time: GetMessageTimeNow(),  server:false }
    ]
  )




  function addMessage(who){
    
    setMessageArr([...messageArr,  {text : message , time: GetMessageTimeNow() , server: who?false:true}])
    
    setMessage("");
  }
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all duration-300 ${
          isOpen ? 'bg-red-500' : 'bg-blue-600 hover:bg-blue-700'
        }`}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <MessageSquare className="h-6 w-6 text-white" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 h-96 bg-white rounded-lg shadow-xl overflow-hidden flex flex-col">
          {/* Chat Header */}
          <div className="bg-blue-600 text-white p-3 flex justify-between items-center">
            <h3 className="font-medium">Chat Support</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-blue-700"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Chat Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto">
            
           {
            
            messageArr.map((m ,i) =>{
              
              if (m.server)
              return   <Message key={i} server text={m.text}  time={m.time} />
              else
              return   <Message key={i} text={m.text} time={m.time} />
            })
           }
        
          </div>

          {/* Chat Input */}
          <div className="border-t p-3">
            <div className="flex gap-2">
              <input
                value={message}
                onChange={e=>setMessage(e.target.value)}
                type="text"
                placeholder="Type your message..."
                className="flex-1 border rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700"
              onClick={()=> addMessage(1)}
              
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


function Message ({server , text , time}){

  const side = server? "start" : "end"; 
  const color = server? "bg-gray-100" : "bg-[#78C487]/40"
  return (
      
      <div className="space-y-3 mb-2">
        <div className={`flex justify-${side}`}>
          <div className={`${color} rounded-lg p-3 max-w-[70%] `}>
            <p className="text-sm">{text}</p>
            <p className='text-xs text-gray-600'>{time}</p>
          </div>
        </div>
      </div>
        

  )
}


function GetMessageTimeNow() {
  const now = new Date();
  
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  
  // Convert to 12-hour format
  hours = hours % 12;
  // The hour '0' should be '12'
  hours = hours ? hours : 12;
  
  // Add leading zero to minutes if needed
  const minutesStr = minutes < 10 ? '0' + minutes : minutes;
  
  return `${hours}:${minutesStr} ${ampm}`;
}