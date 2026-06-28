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
        studentAcquire: "Какие навыки получит студент?",
        DurationStudy: "Срок обучения",
        title: "Чем занимается графический \n дизайнер?",
        "titleBlock": {
            "title": "Графический \n дизайнер"
        },
        image: graphicImg,
        image1: graphicImg1,
        background: graphicBg,
        mobileBackground: graphicMobileBg,
        
        description: ["2 года"],
        skills: [
            "Разработка логотипов и фирменного стиля (брендинг);",
            "Создание баннеров, буклетов, визиток и плакатов (полиграфия);",
            "Обработка изображений и графический дизайн;",
            "Подбор цветовых схем и типографики (шрифтов);",
            "Оформление постов и рекламных креативов для социальных сетей (SMM-дизайн);",
            "Разработка дизайна (UI/UX) веб-сайтов и мобильных приложений;",
            "Уверенное владение программами Adobe Photoshop, Illustrator, CorelDRAW",
        ],

        shortCourseTitle: "Краткосрочные курсы:",
        shortCourse: [
            "Графический дизайнер",
            "Пользователь ПК ",
        ],

        shortDurationTitle: "Срок обучения:",
        shortDuration: [
            "2 месяца",
            "3 месяца"
        ],
    },

    {
        id: "web-developer",
        studentAcquire: "Какие навыки получит студент?",
        DurationStudy: "Срок обучения",

        title: "Что делает Web‑разработчик?",
        "titleBlock": {
            "title": "Web- \n разработчик"
        },
        image: webImg,
        image1: webImg1,
        background: webBg,
        mobileBackground: webMobileBg,

        description: ["2 года"],

        skills: [
            "Создание сайтов и веб-приложений;",
            "Разработка дизайна и интерфейсов веб-страниц;",
            "Работа с серверами и базами данных;",
            "Поиск и устранение ошибок на сайтах;",
            "Оптимизация скорости и повышение безопасности сайтов;",
            "Адаптация под мобильные устройства;",
            "Добавление новых функций и регулярное обновление сайтов;"
        ],
        shortCourseTitle: "Краткосрочные курсы:",
        shortCourse: [
            "Разработчик Веб-сайта",
        ],

        shortDurationTitle: "Срок обучения:",
        shortDuration: [
            "5 месяцев"
        ],
    },

    {
        id: "barber",
        studentAcquire: "Какие навыки получит студент?",
        DurationStudy: "Срок обучения",

        title: "Что делает парикмахер?",
        "titleBlock": {
            "title": "Парикмахер"
        },
        image: barberImg,
        image1: barberImg1,
        background: barberBg,
        mobileBackground: barberMobileBg,
        description: [
            "2 года",
            "10 месяцев"
        ],

        skills: [
            "Женские, мужские и детские стрижки;",
            "​Окрашивание волос;",
            "​Современные техники окрашивания ",
            "волос (омбре, шатуш, балаяж,",
            "мелирование, контуринг, airtouch);",
            "Укладка и моделирование причесок;",
            "​Завивка волос;",
            "​Уход за волосами;",
            "​Виды плетения кос (волос);",
        ],
        shortCourseTitle: "Краткосрочные курсы:",
        shortCourse: [
            "Парикмахер",
            "Визажист",
            "Мастер ногтевого сервиса ",
            "Мужской парикмахер (Barber)",
        ],

        shortDurationTitle: "Срок обучения:",
        shortDuration: [
            "3-6 месяцев",
            "До 2 месяцев",
            "2 месяца",
            "До 2 месяцев",
        ],
    },

    {
        id: "repair",
        studentAcquire: "Какие навыки получит студент?",
        DurationStudy: "Срок обучения",

        title: "Чем занимается мастер \n по ремонту техники?",
        "titleBlock": {
            "title": "Мастер по ремонту \n бытовой техники"
        },
        image: repairImg,
        image1: repairImg1,
        background: repairBg,
        mobileBackground: repairMobileBg,

        description: [
            "2 года",
            "10 месяцев"
        ],

        skills: [
            "Ремонт бытовой техники (чайники, утюги, пылесосы, кондиционеры, стиральные машины, плиты и др.);",
            "Ремонт холодильников;",
            "Диагностика, ремонт и техническое обслуживание бытовой техники;,"
        ],
        shortCourseTitle: "Краткосрочные курсы:",
        shortCourse: [
            "Слесарь по ремонту холодильной техники",
        ],

        shortDurationTitle: "Срок обучения:",
        shortDuration: [
            "3 месяца"
        ],
    },

    {
        id: "sewing",
        studentAcquire: "Какие навыки получит студент?",
        DurationStudy: "Срок обучения",

        title: "Что делает швея‑кройщик?",
        "titleBlock": {
            "title": "Швея - кройщик"
        },
        image: sewingImg,
        image1: sewingImg1,
        background: sewingBg,
        mobileBackground: sewingMobileBg,
        description: [
            "2 года",
            "10 месяцев"
        ],

        skills: [
            "Основы моделирования и кроя",
            "Работа с промышленным и бытовым оборудованием",
            "Пошив повседневной и праздничной одежды",
            "Знание тканей и фурнитуры",
            "Исправление и ремонт одежды",
        ],
        shortCourseTitle: "Краткосрочные курсы:",
        shortCourse: [
            "Швея",
            "Закройщик",
            "Раскройщик",
            "Слесарь ремонтник швейного оборудования",
        ],

        shortDurationTitle: "Срок обучения:",
        shortDuration: [
            "1,5-3 месяца",
            "3 месяца",
            "2 месяца",
            "3 месяца",
        ],
    },

    {
        id: "system-admin",
        studentAcquire: "Какие навыки получит студент?",
        DurationStudy: "Срок обучения",

        title: "Кто такой системный \n администратор?",
        "titleBlock": {
            "title": "Системный \n администратор"
        },
        image: adminImg,
        image1: adminImg1,
        background: adminBg,
        mobileBackground: adminMobileBg,
        description: ["2 года"],

        skills: [
            "Установка и настройка компьютеров и операционных систем (Windows, Linux);",
            "Проектирование, создание и администрирование компьютерных сетей;",
            "Установка, настройка и обслуживание серверов;",
            "Настройка интернета и беспроводных сетей Wi-Fi;",
            "Защита данных и создание резервных копий (бэкап);",
            "Установка и обновление программного обеспечения;",
            "Диагностика и устранение технических неисправностей;",
            "Техническая поддержка и консультирование пользователей;",
        ],
        shortCourseTitle: "Краткосрочные курсы:",
        shortCourse: [
            "Системный администратор",
        ],

        shortDurationTitle: "Срок обучения:",
        shortDuration: [
            "3 месяца"
        ],
    },
];