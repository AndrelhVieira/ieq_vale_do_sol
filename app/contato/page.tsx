'use client'

import React from 'react'
import emailjs from 'emailjs-com'
import { SubmitHandler, useForm } from 'react-hook-form'

type FormDataType = {
  user_name: string
  user_email: string
  subject: string
  message: string
}

const Contato = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataType>()

  const sendEmail: SubmitHandler<FormDataType> = (data) => {
    emailjs
      .send(
        'YOUR_SERVICE_ID', // TODO: Replace with your actual EmailJS service ID
        'YOUR_TEMPLATE_ID', // TODO: Replace with your actual EmailJS template ID
        data, // Pass the data object directly
        'YOUR_USER_ID' // TODO: Replace with your actual EmailJS user ID (public key)
      )
      .then(
        (result) => {
          console.log(result.text)
          alert('Mensagem enviada com sucesso!')
        },
        (error) => {
          console.log(error.text)
          alert('Falha ao enviar a mensagem, tente novamente.')
        }
      )
  }

  return (
    <section>
      <h1 className="text-center text-4xl font-bold sm:text-5xl">Contato</h1>

      <p className="text-secondary text-feedback text-tertiary mt-5 text-center text-xl font-semibold text-custom-dark-primary">
        Entre em contato conosco enviando uma mensagem
      </p>

      <form onSubmit={handleSubmit(sendEmail)} className="mt-10 space-y-4">
        <div>
          <input
            type="text"
            {...register('user_name', { required: 'Nome é obrigatório' })}
            placeholder="Nome"
            className={`w-full rounded-3xl border-2  p-2 pl-4 outline-none placeholder:font-bold ${errors.user_name ? 'border-custom-error placeholder:text-custom-error' : 'border-custom-dark-secondary'}`}
          />
          {errors.user_name && (
            <p className="mt-1 text-sm text-custom-error">{errors.user_name.message}</p>
          )}
        </div>
        <div>
          <input
            type="email"
            {...register('user_email', {
              required: 'Email é obrigatório',
              pattern: { value: /^\S+@\S+$/i, message: 'Email inválido' },
            })}
            placeholder="Email"
            className={`w-full rounded-3xl border-2  p-2 pl-4 outline-none placeholder:font-bold ${errors.user_email ? 'border-custom-error placeholder:text-custom-error' : 'border-custom-dark-secondary'}`}
          />
          {errors.user_email && (
            <p className="mt-1 text-sm text-custom-error">{errors.user_email.message}</p>
          )}
        </div>
        <div>
          <input
            type="text"
            {...register('subject', { required: 'Assunto é obrigatório' })}
            placeholder="Assunto"
            className={`w-full rounded-3xl border-2  p-2 pl-4 outline-none placeholder:font-bold ${errors.subject ? 'border-custom-error placeholder:text-custom-error' : 'border-custom-dark-secondary'}`}
          />
          {errors.subject && (
            <p className="mt-1 text-sm text-custom-error">{errors.subject.message}</p>
          )}
        </div>
        <div>
          <textarea
            {...register('message', { required: 'Mensagem é obrigatória' })}
            placeholder="Mensagem"
            className={`w-full rounded-3xl border-2  p-2 pl-4 outline-none placeholder:font-bold ${errors.message ? 'border-custom-error placeholder:text-custom-error' : 'border-custom-dark-secondary'}`}
          ></textarea>
          {errors.message && (
            <p className="mt-1 text-sm text-custom-error">{errors.message.message}</p>
          )}
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full max-w-sm rounded-3xl bg-custom-dark-primary px-4 py-2 font-bold text-[#fff]"
          >
            Enviar
          </button>
        </div>
      </form>
    </section>
  )
}

export default Contato
