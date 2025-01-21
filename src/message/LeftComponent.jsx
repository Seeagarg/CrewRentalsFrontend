import { useContext } from "react";
import "./messanger.css";
import { AccountContext } from "../context/AccountProvider";
import SearchIcon from "@mui/icons-material/Search";

import Conversations from "./Conversations";
import { useState } from "react";

const LeftComponent = () => {
  const { user, setText ,searchText, setSearchText } = useContext(AccountContext);

  const profilePic ="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425__340.png";
  const searchicon = <SearchIcon fontSize="large" />;
  //  console.log("search text is ", searchText)
  return (
    <div className="leftComponent">
      <div className="messageTitleBar p-3">
        <img
          src={profilePic}
          alt="profile pic"
          className="bg-light"
          style={{ borderRadius: "50%" }}
        />
        <p className="userName align-text-bottom fs-3 mb-0 ms-2 ">
          {" "}
          {user ? user.fullname.split(" ")[0] : "loading"}{" "}
        </p>
        <div className=" row searchBar ms-2">
        <div className="col">
        <input
            type="text"
            placeholder="Search"
            style={{ height: "5vh", width: "100%" }}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <div className="col text-end">
        <SearchIcon fontSize="large" />
        </div>
         
        </div>
      </div>
      <Conversations />
    </div>
  );
};

export default LeftComponent;
