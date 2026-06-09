import graphicImg from "@/app/components/Professions/images/graphic.png";
import webImg from "@/app/components/Professions/images/web.png";
import barberImg from "@/app/components/Professions/images/barber.png";
import repairImg from "@/app/components/Professions/images/repair.png";
import sewingImg from "@/app/components/Professions/images/sewing.png";
import adminImg from "@/app/components/Professions/images/admin.png";

import graphicImg1 from "./image/graphic.svg";
import webImg1 from "./image/web.svg";
import barberImg1 from "./image/barber.svg";
import repairImg1 from "./image/repair.svg";
import sewingImg1 from "./image/sewing.svg";
import adminImg1 from "./image/admin.svg";

import graphicBg from "./image/graphic-bg.png";
import webBg from "./image/web-bg.png";
import barberBg from "./image/barber-bg.png";
import repairBg from "./image/repair-bg.png";
import sewingBg from "./image/sewing-bg.png";
import adminBg from "./image/admin-bg.png";

import graphicMobileBg from "./image/graphicT.png";
import webMobileBg from "./image/webT.png";
import barberMobileBg from "./image/barberT.png";
import repairMobileBg from "./image/repairT.png";
import sewingMobileBg from "./image/sewingT.png";
import adminMobileBg from "./image/adminT.png";

export const professions = [
    {
        id: "graphic-designer",

        title: "graphicDesigner.title",
        image: graphicImg,
        image1: graphicImg1,
        background: graphicBg,
        duration: "📚 …",
        mobileBackground: graphicMobileBg,

        description:
            "📘 …",
        skills: [
            "Работа в Photoshop, Illustrator, Figma",
            "Создание логотипов и фирменного стиля",
            "Композиция, типографика, цвет",
            "Дизайн для соцсетей и рекламных материалов",
        ],
    },

    {
        id: "web-developer",

        title: "webDeveloper.title",

        image: webImg,
        image1: webImg1,
        background: webBg,
        duration: "📚 …",
        mobileBackground: webMobileBg,

        description:
            "📘 …",

        skills: [
            "HTML, CSS, JavaScript",
            "React, Vue …",
            "Основы серверной разработки …",
            "Git и командная работа",
        ],
    },

    {
        id: "barber",

        title: "barber.title",

        image: barberImg,
        image1: barberImg1,
        background: barberBg,
        duration: "✂️ …",
        mobileBackground: barberMobileBg,
        description:
            "💇 …",

        skills: [
            "Основы парикмахерского искусства",
            "Мужские и женские стрижки",
            "Укладка и окрашивание волос",
            "Санитарные нормы и гигиена",
            "Работа с клиентами",
        ],
    },

    {
        id: "repair",

        title: "repair.title",

        image: repairImg,
        image1: repairImg1,
        background: repairBg,
        duration: "🔧 …",
        mobileBackground: repairMobileBg,

        description:
            "⚙️ …",

        skills: [
            "Работа с различной бытовой техникой",
            "Навыки пайки и диагностики",
            "Основы электробезопасности",
            "Чтение технической документации",
            "Консультирование клиентов",
        ],
    },

    {
        id: "sewing",

        title: "sewing.title",

        image: sewingImg,
        image1: sewingImg1,
        background: sewingBg,
        duration: "🧵 …",
        mobileBackground: sewingMobileBg,

        description:
            "✂️ …",

        skills: [
            "Основы моделирования и кроя",
            "Работа с промышленным и бытовым оборудованием",
            "Пошив повседневной и праздничной одежды",
            "Знание тканей и фурнитуры",
            "Исправление и ремонт одежды",
        ],
    },

    {
        id: "system-admin",

        title: "systemAdmin.title",

        image: adminImg,
        image1: adminImg1,
        background: adminBg,
        duration: "💻 …",
        mobileBackground: adminMobileBg,
        description:
            "🖥 …",

        skills: [
            "Настройка Windows / Linux",
            "Сети и маршрутизация",
            "Backup и восстановление",
            "Информационная безопасность",
            "Сборка и обслуживание ПК",
        ],
    },
];