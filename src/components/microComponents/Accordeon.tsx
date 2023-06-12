/* eslint-disable prettier/prettier */
'use client'
import { faq } from '@/utils/faq'
import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDownIcon } from 'lucide-react'
import { useState } from 'react'

export function Accordeon() {
  const [activeItem, setActiveItem] = useState('')
  const handleTriggerClick = (value: string) => {
    setActiveItem((prevActiveItem) => (prevActiveItem === value ? '' : value))
    console.log(activeItem)
  }
  return (

    <Accordion.Root type="single" collapsible className="w-full" >
      {faq.map((item) => {
        const isItemOpen = activeItem === `item-${item.id}`
        return (
          <Accordion.Item key={item.id} value={`item-${item.id}`} className="w-full">
            <Accordion.Trigger
              className="border-b border-gray-400 w-full"
              onClick={() => handleTriggerClick(`item-${item.id}`)}
            >
              <div className="px-4 py-3 text-left flex justify-between items-center bg-neutral-800">
                <span className="text-slate-50">{item.title}</span>

                <div
                  className={` text-slate-50 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 ${isItemOpen ? 'rotate-180' : ''} `}
                >
                  <ChevronDownIcon aria-hidden />
                </div>
              </div>
            </Accordion.Trigger>
            <Accordion.Content
              className={`${isItemOpen && 'animate-slideDown'} ${!isItemOpen && 'animate-slideUp'} overflow-hidden`}
            >
              <div className='bg-slate-100 px-3 py-4'>
                <ul className='list-disc list-inside flex flex-col gap-2'>
                  {item.content.map((list, index) => {
                    return (
                      <li key={index}>
                        {list}
                      </li>
                    )
                  })}
                </ul>
              </div>
            </Accordion.Content>
          </Accordion.Item>
        )
      })}
    </Accordion.Root>

  )
}
