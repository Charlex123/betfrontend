import React, {useState,useEffect} from 'react';
import axios from 'axios';


export default function PanelTable() {

  const [tabledata, setTableData] = useState("");
  // const [rowsPerPage, setRowsPerPage] = useState(10);

  const [uname,setUname] = useState("");


  
  useEffect(() => {
    if(localStorage.getItem("userInfo") !== null) {
      setUname(JSON.parse(localStorage.getItem("userInfo")).username)
    }
    async function getDownlines() {
      try {
         const config = {
         headers: {
            "Content-type": "application/json"
         }
         }  
         const {data} = await axios.post("http://localhost:9000/api/users/downlines", {
            uname
         }, config);
         if(data !== undefined && data !== null) {
            setTableData(data.downlines)
            console.log('u det',data.downlines)
          }else {
            // setError(true)
            // setErrorMesage("Invalid Login Details")
          }
      } catch (error) {
         console.log(error)
      }
   }
   getDownlines();
  },[uname])
  

  return (
    <div>
      { tabledata ? (<table id="resultTable" className="table01 margin-table">
            <thead><tr>
                <th id="accountTh" width="" className="align-L">Account</th>
                <th id="creditRefTh" width="10%">Credit Ref.</th>
                <th id="balanceTh" width="10%">Balance</th>
                <th id="exposureTh" width="10%">Exposure</th>
                <th id="availableBalanceTh" width="10%">Avail. bal.</th>
                <th id="creditPLTh" width="10%">Balance</th>
                <th id="playerBalanceTh" width="10%">Player Balance</th>
                 <th id="refPLTh" width="10%">Ref. P/L</th>
                <th id="statusTh" width="10%">Status</th>
                {/* <th id="actionTh" width="15%">Action</th> */}
            </tr>
            </thead>
            <tbody id="userData">
              {tabledata.map((downline) =>(
                <tr key={downline._id}>
                <td>{downline.username}</td>
                <td>{downline.username}</td>
                <td>{downline.username}</td>
                <td>{downline.username}</td>
                <td>{downline.username}</td>
                <td>{downline.username}</td>
                <td>{downline.username}</td>
                <td>{downline.username}</td>
                <td>{downline.username}</td>
              </tr>
              ))}
            </tbody>
            </table>) : '' }
    </div>
  );
}