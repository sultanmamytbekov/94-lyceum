'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

import logo from './image/Group 1.png';
import kg from './image/kg.svg';
import rus from './image/rus.svg';
import usa from './image/swa.svg';
import { usePathname, useRouter } from "next/navigation";
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';

export default function Header() {
  const t = useTranslations();
  const navItems = [
    {
      id: 'contacts',
      label: t('header.contacts'),
    },
    {
      id: 'about',
      label: t('header.about'),
    },
    {
      id: 'professions',
      label: t('header.professions'),
    },
    {
      id: 'home',
      label: t('header.home'),
    },
    {
      id: 'advantages',
      label: t('header.advantages'),
    },
    {
      id: 'documents',
      label: t('header.documents'),
    },
  ];
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [logoClicks, setLogoClicks] = useState(0);
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [adminCode, setAdminCode] = useState("");
  const [codeError, setCodeError] = useState(false);
  const changeLanguage = (newLocale: string) => {
    const segments = pathname.split('/');

    segments[1] = newLocale;

    router.push(segments.join('/'));
  };
  const handleLogoClick = () => {
    const newCount = logoClicks + 1;

    setLogoClicks(newCount);

    if (newCount >= 5) {
      setShowAdminModal(true);
      setLogoClicks(0);
    }

    setTimeout(() => {
      setLogoClicks(0);
    }, 2000);
  };
  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY;

      // в самом верху всегда показываем
      if (currentScrollY < 40) {
        setShowHeader(true);
      }

      // вниз
      else if (currentScrollY > lastScrollY) {
        setShowHeader(false);
      }

      // вверх
      else {
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlHeader);

    return () => {
      window.removeEventListener('scroll', controlHeader);
    };
  }, [lastScrollY]);

  useEffect(() => {
    const sections = navItems.map((item) =>
      document.getElementById(item.id)
    );

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      for (let index = sections.length - 1; index >= 0; index--) {
        const section = sections[index];

        if (!section) continue;

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActive(navItems[index].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <header
        className={`
    fixed
    top-0
    left-0

    w-full
    h-[106px]

    bg-gradient-to-r
    from-[#f5f1f1]
    to-[#9b9b9b]

    flex
    items-center
    justify-between

    px-[12px]
    md:px-[24px]

    z-50

    transition-all
    duration-500

    ${showHeader
            ? 'translate-y-0'
            : '-translate-y-full'
          }
  `}
      >
        {/* LOGO */}
        <img
          onClick={handleLogoClick}
          src={logo.src}
          alt="logo"
          className="
            w-[74px]
            h-[74px]
            md:w-[96px]
            md:h-[96px]
            object-contain
            shrink-0
          "
        />

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex flex-1 items-center justify-center gap-[18px] mt-[33px]">

          {/* NEWS BUTTON */}
          <button
            onClick={() => router.push("/news")}
            className="
      h-[42px]
      px-[22px]

      rounded-full

      border
      border-[#bdbdbd]

      bg-[#dcdcdc]/55

      backdrop-blur-md

      shadow-[0_6px_18px_rgba(0,0,0,0.24)]

      text-[16px]
      text-black
      font-[var(--font-inter)]

      transition-all
      duration-300

      hover:scale-[1.03]
    "
          >
            {t('header.news')}
          </button>

          {/* MAIN NAV */}
          <div
            className="
    relative
    flex
    items-center
    gap-[8px]

    w-[820px]

    h-[42px]

    p-[4px]

    rounded-full

    border
    border-[#9d9d9d]

    bg-[#bdbdbd]/35

    backdrop-blur-md

    shadow-[0_8px_20px_rgba(0,0,0,0.26)]
  "
          >

            {/* SLIDER */}
            <div
              className="
                absolute
                top-[4px]
                bottom-[4px]
                rounded-full
                bg-[#ededed]
                shadow-[0_2px_10px_rgba(0,0,0,0.18)]
                transition-all
                duration-500
                ease-in-out
              "
              style={{
                width: `calc(${100 / navItems.length}% - 8px)`,
                left: `calc(${navItems.findIndex((item) => item.id === active) *
                  (100 / navItems.length)
                  }% + 4px)`,
              }}
            />

            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActive(item.id);

                  const section = document.getElementById(item.id);

                  if (section) {
                    section.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                    });
                  }
                }}
                className="
                  relative
                  z-10
                  w-[145px]
                  h-[34px]
                  flex
                  items-center
                  justify-center
                  text-[15px]
                //   font-[400]
                  font-[var(--font-inter)]
                  text-[#000000]
                  whitespace-nowrap
                "
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
        {/* FLAGS DESKTOP */}
        <div className="hidden lg:flex items-center gap-[10px] mt-[33px] shrink-0">
          <img
            src={rus.src}
            alt="ru"
            onClick={() => changeLanguage('ru')}
            className="
    w-[28px]
    h-[28px]
    cursor-pointer
    hover:scale-110
    transition
  "
          />

          <img
            src={kg.src}
            alt="kg"
            onClick={() => changeLanguage('kg')}
            className="
    w-[28px]
    h-[28px]
    cursor-pointer
    hover:scale-110
    transition
  "
          />

          <img
            src={usa.src}
            alt="en"
            onClick={() => changeLanguage('en')}
            className="
    w-[28px]
    h-[28px]
    cursor-pointer
    hover:scale-110
    transition
  "
          />
        </div>

        {/* BURGER BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            lg:hidden
            w-[46px]
            h-[46px]
            rounded-full
            bg-white/30
            backdrop-blur-md
            border
            border-white/30
            flex
            items-center
            justify-center
            shadow-[0_4px_12px_rgba(0,0,0,0.16)]
          "
        >
          {menuOpen ? (
            <X size={24} color="#222" />
          ) : (
            <Menu size={24} color="#222" />
          )}
        </button>
      </header >
      <>
        {showAdminModal && (
          <div
            className="
      fixed
      inset-0
      z-[200]
      bg-black/40
      backdrop-blur-[4px]
      flex
      items-center
      justify-center
      px-4
    "
          >
            <div
              className="
        w-full
        max-w-[380px]
        rounded-[32px]
        border
        border-white/20
        bg-white/20
        backdrop-blur-[30px]
        p-6
        shadow-[0_10px_40px_rgba(0,0,0,0.25)]
      "
            >
              <h2
                className="
          text-center
          text-white
          text-[28px]
          font-semibold
          mb-5
        "
              >
                Вход
              </h2>

              <input
                type="password"
                value={adminCode}
                onChange={(e) =>
                  setAdminCode(e.target.value)
                }
                placeholder="Введите код"
                className={`
  w-full
  h-[54px]
  rounded-full
  px-5
  outline-none
  text-black
  transition-all
  duration-300

  ${codeError
                    ? `
        bg-red-400/40
        border
        border-red-500
        animate-[shake_0.35s_ease-in-out]
      `
                    : `
        bg-white/70
        border
        border-transparent
      `
                  }
`}
              />
              {
                codeError && (
                  <p
                    className="
        text-red-300
        text-[14px]
        mt-2
        ml-2
        animate-pulse
      "
                  >
                    Неверный код доступа
                  </p>
                )
              }

              <div className="flex gap-3 mt-5">
                <button
                  onClick={() => {
                    setShowAdminModal(false);
                    setAdminCode("");
                  }}
                  className="
            flex-1
            h-[52px]
            rounded-full
            bg-white/30
            text-white
          "
                >
                  Закрыть
                </button>

                <button
                  onClick={() => {
                    if (adminCode === "admin123") {
                      router.push("/addnews");

                      setShowAdminModal(false);

                      setAdminCode("");

                      setCodeError(false);
                    } else {
                      setCodeError(true);

                      navigator.vibrate?.(120);

                      setTimeout(() => {
                        setCodeError(false);
                      }, 500);
                    }
                  }}
                  className="
            flex-1
            h-[52px]
            rounded-full
            bg-white
            text-black
            font-semibold
          "
                >
                  Войти
                </button>
              </div>
            </div>
          </div>
        )}
      </>
      {/* MOBILE MENU */}
      < div
        className={`
          fixed
          top-0
          left-0
          h-screen
          w-[290px]
          bg-[#808080]/45
          backdrop-blur-xl
          border-r
          border-white/20
          shadow-[0_10px_40px_rgba(0,0,0,0.25)]
          z-[100]
          transition-all
          duration-500
          ease-in-out
          pt-[24px]
          px-[20px]
          ${menuOpen
            ? 'translate-x-0 opacity-100'
            : '-translate-x-full opacity-0'
          }
        `}
      >
        {/* CLOSE */}
        <div className="flex justify-end mb-[10px]" >
          <button
            onClick={() => setMenuOpen(false)}
            className="
              w-[42px]
              h-[42px]
              rounded-full
              bg-white/20
              flex
              items-center
              justify-center
            "
          >
            <X size={24} color="white" />
          </button>
        </div >

        {/* MOBILE NAV */}
        <div className="flex flex-col gap-[14px] mt-[20px]" >

          {
            navItems.map((item) => {
              const isActive = active === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActive(item.id);

                    const section = document.getElementById(item.id);

                    if (section) {
                      section.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                      });
                    }

                    setMenuOpen(false);
                  }}
                  className={`
                  h-[52px]
                  rounded-full
                  text-[18px]
                  font-[var(--font-inter)]
                //   font-[400]
                  flex
                  items-center
                  justify-center
                  transition-all
                  duration-300
                  border
                  ${isActive
                      ? `
                        bg-[#ececec]
                        text-[#111]
                        border-white/40
                        shadow-[0_4px_15px_rgba(0,0,0,0.18)]
                      `
                      : `
                        bg-[#9f9f9f]/35
                        text-[#111]
                        border-[#bdbdbd]
                      `
                    }
                `}
                >
                  {item.label}
                </button>
              );
            })
          }
          <button
            onClick={() => {
              const section = document.getElementById(t('header.news'));
              router.push("/news");
              if (section) {
                section.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                });
              }

              setMenuOpen(false);
            }}
            className="
    h-[52px]

    rounded-full

    text-[18px]

    font-[var(--font-inter)]

    flex
    items-center
    justify-center

    bg-[#ececec]

    text-[#111]

    border
    border-white/40

    shadow-[0_4px_15px_rgba(0,0,0,0.18)]
  "
          >
            {t('header.news')}
          </button>
        </div >

        {/* FLAGS MOBILE */}
        < div className="flex justify-center gap-[14px] mt-[34px]" >
          <img
            src={rus.src}
            alt="ru"
            onClick={() => changeLanguage('ru')}
            className="
    w-[28px]
    h-[28px]
    cursor-pointer
    hover:scale-110
    transition
  "
          />

          <img
            src={kg.src}
            alt="kg"
            onClick={() => changeLanguage('kg')}
            className="
    w-[28px]
    h-[28px]
    cursor-pointer
    hover:scale-110
    transition
  "
          />

          <img
            src={usa.src}
            alt="en"
            onClick={() => changeLanguage('en')}
            className="
    w-[28px]
    h-[28px]
    cursor-pointer
    hover:scale-110
    transition
  "
          />
        </div >
      </div >

      {/* BACKDROP */}
      {
        menuOpen && (
          <div
            onClick={() => setMenuOpen(false)}
            className="
            fixed
            inset-0
            bg-black/30
            backdrop-blur-[2px]
            z-[90]
            lg:hidden
          "
          />
        )
      }
    </>
  );
}