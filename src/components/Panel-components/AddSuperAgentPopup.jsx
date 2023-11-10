import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faClose } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios'
import AlertMessage from '../AlertMessage';
import AlertError from '../AlertError';
import Loading from '../Loading'

const AddSuperAgentPopup = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [userCommission, setUserCommission] = useState('');
  const [agentCommission, setAgentCommission] = useState('');
  const maxAgentCommission = 3;

  const [email, setEmail] = useState("");
  const [username, setUserame] = useState("");
  const [pic, setPic] = useState(
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
  );
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(false);
  const [messagecontent, setMessageContent] = useState("");
  const [error, setError] = useState(false);
  const [userreferrence, setUserReferrence] = useState("");
  const [userType] = useState("SuperAgent");
  const [tpin, setTPin] = useState(1234);
  const [PBU, setPBU] = useState(0);
  const [loading, setLoading] = useState(false);
  const [status] = useState("Inactive");
  const [phonenumber, setPhonenumber] = useState("");
  const [timezone, setTimeZone] = useState("Pacific/Midway");
  const [passwordinputType, setpasswordinputType] = useState("password");

  const [udetails,setUdetails] = useState("")
  const [upline,setUpline] = useState("")
  const [uplineUserType] = useState("Admin");

  useEffect(() => {
    if(localStorage.getItem("userInfo") !== null) {
      setUdetails(localStorage.getItem("userInfo"));
      setUpline(JSON.parse(localStorage.getItem("userInfo")).username)
    }

  },[udetails,upline])

  const handleAgentCommissionChange = (e) => {
    const value = e.target.value;
    if (value === '' || (parseInt(value) <= maxAgentCommission && !isNaN(value))) {
      setAgentCommission(value);
    }
  };

  const openModal = ()=> {
    setModalVisible(true)
  }

  const closeModal = () => {
    setModalVisible(false);
  };

  const onhandleSelectChange = (e) => {
    setTimeZone(e.target.value)
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log('uname',username)
    if (password !== confirmpassword) {
      setMessage("Passwords do not match");
    }else {
      setMessage(null);
      try {
        const config = {
          headers: {
            "Content-type": "application/json"
          }
        }  
        
        setLoading(true);
        const {data} = await axios.post("http://localhost:9000/api/users/register", {
          username,
          userType,
          email,
          phonenumber,
          PBU,
          upline,
          uplineUserType,
          userCommission,
          agentCommission,
          tpin,
          status,
          password,
          timezone,
          userreferrence,
          pic
        }, config);
  
        console.log('Reg response data',data)
        // localStorage.setItem("userInfo", JSON.stringify(data))
        setModalVisible(false);
        setMessage(true);
        setMessageContent("Registration Success")
      } catch (error) {
        setError(error.response.data.message)
        console.log(error.response.data)
      }
  }
  
}

  return (
    <>
      {error && <AlertError variant="danger">{error}</AlertError>}
      {message && <AlertMessage variant="danger">{messagecontent}</AlertMessage>}
      {loading && <Loading />}
      <button onClick={openModal} className=" text-xs lg:text-sm h-8 px-4 rounded-sm bg-white flex items-center gap-1 text-[#1e1e1e]"><FontAwesomeIcon icon={faAdd}/><p>Add SuperAgent</p></button>
      {modalVisible && (
        <div id="createModal" className="fixed inset-0 flex items-center justify-center z-50 text-xs lg:text-sm">
          <div className="bg-[#eee] rounded-lg shadow-lg px-6 py-3 w-96 relative">
            <Link className=" absolute top-3 right-4 text-gray-500 text-xs lg:text-sm mb-4 cursor-pointer" onClick={closeModal}>
              <FontAwesomeIcon icon={faClose} />
            </Link>
            <h3 id="createHeader" className="text-lg font-semibold mb-6">Add SuperAgent</h3>
            <ul className="space-y-4 px-6">
              <li className=' flex justify-between items-center'>
                <label htmlFor="email" className="block font-medium w-[112px] text-end">
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Email"
                  maxLength="50"
                  className="form-input shadow inset-x-0 inset-y-1 text-opacity-50 px-2 py-[2px] ml-4"
                />
                
              </li>
              <li className=' flex justify-between items-center'>
                <label htmlFor="userName" className="block font-medium w-[112px] text-end">
                  Username
                </label>
                <input
                  id="userName"
                  type="text"
                  placeholder="Enter"
                  maxLength="16"
                  onChange={(e) => setUserame(e.target.value)}
                  readOnly="readonly"
                  onFocus={(e) => e.target.removeAttribute('readonly')}
                  className="shadow inset-x-0 inset-y-1 text-opacity-50 px-2 py-[2px] ml-4"
                />
                
                <span id="userNameErrorText" className="error-text"></span>
              </li>
              <li className=' flex justify-between items-center'>
                <label htmlFor="userPassword" className="block font-medium w-[112px] text-end">
                  Password
                </label>
                <input
                  id="userPassword"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter"
                  className="shadow inset-x-0 inset-y-1 text-opacity-50 px-2 py-[2px] ml-4"
                />
                
                <span id="passwordErrorText" className="error-text"></span>
              </li>
              <li className="flex justify-between items-center">
                  <label className="block font-medium w-[112px] text-end">Confirm Password</label>
                  
                    <input id="repeatPassword" type="password" onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Enter" className="ml-4 form-input shadow inset-x-0 inset-y-1 text-opacity-50 px-2 py-[2px]" />
                    
                    <span id="repeatPasswordErrorText" className="error-text"></span>
                  
              </li>
              <li className=' flex justify-between items-center'>
                <label className="block font-medium w-[112px] text-end">Phone</label>
                
                  <input
                  className="form-input shadow inset-x-0 inset-y-1 text-opacity-50 px-2 py-[2px] ml-4"
                    id="phone"
                    type="text"
                    placeholder="Enter"
                    maxLength="16"
                    onChange={(e) => setPhonenumber(e.target.value)}
                    readOnly="readonly"
                    onFocus={(e) => e.target.removeAttribute('readonly')}
                  />
                
              </li>
              <li className=' flex justify-between items-center'>
                <label className="block font-medium w-[112px] text-end">Time Zone</label>
                
                  <select className=" w-full" name="timezone" id="timezone" onChange={onhandleSelectChange}>
                    <option value="Pacific/Midway">Pacific/Midway(GMT-11:00)</option>
                    <option value="Pacific/Honolulu GMT-10:00">Pacific/Honolulu(GMT-10:00)</option>
                    <option value="America/Juneau GMT-9:00">America/Juneau(GMT-9:00)</option>
                    <option value="America/Los_Angeles GMT-8:00">America/Los_Angeles(GMT-8:00)</option>
                    <option value="Europe/London GMT+0:00">Europe/London(GMT+0:00)</option>
                    <option value="Europe/Paris GMT+1:00">Europe/Paris(GMT+1:00)</option>
                    <option value="Africa/Cairo GMT+2:00">Africa/Cairo(GMT+2:00)</option>
                    <option value="Asia/Qatar GMT+3:00">Asia/Qatar(GMT+3:00)</option>
                    <option value="Asia/Dubai GMT+4:00">Asia/Dubai(GMT+4:00)</option>
                    <option value="Asia/Karachi GMT+5:00">Asia/Karachi(GMT+5:00)</option>
                    <option value="IST GMT+5:30">IST(Bangalore / Bombay / New Delhi)(GMT+5:30)</option>
                    <option value="Asia/Kathmandu GMT+5:45">Asia/Kathmandu(GMT+5:45)</option>
                    <option value="Asia/Colombo GMT+6:00">Asia/Colombo(GMT+6:00)</option>
                    <option value="Asia/Katmandu GMT+5:45">Asia/Katmandu(GMT+5:45)</option>
                    <option value="Asia/Almaty GMT+6:00">Asia/Almaty(GMT+6:00)</option>
                    <option value="Asia/Bangkok GMT+7:00">Asia/Bangkok(GMT+7:00)</option>
                    <option value="Asia/Hong_Kong GMT+8:00">Asia/Hong_Kong(GMT+8:00)</option>
                    <option value="Asia/Tokyo GMT+9:00">Asia/Tokyo(GMT+9:00)</option>

                  </select>
                
              </li>
              <li className='flex justify-between items-center'>
                <label className="block font-medium w-[112px] text-end">User Type(User)</label>
                <input
                  id="usetype"
                  type="text"
                  placeholder={userType}
                  value={userType}
                  readOnly
                  className="form-input shadow inset-x-0 inset-y-1 text-opacity-50 px-2 py-[2px] ml-4"
                />
              </li>
            </ul>
            <div className="flex justify-center mt-6">
              <button
                type='button' onClick={submitHandler}
                className="pop_btn mr-2 bg-primary text-white py-2 px-6 rounded"
              >
                <span className="img_icon">
                  <i className="fa fa-plus"></i>
                </span>
                <span>Create</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddSuperAgentPopup;
