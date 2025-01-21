import { createContext, useEffect, useState, useRef } from "react";
import {io} from "socket.io-client";


export const AccountContext= createContext(null);
const URL="http://localhost:8000"
// const URL="https://rentalapi2.onrender.com"


const AccountProvider = ({children}) => {
    const [profile, setProfile] = useState({
        name:"anshu"
    });
    const [person, setPerson]= useState();
    const [account , setAccount]= useState()
    const [user,setUser]=useState(JSON.parse(localStorage.getItem("user")))
    const [profilePicUrl, setProfilePicUrl]=useState('');
     const [conversations, setConversations]= useState([]);
     const [activeUsers, setActiveUsers]= useState([])
     const[ newMessageFlag, setNewMessageFlag]= useState(false);

     const [searchText,setSearchText]=useState("");

     const socket=useRef();
     useEffect(()=>{
        socket.current=io('ws://localhost:8000')
        // socket=io.connect("http://localhost:/8000")
        // socket.current=io('https://rentalapi2.onrender.com')
     },[])

    


    return (
        <AccountContext.Provider value={{
            account,
            setAccount,
            profile,
            user,
            setUser,
            setProfile,
            profilePicUrl,
            setProfilePicUrl,
            conversations,
            setConversations,
            person,
            setPerson,
            socket,
            setActiveUsers,
            activeUsers,
            newMessageFlag,
            setNewMessageFlag,
            searchText,
            setSearchText
        }}>
            {children}
        </AccountContext.Provider>
    )
}

export default AccountProvider;