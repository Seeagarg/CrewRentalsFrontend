import { useContext, useEffect, useState } from "react";
import { getConversations } from "../service/api";
import Conversation from "./Conversation";
import { AccountContext } from "../context/AccountProvider";

const Conversations=()=>{
    const {user,conversations, socket, setActiveUsers ,searchText}= useContext(AccountContext)

    // console.log[("conversatins uiuui---> ",conversations)
 

    useEffect(()=>{
            //   console.log("conversations --> user for socket is ", user);
           socket.current?.emit('addUsers',user)
            socket.current?.on("getUsers", users=> {
                // console.log("list of active users from backend --> ", users);
                setActiveUsers(users);
            })
    },[user])
    // console.log("all friends are ", conversations)
    return (
        <div className="conversations">
         {
            conversations.map(conv=>(
                conv.members[1] && <Conversation key={conv.members[1]} id={conv.members[1]}/>
            ))
         }
               </div>
    )
};

export default Conversations;