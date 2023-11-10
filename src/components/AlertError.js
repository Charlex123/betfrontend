import React, {useState} from "react";
import { Alert } from "react-bootstrap";

const AlertMessage = ({ variant = "info", children }) => {


  return (
    <>
      <Alert variant={variant} style={{ fontSize: 14, position: 'absolute',left: 0,right: 0, zIndex: 99999, width: '100%', textAlign: 'center',fontFamily: 'Poppins', background: 'red', margin:'12px auto',padding: '8px 20px', color:'white', borderRadius: '120px', fontWeight:'lighter'}}>
        <strong>{children}</strong>
      </Alert>
    </>
  );
};

export default AlertMessage;
