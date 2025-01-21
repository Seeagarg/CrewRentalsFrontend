import Header from "../components/Pages/Header";
import Footer from "../components/Footer";
import Messanger from "./Messanger";
import { useContext, useEffect } from "react";
import { getConversations } from "../service/api";
import { AccountContext } from "../context/AccountProvider";

const ChatDialog=()=>{

    const {setUser,conversations,setConversations,user, setActiveUsers, socket}= useContext(AccountContext)

    useEffect(()=>{
        setGetConversations();
    },[]);
    useEffect(()=>{
          console.log("user for socket is ", user);
       socket.current?.emit('addUsers',user)
        socket.current?.on("getUsers", users=> {
            console.log("list of active users from backend --> ", users);
            setActiveUsers(users);
        })
},[user])

    const setGetConversations= async()=>{
        let res = await getConversations(JSON.parse(localStorage.getItem("user"))._id);
        res=Object.values(res)
        console.log("res33 is ",res);
        setConversations(res);
    }


    return (
        <>
         <Header/>
            <Messanger/>
            <Footer/>
        </>
    )
}

export default ChatDialog;