import React from 'react'
import { Menu } from '@headlessui/react'

const HeaderDropdown=({ onHeaderDropdownSelect })=> {
  return (
    <div className='relative'>
      <Menu >
      <Menu.Button>My Report</Menu.Button>
      <Menu.Items className=" absolute -left-2 top-[25px] w-60 z-30 px-4 py-3 flex flex-col gap-2 bg-white">
      <Menu.Item>
            {({ active }) => (
              <div onClick={() => onHeaderDropdownSelect('Profit/Loss by Downline')} className={active ? 'text-primary' : 'text-gray-800'}>
                Profit/Loss by Downline
              </div>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <div onClick={() => onHeaderDropdownSelect('Profit/Loss by Market')} className={active ? 'text-primary' : 'text-gray-800'}>
                Profit/Loss by Market
              </div>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <div onClick={() => onHeaderDropdownSelect('Profit/Loss Downline')} className={active ? 'text-primary' : 'text-gray-800'}>
                Profit/Loss Downline
              </div>
            )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <div onClick={() => onHeaderDropdownSelect('Profit/Loss Sports Wise')} className={active ? 'text-primary' : 'text-gray-800'}>Profit/Loss Sports Wise</div>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <div onClick={() => onHeaderDropdownSelect('Match Profit Loss')} className={active ? 'text-primary' : 'text-gray-800'}>Match Profit Loss</div>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <div onClick={() => onHeaderDropdownSelect('Casino P/L Downline Monthly')} className={active ? 'text-primary' : 'text-gray-800'}>Casino P/L Downline Monthly</div>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <div onClick={() => onHeaderDropdownSelect('SABA P/L Downline Monthly')} className={active ? 'text-primary' : 'text-gray-800'}>SABA P/L Downline Monthly</div>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
    </div>
    
  )
}

export default HeaderDropdown