import { Menu, Transition } from '@headlessui/react'
import { Fragment} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

export default function Dropdown() {
  return (
    <div className="">
      <Menu as="div" className="relative inline-block text-left z-10">
        <div>
          <Menu.Button className="inline-flex w-36 justify-center items-center gap-2 rounded-md bg-white px-2 py-2 text-sm font-medium text-black shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <span className="text-sm text-gray-600 font-normal">by Competition</span>
            <FontAwesomeIcon icon={faCaretDown} className="text-gray-600" /> 
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute mt-1 left-0 w-36 origin-top-right divide-y divide-gray-100 rounded-md bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-gray-100 text-black' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >by Time
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-gray-100 text-black' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >by Matched
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
