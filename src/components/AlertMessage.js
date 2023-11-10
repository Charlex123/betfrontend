import React, {useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
const AlertMessage = ({ variant = "info", children }) => {

  const [isAlertOpen, setIsAlertOpen] = useState(true)
  useEffect(() => {
    setTimeout(function() {
      setIsAlertOpen(!isAlertOpen);
    }, 3000)
  })
  return (
    <>
      <Alert variant={variant} style={{ fontSize: 14, position: 'absolute',left: 0,right: 0, zIndex: 99999, width: '100%', textAlign: 'center',fontFamily: 'Poppins', background: 'lightgreen', margin:'12px auto',padding: '8px 20px', color:'black', borderRadius: '120px', fontWeight:'lighter'}}>
        <strong>{children}</strong>
      </Alert>
    </>
  );
};

export default AlertMessage;
