import "./messanger.css";
import { useContext } from "react";
import { formatDate } from "../utils/common-utils";
import { AccountContext } from "../context/AccountProvider";
const Message=({message})=>{

    const {user}= useContext(AccountContext)

    return (
    <>
        {
        user._id  ===  message.senderId? 
        <div className="own">
             <p className="msgText">
                {message.text}
             </p>
             <p className="msgTime">
             { formatDate(message.createdAt)}
             </p>
        </div>
        :  <div className="msgWrapperOther">
            <p className="msgText">
                 {message.text}
                    </p>
                <p className="msgTime">
                { formatDate(message.createdAt)}
            </p> 
            </div>
}
        </>
    )
}

export default Message;