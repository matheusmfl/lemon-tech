'use client'
import { faq } from '@/utils/faq'
import * as Accordion from '@radix-ui/react-accordion'

export function Accordeon() {
  return (
    <div>
      <Accordion.Root type="single" collapsible className="w-full">
        {faq.map((item) => {
          return (
            <Accordion.Item key={item.id} value={`Acordeão ${item.id}`}>
              <Accordion.Trigger>
                <div className="px-4 py-3 text-left flex justify-between items-center bg-neutral-800">
                  <span className="text-slate-50">{item.title}</span>
                </div>
              </Accordion.Trigger>
              <Accordion.Content>
                <span>{item.content}</span>
              </Accordion.Content>
            </Accordion.Item>
          )
        })}
      </Accordion.Root>
    </div>
  )
}
