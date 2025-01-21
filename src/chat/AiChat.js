import React, { useState, useEffect } from 'react';
import './style.css';
import button from "./assets/send.svg"
import bot from "./assets/bot.svg";
import user from "./assets/user.svg";
import Header from '../components/Pages/Header';
import Footer from "../components/Footer";
import chatrobo from "../Images/chaigif.gif"
// import React, { useState, useEffect } from 'react';
function Loader() {
  const [text, setText] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setText(prevText => {
        const newText = prevText === '....' ? '' : prevText + '.';
        return newText;
      });
    }, 300);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <div id="loading">{text}</div>;
}
function ChatStripe({ isAi, value, uniqueId }) {
  return (
    <div className={`wrapper ${isAi && 'ai'}`}>
      <div className="chat">
        <div className="profile-user">
          <img src={isAi ? bot : user} alt={isAi ? 'bot' : 'user'} />
        </div>
        <div className="message" id={uniqueId}>
          {value}
        </div>
      </div>
    </div>
  );
}

function generateUniqueId() {
  const timestamp = Date.now();
  const randomNumber = Math.random();
  const hexadecimalString = randomNumber.toString(16);

  return `id-${timestamp}-${hexadecimalString}`;
}

function AiChat() {
  
  const [chat, setChat] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [typingResponse, setTypingResponse] = useState("");
  const [typingPosition, setTypingPosition] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const prompt = data.get('prompt');
    const uniqueId = generateUniqueId();
    setChat(prevChat => [
      ...prevChat,
      <ChatStripe key={uniqueId} isAi={false} value={prompt} />,
      <ChatStripe key={`${uniqueId}-bot`} isAi={true} value="" uniqueId={uniqueId} />
    ]);

    setIsLoading(true);
    const response = await fetch('https://codex-backend-3wci.onrender.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        prompt
      })
    });

    setIsLoading(false);

    const messageDiv = document.getElementById(uniqueId);
    if (!messageDiv) return;

    messageDiv.innerHTML = '';
    if (response.ok) {
      const { bot } = await response.json();
      const parseData = bot.trim();
      const typingDuration = Math.floor(Math.random() * (500 - 200 + 1) + 200); // generate a random duration for typing response
      setTypingResponse(parseData);
      setTypingPosition(0);
      setChat(prevChat => prevChat.map(item => {
        if (item.props.uniqueId === uniqueId) {
          return <ChatStripe key={uniqueId} isAi={true} value={typingResponse.slice(0, typingPosition)} uniqueId={uniqueId} />
        }
        return item;
      }));
      setTimeout(() => {
        setChat(prevChat => prevChat.map(item => {
          if (item.props.uniqueId === uniqueId) {
            return <ChatStripe key={uniqueId} isAi={true} value={parseData} uniqueId={uniqueId} />
          }
          return item;
        }));
      }, typingDuration);
    } else {
      const err = await response.text();
      messageDiv.innerHTML = 'Laxmikant ko bol ki AI App thik kre!!!';
      alert(err);
    }
    e.target.reset();
  };

  const handleKeyDown = (e) => {
    if (e.charCode === 13 && !e.shiftKey) {
      e.preventDefault();
      console.log(e.charCode);
      handleSubmit(e);
      document.getElementById('aichatform').dispatchEvent(new Event('submit'));
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTypingPosition(prevPosition => {
        const newPosition = prevPosition + 1;
        return newPosition;
      });
    }, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, [typingResponse]);



  return (
    <>
      <Header />
      <div className="container-complete-ai">
        <div>
        </div>
        <div id="app">
          <div style={{ fontWeight:600 }} id="chat_container">
            {chat}
            {isLoading && <Loader element={document.getElementById('loading')} />}
            <div id="loading"></div>
          </div>
          <form id="aichatform" onSubmit={handleSubmit}>
            <textarea id="aichattext" name="prompt" onChange={(e) => { setSearchText(e.target.value) }} rows="1" cols="1" placeholder="Ask you question related to construction..." onKeyPress={handleKeyDown}></textarea>
            <button id="aichatbutton" type="submit"><img src={button} alt="Send" /></button>
          </form>
        </div>
        <div className="hero-section-chat">
          <h1 style={{ fontFamily: "revert-layer", fontweight: "1000", fontSize: "50px" }}>Ask me Anything😊😎 </h1>
          <img
            src={chatrobo}
            alt="hero-section-photo"
            className="img-style"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AiChat;
