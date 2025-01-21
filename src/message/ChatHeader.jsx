
import  {MoreVert} from '@mui/icons-material';
import "./messanger.css"
import { useContext } from 'react';
import { AccountContext } from '../context/AccountProvider';


const ChatHeader=()=>{
    
    const pic="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425__340.png";

    const {activeUsers,person}= useContext(AccountContext);
    // useEffect(()=>{
    //     console.log("monaaa ", person);
    // },[])
    //   console.log("person 2 2 i s", person )
    // console.log("list of active users 222 --> ", activeUsers);
        
    return (
        <div className='chatHeader'>
           <img src={pic} alt=""/>
            <div  className='chatTitleBar'>              
                <span className='userNameTitle'>{person?person.fullname:"Loading"}</span>
                <span className='onlineStatus'>{ activeUsers?.find(user=> user.userId === person.userId)? "Online ":"Offline" }</span>
            </div>

            <div className='rightContainer'>
            <MoreVert/>
            </div>
               

        </div>
    )
}

export default ChatHeader;