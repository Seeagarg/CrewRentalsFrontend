
import { useContext, useEffect, useState } from "react"
import "./messanger.css"
import { getConversation, getWorkerData,  getUser } from "../service/api";
import { AccountContext } from "../context/AccountProvider";
import { formatDate } from "../utils/common-utils";



const Conversation= ({id})=>{
  // console.log("convo  id is ", id)
    const [user, setUser]= useState();
    const [message, setMessage]= useState({});
    const {person, setPerson,newMessageFlag, searchText, setSearchText,setNewMessageFlag, text,setConversations}=  useContext(AccountContext)
     useEffect(()=>{
       getData();
       console.log("search text length is ", searchText.length)
     },[searchText])
     useEffect(()=>{
      const getConversationDetails= async()=>{
       const data= await getConversation({
          senderId:JSON.parse(localStorage.getItem("user"))._id,
          receiverId:id
        })
        setMessage({text:data?.message, timestamp:data?.updatedAt})
      }
      getConversationDetails();
     },[newMessageFlag])




     const getData=async()=>{
      // console.log("id 4545 is ", id);
      const res=await  getUser(id);
      if(res){
      //  console.log("response is ",res)
        setUser(res);
      }
      // console.log("user is ", user);
     }
  
    const pic="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425__340.png"

     const handleClick=()=>{
           setPerson(user);
          //  console.log("person data is ", person);
     }
    return (

     
        
        <div className="conversationUsers" onClick={handleClick}>
          {/* <div> */}
            {/* <img src={user?user.profilePic:pic} alt="dp" className="bg-dark m-1" style={{height:"10vh",width:"10vh",borderRadius:"50%"}} /> */}
          {/* </div> */}

           <div style={{width:"100%"}}>
            <div style={{display:"flex"}}>
                <p className="fs-4 fw-bold mb-0 mt-3" >
                    {user ?user.fullname : "Loading"}
                </p>
                {
                  message?.text && 
                    <p style={{fontSize:"18px", marginLeft:"auto", marginRight:"10px"}}> {formatDate(message?.timestamp)} </p>
                }
            </div>
            <div>
              <p className="conversationMsg">
                {
                  message?.text
                }
              </p>
            </div>
          </div>          
        </div>
    )
}
export default Conversation;