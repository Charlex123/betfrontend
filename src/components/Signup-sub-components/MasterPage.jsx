import React from "react";
import whatsapp from "../../assets/icons/ws.png";
import "../../assets/styles/Service.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faSearch } from '@fortawesome/free-solid-svg-icons';

const MasterPage = () => {
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
              <th className="header" colSpan="16">
                MegaBets ONLINE MASTER AGENT LIST
              </th>
            </tr>
            <tr>
              <th className="sub_header" colSpan="7">
                হোয়াটসাপ ব্যাতিত অন্য কোন এপ এর মাধ্যমে যোগাযোগ বা লেনদেন করা যাবে না এবং করলে তা গ্রহনযোগ্য হবে না
              </th>
            </tr>
            <tr>
              <th align="center">TYPE</th>
              <th align="center">NAME</th>
              <th align="center">ID NO</th>
              <th align="center">7* RATING</th>
              <th align="center">PHONE APP LINK</th>
              <th align="center">PHONE NUMBER</th>
              <th align="center">SUPER</th>
            </tr>
            <tr>
              <th className="header" colSpan="7">
                <a href="https://www.winpbu.com/MegaBets-local-agent/" target="_blank" rel="noreferrer">
                  এজেন্ট কিভাবে হতে পারবেন তা জানার জন্য এই লিঙ্ক এ ক্লিক করুন
                </a>
              </th>
            </tr>
            <tr>
              <th className="sub_header" colSpan="7">
                UNDER SUBADMIN ID 9 =&gt; UNDER SUPERAGENT ID 9 =&gt; TOTAL AGENT = 9
              </th>
            </tr>
            <tr>
              <th className="sub_header" colSpan="7">
                ** হোয়াটসাপ ব্যাতিত অন্য কোন এপ এর মাধ্যমে যোগাযোগ বা লেনদেন করা যাবে না। ** এজেন্ট পাসোয়ার্ড পরিবর্তন করে দিলে - আপনি একাউন্টে ঢুকে আবার পাসোয়ার্ড পরিবর্তন করে নিবেন। এজেন্ট যাতে কোন ভাবেই আপনার পাসোয়ার্ড না জানে। আপনার পাসোয়ার্ড আপনি কাউকেই দিবেন না - সে যেই হউক না কেন। ** সকাল ৯ঃ৪৫ এর আগে এবং রাত ৯ঃ৪৫ এর পরে কোন ইউজার যদি এজেন্ট কে টাকা পাঠায় – অই টাকার দায়ভার ভেল্কি নিবে না। ** প্রতিবার এজেন্ট এর কাছ থেকে পয়েন্ট নেবার আগে – এজেন্ট এর কাছে লেনদেন এর তথ্য জেনে নিতে হবে। যেহেতু এজেন্ট এক এক সময় এক ভাবে লেনদেন করে সেহেতু এই তথ্য জানা জরুরী। ** এজেন্ট এর বিরুদ্ধে কোন অভিযোগ থাকলে এজেন্ট এর নামের শেষে কমপ্লেইন বাটন এ ক্লিক করলে যে হোয়াটসাপ নাম্বার আসবে - তাকে অভিযোগ করতে হবে।
                <br />
                <a href="https://winpbu.com/" target="_blank" rel="noreferrer">
                  ** বিস্তারিত ভাবে সব নিয়ম কানুন জানতে আমাদের সাহায্যকারী সাইট টি দেখুনঃ WINPBU.COM
                </a>
              </th>
            </tr>
            <tr className="even">
              <td>
                <b>MASTER</b>
              </td>
              <td>
                <b>AGENT ID:</b>
              </td>
              <td>
                <b>2201</b>
              </td>
              <td>
                <FontAwesomeIcon icon={faStar} className="checked text-[8px]" />
                <FontAwesomeIcon icon={faStar} className="checked text-[8px]" />
                <FontAwesomeIcon icon={faStar} className="checked text-[8px]" />
                <FontAwesomeIcon icon={faStar} className="checked text-[8px]" />
                <FontAwesomeIcon icon={faStar} className="checked text-[8px]" />
                <FontAwesomeIcon icon={faStar} className="checked text-[8px]" />
                <FontAwesomeIcon icon={faStar} className="checked text-[8px]" />
              </td>
              <td>
                {" "}
                <a href="https://wa.me/+85593255038">
                  <img src={whatsapp} width="25" alt="whatsapp" />
                </a>
              </td>
              <td>
                <a href="https://wa.me/+85593255038">+85593255038 </a>
              </td>
              <td>
                <a href="details.php?type=sa&amp;id=9">COMPLAIN</a>
              </td>
            </tr>
            <tr className="odd">
              <td>
                <b>MASTER</b>
              </td>
              <td>
                <b>AGENT ID:</b>
              </td>
              <td>
                <b>454</b>
              </td>
              <td>
                <FontAwesomeIcon icon={faStar} className="checked text-[8px]" />
                <FontAwesomeIcon icon={faStar} className="checked text-[8px]" />
                <FontAwesomeIcon icon={faStar} className="checked text-[8px]" />
                <FontAwesomeIcon icon={faStar} className="checked text-[8px]" />
                <FontAwesomeIcon icon={faStar} className="checked text-[8px]" />
                <FontAwesomeIcon icon={faStar} className="checked text-[8px]" />
                <FontAwesomeIcon icon={faStar} className="checked text-[8px]" />
              </td>
              <td>
                {" "}
                <a href="https://wa.me/+855967032621">
                  <img src={whatsapp} width="25" alt="whatsapp" />
                </a>
              </td>
              <td>
                <a href="https://wa.me/+855967032621">+855967032621 </a>
              </td>
              <td>
                <a href="details.php?type=sa&amp;id=9">COMPLAIN</a>
              </td>
            </tr>
            <tr className="even">
              <td>
                <b>MASTER</b>
              </td>
              <td>
                <b>AGENT ID:</b>
              </td>
              <td>
                <b>455</b>
              </td>
              <td>
                <FontAwesomeIcon icon={faStar} className="checked text-[8px]" />
                <FontAwesomeIcon icon={faStar} className="checked text-[8px]" />
                <FontAwesomeIcon icon={faStar} className="checked text-[8px]" />
                <FontAwesomeIcon icon={faStar} className="checked text-[8px]" />
                <FontAwesomeIcon icon={faStar} className="checked text-[8px]" />
                <FontAwesomeIcon icon={faStar} className="checked text-[8px]" />
                <FontAwesomeIcon icon={faStar} className="checked text-[8px]" />
              </td>
              <td>
                {" "}
                <a href="https://wa.me/+60177583889">
                  <img src={whatsapp} width="25" alt="whatsapp" />
                </a>
              </td>
              <td>
                <a href="https://wa.me/+60177583889">+60177583889 </a>
              </td>
              <td>
                <a href="details.php?type=sa&amp;id=9">COMPLAIN</a>
              </td>
            </tr>
            <tr className="odd">
              <td>
                <b>MASTER</b>
              </td>
              <td>
                <b>AGENT ID:</b>
              </td>
              <td>
                <b>2012</b>
              </td>
              <td>
                <FontAwesomeIcon icon={faStar} className="checked text-[8px]" />
                <FontAwesomeIcon icon={faStar} className="checked text-[8px]" />
                <FontAwesomeIcon icon={faStar} className="checked text-[8px]" />
                <FontAwesomeIcon icon={faStar} className="checked text-[8px]" />
                <FontAwesomeIcon icon={faStar} className="checked text-[8px]" />
                <FontAwesomeIcon icon={faStar} className="checked text-[8px]" />
                <FontAwesomeIcon icon={faStar} className="checked text-[8px]" />
              </td>
              <td>
                {" "}
                <a href="https://wa.me/+85581749261">
                  <img src={whatsapp} width="25" alt="whatsapp" />
                </a>
              </td>
              <td>
                <a href="https://wa.me/+85581749261">+85581749261 </a>
              </td>
              <td>
                <a href="details.php?type=sa&amp;id=9">COMPLAIN</a>
              </td>
            </tr>
            <tr className="even">
              <td>
                <b>MASTER</b>
              </td>
              <td>
                <b>AGENT ID:</b>
              </td>
              <td>
                <b>710</b>
              </td>
              <td>
                <FontAwesomeIcon icon={faStar} className="checked text-[8px]" />
                <FontAwesomeIcon icon={faStar} className="checked text-[8px]" />
                <FontAwesomeIcon icon={faStar} className="checked text-[8px]" />
                <FontAwesomeIcon icon={faStar} className="checked text-[8px]" />
                <FontAwesomeIcon icon={faStar} className="checked text-[8px]" />
                <FontAwesomeIcon icon={faStar} className="checked text-[8px]" />
                <FontAwesomeIcon icon={faStar} className="checked text-[8px]" />
              </td>
              <td>
                {" "}
                <a href="https://wa.me/+85581749357">
                  <img src={whatsapp} width="25" alt="whatsapp" />
                </a>
              </td>
              <td>
                <a href="https://wa.me/+85581749357">+85581749357 </a>
              </td>
              <td>
                <a href="details.php?type=sa&amp;id=9">COMPLAIN</a>
              </td>
            </tr>
            <tr className="odd">
              <td>
                <b>MASTER</b>
              </td>
              <td>
                <b>AGENT ID:</b>
              </td>
              <td>
                <b>1186</b>
              </td>
              <td>
                <FontAwesomeIcon icon={faStar} className="checked text-[8px]" />
                <FontAwesomeIcon icon={faStar} className="checked text-[8px]" />
                <FontAwesomeIcon icon={faStar} className="checked text-[8px]" />
                <FontAwesomeIcon icon={faStar} className="checked text-[8px]" />
                <FontAwesomeIcon icon={faStar} className="checked text-[8px]" />
                <FontAwesomeIcon icon={faStar} className="checked text-[8px]" />
                <FontAwesomeIcon icon={faStar} className="checked text-[8px]" />
              </td>
              <td>
                {" "}
                <a href="https://wa.me/+60172880423">
                  <img src={whatsapp} width="25" alt="whatsapp" />
                </a>
              </td>
              <td>
                <a href="https://wa.me/+60172880423">+60172880423 </a>
              </td>
              <td>
                <a href="details.php?type=sa&amp;id=9">COMPLAIN</a>
              </td>
            </tr>
            <tr className="even">
              <td>
                <b>MASTER</b>
              </td>
              <td>
                <b>AGENT ID:</b>
              </td>
              <td>
                <b>1193</b>
              </td>
              <td>
                <FontAwesomeIcon icon={faStar} className="checked text-[8px]" />
                <FontAwesomeIcon icon={faStar} className="checked text-[8px]" />
                <FontAwesomeIcon icon={faStar} className="checked text-[8px]" />
                <FontAwesomeIcon icon={faStar} className="checked text-[8px]" />
                <FontAwesomeIcon icon={faStar} className="checked text-[8px]" />
                <FontAwesomeIcon icon={faStar} className="checked text-[8px]" />
                <FontAwesomeIcon icon={faStar} className="checked text-[8px]" />
              </td>
              <td>
                {" "}
                <a href="https://wa.me/+855967032144">
                  <img src={whatsapp} width="25" alt="whatsapp" />
                </a>
              </td>
              <td>
                <a href="https://wa.me/+855967032144">+855967032144 </a>
              </td>
              <td>
                <a href="details.php?type=sa&amp;id=9">COMPLAIN</a>
              </td>
            </tr>
            <tr className="odd">
              <td>
                <b>MASTER</b>
              </td>
              <td>
                <b>AGENT ID:</b>
              </td>
              <td>
                <b>2123</b>
              </td>
              <td>
                <FontAwesomeIcon icon={faStar} className="checked text-[8px]" />
                <FontAwesomeIcon icon={faStar} className="checked text-[8px]" />
                <FontAwesomeIcon icon={faStar} className="checked text-[8px]" />
                <FontAwesomeIcon icon={faStar} className="checked text-[8px]" />
                <FontAwesomeIcon icon={faStar} className="checked text-[8px]" />
                <FontAwesomeIcon icon={faStar} className="checked text-[8px]" />
                <FontAwesomeIcon icon={faStar} className="checked text-[8px]" />
              </td>
              <td>
                {" "}
                <a href="https://wa.me/+85581998524">
                  <img src={whatsapp} width="25" alt="whatsapp" />
                </a>
              </td>
              <td>
                <a href="https://wa.me/+85581998524">+85581998524 </a>
              </td>
              <td>
                <a href="details.php?type=sa&amp;id=9">COMPLAIN</a>
              </td>
            </tr>
            <tr className="even">
              <td>
                <b>MASTER</b>
              </td>
              <td>
                <b>AGENT ID:</b>
              </td>
              <td>
                <b>166</b>
              </td>
              <td>
                <FontAwesomeIcon icon={faStar} className="checked text-[8px]" />
                <FontAwesomeIcon icon={faStar} className="checked text-[8px]" />
                <FontAwesomeIcon icon={faStar} className="checked text-[8px]" />
                <FontAwesomeIcon icon={faStar} className="checked text-[8px]" />
                <FontAwesomeIcon icon={faStar} className="checked text-[8px]" />
                <FontAwesomeIcon icon={faStar} className="checked text-[8px]" />
                <FontAwesomeIcon icon={faStar} className="checked text-[8px]" />
              </td>
              <td>
                {" "}
                <a href="https://wa.me/+60142292592">
                  <img src={whatsapp} width="25" alt="whatsapp" />
                </a>
              </td>
              <td>
                <a href="https://wa.me/+60142292592">+60142292592 </a>
              </td>
              <td>
                <a href="details.php?type=sa&amp;id=9">COMPLAIN</a>
              </td>
            </tr>
            <tr>
              <th className="header" colspan="7">
                <a href="https://www.winpbu.com/MegaBets-local-agent/" target="_blank" rel="noreferrer">
                  এজেন্ট কিভাবে হতে পারবেন তা জানার জন্য এই লিঙ্ক এ ক্লিক করুন
                </a>
              </th>
            </tr>
            <tr>
              <th className="sub_header" colspan="7">
                UNDER SUBADMIN ID 10 =&gt; UNDER SUPERAGENT ID 235 =&gt; TOTAL AGENT = 1
              </th>
            </tr>
            <tr>
              <th className="sub_header" colspan="7">
                ** হোয়াটসাপ ব্যাতিত অন্য কোন এপ এর মাধ্যমে যোগাযোগ বা লেনদেন করা যাবে না এবং করলে তা গ্রহনযোগ্য হবে না। ** এজেন্ট পাসোয়ার্ড পরিবর্তন করে দিলে - আপনি একাউন্টে ঢুকে আবার পাসোয়ার্ড পরিবর্তন করে নিবেন। এজেন্ট যাতে কোন ভাবেই আপনার পাসোয়ার্ড না জানে। আপনার পাসোয়ার্ড আপনি কাউকেই দিবেন না - সে যেই হউক না কেন। ** সকাল ৯ঃ৪৫ এর আগে এবং রাত ৯ঃ৪৫ এর পরে কোন ইউজার যদি এজেন্ট কে টাকা পাঠায় – অই টাকার দায়ভার ভেল্কি নিবে না। ** প্রতিবার এজেন্ট এর কাছ থেকে পয়েন্ট নেবার আগে – এজেন্ট এর কাছে লেনদেন এর তথ্য জেনে নিতে হবে। যেহেতু এজেন্ট এক এক সময় এক ভাবে লেনদেন করে সেহেতু এই তথ্য জানা জরুরী। ** এজেন্ট এ
              </th>
            </tr>
            <tr className="even">
              <td>
                <b>SUPER AGENT</b>
              </td>
              <td>
                <b>AGENT ID:</b>
              </td>
              <td>
                <b>617</b>
              </td>
              <td>
                <FontAwesomeIcon icon={faStar} className="checked text-[8px]" />
                <FontAwesomeIcon icon={faStar} className="checked text-[8px]" />
                <FontAwesomeIcon icon={faStar} className="checked text-[8px]" />
                <FontAwesomeIcon icon={faStar} className="checked text-[8px]" />
                <FontAwesomeIcon icon={faStar} className="checked text-[8px]" />
                <FontAwesomeIcon icon={faStar} className="checked text-[8px]" />
                <FontAwesomeIcon icon={faStar} className="checked text-[8px]" />
              </td>
              <td>
                {" "}
                <a href="https://wa.me/+60163952561">
                  <img src={whatsapp} width="25" alt="whatsapp" />
                </a>
              </td>
              <td>
                <a href="https://wa.me/+60163952561">+60163952561 </a>
              </td>
              <td>
                <a href="details.php?type=sa&amp;id=9">COMPLAIN</a>
              </td>
            </tr>
            <tr>
              <th className="header" colspan="7">
                <a href="https://www.winpbu.com/MegaBets-local-agent/" target="_blank" rel="noreferrer">
                  এজেন্ট কিভাবে হতে পারবেন তা জানার জন্য এই লিঙ্ক এ ক্লিক করুন
                </a>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MasterPage;
