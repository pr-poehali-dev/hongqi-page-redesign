import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

const CAR_SIDE = "https://cdn.poehali.dev/projects/99d3a9ba-d6ba-4015-b615-ac05842c84a6/files/10122b1a-10b5-4414-9ed1-cbb411e1009f.jpg";
const CAR_INTERIOR = "https://cdn.poehali.dev/projects/99d3a9ba-d6ba-4015-b615-ac05842c84a6/files/1f0447a3-0632-4bd9-9816-12e2f47ae69e.jpg";
const CAR_FRONT = "https://cdn.poehali.dev/projects/99d3a9ba-d6ba-4015-b615-ac05842c84a6/files/4ba88534-a86d-47ca-abeb-061ee4fa7c0c.jpg";

const COLOR_OPTIONS = [
  { name: "Обсидиановый чёрный", hex: "#0D0D0D", img: CAR_SIDE },
  { name: "Арктический белый", hex: "#F0EDE8", img: CAR_FRONT },
  { name: "Ночной синий", hex: "#1A2340", img: CAR_INTERIOR },
  { name: "Тёмный гранат", hex: "#4A1515", img: CAR_SIDE },
  { name: "Титановый серый", hex: "#3D3D3D", img: CAR_FRONT },
];

const SPECS = [
  { label: "Мощность", value: "517 л.с.", category: "Двигатель" },
  { label: "Крутящий момент", value: "750 Нм", category: "Двигатель" },
  { label: "Разгон 0–100 км/ч", value: "3.9 сек", category: "Двигатель" },
  { label: "Максимальная скорость", value: "200 км/ч", category: "Двигатель" },
  { label: "Запас хода (CLTC)", value: "700 км", category: "Батарея" },
  { label: "Ёмкость батареи", value: "100 кВт·ч", category: "Батарея" },
  { label: "Быстрая зарядка (10–80%)", value: "26 мин", category: "Батарея" },
  { label: "Зарядка AC", value: "22 кВт", category: "Батарея" },
  { label: "Длина", value: "5 155 мм", category: "Габариты" },
  { label: "Ширина", value: "1 960 мм", category: "Габариты" },
  { label: "Высота", value: "1 470 мм", category: "Габариты" },
  { label: "Колёсная база", value: "3 120 мм", category: "Габариты" },
];

const FEATURES = [
  {
    icon: "Zap",
    title: "517 л.с.",
    subtitle: "Двойной электромотор",
    desc: "Система полного привода с двумя независимыми электромоторами обеспечивает мгновенный отклик и абсолютный контроль.",
  },
  {
    icon: "Radio",
    title: "700 км",
    subtitle: "Запас хода",
    desc: "Батарея ёмкостью 100 кВт·ч позволяет преодолевать расстояния без компромиссов между дальностью и скоростью.",
  },
  {
    icon: "Shield",
    title: "Система ADAS L3",
    subtitle: "Автопилот третьего уровня",
    desc: "Продвинутый комплекс помощи водителю с возможностью частичной автономности на трассах.",
  },
  {
    icon: "Waves",
    title: "Звук Dynaudio",
    subtitle: "23 динамика, 1000 Вт",
    desc: "Аудиосистема премиум-класса, настроенная для акустики конкретного салона автомобиля.",
  },
];

const TRIMS = [
  {
    name: "EH7 Long Range",
    price: "от 6 490 000 ₽",
    range: "600 км",
    power: "408 л.с.",
    features: ["Задний привод", "19\" диски", "Панорамная крыша", "Отделка Nappa кожей"],
    featured: false,
  },
  {
    name: "EH7 Performance",
    price: "от 7 990 000 ₽",
    range: "700 км",
    power: "517 л.с.",
    features: ["Полный привод AWD", "21\" диски", "Адаптивная подвеска", "Звук Dynaudio 23 динамика"],
    featured: true,
  },
  {
    name: "EH7 Exclusive",
    price: "от 9 490 000 ₽",
    range: "700 км",
    power: "517 л.с.",
    features: ["Полный привод AWD", "22\" диски", "Массаж 12 зон", "Персональная отделка"],
    featured: false,
  },
];

