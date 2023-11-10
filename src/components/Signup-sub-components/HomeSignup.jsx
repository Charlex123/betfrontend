import React from "react";
import info from "../../assets/icons/Info.png";
import whatsapp from "../../assets/icons/ws.png";

const HomeSignup = () => {
  return(
    <div className=" w-full flex flex-col gap-3">
      <div className=" bg-[#393939] w-full rounded-lg">
        <header className=" px-1 lg:px-2 py-2.5 lg:py-5 bg-[#292929] flex items-center gap-2 rounded-lg">
          <img src={info} alt="info"/>
          <h2 className=" uppercase text-xl lg:text-4xl text-white font-semibold">Quick master agent number:</h2>
        </header>
        <div className=" py-3 lg:py-6 px-1.5 lg:px-2 flex justify-center">
          <div className=" p-2 bg-[#FBFEDF] border border-[#F93] text-xl">
            <table className=" w-auto lg:w-[500px] text-sm bg-[#cccccc] h-8">
              <tbody>
                <tr className=" text-center"> 
                  <td><b>AGENT ID:</b></td>
                  <td><b>829</b></td>
                  <td> <a href="https://wa.me/+601114489264"><img src={whatsapp} width="25" alt="whatsapp" className=" ml-3"/></a></td>
                  <td><a className="text-primary font-semibold" href="https://wa.me/+601114489264">+601114489264 </a></td> 
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className=" bg-[#393939] w-full rounded-lg">
        <header className=" px-1 lg:px-2 py-2.5 lg:py-5 bg-[#292929] flex items-center gap-2 rounded-lg">
          <img src={info} alt="info"/>
          <h2 className=" uppercase text-xl lg:text-4xl text-white font-semibold">কিভাবে একাউন্ট খুলবেনঃ</h2>
        </header>
        <div className=" py-3 lg:py-6 px-2.5 lg:px-5 flex justify-center">
          <div className=" py-1 lg:py-2 px-1.5 lg:px-3 bg-[#FBFEDF] border border-[#F93] text-lg text-center">
          Megabets একাউন্ট করতে হলে আপনার এজেন্ট এর মাধ্যমে একাউন্ট খুলতে হবে। এজেন্ট এর মাধ্যমেই টাকা ডিপোজিট এবং উইথড্র করতে হবে। আপনি যে এজেন্ট এর কাছ থেকে একাউন্ট খুলবেন তার সাথেই সব সময় লেনদেন করতে হবে। ঠিক কোন এজেন্ট কে টাকা দিবেন এবং কিভাবে তার সাথে লেনদেন করবেন তার বুঝতে হলে আপনার নিম্বের তথ্য গুলো পড়া জরুরী।
          </div>
        </div>
      </div>
      <div className=" bg-[#393939] w-full rounded-lg">
        <header className=" px-1 lg:px-2 py-2.5 lg:py-5 bg-[#292929] flex items-center gap-2 rounded-lg">
          <img src={info} alt="info"/>
          <h2 className=" uppercase text-xl lg:text-4xl text-white font-semibold">এজেন্ট লিস্টঃ</h2>
        </header>
        <div className=" py-3 lg:py-6 px-2.5 lg:px-5 flex justify-center">
          <div className=" py-1 lg:py-2 px-1.5 lg:px-3 bg-[#FBFEDF] border border-[#F93] text-lg text-center">
          একাউন্ট খুলতে নিম্বের অনলাইন এজেন্ট লিস্ট এ ক্লিক করুন। এজেন্ট লিষ্ট এর এজেন্ট দের সাথে ইউজার দের শুধু মাত্র হোয়াটসাপ এর মাধ্যমে যোগাযোগ করতে হবে। হোয়াটসাপ ছাড়া অন্য কোন মাধ্যমে যোগাযোগ করলে বা লেনদেন করলে তা গ্রহনযোগ্য হবে না। হোয়াটসাপ এ যোগাযোগ করতে হলে এজেন্ট লিস্টে হোয়াটসাপ আইকন উপরে ক্লিক করুন অথবা ফোন নাম্বার টি মোবাইলে সেভ করে তাকে হোয়াটসাপ এ মসেজ পাঠাতে পারবেন। হোয়াটসাপ এপ টি আপনার মোবাইলে আগে থেকেই থাকতে হবে। না থাকলে গুগুল প্লে থেকে ইন্সটল করে নিন।
          </div>
        </div>
      </div>
      <div className=" bg-[#393939] w-full rounded-lg">
        <header className=" px-1 lg:px-2 py-2.5 lg:py-5 bg-[#292929] flex items-center gap-2 rounded-lg">
          <img src={info} alt="info"/>
          <h2 className=" uppercase text-xl lg:text-4xl text-white font-semibold">এজেন্ট কয় প্রকারঃ</h2>
        </header>
        <div className=" py-3 lg:py-6 px-2.5 lg:px-5 flex justify-center">
          <div className=" py-1 lg:py-2 px-1.5 lg:px-3 bg-[#FBFEDF] border border-[#F93] text-lg text-center">
          অনলাইন সুপার এজেন্ট লিস্টঃ সুপার এজেন্ট রা, ইউজার একাউন্ট এবং মাষ্টার এজেন্ট একাউন্ট খুলে দিতে পারেন। কোন সুপার এজেন্ট এর নামে অভিযোগ থাকলে - সরাসরি এডমিন কে জানাতে হবে। উপরে মেনু তে এডমিন লিষ্ট দেয়া আছে।
          অনলাইন মাষ্টার এজেন্ট লিস্টঃ অনলাইন মাষ্টার এজেন্ট রা, শুধু ইউজার একাউন্ট একাউন্ট খুলে দিতে পারেন। কোন মাষ্টার এজেন্ট এর নামে অভিযোগ থাকলে - সরাসরি সুপার এজেন্ট এর কাছে অভিযোগ করতে হবে। বিস্তারিত জানতে এই লিঙ্ক এ ক্লিক করুন।
          লোকাল মাষ্টার এজেন্ট লিস্টঃ লোকাল মাষ্টার এজেন্ট রা, শুধু ইউজার একাউন্ট একাউন্ট খুলে দিতে পারেন। কিন্তু তাদের সাথে লেনদেন প্রতিটি ইউজার কে নিজ দায়িত্বে লেনদেন করতে হবে। তাদের নামে কোন অভিযোগ কারো কাছে করা যাবে না।

          লোকাল মাষ্টার এজেন্টঃ এই সব এজেন্ট সাধারনত – নিজের এলাকায় বা পরিচিত দের সাথে লেনদেন করে । যারা আগে বাজি ধরিয়ে দিত, তাদের কেই মুলত লোকাল এজেন্ট দেয়া হয়েছে। লোকাল এজেন্ট রা অনলাইনে আসে না এবং তারা তাদের পরিচয় গোপন রাখতে চায়। লোকাল এজেন্ট দের সাথে অনলাইনে কোন ভাবেই লেনদেন করবেন না, আর করে থাকলে তার দায়ভার পুরোটাই আপনার।
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeSignup