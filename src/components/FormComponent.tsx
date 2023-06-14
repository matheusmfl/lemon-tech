'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Separator } from './Separator'

const FormComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data: any) => {
    console.log(data)
    // Faça algo com os dados do formulário, como enviar para um servidor
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Main Container */}
      <div className="px-3 py-6 flex flex-col gap-6 rounded-b-lg shadow-md">
        {/* Dados name separator container */}
        <div className="flex flex-col gap-6">
          <span className="text-neutral-900 font-normal text-2xl">Dados</span>
          <Separator />
        </div>
        {/* Inputs Form Data Container */}
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <label>Nome:</label>
            <input
              {...register('nome', { required: true })}
              className="rounded-[4px] shadow-md h-12 py-2 px-4 text-gray-600"
            />
            {errors.nome && <span>O nome é obrigatório.</span>}
          </div>

          <div className="flex flex-col gap-1">
            <label>Email:</label>
            <input
              {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
              className="rounded-[4px] shadow-md h-12 py-2 px-4 text-gray-600"
            />
            {errors.email && <span>O email é inválido ou obrigatório.</span>}
          </div>

          <div className="flex flex-col gap-1">
            <label>Telefone:</label>
            <input
              {...register('telefone', { required: true })}
              className="rounded-[4px] shadow-md h-12 py-2 px-4 text-gray-600"
            />
            {errors.telefone && <span>O telefone é obrigatório.</span>}
          </div>

          <div className="flex flex-col gap-1">
            <label>Mensagem:</label>
            <textarea
              {...register('mensagem', { required: true })}
              className="rounded-[4px] shadow-md h-40 py-2 px-4 text-gray-600"
              defaultValue="Olá, gostaria de um orçamento para minha empresa"
            />
            {errors.mensagem && <span>A mensagem é obrigatória.</span>}
          </div>

          <button
            type="submit"
            className="bg-teal-700 py-[10px] font-medium text-slate-50 text-base rounded mt-5"
          >
            Enviar
          </button>
        </div>
      </div>
    </form>
  )
}

export default FormComponent
