import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [socket, setSocket] = useState();
  const inputRef = useRef();

  function sendMessage() {
    const message = inputRef.current.value;
    // @ts-ignore
    socket.send(message);
  }

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8000");
    setSocket(ws);

    ws.addEventListener("error", (event) => {
      console.log(event);
    });

    ws.addEventListener("message", (event) => {
      alert(event.data);
    });
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="message..." />
      <button onClick={sendMessage}>send</button>
    </div>
  );
}

export default App;
