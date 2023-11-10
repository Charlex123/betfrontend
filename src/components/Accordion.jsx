import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Disclosure } from '@headlessui/react'

export default function Accordion({count, heading, children}) {
  return (
    <div className="mb-4">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="bg-black px-4 py-2.5 rounded-tl-lg rounded-tr-lg w-full flex items-center justify-between gap-2 text-sm font-medium text-white">
              <div className="flex items-center gap-4">
                <div className="py-1.5 px-2 rounded-[1.25rem] bg-[#ff5500] w-10">{count}</div>
                <span>{heading}</span>
              </div>

              <FontAwesomeIcon icon={faAngleDown} className="text-[18px]" />
            </Disclosure.Button>
            <Disclosure.Panel className="bg-white px-2 py-3 rounded-bl-lg rounded br-lg">
              {children}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  )
}
