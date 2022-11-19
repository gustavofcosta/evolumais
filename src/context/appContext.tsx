import { createContext, ReactNode, useContext, useState } from "react";

import {
  LinkProps,
  links,
  social,
  SocialProps,
  whyUs,
  WhyUsProps,
  whatWeDo,
  WhatWeDoProps,
} from "../data/data";

interface ChildrenProps {
  children: ReactNode;
}

interface InitialContextInterface {
  isSidebarOpen: boolean;
  links: LinkProps[];
  social: SocialProps[];
  whyUs: WhyUsProps[];
  whatWeDo: WhatWeDoProps[];
  toggleSidebar: () => void;
}

export const AppContext = createContext<InitialContextInterface>(
  {} as InitialContextInterface
);

export const AppProvider = ({ children }: ChildrenProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <AppContext.Provider
      value={{ isSidebarOpen, toggleSidebar, links, social, whyUs, whatWeDo }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
