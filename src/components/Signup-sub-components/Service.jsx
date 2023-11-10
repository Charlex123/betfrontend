import React from "react";
import whatsapp from "../../assets/icons/ws.png";
import "../../assets/styles/Service.scss"

const Service = () => {
  return (
    <div>
      <div className="min-h-[50px]">
      <br />
      <table className="data w-full bg-[#cccccc] border border-[#808080]">
        <tbody>
          <tr>
            <th className="header" colspan="16">
              MegaBets CUSTOMER SERVICE LIST (TIME 10AM TO 10PM)
            </th>
          </tr>
          <tr>
            <th className="sub_header" colspan="7">
              কাস্টমার সার্ভিসে হোয়াটসাপ ব্যাতিত অন্য কোন এপ এর মাধ্যমে যোগাযোগ যাবে না এবং কাউকে আপনার একাউন্ট এর পাসোয়ার্ড দিবেন না
            </th>
          </tr>
          <tr>
            <th align="center" colspan="4">
              RANDOM CS
            </th>
          </tr>
          <tr className="even">
            <td colspan="4">
              <a href="https://wa.me/+601124255228">
                <img src={whatsapp} width="55" alt="whatsapp" />
              </a>
              <br />
              <h1>
                <a href="https://wa.me/+601124255228">+601124255228</a>
              </h1>
            </td>
          </tr>
          <tr>
            <th align="center">PHONE NUMBER</th>
            <th align="center">PHONE APP LINK</th>
            <th align="center">TYPE</th>
            <th align="center">NAME</th>
          </tr>
          <tr className="even">
            <td>
              <a href="https://wa.me/+15714028675">
                <img src={whatsapp} width="25" alt="whatsapp" />
              </a>
            </td>
            <td>
              <a href="https://wa.me/+15714028675">+15714028675</a>
            </td>
            <td>
              <b>CUSTOMER SERVICE</b>
            </td>
            <td>
              <b>CS ID 8</b>
            </td>
          </tr>
          <tr className="odd">
            <td>
              <a href="https://wa.me/+85587456438">
                <img src={whatsapp} width="25" alt="whatsapp" />
              </a>
            </td>
            <td>
              <a href="https://wa.me/+85587456438">+85587456438</a>
            </td>
            <td>
              <b>CUSTOMER SERVICE</b>
            </td>
            <td>
              <b>CS ID 13</b>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
      <div className="min-h-50px">
        <table className="data w-full">
          <tbody>
            <tr>
              <th align="center">TYPE</th>
              <th align="center">NAME</th>
              <th align="center">PHONE APP LINK</th>
              <th align="center">PHONE NUMBER</th>
            </tr>
            <tr className="even">
              <td>
                <a href="https://wa.me/+15714028916">
                  <img src={whatsapp} width="25" alt="whatsapp" />
                </a>
              </td>
              <td>
                <a href="https://wa.me/+15714028916">+15714028916</a>
              </td>
              <td>
                <b>CUSTOMER SERVICE SUPERVISOR</b>
              </td>
              <td>
                <b>CS ID 10</b>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="min-h-50px">
        <table className="data w-full">
          <tbody>
            <tr>
              <th align="center">TYPE</th>
              <th align="center">NAME</th>
              <th align="center">PHONE APP LINK</th>
              <th align="center">PHONE NUMBER</th>
            </tr>
            <tr className="even">
              <td>
                <a href="https://wa.me/+85561743988">
                  <img src={whatsapp} width="25" alt="whatsapp" />
                </a>
              </td>
              <td>
                <a href="https://wa.me/+85561743988">+85561743988</a>
              </td>
              <td>
                <b>CUSTOMER SERVICE MANAGER</b>
              </td>
              <td>
                <b>CS ID 11</b>
              </td>
            </tr>
            <tr className="odd">
              <td>
                <a href="https://wa.me/+85581996504">
                  <img src={whatsapp} width="25" alt="whatsapp" />
                </a>
              </td>
              <td>
                <a href="https://wa.me/+85581996504">+85581996504</a>
              </td>
              <td>
                <b>CUSTOMER SERVICE MANAGER</b>
              </td>
              <td>
                <b>CS ID 12</b>
              </td>
            </tr>
            <tr className="even">
              <td>
                <a href="https://wa.me/+15713357575">
                  <img src={whatsapp} width="25" alt="whatsapp" />
                </a>
              </td>
              <td>
                <a href="https://wa.me/+15713357575">+15713357575</a>
              </td>
              <td>
                <b>CUSTOMER SERVICE MANAGER</b>
              </td>
              <td>
                <b>CS ID 9</b>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="min-h-50px">
        <table className="data w-full">
          <tbody>
            <tr>
              <th align="center">TYPE</th>
              <th align="center">NAME</th>
              <th align="center">PHONE APP LINK</th>
              <th align="center">PHONE NUMBER</th>
            </tr>
            <tr className="even">
              <td>
                <a href="https://wa.me/+15714028675">
                  <img src={whatsapp} width="25" alt="whatsapp" />
                </a>
              </td>
              <td>
                <a href="https://wa.me/+15714028675">+15714028675</a>
              </td>
              <td>
                <b>CUSTOMER SERVICE ADMIN</b>
              </td>
              <td>
                <b>CS ID 8</b>
              </td>
            </tr>
            <tr className="odd">
              <td>
                <a href="https://wa.me/+60172769682">
                  <img src={whatsapp} width="25" alt="whatsapp" />
                </a>
              </td>
              <td>
                <a href="https://wa.me/+60172769682">+60172769682</a>
              </td>
              <td>
                <b>CUSTOMER SERVICE ADMIN</b>
              </td>
              <td>
                <b>CS ID 4</b>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Service;
