import FormComponent from '@/components/FormComponent'

export default function Contact() {
  return (
    <section className="px-6 py-10 bg-slate-200">
      {/* Container Acima do form */}
      <div className="bg-neutral-900 pt-[88px] pb-6 px-3 rounded-t-lg shadow-md relative overflow-hidden">
        {/* Container BGGradient */}
        <div
          className="absolute bottom-0 h-[271px] lg:top-1/2 w-[208px] md:h-[344px] md:w-[275px] lg:w-[363px] lg:h-[450px] rounded-full -translate-x-1/2
     opacity-50 blur-full bg-gradient-image"
        />
        <span className="text-slate-50 font-semibold text-[40px]">Contato</span>
      </div>
      {/* Form */}
      <FormComponent />
    </section>
  )
}
