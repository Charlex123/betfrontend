import React from "react";
import whatsapp from "../../assets/icons/ws.png";
import telegram from "../../assets/icons/tg.png";
import "../../assets/styles/Service.scss";

const AdminPage = () => {
  return (
    <div>
      <div className="min-h-50px">
        <table className="data w-full">
          <tbody>
            <tr>
              <th className="header" colspan="16">
                MegaBets ADMIN LIST
              </th>
            </tr>
            <tr>
              <th className="sub_header" colspan="7">
                হোয়াটসাপ ব্যাতিত অন্য কোন এপ এর মাধ্যমে যোগাযোগ বা লেনদেন করা যাবে না এবং করলে তা গ্রহনযোগ্য হবে না
              </th>
            </tr>
            <tr>
              <th align="center">TYPE</th>
              <th align="center">NAME</th>
              <th align="center">WHATSAPP LINK</th>
              <th align="center">TELEGRAM LINK</th>
              <th align="center">PHONE NUMBER</th>
            </tr>
            <tr className="even">
              <td><b>SITE ADMIN</b></td>
              <td><b>AKASH MALIK</b></td>
              <td>
                <a href="https://wa.me/+15714028675">
                  <img src={whatsapp} width="25" alt="whatsapp" />
                </a>
              </td>
              <td>
                <a href="https://telegram.me/akash_malik">
                  <font size="2">akash_malik</font>
                  <img src={telegram} width="25" alt="telegram" />
                </a>
              </td>
              <td><a href="https://wa.me/+15714028675">+15714028675</a></td>
            </tr>
            <tr className="odd">
              <td><b>SITE ADMIN</b></td>
              <td><b>AKASH MALIK</b></td>
              <td>
                <a href="https://wa.me/+85578535919">
                  <img src={whatsapp} width="25" alt="whatsapp" />
                </a>
              </td>
              <td>
                <a href="https://telegram.me/akash_malik">
                  <font size="2">akash_malik</font>
                  <img src={telegram} width="25" alt="telegram" />
                </a>
              </td>
              <td><a href="https://wa.me/+85578535919">+85578535919</a></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="min-h-50px">
        <table className="data w-full">
          <tbody>
            <tr>
              <th className="header" colspan="16">
                MegaBets SUB ADMIN LIST
              </th>
            </tr>
            <tr>
              <th className="sub_header" colspan="7">
                হোয়াটসাপ ব্যাতিত অন্য কোন এপ এর মাধ্যমে যোগাযোগ বা লেনদেন করা যাবে না এবং করলে তা গ্রহনযোগ্য হবে না
              </th>
            </tr>
            <tr>
              <th align="center">TYPE</th>
              <th align="center">NAME</th>
              <th align="center" colspan="0">PHONE APP LINK</th>
              <th align="center">PHONE NUMBER</th>
              <th align="center">ADMIN</th>
            </tr>
            <tr>
              <th className="sub_header" colspan="6">
                UNDER SITE ADMIN "AKASH MALIK" =&gt; TOTAL SUBADMIN = 13
              </th>
            </tr>
            <tr className="even">
              <td>
                <b>SITE SUB ADMIN</b>
              </td>
              <td>
                <b>SUB ADMIN 9</b>
              </td>
              <td>
                <a href="https://wa.me/+60177807047">
                  <img src={whatsapp} width="25" alt="whatsapp" />
                </a>
              </td>
              <td>
                <a href="https://wa.me/+60177807047">+60177807047</a>
              </td>
              <td>
                <a href="details.php?type=ad&amp;id=3">COMPLAIN</a>
              </td>
            </tr>
            <tr className="odd">
              <td>
                <b>SITE SUB ADMIN</b>
              </td>
              <td>
                <b>SUB ADMIN 10</b>
              </td>
              <td>
                <a href="https://wa.me/+85589964536">
                  <img src={whatsapp} width="25" alt="whatsapp" />
                </a>
              </td>
              <td>
                <a href="https://wa.me/+85589964536">+85589964536</a>
              </td>
              <td>
                <a href="details.php?type=ad&amp;id=3">COMPLAIN</a>
              </td>
            </tr>
            {/* Continue adding the remaining rows */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPage;
