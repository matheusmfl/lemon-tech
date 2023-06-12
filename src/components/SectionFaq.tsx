import { Separator } from './Separator'
import { Accordeon } from './microComponents/Accordeon'

export function SectionFaq() {
  return (
    <section className="flex flex-col py-10 px-6 md:px-20 bg-neutral-900 gap-14">
      {/* div textos  */}
      <div className="flex flex-col gap-5 md:w-[340px]">
        <span className="font-medium text-sm text-gray-500 leading-4">FAQ</span>

        <h2 className="font-medium text-[32px] leading-10 text-slate-50">
          Dúvidas frequentes
        </h2>

        <Separator />

        <span className="font-normal text-base leading-6 text-slate-50">
          Esclareça possíveis dúvidas em relação aos serviços e produtos que
          oferecemos.
        </span>
      </div>

      {/* Collapsible Content */}
      <div className="pb-10 w-full">
        <Accordeon />
      </div>
    </section>
  )
}
