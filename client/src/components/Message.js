import React from "react";
import { ReactDOM } from "react-dom";

const Message = (props) => {

 console.log(props);
  return (
    <>
      <center>
        <h1 className="fs-1 message-heading" >Your request has been sent to service provider.....</h1>
      </center>
    </>
  );
};

export default Message;
