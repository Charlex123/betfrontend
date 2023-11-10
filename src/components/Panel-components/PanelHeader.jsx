import React, {useState, useEffect} from "react";
import logo from "../../assets/images/logo-cropped-orange.png";

const PanelHeader = ()=> {
  const [udetails,setUdetails] = useState("")
  const [username,setUsername] = useState("")
  const [PBU,setPBU] = useState(0.00)
  
  useEffect(() => {
    if(localStorage.getItem("userInfo") !== null) {
      setUdetails(localStorage.getItem("userInfo"));
      setUsername(JSON.parse(localStorage.getItem("userInfo")).username)
      const pbu_ = JSON.parse(localStorage.getItem("userInfo")).PBU;
      const pbun = pbu_ + ".00"
      setPBU(pbun)
    }

  },[udetails,username,PBU])
  console.log('u det', udetails)
  return(
    <div className=" w-full bg-[#1e1e1e] px-4 lg:px-40 h-[74px] flex justify-center">
      <div className=" flex justify-between items-center w-full">
        <div>
          <img src={logo} alt=" logo" className=" w-24" />
        </div>
        <div className=" flex items-center gap-4 text-white font-small text-base">
          <div style={{fontSize: '12px',fontWeight: 'bold',textTransform: 'capitalize',backgroundColor: 'orangered',padding: '3px 6px',borderRadius:'4px'}}>{username}</div>
          <div style={{color: 'orange',fontWeight: '600',fontSize: '16px'}}>PBU: {PBU}</div>
        </div>
      </div>
    </div>
  )
}

export default PanelHeader