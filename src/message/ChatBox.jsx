
import { useEffect, useState } from "react";
import chatImg from "../Images/chatImg.jpg"
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";
import { AccountContext } from "../context/AccountProvider";
import { useContext } from "react";
import { getConversation } from "../service/api";

const ChatBox=()=>{

    const {user, person}= useContext(AccountContext)

    const [conversation, setConversation]= useState({})
    
    // console.log("person is ", person)
    // console.log("user is ", user);
     useEffect(()=>{
        const getConversationDetails= async()=>{
            let data=   await getConversation({senderId:user._id, receiverId:person?._id});
            setConversation(data);
        }
        getConversationDetails()
     },[person._id])


    //  useEffect(()=>{
    //         new WebSocket('ws://localhost:8000')
    //  },[])   


    return (
        <div style={{height:'70vh'}}>
            <ChatHeader/>
           <Messages   conversation={conversation} />
        </div>
    )
}

export default ChatBox;