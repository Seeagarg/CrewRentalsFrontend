import emptyChat from "../Images/Co-workers-rafiki.png";

const EmptyChat=()=>{
    return (
        <div className="emptyChat">
            <div className="emptyChatTitle">Chat here! <br /> Look for new Opportunities </div>
            <div className="imageContainer">
            <img src={emptyChat} alt="no chat " /> </div>
        </div>
    )
}

export default EmptyChat;