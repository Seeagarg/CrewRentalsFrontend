
import "./messanger.css"
import EmptyChat from "./EmptyChat";
import ChatBox from "./ChatBox";
import { useContext } from "react";
import { AccountContext } from "../context/AccountProvider";



const RightComponent =()=>{
    const profilePic="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425__340.png"
    const {person}= useContext(AccountContext)
    console.log("person initially is ", person?.userId)

    return (
        <div className="rightComponent">      
          {
             person? 
             <ChatBox/>
              : 
              <EmptyChat/> 
           } 
        </div>
    )
}

export default RightComponent;