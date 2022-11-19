import { useState } from "react";
import { motion } from "framer-motion";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInput>();

  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    setName(data.name);
    setEmail(data.email);
    setMessage(data.message);
  };

  return (
    <motion.section
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col bg-primary_500 min-h-screen w-screen items-center justify-center lg:flex-row lg:gap-4 "
    >
      <div className="flex flex-col items-center justify-center m-2 gap-8 lg:gap-20 text-white mb-20 lg:mr-72">
        <figure className="h-32 w-32 lg:h-44 lg:w-44 cursor-pointer">
          <a href="/">
            <img
              className="w-full"
              src="/images/logo.svg"
              width={10}
              height={10}
              alt="Logo evolumais"
            />
          </a>
        </figure>
        <div className="space-y-3">
          <h1 className="text-3xl font-bold lg:text-4xl">{"Let's talk"}</h1>
          <p className="text-center text-base">Vamos conversar...</p>
        </div>
        <ul className="space-y-2">
          <li className="flex gap-4 text-base lg:text-xl">
            <figure className="h-6 w-6 lg:h-8 lg:w-8">
              <img
                className="w-full"
                src="/images/telefone.svg"
                width={5}
                height={5}
                alt="icon telefone"
              />
            </figure>
            (19) 98982-2000
          </li>
          <li className="flex gap-4 text-base lg:text-xl ">
            <figure className="h-6 w-6 lg:h-8 lg:w-8">
              <img
                className="w-full"
                src="/images/email.svg"
                width={5}
                height={5}
                alt="icon email"
              />
            </figure>
            agenciaevolumais@gmail.com
          </li>
        </ul>
      </div>
      <div className=" text-white mb-16">
        <h1 className="text-right uppercase text-4xl mb-10 lg:mb-32">
          Fale conosco
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col space-y-2">
            <div className="lg:flex lg:gap-10 ">
              <label htmlFor="name">
                <p className="uppercase">Nome</p>
                <input
                  className="bg-inherit border-b border-gray-50 h-7 lg:h-10 focus:outline-none focus:border-b focus:border-secondary_500 mb-1 text-gray-400 w-full"
                  {...register("name", {
                    required: true,
                    maxLength: 20,
                    pattern: /([A-Za-z]\s?){3,20}$/g,
                  })}
                />
                {errors?.name?.type === "required" && (
                  <p className="error">Este campo é obrigatório</p>
                )}
                {errors.name?.type === "maxLength" && (
                  <p className="error">
                    Nome não pode ser maior que 20 caracteres
                  </p>
                )}
                {errors.name?.type === "pattern" && (
                  <p className="error">Somente letras alfabéticas</p>
                )}
              </label>
              <label htmlFor="email">
                <p className="uppercase">Email</p>
                <input
                  className="mb-1 bg-inherit border-b border-gray-50 h-7 lg:h-10 w-full focus:outline-none focus:border-b focus:border-secondary_500 text-gray-400"
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  })}
                />
                {errors?.email?.type === "required" && (
                  <p className="error">Este campo é obrigatório</p>
                )}
                {errors?.email?.type === "pattern" && (
                  <p className="error">E-mail invalido</p>
                )}
              </label>
            </div>
            <label htmlFor="message">
              <p className="uppercase ">Mensagem</p>
              <textarea
                className="w-full h-36 bg-inherit border-b border-gray-50 focus:outline-none focus:border-b focus:border-secondary_500 lg:h-28 text-gray-400"
                {...register("message", {
                  required: true,
                  minLength: 100,
                  maxLength: 800,
                })}
              />
              {errors?.message?.type === "required" && (
                <p className="error">Este campo é obrigatório</p>
              )}
              {errors.message?.type === "minLength" && (
                <p className="error">Não pode ser menor que 100 caracteres</p>
              )}
              {errors.message?.type === "maxLength" && (
                <p className="error">Não pode ser maior que 800 caracteres</p>
              )}
            </label>
          </div>
          <button
            className="w-full bg-white text-primary_700 font-semibold rounded-full mt-2 p-1 text-lg hover:bg-secondary_500 transition-all duration-300 lg:w-40"
            type="submit"
          >
            Enviar
          </button>
        </form>
      </div>
    </motion.section>
  );
};
export default Contact;
