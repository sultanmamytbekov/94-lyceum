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
        translationKey: "graphicDesigner",
        image: graphicImg,
        image1: graphicImg1,
        background: graphicBg,
        mobileBackground: graphicMobileBg,
    },

    {
        id: "web-developer",
        translationKey: "webDeveloper",
        image: webImg,
        image1: webImg1,
        background: webBg,
        mobileBackground: webMobileBg,
    },

    {
        id: "barber",
        translationKey: "barber",
        image: barberImg,
        image1: barberImg1,
        background: barberBg,
        mobileBackground: barberMobileBg,
    },

    {
        id: "repair",
        translationKey: "repair",
        image: repairImg,
        image1: repairImg1,
        background: repairBg,
        mobileBackground: repairMobileBg,
    },

    {
        id: "sewing",
        translationKey: "sewing",
        image: sewingImg,
        image1: sewingImg1,
        background: sewingBg,
        mobileBackground: sewingMobileBg,
    },

    {
        id: "system-admin",
        translationKey: "systemAdmin",
        image: adminImg,
        image1: adminImg1,
        background: adminBg,
        mobileBackground: adminMobileBg,
    },
];