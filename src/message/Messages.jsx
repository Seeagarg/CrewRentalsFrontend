

import { useContext, useState, useEffect , useRef} from "react";
import MsgFooter from "./MsgFooter";
import {AccountContext} from "../context/AccountProvider"
import { getMessages, newMessage } from "../service/api";
import Message from "./Message";


const Messages=({conversation})=>{
    const [msg, setMsg]= useState("");

        // console.log("conversation is ", conversation)
     const [messages, setMessages]= useState([]);
    //  const[ newMessageFlag, setNewMessageFlag]= useState(false);
     const [incomingMessage, setIncomingMessage]=  useState(null)
     const scrollRef=useRef();
     const userId= JSON.parse(localStorage.getItem("user"))._id
     const {person, socket, newMessageFlag, setNewMessageFlag}= useContext(AccountContext)
        useEffect(()=>{
            const getMessageDetails= async()=>{
               let data =await getMessages(conversation._id);
                // console.log("messages are ", data);
                setMessages(data);
            }
           conversation?._id && getMessageDetails()
        },[person._id, conversation?._id, newMessageFlag, incomingMessage])
           
        // useEffect(()=>{
        //      console.log("get message from socket is called");
        //         socket.current.on('getMessage', data=>{ 
        //                console.log("data io to  is ", data)
        //               console.log("incoming message is ", data)
        //                 setIncomingMessage({ ...data, createdAt:Date.now()})
        //         })
        //     },[])
        
        useEffect(() => {
            socket.current.on('getMessage', data => {
              setIncomingMessage({ ...data, createdAt: Date.now() });
            });
        
            // Add this code to receive messages through the WebSocket
            // socket.current.on('receiveMessage', message => {
            //   setMessages(prevMessages => [...prevMessages, message]);
            // });
          }, []);
 
            useEffect(()=>{
                //    console.log("new incoming message is ",incomingMessage);
                    incomingMessage && conversation?.members?.includes(incomingMessage.senderId) && setMessages(prev=>[...prev, incomingMessage])
            },[incomingMessage,conversation])
        
            // useEffect(()=>{
            //         scrollRef.current?.scrollIntoView({transition:'smooth'})
            // },[messages])

            
            const myDivRef = useRef(null);
            useEffect(() => {
              myDivRef.current.scrollTop = myDivRef.current.scrollHeight;
            }, [messages]);


     const handleClickMsg= async(e)=>
     {
        let message={
            senderId:userId,
            receiverId:person._id,
            conversationId:conversation?._id,
            type:'text',
            text:msg
        }
        // console.log("message is ", message)
         socket.current.emit('sendMessage',message);
         await newMessage(message);
         setMsg('');
         setNewMessageFlag(prev=>!prev)

     }       


    const sendText= async(e)=>{
            const code=e.keyCode || e.which
            // console.log("person is ", person)
            if(code===13){
                let message={
                    senderId:userId,
                    receiverId:person._id,
                    conversationId:conversation?._id,
                    type:'text',
                    text:msg
                }
                // console.log("message is ", message)
                 socket.current.emit('sendMessage',message);
                 await newMessage(message);
                 setMsg('');
                 setNewMessageFlag(prev=>!prev)
            }
    }
    return (
        <div className="msgWrapper" > 
            <div  className="msgComponent" ref={myDivRef}   style={{ overflowY: 'scroll' }}>
                {
                    messages && messages.map( message =>(
                          <div className="msgContainer" key={message._id}  ref={scrollRef}>
                          <Message  message={message}/> 
                          </div>    
                    ))
                }
            </div>
            <MsgFooter  sendText={sendText} setMsg={setMsg} msg={msg} handleClickMsg={handleClickMsg}   />
        </div>
    )
}
export default Messages;