import React from "react";
import whatsapp from "../../assets/icons/ws.png";
import "../../assets/styles/Service.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


const SuperPage = () => {
  return (
    <div>
      <div className=" min-h-[30px] text-center mb-3">
        <form className="example flex items-center justify-center" method="post" action="/oldnew.php" >
          <input type="text" placeholder="Search Agent ID.." name="search_agent" className=" py-[1px] px-[8px] border border-black" />
          <button type="submit" className=" ml-4 bg-[#cccccc] px-2 py-[4px] rounded-sm flex items-center justify-center border border-black">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </div>
      <div className="min-h-50px">
        <table className="data w-full">
          <tbody>
            <tr>
              <th className="header" colspan="6">
                MegaBets SUPER AGENT LIST
              </th>
            </tr>
            <tr>
              <th className="sub_header" colspan="6">
                হোয়াটসাপ ব্যাতিত অন্য কোন এপ এর মাধ্যমে যোগাযোগ বা লেনদেন করা যাবে না এবং করলে তা গ্রহনযোগ্য হবে না
              </th>
            </tr>
            <tr>
              <th align="center">TYPE</th>
              <th align="center">NAME</th>
              <th align="center">ID NO</th>
              <th align="center">PHONE APP LINK</th>
              <th align="center">PHONE NUMBER</th>
              <th align="center">SUB ADMIN</th>
            </tr>
            <tr>
              <th className="header" colspan="7">--------------------------------------------------------------------</th>
            </tr>
            <tr>
              <th className="sub_header" colspan="6">
                UNDER SUBADMIN ID 3 =&gt; TOTAL SUPER = 12
              </th>
            </tr>
            <tr> <th class="sub_header" colspan="7">হোয়াটসাপ ব্যাতিত অন্য কোন এপ এর মাধ্যমে যোগাযোগ বা লেনদেন করা যাবে না এবং করলে তা গ্রহনযোগ্য হবে না </th> </tr>
            <tr className="even">
              <td>
                <b>SUPER</b>
              </td>
              <td>
                <b>AGENT ID:</b>
              </td>
              <td>
                <b>277</b>
              </td>
              <td>
                <a href="https://wa.me/+85581996785">
                  <img src={whatsapp} width="25" alt="whatsapp" />
                </a>
              </td>
              <td>
                <a href="https://wa.me/+85581996785">+85581996785</a>
              </td>
              <td>
                <a href="details.php?type=sad&amp;id=3">COMPLAIN</a>
              </td>
            </tr>
            <tr className="odd">
              <td>
                <b>SUPER</b>
              </td>
              <td>
                <b>AGENT ID:</b>
              </td>
              <td>
                <b>280</b>
              </td>
              <td>
                <a href="https://wa.me/+85581998571">
                  <img src={whatsapp} width="25" alt="whatsapp" />
                </a>
              </td>
              <td>
                <a href="https://wa.me/+85581998571">+85581998571</a>
              </td>
              <td>
                <a href="details.php?type=sad&amp;id=3">COMPLAIN</a>
              </td>
            </tr>
            <tr>
              <th className="header" colspan="7">--------------------------------------------------------------------</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SuperPage;
