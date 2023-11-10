import React from "react";
import { Link } from "react-router-dom";
import telegram from "../assets/icons/telegram.png"
import whatsapp from "../assets/icons/whatsapp.png"
import facebook from "../assets/icons/facebook.png"
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import PrivacyPolicy from "./PrivacyPolicy";

const Footer = ()=> {
  const [privacyTrigger, setPrivacyTrigger]=useState(false)
  const [termsTrigger, setTermsTrigger]=useState(false)
  const [rulesTrigger, setRulesTrigger]=useState(false)
  const [kycTrigger, setKycTrigger]=useState(false)
  const [gamingTrigger, setGamingTrigger]=useState(false)

  const handlePrivacyPage=()=> {
    setPrivacyTrigger(!privacyTrigger)
  }
  const handleTermsPage=()=> {
    setTermsTrigger(!termsTrigger)
  }
  const handleRulesPage=()=> {
    setRulesTrigger(!rulesTrigger)
  }
  const handleKycPage=()=> {
    setKycTrigger(!kycTrigger)
  }
  const handleGamingPage=()=> {
    setGamingTrigger(!gamingTrigger)
  }
  return (
    <div className=" my-5 mx-3 flex flex-col gap-5">
      <div className=" flex gap-3 items-center justify-center" >
        <Link><img src={telegram} alt="telegram" className=" w-10" /></Link>
        <Link><img src={whatsapp} alt="whatsapp" className=" w-10" /></Link>
        <Link><img src={facebook} alt="facebook" className=" w-10" /></Link>
      </div>
      <div className=" px-0 flex gap-3 justify-center flex-wrap">
        <Link onClick={handlePrivacyPage} className="flex items-end gap-2 text-sm text-gray-600 font-semibold">Privacy Policy<span className=" inline-block w-[1px] h-[16px] bg-slate-300 "></span></Link>
        <Link onClick={handleTermsPage} className="flex items-end gap-2 text-sm text-gray-600 font-semibold">Terms and Conditions<span className=" inline-block w-[1px] h-[16px] bg-slate-300 "></span></Link>
        <Link onClick={handleRulesPage} className="flex items-end gap-2 text-sm text-gray-600 font-semibold">Rules and Regulations<span className=" inline-block w-[1px] h-[16px] bg-slate-300 "></span></Link>
        <Link onClick={handleKycPage} className="flex items-end gap-2 text-sm text-gray-600 font-semibold">KYC<span className=" inline-block w-[1px] h-[16px] bg-slate-300 "></span></Link>
        <Link onClick={handleGamingPage} className="flex items-end gap-2 text-sm text-gray-600 font-semibold">Responsible Gaming</Link>
      </div>
      {privacyTrigger && 
        <div className=" fixed left-0 right-0 top-0 bottom-0 bg-white max-w-[480px] w-full mx-auto z-50 pb-20" >
          <header className=" bg-black text-white font-semibold text-xl text-right  py-4 px-4">
            <div className=" flex items-center justify-between">
              <div>Privacy Policy</div>
              <FontAwesomeIcon icon={faClose} className=" text-3xl cursor-pointer" onClick={handlePrivacyPage} />
            </div>
          </header>
          <div className=" h-full overflow-y-auto">
            <PrivacyPolicy/>
          </div>
        </div>
      }
      {termsTrigger && 
        <div className=" fixed left-0 right-0 top-0 bottom-0 bg-white max-w-[480px] w-full mx-auto z-50 pb-20" >
          <header className=" bg-black text-white font-semibold text-xl text-right  py-4 px-4">
            <div className=" flex items-center justify-between">
              <div>Terms and Conditions</div>
              <FontAwesomeIcon icon={faClose} className=" text-3xl cursor-pointer" onClick={handleTermsPage} />
            </div>
          </header>
          <div className=" h-full overflow-y-auto">
            <PrivacyPolicy/>
          </div>
        </div>
      }
      {rulesTrigger && 
        <div className=" fixed left-0 right-0 top-0 bottom-0 bg-white max-w-[480px] w-full mx-auto z-50 pb-20" >
          <header className=" bg-black text-white font-semibold text-xl text-right  py-4 px-4">
            <div className=" flex items-center justify-between relative">
              <div className="">Rules and Regulations</div>
              <FontAwesomeIcon icon={faClose} className=" text-3xl cursor-pointer" onClick={handleRulesPage} />
            </div>
          </header>
          <div className=" h-full overflow-y-auto">
            <PrivacyPolicy/>
          </div>
        </div>
      }
      {kycTrigger && 
        <div className=" fixed left-0 right-0 top-0 bottom-0 bg-white max-w-[480px] w-full mx-auto z-50 pb-20" >
          <header className=" bg-black text-white font-semibold text-xl text-right  py-4 px-4">
            <div className=" flex items-center justify-between">
              <div>KYC</div>
              <FontAwesomeIcon icon={faClose} className=" text-3xl cursor-pointer" onClick={handleKycPage} />
            </div>
          </header>
          <div className=" h-full overflow-y-auto">
            <PrivacyPolicy/>
          </div>
        </div>
      }
      {gamingTrigger && 
        <div className=" fixed left-0 right-0 top-0 bottom-0 bg-white max-w-[480px] w-full mx-auto z-50 pb-20" >
          <header className=" bg-black text-white font-semibold text-xl text-right  py-4 px-4">
            <div className=" flex items-center justify-between">
              <div>Responsible Gaming</div>
              <FontAwesomeIcon icon={faClose} className=" text-3xl cursor-pointer" onClick={handleGamingPage} />
            </div>
          </header>
          <div className=" h-full overflow-y-auto">
            <PrivacyPolicy/>
          </div>
        </div>
      }
      
    </div>
  )

}

export default Footer