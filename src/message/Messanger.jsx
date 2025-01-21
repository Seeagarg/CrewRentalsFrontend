import "./messanger.css"
import LeftComponent from "./LeftComponent";
import RightComponent from "./RightComponent";

const Messanger =()=>{
    return (
        <div className="messageContainer">
           <LeftComponent/>
           <RightComponent/>
        </div>
    )
}

export  default Messanger;