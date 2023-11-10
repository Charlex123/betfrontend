import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faStar } from '@fortawesome/free-solid-svg-icons';
import { Disclosure } from '@headlessui/react'

export default function SportAccordion({ heading, children}) {
  return (
    <div className="mb-4">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className=" bg-[#eef6fb] px-4 py-1 rounded-tl-lg rounded-tr-lg w-full flex items-center justify-between gap-2 text-sm font-medium text-black">
              <div className="flex items-center gap-1">
                <div className="py-1.5 px-1 rounded-[1.25rem] text-lg text-[#1e1e1e] w-10"><FontAwesomeIcon icon={faStar}/></div>
                <span>{heading}</span>
              </div>

              <FontAwesomeIcon icon={faAngleDown} className="text-[18px]" />
            </Disclosure.Button>
            <Disclosure.Panel className="bg-white px-0 py-[2px] rounded-bl-lg rounded br-lg">
              {children}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  )
}
