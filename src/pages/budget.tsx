import { motion, useScroll } from "framer-motion";
import { Check } from "phosphor-react";
import { useEffect, useState } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import ButtonInput from "../components/ButtonInput";

interface IFormInput {
  name: string;
  email: string;
  whatsApp: string;
  positionCompany: string;
  firstContact: string;
  companyMoment: string;
}

const Budget = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInput>();

  const [firstStep, setFirstStep] = useState(false);
  const [secondStep, setSecondStep] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsApp, setWhatsApp] = useState("");
  const [positionCompany, setPositionCompany] = useState("");
  const [firstContactCall, setFirstContactCall] = useState("");
  const [companyMoment, setCompanyMoment] = useState("");

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    setName(data.name);
    setEmail(data.email);
    setWhatsApp(data.whatsApp);
    setPositionCompany(data.positionCompany);
    setFirstContactCall(data.firstContact);
  };

  useEffect(() => {
    if (name && email && whatsApp && positionCompany && firstContactCall)
      setFirstStep(true);
  }, [email, firstContactCall, name, positionCompany, whatsApp]);

  const sendBudget = () => {
    const budget = {
      name,
    };

    console.log(budget);
  };

  return (
    <motion.div
      className="h-screen w-screen bg-backGroundColor "
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative min-h-screen w-screen bg-backGroundColor">
        <div className="w-full flex justify-center items-center pt-12">
          <div className="absolute w-full h-[2px] bg-black"></div>
          <div className="z-10 flex gap-10 md:gap-20 lg:gap-44">
            <div className="h-10 w-10 md:h-16 md:w-16 md:text-lg rounded-full flex justify-center items-center bg-primary_500 text-white">
              {firstStep ? <Check size={30} color="#fafafa" /> : "1"}
            </div>
            <div className="h-10 w-10 md:h-16 md:w-16 md:text-lg rounded-full flex justify-center items-center bg-primary_500 text-white">
              2
            </div>
            <div className="h-10 w-10 md:h-16 md:w-16 md:text-lg rounded-full flex justify-center items-center bg-primary_500 text-white">
              3
            </div>
            <div className="h-10 w-10 md:h-16 md:w-16 md:text-lg rounded-full flex justify-center items-center bg-primary_500 text-white">
              4
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center text-center px-6 mt-16 md:mt-20">
          {!firstStep && (
            <>
              <h1 className="text-3xl md:text-4xl text-primary_500 ">
                Check-in
              </h1>
              <p className="mt-4 md:text-lg text-primary_500 ">
                Seja bem vindo, vamos coletar algumas informações para te
                conhecer melhor
              </p>
            </>
          )}

          <div className="mt-20 md:mt-14">
            {!name && (
              <form
                className="flex flex-col items-center"
                onSubmit={handleSubmit(onSubmit)}
              >
                <label className="block text-2xl md:text-3xl">
                  Qual seu nome?
                </label>
                <input
                  className="input"
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
                <ButtonInput />
              </form>
            )}

            {name && !email && (
              <div>
                <p className="block text-base md:text-lg mb-4">
                  Olá {watch("name")}, esperamos que você esteja bem!
                </p>
                <form
                  className="flex flex-col items-center"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <label className="block text-base md:text-lg mb-4">
                    Por favor me informe seu email?
                  </label>
                  <input
                    className="input"
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
                  <ButtonInput />
                </form>
              </div>
            )}

            {name && email && !whatsApp && (
              <div>
                <form
                  className="flex flex-col items-center"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <label className="block text-base md:text-lg mb-4">
                    Você teria um telefone ou WhatsApp para contato com DDD?
                  </label>
                  <input
                    className="input"
                    {...register("whatsApp", {
                      required: true,
                      pattern: /^[0-9\b]+$/,
                      minLength: 10,
                      maxLength: 11,
                    })}
                  />
                  {errors?.whatsApp?.type === "pattern" && (
                    <p className="error">Numero invalido</p>
                  )}
                  {errors?.whatsApp?.type === "required" && (
                    <p className="error">Este campo é obrigatório</p>
                  )}
                  {errors?.whatsApp?.type === "maxLength" && (
                    <p className="error">Numero invalido</p>
                  )}
                  {errors?.whatsApp?.type === "minLength" && (
                    <p className="error">Numero invalido</p>
                  )}
                  <ButtonInput />
                </form>
              </div>
            )}

            {name && email && whatsApp && !positionCompany && (
              <form
                className="flex flex-col items-center"
                onSubmit={handleSubmit(onSubmit)}
              >
                <label className="block text-base md:text-lg mb-4">
                  Qual é o seu papel dentro da empresa?
                </label>
                <input
                  className="input"
                  {...register("positionCompany", {
                    required: true,
                    maxLength: 50,
                  })}
                />
                {errors?.positionCompany?.type === "required" && (
                  <p className="error">Este campo é obrigatório</p>
                )}
                {errors.positionCompany?.type === "maxLength" && (
                  <p className="error">Não pode ser maior que 50 caracteres</p>
                )}
                <ButtonInput />
              </form>
            )}

            {name && email && whatsApp && positionCompany && !firstContactCall && (
              <form
                className="flex flex-col items-center justify-start"
                onSubmit={handleSubmit(onSubmit)}
              >
                <p className="block text-base md:text-lg mb-4">
                  Em nosso primeiro contato você prefere:
                </p>
                <div className="w-80 pl-4 md:pl-0">
                  <label className="flex items-center py-1 gap-3">
                    <input
                      className="inputRadio"
                      type="radio"
                      value="Email"
                      {...register("firstContact")}
                    />
                    Email
                  </label>
                  <label
                    htmlFor="WhatsApp"
                    className="flex items-center py-1 gap-3"
                  >
                    <input
                      className="inputRadio"
                      type="radio"
                      value="WhatsApp"
                      {...register("firstContact")}
                    />
                    WhatsApp
                  </label>
                  <label
                    htmlFor="Ligação/Call por video"
                    className="flex items-center py-1 gap-3"
                  >
                    <input
                      className="inputRadio"
                      type="radio"
                      value="Ligação/Call"
                      {...register("firstContact")}
                    />
                    Ligação/Call por video
                  </label>
                </div>
                <ButtonInput />
              </form>
            )}
          </div>
        </div>

        <div className="flex flex-col justify-center text-center px-6 ">
          {firstStep && !secondStep && (
            <>
              <h1 className="text-3xl md:text-4xl text-primary_500 ">
                {watch("name")}, agora precisamos de algumas informações sobre
                seu negócio!
              </h1>
            </>
          )}

          <div className="mt-20 md:mt-14">
            {name &&
              email &&
              whatsApp &&
              positionCompany &&
              firstContactCall &&
              !companyMoment && (
                <form
                  className="flex flex-col items-center"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <label className="block text-base md:text-lg mb-4">
                    Qual é o momento da empresa?
                  </label>
                  <textarea
                    rows={8}
                    className="inputTextArea"
                    {...register("companyMoment", {
                      required: true,
                      maxLength: 300,
                    })}
                  />
                  {errors?.companyMoment?.type === "required" && (
                    <p className="error">Este campo é obrigatório</p>
                  )}
                  {errors.companyMoment?.type === "maxLength" && (
                    <p className="error">
                      Não pode ser maior que 300 caracteres
                    </p>
                  )}
                  <ButtonInput />
                </form>
              )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default Budget;