const FOOTER_LINKS: Record<string, string[]> = {
  "Модели": ["Hongqi EH7", "Hongqi E-HS9", "Hongqi EHS7", "Hongqi H9", "Все модели"],
  "Покупателям": ["Кредит и лизинг", "Trade-in", "Страхование", "Зарядная инфраструктура", "Тест-драйв"],
  "Владельцам": ["Сервис и ТО", "Гарантия", "Запасные части", "Мобильное приложение", "Клуб Hongqi"],
  "О бренде": ["История бренда", "Технологии", "Устойчивое развитие", "Пресса", "Контакты"],
};

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.08 }
    );
    const elements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function Index() {
  useScrollReveal();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(0);
  const [activeSpecCategory, setActiveSpecCategory] = useState("Все");
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [testDriveOpen, setTestDriveOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", city: "", date: "" });

  useEffect(() => {
    const handleScroll = () => setHeaderScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const specCategories = ["Все", "Двигатель", "Батарея", "Габариты"];
  const filteredSpecs = activeSpecCategory === "Все"
    ? SPECS
    : SPECS.filter((s) => s.category === activeSpecCategory);

  return (
    <div className="min-h-screen pb-[68px] lg:pb-0" style={{ backgroundColor: "var(--obsidian)", color: "#EDE8DE" }}>

      {/* ─── HEADER ─── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: headerScrolled ? "rgba(10,10,10,0.96)" : "transparent",
          backdropFilter: headerScrolled ? "blur(24px)" : "none",
          borderBottom: headerScrolled ? "1px solid rgba(201,168,76,0.15)" : "1px solid transparent",
        }}
      >
        <div className="max-w-[1920px] mx-auto px-6 lg:px-16 flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex items-center gap-3 flex-shrink-0">
            <div className="text-2xl lg:text-3xl font-cormorant font-light tracking-[0.25em]" style={{ color: "var(--gold)" }}>
              红旗
            </div>
            <div className="hidden md:block w-px h-6" style={{ backgroundColor: "rgba(201,168,76,0.4)" }} />
            <div className="hidden md:flex flex-col">
              <span className="font-ibm text-xs font-light tracking-[0.3em] uppercase" style={{ color: "var(--gold)" }}>HONGQI</span>
              <span className="font-ibm text-[9px] tracking-[0.2em] uppercase" style={{ color: "rgba(237,232,222,0.35)" }}>since 1958</span>
            </div>
          </a>

          <nav className="hidden xl:flex items-center gap-8">
            {["Модели", "Автомобили в наличии", "Покупателям", "Владельцам", "Дилеры", "О бренде"].map((item) => (
              <a key={item} href="#" className="nav-link hover-underline">{item}</a>
            ))}
          </nav>

          <div className="flex items-center gap-4 lg:gap-6">
            <button className="hidden lg:flex items-center gap-2 nav-link">
              <Icon name="Heart" size={15} />
              <span className="hidden xl:inline text-xs tracking-widest uppercase">Избранное</span>
            </button>
            <button className="hidden lg:flex items-center gap-2 nav-link">
              <Icon name="ArrowLeftRight" size={15} />
              <span className="hidden xl:inline text-xs tracking-widest uppercase">Сравнение</span>
            </button>
            <button className="btn-gold-fill text-xs tracking-widest hidden lg:block" onClick={() => setTestDriveOpen(true)}>
              Тест-драйв
            </button>
            <button className="xl:hidden p-2" style={{ color: "var(--gold)" }} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={22} />
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="xl:hidden mobile-menu border-t" style={{ borderColor: "rgba(201,168,76,0.15)" }}>
            <div className="px-6 py-8 flex flex-col gap-6">
              {["Модели", "Автомобили в наличии", "Покупателям", "Владельцам", "Дилеры", "О бренде"].map((item) => (
                <a key={item} href="#" className="font-ibm text-base tracking-widest uppercase" style={{ color: "rgba(237,232,222,0.8)" }} onClick={() => setMobileMenuOpen(false)}>
                  {item}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <button className="btn-gold w-full">Избранное</button>
                <button className="btn-gold-fill w-full" onClick={() => { setTestDriveOpen(true); setMobileMenuOpen(false); }}>Тест-драйв</button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={COLOR_OPTIONS[selectedColor].img} alt="Hongqi EH7" className="w-full h-full object-cover" style={{ filter: "brightness(0.4)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #0A0A0A 28%, rgba(10,10,10,0.15) 60%, transparent 100%)" }} />
        </div>

        <div className="relative z-10 max-w-[1920px] mx-auto px-6 lg:px-16 pb-16 lg:pb-24 w-full">
          <div className="max-w-2xl">
            <p className="font-ibm text-xs tracking-[0.35em] uppercase mb-6 reveal" style={{ color: "var(--gold)" }}>
              Новое поколение / 2025
            </p>
            <h1 className="font-cormorant font-light leading-[0.88] mb-6 reveal delay-100" style={{ fontSize: "clamp(52px, 15vw, 110px)" }}>
              Hongqi<br /><span style={{ color: "var(--gold)" }}>EH7</span>
            </h1>
            <p className="font-ibm font-light leading-relaxed mb-8 reveal delay-200" style={{ color: "rgba(237,232,222,0.6)", maxWidth: "480px", fontSize: "clamp(14px, 3.5vw, 18px)" }}>
              Электрический седан, рождённый из столетий имперской эстетики и передовых технологий. 517 л.с. 700 км без остановок.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 reveal delay-300">
              <button className="btn-gold-fill" onClick={() => setTestDriveOpen(true)}>Записаться на тест-драйв</button>
              <a href="#configurator" className="btn-gold text-center">Конфигуратор</a>
            </div>
          </div>

          <div className="mt-10 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-px reveal delay-400" style={{ borderTop: "1px solid rgba(201,168,76,0.2)" }}>
            {[
              { v: "517", u: "л.с.", l: "Мощность" },
              { v: "3.9", u: "сек", l: "Разгон 0–100" },
              { v: "700", u: "км", l: "Запас хода" },
              { v: "26", u: "мин", l: "Зарядка" },
            ].map((s, i) => (
              <div key={i} className="pt-6 pb-3 pr-4 md:pr-8">
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="font-cormorant font-light" style={{ fontSize: "clamp(36px, 10vw, 60px)" }}>{s.v}</span>
                  <span className="font-ibm text-xs md:text-sm" style={{ color: "var(--gold)" }}>{s.u}</span>
                </div>
                <p className="font-ibm text-[10px] tracking-widest uppercase" style={{ color: "rgba(237,232,222,0.4)" }}>{s.l}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:flex absolute bottom-8 right-8 lg:right-16 flex-col items-center gap-2 z-10">
          <span className="font-ibm text-[10px] tracking-[0.3em] uppercase" style={{ color: "rgba(201,168,76,0.5)", writingMode: "vertical-rl" }}>Прокрутите вниз</span>
          <div className="w-px h-12" style={{ background: "linear-gradient(to bottom, rgba(201,168,76,0.5), transparent)" }} />
        </div>
      </section>

      {/* ─── QUOTE ─── */}
      <section className="py-14 md:py-20 lg:py-32" style={{ backgroundColor: "var(--charcoal)" }}>
        <div className="max-w-[1920px] mx-auto px-6 lg:px-16">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-px h-12 md:h-16 mx-auto mb-8 md:mb-12 reveal" style={{ background: "linear-gradient(to bottom, transparent, var(--gold))" }} />
            <blockquote className="font-cormorant font-light italic leading-relaxed reveal delay-100" style={{ fontSize: "clamp(22px, 6vw, 48px)" }}>
              «Красный флаг — не просто автомобиль.<br />Это движение времени вперёд.»
            </blockquote>
            <p className="mt-8 font-ibm text-xs tracking-[0.3em] uppercase reveal delay-200" style={{ color: "var(--gold)" }}>
              Hongqi — Красный Флаг Китая с 1958 года
            </p>
          </div>
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section id="features" className="py-14 md:py-20 lg:py-32" style={{ backgroundColor: "var(--obsidian)" }}>
        <div className="max-w-[1920px] mx-auto px-6 lg:px-16">
          <div className="mb-10 md:mb-16 lg:mb-24">
            <p className="font-ibm text-xs tracking-[0.35em] uppercase mb-4 reveal" style={{ color: "var(--gold)" }}>Преимущества модели</p>
            <h2 className="font-cormorant font-light reveal delay-100" style={{ fontSize: "clamp(36px, 10vw, 72px)" }}>Совершенство<br />в каждой детали</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ border: "1px solid rgba(201,168,76,0.1)" }}>
            {FEATURES.map((f, i) => (
              <div
                key={i}
                className={`p-6 md:p-8 lg:p-10 reveal delay-${(i + 1) * 100} transition-colors duration-300`}
                style={{
                  backgroundColor: "var(--charcoal)",
                  borderRight: i < 3 ? "1px solid rgba(201,168,76,0.1)" : "none",
                  borderBottom: "1px solid rgba(201,168,76,0.1)",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#161616")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--charcoal)")}
              >
                <div className="mb-6"><Icon name={f.icon} size={28} style={{ color: "var(--gold)" }} /></div>
                <div className="font-cormorant text-4xl font-light mb-1">{f.title}</div>
                <div className="font-ibm text-xs tracking-widest uppercase mb-4" style={{ color: "var(--gold)" }}>{f.subtitle}</div>
                <p className="font-ibm text-sm leading-relaxed" style={{ color: "rgba(237,232,222,0.5)" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MODEL DESCRIPTION ─── */}
      <section className="py-14 md:py-20 lg:py-32 overflow-hidden" style={{ backgroundColor: "var(--smoke)" }}>
        <div className="max-w-[1920px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-center">
            <div className="reveal-left">
              <p className="font-ibm text-xs tracking-[0.35em] uppercase mb-4" style={{ color: "var(--gold)" }}>О модели</p>
              <h2 className="font-cormorant font-light mb-6 md:mb-8 leading-tight" style={{ fontSize: "clamp(36px, 10vw, 60px)" }}>Архитектура<br />будущего</h2>
              <p className="font-ibm text-base leading-relaxed mb-6" style={{ color: "rgba(237,232,222,0.6)" }}>
                EH7 построен на эксклюзивной электрической платформе Hongqi — результате более 10 лет исследований. Низкий центр тяжести, идеальная развесовка 50/50 и интеллектуальная воздушная подвеска создают ощущение, которое невозможно описать словами.
              </p>
              <p className="font-ibm text-base leading-relaxed mb-10" style={{ color: "rgba(237,232,222,0.6)" }}>
                Интерьер спроектирован в концепции «цифровой дворец» — три экрана общей диагональю 48 дюймов, отделка натуральным деревом и кожей Nappa ручной работы, звуковая система Dynaudio с 23 динамиками.
              </p>
              <button className="btn-gold">Подробнее о технологиях</button>
            </div>
            <div className="reveal-right">
              <div className="gallery-item" style={{ border: "1px solid rgba(201,168,76,0.15)" }}>
                <img src={CAR_INTERIOR} alt="Интерьер Hongqi EH7" className="w-full aspect-[4/3] object-cover" />
              </div>
              <div className="grid grid-cols-2 gap-px mt-px" style={{ backgroundColor: "rgba(201,168,76,0.15)" }}>
                {[{ n: "48″", d: "Суммарная диагональ экранов" }, { n: "23", d: "Динамика аудиосистемы" }].map((item, i) => (
                  <div key={i} className="p-6" style={{ backgroundColor: "var(--charcoal)" }}>
                    <div className="font-cormorant text-4xl font-light mb-1" style={{ color: "var(--gold)" }}>{item.n}</div>
                    <div className="font-ibm text-xs" style={{ color: "rgba(237,232,222,0.45)" }}>{item.d}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── GALLERY ─── */}
      <section id="gallery" className="py-14 md:py-20 lg:py-32" style={{ backgroundColor: "var(--obsidian)" }}>
        <div className="max-w-[1920px] mx-auto px-6 lg:px-16">
          <div className="flex items-end justify-between mb-8 md:mb-12">
            <div>
              <p className="font-ibm text-xs tracking-[0.35em] uppercase mb-3 reveal" style={{ color: "var(--gold)" }}>Галерея</p>
              <h2 className="font-cormorant font-light reveal delay-100" style={{ fontSize: "clamp(40px, 12vw, 72px)" }}>EH7</h2>
            </div>
            <button className="btn-gold hidden md:block reveal" style={{ width: "auto" }}>Все фото</button>
          </div>
          <div className="flex flex-col md:grid md:grid-cols-3 gap-px" style={{ backgroundColor: "rgba(201,168,76,0.1)" }}>
            <div className="gallery-item md:col-span-2 reveal-scale">
              <img src={CAR_SIDE} alt="Hongqi EH7" className="w-full object-cover" style={{ aspectRatio: "16/9" }} />
            </div>
            <div className="flex flex-row md:flex-col gap-px">
              <div className="gallery-item reveal-scale delay-200 flex-1">
                <img src={CAR_FRONT} alt="Hongqi EH7 спереди" className="w-full h-full object-cover" style={{ minHeight: "160px", maxHeight: "240px" }} />
              </div>
              <div className="gallery-item reveal-scale delay-300 flex-1">
                <img src={CAR_INTERIOR} alt="Салон" className="w-full h-full object-cover" style={{ minHeight: "160px", maxHeight: "240px" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONFIGURATOR ─── */}
      <section id="configurator" className="py-14 md:py-20 lg:py-32" style={{ backgroundColor: "var(--charcoal)" }}>
        <div className="max-w-[1920px] mx-auto px-6 lg:px-16">
          <div className="mb-10 lg:mb-16">
            <p className="font-ibm text-xs tracking-[0.35em] uppercase mb-4 reveal" style={{ color: "var(--gold)" }}>Конфигуратор</p>
            <h2 className="font-cormorant font-light reveal delay-100" style={{ fontSize: "clamp(36px, 10vw, 72px)" }}>Создайте<br />свой EH7</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            <div className="reveal-left lg:sticky lg:top-24">
              <div className="gallery-item relative overflow-hidden" style={{ border: "1px solid rgba(201,168,76,0.15)" }}>
                <img src={COLOR_OPTIONS[selectedColor].img} alt={COLOR_OPTIONS[selectedColor].name} className="w-full aspect-video object-cover transition-all duration-700" />
                <div className="absolute bottom-0 left-0 right-0 p-6" style={{ background: "linear-gradient(to top, rgba(10,10,10,0.9), transparent)" }}>
                  <p className="font-ibm text-xs tracking-widest uppercase" style={{ color: "var(--gold)" }}>Цвет кузова</p>
                  <p className="font-cormorant text-2xl font-light mt-1">{COLOR_OPTIONS[selectedColor].name}</p>
                </div>
              </div>
            </div>

            <div className="reveal-right">
              <div className="mb-10">
                <p className="font-ibm text-xs tracking-[0.3em] uppercase mb-6" style={{ color: "rgba(237,232,222,0.45)" }}>Выбор цвета</p>
                <div className="flex gap-4 flex-wrap">
                  {COLOR_OPTIONS.map((c, i) => (
                    <button key={i} onClick={() => setSelectedColor(i)} className="flex flex-col items-center gap-2">
                      <div
                        className={`color-swatch ${selectedColor === i ? "active" : ""}`}
                        style={{ backgroundColor: c.hex, boxShadow: selectedColor === i ? "0 0 0 3px rgba(201,168,76,0.4)" : "none" }}
                      />
                      <span className="font-ibm text-[10px] text-center max-w-[60px] leading-tight" style={{ color: selectedColor === i ? "var(--gold)" : "rgba(237,232,222,0.35)" }}>
                        {c.name.split(" ")[0]}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-10">
                <p className="font-ibm text-xs tracking-[0.3em] uppercase mb-6" style={{ color: "rgba(237,232,222,0.45)" }}>Комплектация</p>
                <div className="flex flex-col gap-3">
                  {TRIMS.map((t, i) => (
                    <div key={i} className="p-4 md:p-5 cursor-pointer transition-all duration-300" style={{ border: t.featured ? "1px solid var(--gold)" : "1px solid rgba(201,168,76,0.2)", backgroundColor: t.featured ? "rgba(201,168,76,0.06)" : "transparent" }}>
                      <div className="flex flex-col xs:flex-row xs:items-start xs:justify-between mb-3 gap-1">
                        <div>
                          <p className="font-cormorant text-xl font-light">{t.name}</p>
                          {t.featured && <span className="font-ibm text-[10px] tracking-widest uppercase" style={{ color: "var(--gold)" }}>Рекомендуем</span>}
                        </div>
                        <p className="font-ibm text-sm font-light flex-shrink-0" style={{ color: "var(--gold)" }}>{t.price}</p>
                      </div>
                      <div className="flex gap-6 mb-3">
                        <div>
                          <span className="font-ibm text-xs" style={{ color: "rgba(237,232,222,0.4)" }}>Запас хода: </span>
                          <span className="font-ibm text-xs">{t.range}</span>
                        </div>
                        <div>
                          <span className="font-ibm text-xs" style={{ color: "rgba(237,232,222,0.4)" }}>Мощность: </span>
                          <span className="font-ibm text-xs">{t.power}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {t.features.map((feat, fi) => (
                          <span key={fi} className="font-ibm text-[11px] px-2 py-1" style={{ backgroundColor: "rgba(201,168,76,0.1)", color: "rgba(237,232,222,0.65)" }}>{feat}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button className="btn-gold-fill w-full" onClick={() => setTestDriveOpen(true)}>Запросить персональное предложение</button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SPECS ─── */}
      <section id="specs" className="py-14 md:py-20 lg:py-32" style={{ backgroundColor: "var(--obsidian)" }}>
        <div className="max-w-[1920px] mx-auto px-6 lg:px-16">
          <div className="mb-8 md:mb-12">
            <p className="font-ibm text-xs tracking-[0.35em] uppercase mb-4 reveal" style={{ color: "var(--gold)" }}>Технические характеристики</p>
            <h2 className="font-cormorant font-light reveal delay-100" style={{ fontSize: "clamp(36px, 10vw, 72px)" }}>Параметры</h2>
          </div>
          <div className="flex gap-0 mb-8 flex-wrap reveal delay-200" style={{ borderBottom: "1px solid rgba(201,168,76,0.15)" }}>
            {specCategories.map((cat) => (
              <button key={cat} onClick={() => setActiveSpecCategory(cat)} className="font-ibm tracking-[0.15em] uppercase transition-all duration-200" style={{ fontSize: "clamp(9px, 2.5vw, 12px)", padding: "10px 14px", color: activeSpecCategory === cat ? "var(--gold)" : "rgba(237,232,222,0.4)", borderBottom: activeSpecCategory === cat ? "2px solid var(--gold)" : "2px solid transparent", marginBottom: "-1px" }}>
                {cat}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-32">
            {filteredSpecs.map((s, i) => (
              <div key={i} className="specs-row flex justify-between items-center py-5 reveal" style={{ transitionDelay: `${i * 50}ms` }}>
                <span className="font-ibm text-sm" style={{ color: "rgba(237,232,222,0.5)" }}>{s.label}</span>
                <span className="font-cormorant text-xl font-light">{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DRIVING EXPERIENCE ─── */}
      <section className="relative py-20 md:py-32 lg:py-48 overflow-hidden" style={{ backgroundColor: "var(--smoke)" }}>
        <div className="absolute inset-0">
          <img src={CAR_SIDE} alt="" className="w-full h-full object-cover opacity-10" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, var(--smoke) 40%, transparent 100%)" }} />
        </div>
        <div className="relative z-10 max-w-[1920px] mx-auto px-6 lg:px-16">
          <div className="max-w-xl reveal">
            <p className="font-ibm text-xs tracking-[0.35em] uppercase mb-5" style={{ color: "var(--gold)" }}>Опыт вождения</p>
            <h2 className="font-cormorant font-light mb-6 md:mb-8 leading-tight" style={{ fontSize: "clamp(36px, 10vw, 72px)" }}>Тишина —<br />это скорость</h2>
            <p className="font-ibm text-base leading-relaxed mb-10" style={{ color: "rgba(237,232,222,0.55)" }}>
              EH7 разгоняется до 100 км/ч за 3,9 секунды без единого звука двигателя. Только ветер, дорога и вы. Интеллектуальная воздушная подвеска адаптируется к любому покрытию в реальном времени.
            </p>
            <button className="btn-gold" onClick={() => setTestDriveOpen(true)}>Ощутить самому — записаться</button>
          </div>
        </div>
      </section>

      {/* ─── CHARGING ─── */}
      <section className="py-14 md:py-20 lg:py-32" style={{ backgroundColor: "var(--charcoal)" }}>
        <div className="max-w-[1920px] mx-auto px-6 lg:px-16">
          <div className="mb-10 md:mb-16">
            <p className="font-ibm text-xs tracking-[0.35em] uppercase mb-4 reveal" style={{ color: "var(--gold)" }}>Зарядная инфраструктура</p>
            <h2 className="font-cormorant font-light reveal delay-100" style={{ fontSize: "clamp(36px, 10vw, 72px)" }}>Заряжайтесь<br />везде</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ border: "1px solid rgba(201,168,76,0.1)" }}>
            {[
              { icon: "Zap", title: "26 минут", sub: "Быстрая зарядка DC", desc: "От 10% до 80% — за время обеда. Поддержка мощности до 250 кВт." },
              { icon: "MapPin", title: "2 500+", sub: "Зарядных станций", desc: "Партнёрская сеть охватывает все крупные города и федеральные трассы России." },
              { icon: "Home", title: "22 кВт", sub: "Домашняя зарядка", desc: "Полная зарядка за ночь. Настенная зарядная станция включена в базовую комплектацию." },
            ].map((item, i) => (
              <div key={i} className={`p-7 md:p-8 lg:p-12 reveal delay-${(i + 1) * 100}`} style={{ backgroundColor: "var(--smoke)", borderRight: i < 2 ? "1px solid rgba(201,168,76,0.1)" : "none", borderBottom: "1px solid rgba(201,168,76,0.1)" }}>
                <Icon name={item.icon} size={32} style={{ color: "var(--gold)", marginBottom: "24px" }} />
                <div className="font-cormorant text-4xl font-light mb-1">{item.title}</div>
                <div className="font-ibm text-xs tracking-widest uppercase mb-4" style={{ color: "var(--gold)" }}>{item.sub}</div>
                <p className="font-ibm text-sm leading-relaxed" style={{ color: "rgba(237,232,222,0.5)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SAFETY ─── */}
      <section className="py-14 md:py-20 lg:py-32" style={{ backgroundColor: "var(--obsidian)" }}>
        <div className="max-w-[1920px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-32 items-center">
            <div className="reveal-left">
              <p className="font-ibm text-xs tracking-[0.35em] uppercase mb-4" style={{ color: "var(--gold)" }}>Безопасность</p>
              <h2 className="font-cormorant font-light mb-6 md:mb-8 leading-tight" style={{ fontSize: "clamp(36px, 10vw, 60px)" }}>5 звёзд<br />по Euro NCAP</h2>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { icon: "Eye", title: "360° камеры и радары", desc: "Система кругового обзора с 12 ультразвуковыми датчиками и 5 радарами" },
                  { icon: "AlertTriangle", title: "Автоэкстренное торможение", desc: "AEB с распознаванием пешеходов, велосипедистов и транспортных средств" },
                  { icon: "Navigation", title: "Полосовой ассистент", desc: "Активная коррекция курса с предупреждением покидания полосы" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-5 reveal" style={{ border: "1px solid rgba(201,168,76,0.1)" }}>
                    <Icon name={item.icon} size={20} style={{ color: "var(--gold)", flexShrink: 0, marginTop: "2px" }} />
                    <div>
                      <p className="font-ibm text-sm font-medium mb-1">{item.title}</p>
                      <p className="font-ibm text-xs leading-relaxed" style={{ color: "rgba(237,232,222,0.45)" }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal-right">
              <img src={CAR_FRONT} alt="Hongqi EH7" className="w-full object-cover" style={{ filter: "brightness(0.65)" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ─── OWNERSHIP ─── */}
      <section className="py-14 md:py-20 lg:py-32" style={{ backgroundColor: "var(--smoke)" }}>
        <div className="max-w-[1920px] mx-auto px-6 lg:px-16">
          <div className="mb-10 md:mb-16 text-center">
            <p className="font-ibm text-xs tracking-[0.35em] uppercase mb-4 reveal" style={{ color: "var(--gold)" }}>Владение</p>
            <h2 className="font-cormorant font-light reveal delay-100" style={{ fontSize: "clamp(28px, 7vw, 72px)" }}>Владеть Hongqi —<br />получать всё</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {[
              { icon: "Award", title: "5 лет гарантии", desc: "Полная гарантия на авто, 8 лет на аккумулятор" },
              { icon: "Wrench", title: "Бесплатное ТО", desc: "Первые 5 плановых обслуживаний включены в цену" },
              { icon: "Phone", title: "Помощь 24/7", desc: "Выездной сервис и эвакуация в любое время суток" },
              { icon: "RefreshCw", title: "Trade-in", desc: "Выгодный обмен вашего автомобиля любой марки" },
            ].map((item, i) => (
              <div key={i} className={`p-5 md:p-8 text-center reveal delay-${(i + 1) * 100}`} style={{ border: "1px solid rgba(201,168,76,0.15)", backgroundColor: "var(--charcoal)" }}>
                <div className="mb-5 flex justify-center"><Icon name={item.icon} size={28} style={{ color: "var(--gold)" }} /></div>
                <p className="font-cormorant text-xl font-light mb-2">{item.title}</p>
                <p className="font-ibm text-xs leading-relaxed" style={{ color: "rgba(237,232,222,0.45)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TEST DRIVE CTA ─── */}
      <section className="relative py-20 md:py-32 lg:py-48 overflow-hidden text-center" style={{ backgroundColor: "var(--charcoal)" }}>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ opacity: 0.04 }}>
          <span className="font-cormorant font-light leading-none" style={{ fontSize: "40vw", color: "var(--gold)" }}>红旗</span>
        </div>
        <div className="relative z-10 max-w-[1920px] mx-auto px-6 lg:px-16">
          <p className="font-ibm text-xs tracking-[0.35em] uppercase mb-5 reveal" style={{ color: "var(--gold)" }}>Не смотрите — ощутите</p>
          <h2 className="font-cormorant font-light mb-6 md:mb-10 reveal delay-100" style={{ fontSize: "clamp(40px, 12vw, 96px)" }}>Тест-драйв<br />Hongqi EH7</h2>
          <p className="font-ibm mb-8 md:mb-12 mx-auto reveal delay-200" style={{ color: "rgba(237,232,222,0.5)", maxWidth: "500px", fontSize: "clamp(13px, 3.5vw, 16px)" }}>
            Запишитесь на персональный тест-драйв в ближайшем дилерском центре и убедитесь сами.
          </p>
          <button className="btn-gold-fill reveal delay-300" style={{ padding: "16px 40px", fontSize: "12px" }} onClick={() => setTestDriveOpen(true)}>
            Записаться на тест-драйв
          </button>
        </div>
      </section>

      {/* ─── DEALERS ─── */}
      <section className="py-14 md:py-20 lg:py-32" style={{ backgroundColor: "var(--obsidian)" }}>
        <div className="max-w-[1920px] mx-auto px-6 lg:px-16">
          <div className="flex items-end justify-between mb-8 md:mb-12">
            <div>
              <p className="font-ibm text-xs tracking-[0.35em] uppercase mb-4 reveal" style={{ color: "var(--gold)" }}>Дилеры</p>
              <h2 className="font-cormorant font-light reveal delay-100" style={{ fontSize: "clamp(36px, 10vw, 72px)" }}>Найдите<br />дилера</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10">
            {[
              { city: "Москва", address: "Ленинградский пр-т, 35", phone: "+7 (495) 000-00-01", hours: "Пн–Вс: 9:00–21:00" },
              { city: "Санкт-Петербург", address: "Пулковское ш., 41", phone: "+7 (812) 000-00-02", hours: "Пн–Вс: 9:00–21:00" },
              { city: "Краснодар", address: "ул. Красных Партизан, 212", phone: "+7 (861) 000-00-03", hours: "Пн–Сб: 9:00–20:00" },
            ].map((d, i) => (
              <div key={i} className={`p-8 reveal delay-${(i + 1) * 100}`} style={{ border: "1px solid rgba(201,168,76,0.2)", backgroundColor: "var(--charcoal)" }}>
                <p className="font-cormorant text-2xl font-light mb-1">{d.city}</p>
                <p className="font-ibm text-xs mb-4" style={{ color: "rgba(237,232,222,0.4)" }}>{d.address}</p>
                <p className="font-ibm text-sm mb-1" style={{ color: "var(--gold)" }}>{d.phone}</p>
                <p className="font-ibm text-xs mb-6" style={{ color: "rgba(237,232,222,0.35)" }}>{d.hours}</p>
                <button className="btn-gold w-full text-center text-xs">Записаться</button>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button className="btn-gold px-12">Все дилеры России</button>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer style={{ backgroundColor: "var(--charcoal)", borderTop: "1px solid rgba(201,168,76,0.15)" }}>
        <div className="max-w-[1920px] mx-auto px-6 lg:px-16 py-16 lg:py-24">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-16">
            <div className="col-span-2 md:col-span-3 lg:col-span-1">
              <div className="font-cormorant text-4xl font-light mb-2" style={{ color: "var(--gold)" }}>红旗</div>
              <div className="font-ibm text-xs tracking-[0.3em] uppercase mb-6" style={{ color: "rgba(201,168,76,0.7)" }}>HONGQI</div>
              <p className="font-ibm text-xs leading-relaxed mb-6" style={{ color: "rgba(237,232,222,0.35)" }}>
                Официальный импортёр Hongqi в России.<br />Электромобили премиум-класса.
              </p>
              <div className="flex gap-3">
                {["Instagram", "Youtube", "MessageCircle"].map((ic) => (
                  <button key={ic} className="w-9 h-9 flex items-center justify-center transition-all duration-200" style={{ border: "1px solid rgba(201,168,76,0.25)", color: "rgba(237,232,222,0.4)" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--gold)"; (e.currentTarget as HTMLElement).style.color = "var(--gold)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.25)"; (e.currentTarget as HTMLElement).style.color = "rgba(237,232,222,0.4)"; }}>
                    <Icon name={ic} size={14} />
                  </button>
                ))}
              </div>
            </div>
            {Object.entries(FOOTER_LINKS).map(([title, links]) => (
              <div key={title}>
                <p className="font-ibm text-xs tracking-[0.25em] uppercase mb-5" style={{ color: "var(--gold)" }}>{title}</p>
                <ul className="flex flex-col gap-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="font-ibm text-xs transition-colors duration-200" style={{ color: "rgba(237,232,222,0.4)" }}
                        onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--gold)")}
                        onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(237,232,222,0.4)")}>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div style={{ height: "1px", backgroundColor: "rgba(201,168,76,0.1)", marginBottom: "32px" }} />
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="font-ibm text-xs" style={{ color: "rgba(237,232,222,0.25)" }}>© 2025 Hongqi Russia. Все права защищены.</p>
            <div className="flex flex-wrap gap-6">
              {["Политика конфиденциальности", "Условия использования", "Обработка данных", "Карта сайта"].map((item) => (
                <a key={item} href="#" className="font-ibm text-xs transition-colors duration-200" style={{ color: "rgba(237,232,222,0.25)" }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--gold)")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(237,232,222,0.25)")}>
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* ─── MOBILE STICKY CTA ─── */}
      <div className="mobile-sticky-cta">
        <button
          className="flex-1 btn-gold text-center"
          style={{ padding: "14px 12px", fontSize: "11px" }}
          onClick={() => { const el = document.getElementById("configurator"); el?.scrollIntoView({ behavior: "smooth" }); }}
        >
          Конфигуратор
        </button>
        <button
          className="flex-1 btn-gold-fill text-center"
          style={{ padding: "14px 12px", fontSize: "11px" }}
          onClick={() => setTestDriveOpen(true)}
        >
          Тест-драйв
        </button>
      </div>

      {/* ─── TEST DRIVE MODAL ─── */}
      {testDriveOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-end md:items-center justify-center md:p-8"
          style={{ backgroundColor: "rgba(10,10,10,0.94)", backdropFilter: "blur(24px)" }}
          onClick={(e) => { if (e.target === e.currentTarget) setTestDriveOpen(false); }}
        >
          <div className="w-full md:max-w-lg relative" style={{ border: "1px solid rgba(201,168,76,0.3)", backgroundColor: "var(--charcoal)", maxHeight: "92dvh", overflowY: "auto" }}>
            <button className="absolute top-5 right-5 transition-colors" style={{ color: "rgba(237,232,222,0.4)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--gold)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(237,232,222,0.4)")}
              onClick={() => setTestDriveOpen(false)}>
              <Icon name="X" size={20} />
            </button>
            <div className="p-6 md:p-12">
              <p className="font-ibm text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "var(--gold)" }}>Персональный опыт</p>
              <h3 className="font-cormorant font-light mb-6 md:mb-8" style={{ fontSize: "clamp(28px, 8vw, 40px)" }}>Запись на<br />тест-драйв</h3>
              <div className="flex flex-col gap-4">
                {[
                  { key: "name", label: "Имя", type: "text", placeholder: "Ваше имя" },
                  { key: "phone", label: "Телефон", type: "tel", placeholder: "+7 (___) ___-__-__" },
                  { key: "city", label: "Город", type: "text", placeholder: "Выберите город" },
                  { key: "date", label: "Дата", type: "date", placeholder: "" },
                ].map((field) => (
                  <div key={field.key}>
                    <label className="font-ibm text-xs tracking-widest uppercase block mb-2" style={{ color: "rgba(237,232,222,0.4)" }}>{field.label}</label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={formData[field.key as keyof typeof formData]}
                      onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                      className="w-full font-ibm text-sm py-3 px-4 outline-none transition-all duration-200"
                      style={{ backgroundColor: "var(--smoke)", border: "1px solid rgba(201,168,76,0.2)", color: "#EDE8DE", colorScheme: "dark" }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "var(--gold)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.2)")}
                    />
                  </div>
                ))}
                <button className="btn-gold-fill w-full mt-4">Отправить заявку</button>
                <p className="font-ibm text-[10px] text-center leading-relaxed" style={{ color: "rgba(237,232,222,0.25)" }}>
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}