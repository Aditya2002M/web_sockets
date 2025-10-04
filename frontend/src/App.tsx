/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useRef, useState } from 'react'

import './App.css'

function App() {

  const [socket, setSocket] = useState();
  const inputref = useRef();

  function sendMessage(){
    if (!socket) {
      return;
    }
    const message = inputref.current.value;
    // @ts-ignore
    socket.send(message);
  }
  

  useEffect(()=>{
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);

    ws.onmessage =(ev)=>{
      alert(ev.data)
    }
   
  },[])

  return (
    <>
     <div>
      <input ref={inputref} type="text"  placeholder='messages..' />
      <button onClick={sendMessage}>send</button>
     </div>
    </>
  )
}

export default App
