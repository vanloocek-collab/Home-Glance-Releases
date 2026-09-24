(() => {
  const STORAGE_KEY = "home-glance-language";
  const supportedLanguages = ["en", "pl"];

  const translations = {
    en: {
      page: {
        title: "Home Glance — Weather and calendar at a glance",
        description: "Home Glance is a lightweight, customizable Android home-screen widget for weather and calendar information.",
        ogDescription: "A modern Android home-screen widget for weather and calendar information."
      },
      nav: {
        features: "Features",
        screenshots: "Screenshots",
        about: "About",
        download: "Download"
      },
      hero: {
        eyebrow: "Public test · v0.1.3",
        title: "Your weather and calendar.<br><span>At a glance.</span>",
        lead: "Home Glance is a lightweight, customizable Android home-screen widget inspired by the simplicity of Another Widget and the Pixel At a Glance experience.",
        download: "Download APK",
        github: "View on GitHub",
        note: "Android 8.0+ · Free · No ads · Public testing",
        imageAlt: "Home Glance widget displayed on an Android home screen"
      },
      features: {
        kicker: "Built for the home screen",
        title: "Useful information without the clutter.",
        lead: "Weather, calendar events and smart context in a clean widget you can make your own.",
        weatherTitle: "Weather that adapts",
        weatherText: "Current conditions, automatic or manual location, smart refresh intervals and dynamic weather details.",
        calendarTitle: "Calendar at a glance",
        calendarText: "Upcoming events, selectable calendars, countdowns, ongoing events, event location and flexible filters.",
        customTitle: "Make it yours",
        customText: "Choose font style, text size, alignment, date formatting and an optional Milky widget background.",
        smartTitle: "Smart weather insights",
        smartText: "Helpful contextual alerts for rain, snow, thunderstorms, strong wind, heat and frost."
      },
      screenshots: {
        kicker: "See it in action",
        title: "Simple outside. Powerful inside.",
        home: "Home",
        appearance: "Appearance",
        smart: "Smart weather",
        calendar: "Calendar",
        homeAlt: "Home Glance main settings screen",
        appearanceAlt: "Home Glance appearance settings",
        smartAlt: "Home Glance smart weather settings",
        calendarAlt: "Home Glance calendar settings"
      },
      about: {
        kicker: "Why Home Glance?",
        title: "A modern spiritual successor to Another Widget.",
        p1: "Home Glance started from a simple idea: keep the clean, useful home-screen experience that made Another Widget so appealing, while bringing it forward for modern Android.",
        p2: "The project focuses on useful information at a glance, strong customization, broad device compatibility and active development.",
        disclaimer: "Home Glance is an independent project and is not affiliated with Another Widget."
      },
      languages: {
        kicker: "11 languages",
        title: "Made for more Android users.",
        list: "English (US), English (UK), Polski, Deutsch, Español, Français, Italiano, Português (Brasil), Русский, 简体中文 and 日本語."
      },
      download: {
        kicker: "Try the public test",
        title: "Bring Home Glance to your home screen.",
        text: "Download the latest public test APK from GitHub and help shape what comes next.",
        button: "Download v0.1.3",
        feedback: "Feedback & issues"
      },
      footer: {
        text: "Weather and calendar information, right where you need it.",
        privacy: "Privacy",
        roadmap: "Roadmap",
        testing: "Testing",
        contributing: "Contributing"
      }
    },

    pl: {
      page: {
        title: "Home Glance — Pogoda i kalendarz na pierwszy rzut oka",
        description: "Home Glance to lekki i konfigurowalny widżet ekranu głównego Androida z informacjami o pogodzie i wydarzeniach z kalendarza.",
        ogDescription: "Nowoczesny widżet ekranu głównego Androida z pogodą i kalendarzem."
      },
      nav: {
        features: "Funkcje",
        screenshots: "Zrzuty ekranu",
        about: "O projekcie",
        download: "Pobierz"
      },
      hero: {
        eyebrow: "Publiczne testy · v0.1.3",
        title: "Pogoda i kalendarz.<br><span>Na pierwszy rzut oka.</span>",
        lead: "Home Glance to lekki, konfigurowalny widżet ekranu głównego Androida, inspirowany prostotą Another Widget i rozwiązaniem Pixel At a Glance.",
        download: "Pobierz APK",
        github: "Zobacz na GitHubie",
        note: "Android 8.0+ · Bezpłatna · Bez reklam · Testy publiczne",
        imageAlt: "Widżet Home Glance wyświetlany na ekranie głównym Androida"
      },
      features: {
        kicker: "Stworzony dla ekranu głównego",
        title: "Przydatne informacje bez zbędnego bałaganu.",
        lead: "Pogoda, wydarzenia z kalendarza i inteligentny kontekst w czystym widżecie, który możesz dopasować do siebie.",
        weatherTitle: "Pogoda, która się dostosowuje",
        weatherText: "Aktualne warunki, automatyczna lub ręczna lokalizacja, inteligentne interwały odświeżania i dynamiczne szczegóły pogody.",
        calendarTitle: "Kalendarz na pierwszy rzut oka",
        calendarText: "Nadchodzące wydarzenia, wybór kalendarzy, odliczanie, trwające wydarzenia, lokalizacja i elastyczne filtry.",
        customTitle: "Dopasuj go do siebie",
        customText: "Wybierz krój i rozmiar tekstu, wyrównanie, format daty oraz opcjonalne tło widżetu Milky.",
        smartTitle: "Inteligentne informacje pogodowe",
        smartText: "Pomocne alerty kontekstowe o deszczu, śniegu, burzach, silnym wietrze, upale i mrozie."
      },
      screenshots: {
        kicker: "Zobacz go w działaniu",
        title: "Prosty z wyglądu. Rozbudowany w środku.",
        home: "Ekran główny",
        appearance: "Wygląd",
        smart: "Inteligentna pogoda",
        calendar: "Kalendarz",
        homeAlt: "Główny ekran ustawień Home Glance",
        appearanceAlt: "Ustawienia wyglądu Home Glance",
        smartAlt: "Ustawienia inteligentnej pogody Home Glance",
        calendarAlt: "Ustawienia kalendarza Home Glance"
      },
      about: {
        kicker: "Dlaczego Home Glance?",
        title: "Nowoczesny następca idei Another Widget.",
        p1: "Home Glance powstał z prostej idei: zachować czyste i użyteczne doświadczenie ekranu głównego, za które użytkownicy polubili Another Widget, i przenieść je na współczesnego Androida.",
        p2: "Projekt skupia się na przydatnych informacjach dostępnych od razu, szerokiej personalizacji, dobrej zgodności z różnymi urządzeniami i aktywnym rozwoju.",
        disclaimer: "Home Glance jest niezależnym projektem i nie jest powiązany z Another Widget."
      },
      languages: {
        kicker: "11 języków",
        title: "Dla jeszcze większej liczby użytkowników Androida.",
        list: "English (US), English (UK), Polski, Deutsch, Español, Français, Italiano, Português (Brasil), Русский, 简体中文 i 日本語."
      },
      download: {
        kicker: "Wypróbuj publiczną wersję testową",
        title: "Dodaj Home Glance do swojego ekranu głównego.",
        text: "Pobierz najnowszą publiczną wersję testową APK z GitHuba i pomóż rozwijać kolejne wydania.",
        button: "Pobierz v0.1.3",
        feedback: "Opinie i błędy"
      },
      footer: {
        text: "Pogoda i kalendarz dokładnie tam, gdzie ich potrzebujesz.",
        privacy: "Prywatność",
        roadmap: "Plan rozwoju",
        testing: "Testowanie",
        contributing: "Współpraca"
      }
    }
  };

  const getValue = (object, path) =>
    path.split(".").reduce((value, key) => value && value[key], object);

  const detectInitialLanguage = () => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (supportedLanguages.includes(saved)) return saved;

    const browserLanguage = (navigator.language || "").toLowerCase();
    return browserLanguage.startsWith("pl") ? "pl" : "en";
  };

  const applyLanguage = (language) => {
    const lang = supportedLanguages.includes(language) ? language : "en";
    const dictionary = translations[lang];

    document.documentElement.lang = lang;
    document.title = dictionary.page.title;

    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", dictionary.page.description);

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute("content", dictionary.page.ogDescription);

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = getValue(dictionary, element.dataset.i18n);
      if (typeof value === "string") element.textContent = value;
    });

    document.querySelectorAll("[data-i18n-html]").forEach((element) => {
      const value = getValue(dictionary, element.dataset.i18nHtml);
      if (typeof value === "string") element.innerHTML = value;
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
      const value = getValue(dictionary, element.dataset.i18nAlt);
      if (typeof value === "string") element.setAttribute("alt", value);
    });

    document.querySelectorAll(".language-option").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.lang === lang));
    });

    localStorage.setItem(STORAGE_KEY, lang);
  };

  document.querySelectorAll(".language-option").forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.lang));
  });

  applyLanguage(detectInitialLanguage());
})();
