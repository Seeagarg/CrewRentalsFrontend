
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { useState } from 'react';
// import ScheduleSendIcon from '@mui/icons-material/ScheduleSend';
import SendIcon from '@mui/icons-material/Send';

const MsgFooter=({sendText, setMsg, msg, handleClickMsg})=>{

   
    const handleClick=()=>{
        console.log("msg is ", msg)
        handleClickMsg(msg)
    }
    return (
        <div className='msgFooterArea'>
            <div  className='inputArea'>
            <input type="text" value={msg} onChange={(e)=>{
                setMsg(e.target.value) }}  onKeyPress={(e)=>sendText(e)} placeholder='Write a message...'/>
            <label htmlFor="fileInput">
            <AttachFileIcon />
            </label>
            <input type="file" id='fileInput' style={{display:"none"}} />
            </div>
            <button className='msgFooterBtn' ><SendIcon fontSize='large' onClick={handleClick} style={{color:"#041a0f"}}/></button>
           
        </div>
    )
}

export default MsgFooter;