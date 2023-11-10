import React from "react";
import whatsapp from "../../assets/icons/ws.png";
import "../../assets/styles/Service.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const OldPage = () => {
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
      <div className=" min-h-[50px]">
        <table className="data w-full">
          <tbody>
            <tr>
              <th className="header" colSpan="7">
                MegaBets ONLINE MASTER AGENT'S OLD NUMBER AND NEW NUMBER
              </th>
            </tr>
            <tr>
              <th className="sub_header" colSpan="7">
                হোয়াটসাপ ব্যাতিত অন্য কোন এপ এর মাধ্যমে যোগাযোগ বা লেনদেন করা যাবে না
              </th>
            </tr>
            <tr>
              <th className="sub_header" colSpan="7">
                এই খানে এজেন্ট দের পুরাতন এবং নতুন নাম্বার গুলো দেয়া আছে - একদম ডান দিকে নতুন
                হোয়াটসাপ নাম্বার। কোনভাবেই পুরাতন হোয়াটসাপ নাম্বার এ আর যোগাযোগ এবং লেনদেন করবেন
                না।
              </th>
            </tr>
            <tr>
              <th align="center">ID</th>
              <th align="center">TYPE</th>
              <th align="center">OLD ID NO</th>
              <th align="center">OLD PHONE NUMBER</th>
              <th align="center">NEW ID NO</th>
              <th align="center">APP LINK</th>
              <th align="center">NEW PHONE NUMBER</th>
            </tr>
            <tr className="even">
              <td>
                <b>458</b>
              </td>
              <td>
                <b>UNKNOWN</b>
              </td>
              <td>
                <b>
                  <s>218</s>
                </b>
              </td>
              <td>
                <b>
                  <s>+601123674201</s>
                </b>
              </td>
              <td>
                <b>0</b>
              </td>
              <td>
                <a href="https://wa.me/+60172658992">
                  <img src={whatsapp} width="25" alt="WhatsApp" />
                </a>
              </td>
              <td>
                <a href="https://wa.me/+60172658992">+60172658992</a>
              </td>
            </tr>
            <tr className="odd">
              <td>
                <b>457</b>
              </td>
              <td>
                <b>MASTER AGENT</b>
              </td>
              <td>
                <b>
                  <s>1661</s>
                </b>
              </td>
              <td>
                <b>
                  <s>+85581477682</s>
                </b>
              </td>
              <td>
                <b>0</b>
              </td>
              <td>
                <a href="https://wa.me/+85593254856">
                  <img src={whatsapp} width="25" alt="WhatsApp" />
                </a>
              </td>
              <td>
                <a href="https://wa.me/+85593254856">+85593254856</a>
              </td>
            </tr>
            <tr className="even">
              <td>
                <b>456</b>
              </td>
              <td>
                <b>MASTER AGENT</b>
              </td>
              <td>
                <b>
                  <s>1062</s>
                </b>
              </td>
              <td>
                <b>
                  <s>+85581749657</s>
                </b>
              </td>
              <td>
                <b>0</b>
              </td>
              <td>
                <a href="https://wa.me/+60172774046">
                  <img src={whatsapp} width="25" alt="WhatsApp" />
                </a>
              </td>
              <td>
                <a href="https://wa.me/+60172774046">+60172774046</a>
              </td>
            </tr>
            <tr className="odd">
              <td>
                <b>455</b>
              </td>
              <td>
                <b>MASTER AGENT</b>
              </td>
              <td>
                <b>
                  <s>908</s>
                </b>
              </td>
              <td>
                <b>
                  <s>+60178819873</s>
                </b>
              </td>
              <td>
                <b>0</b>
              </td>
              <td>
                <a href="https://wa.me/+85593254768">
                  <img src={whatsapp} width="25" alt="WhatsApp" />
                </a>
              </td>
              <td>
                <a href="https://wa.me/+85593254768">+85593254768</a>
              </td>
            </tr>
            <tr className="odd">
              <td>
                <b>271</b>
              </td>
              <td>
                <b>MASTER AGENT</b>
              </td>
              <td>
                <b>
                  <s>763</s>
                </b>
              </td>
              <td>
                <b>
                  <s>+1(612)405-9716</s>
                </b>
              </td>
              <td>
                <b>0</b>
              </td>
              <td>
                <a href="https://wa.me/+85515519819">
                  <img src={whatsapp} width="25" alt="WhatsApp" />
                </a>
              </td>
              <td>
                <a href="https://wa.me/+85515519819">+85515519819</a>
              </td>
            </tr>
            <tr className="even">
              <td>
                <b>270</b>
              </td>
              <td>
                <b>SUB ADMIN</b>
              </td>
              <td>
                <b>
                  <s>14</s>
                </b>
              </td>
              <td>
                <b>
                  <s>+27629944182</s>
                </b>
              </td>
              <td>
                <b>0</b>
              </td>
              <td>
                <a href="https://wa.me/+85515519657">
                  <img src={whatsapp} width="25" alt="WhatsApp" />
                </a>
              </td>
              <td>
                <a href="https://wa.me/+85515519657">+85515519657</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OldPage;
