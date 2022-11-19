export interface LinkProps {
  id: number;
  url: string;
  name: string;
}
export interface SocialProps {
  id: number;
  name: string;
  icon: string;
  url: string;
}

export interface WhyUsProps {
  id: number;
  icon: string;
  name: string;
  description: string;
}

export interface WhatWeDoProps {
  id: number;
  name: string;
  description: string;
}

export const links: LinkProps[] = [
  {
    id: 1,
    url: '#about',
    name: 'Sobre',
  },
  {
    id: 2,
    url: '#cases',
    name: 'Cases',
  },
  {
    id: 3,
    url: '#whyUs',
    name: 'Porque nós',
  },
  {
    id: 4,
    url: '#whatWeDo',
    name: 'O que fazemos',
  },
];

export const social: SocialProps[] = [
  {
    id: 1,
    name: 'instagram',
    icon: '/images/instagram.svg',
    url: 'https://www.instagram.com/studioevolumais',
  },
  {
    id: 2,
    name: 'behance',
    icon: '/images/behance.svg',
    url: 'https://www.behance.net/gabrielesantos13',
  },
  {
    id: 3,
    name: 'whatsap',
    icon: '/images/whatsap.svg',
    url: 'https://api.whatsapp.com/send?phone=5519992712982',
  },
];

export const whyUs: WhyUsProps[] = [
  {
    id: 1,
    icon: '/images/tecnica.svg',
    name: 'TÉCNICA',
    description:
      'Para construir uma marca autêntica e sólida, é realizado  um planejamento detalhado de acordo com o briefing e as reuniões, após é criado mapas mentais, painéis conceituais entre outros. ',
  },
  {
    id: 2,
    icon: '/images/metodologia.svg',
    name: 'METODOLOGIA',
    description:
      'Passamos por etapas e estudos do seu nicho de mercado para compreender o universo em que sua marca está inserida.',
  },
  {
    id: 3,
    icon: '/images/confianca.svg',
    name: 'CONFIANÇA',
    description:
      'Você verá o processo de todas as decisões e escolhas para o projeto e o motivo por elas serem escolhidas e apos o projeto ser concluído explicaremos tudo para que não haja dúvidas ',
  },
  {
    id: 4,
    icon: '/images/alinhamento.svg',
    name: 'ALINHAMENTO',
    description:
      'As reuniões são essenciais para alinhar as expectativas e debatermos se o caminho que o projeto está seguindo está de acordo com o que você pensou..',
  },
  {
    id: 5,
    icon: '/images/conceito.svg',
    name: 'CONCEITO',
    description:
      'É a construção de uma marca autêntica. atrelado no seu próprio DNA , criado para ser durável e que possa agregar hábitos sustentáveis em vista do futuro e das futuras gerações. ',
  },
  {
    id: 6,
    icon: '/images/transparencia.svg',
    name: 'TRANSPARÊNCIA',
    description:
      'Você irá participar de todas as etapas que forem necessárias para o desenvolvimento do projeto. ',
  },
];

export const whatWeDo: WhatWeDoProps[] = [
  {
    id: 1,
    name: 'Designer Web',
    description:
      'Somos uma agência de web design que cria sites combinando estrategicamente a experiência do usuário e narrativa da marca. Nossos web designers e desenvolvedores criam sites responsivos que se sentem em casa em qualquer dispositivo. Páginas de destino do produto, sites de marketing ou UX UI para intranet da empresa',
  },
  {
    id: 2,
    name: 'Design gráfico',
    description:
      'Nossa agência possui profissionais responsáveis pela realização de diversas tarefas como a de criar conceitos de produtos, entendendo todos os conceitos da parte artística e funcional do projeto. Ele também pode montar a comunicação visual de marcas, criando propagandas, fachadas, adesivos, panfletos, anúncios, entre outras peças. Além disso, ele pode fazer logotipos, marcas, tipografias, animações, embalagens e design de páginas da web.',
  },
  {
    id: 3,
    name: 'Desenvolvimento',
    description:
      'Nossa agência de design e desenvolvimento full-stack fornece serviços de front-end, back-end e de desenvolvimento de aplicativos, trabalhando em estreita colaboração com nossos desenhistas, como UX UI.',
  },
  {
    id: 4,
    name: 'Identidade visual',
    description:
      'Uma marca hoje tem tudo a ver com os sentimentos dos clientes. Não é apenas um logotipo, identidade visual ou projeto de produtos digitais. mas sim um sistema coeso que abrange todas as mídias e pontos de contato. Somos uma agência de branding que oferece uma experiência completa',
  },
  {
    id: 5,
    name: 'Experiência do usuário',
    description:
      'O design UI/UX é um fator definidor para qualquer produto nos dias de hoje. Somos uma agência de design focada em melhorar a conversão e o aumentando de engajamento do cliente. Nosso design de UI/UX não param em aplicativos móveis, web aplicativos ou experiências digitais multiplataforma. Como agência de UX design, criamos produtos e serviços que oferecem excelente usabilidade',
  },
  {
    id: 6,
    name: 'Estrategista de conteúdo',
    description:
      'Iniciamos cada nova parceria de design de produto digital com uma fase de descoberta em profundidade para mergulhar nós mesmos em seu negócio. Nossos designers de UX entrevista as partes interessadas, realizar pesquisas de usuários, analise de concorrência e consolidação de conteúdo. O resultado é um plano de ação na execução da marca e experiência do usuário.',
  },
  {
    id: 7,
    name: 'Tráfego pago',
    description:
      'O tráfego pago pode ter um impacto extremamente positivo no seu site se for cuidadosamente planejado e executado. Um dos benefícios é escolher exatamente quanto você quer gastar para direcionar melhor o tráfego pago para o seu site. Além disso, você pode definir um valor máximo diário que deseja gastar em determinados tipos de publicidade (Pay Per Click).',
  },
];
