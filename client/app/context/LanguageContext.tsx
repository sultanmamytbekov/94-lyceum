"use client";

import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

type Language = "ru" | "kg";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  scrollToSection: (id: string) => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>("ru");

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };
//  https://69b1accaadac80b427c5f205.mockapi.io/sultanBase
  // ✅ ВОТ ТАК ПРАВИЛЬНО
  useEffect(() => {
    axios
      .get("https://6a417d821ff1d27becc192ae.mockapi.io/94-Litseu/94_Litseu")
      .then((response) => {
        console.log("Fetched news:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  }, []); // ← обязательно пустой массив

  return (
    <LanguageContext.Provider value={{ language, setLanguage, scrollToSection }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
};