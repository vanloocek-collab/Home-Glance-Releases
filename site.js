(() => {
  const LANGUAGE_KEY = "home-glance-language";
  const THEME_KEY = "home-glance-theme";
  const supportedLanguages = ["en", "pl"];

  const translations = {
    en: {
      page: {
        title: "Home Glance — Weather and calendar at a glance",
        description: "Home Glance is a lightweight, customizable Android home-screen widget for weather, calendar events and contextual information.",
        ogDescription: "A modern, customizable Android home-screen widget inspired by Pixel At a Glance."
      },
      nav: { widget: "Widget", features: "Features", whatsNew: "What’s new", screenshots: "Screenshots", faq: "FAQ", download: "Download" },
      theme: { toggle: "Toggle light and dark theme" },
      hero: {
        eyebrow: "Public test",
        title: "Your day.<br><span>At a glance.</span>",
        lead: "Weather, calendar events, next alarm and smart context in a clean Android widget built to feel at home on modern launchers.",
        download: "Download APK",
        releaseNotes: "Release notes",
        free: "Free",
        noAds: "No ads",
        languages: "languages",
        imageAlt: "Home Glance widget displayed on an Android home screen",
        weatherCard: "Weather",
        weatherCardSub: "Smart details",
        calendarCard: "Calendar",
        calendarCardSub: "Next event",
        styleCardSub: "Adaptive style"
      },
      trust: {
        lightweight: "Lightweight",
        lightweightSub: "Focused on the home screen",
        customizable: "Customizable",
        customizableSub: "Text, layout, scrolling and backgrounds",
        compatible: "Broad compatibility",
        compatibleSub: "Built for different devices and launchers"
      },
      widget: {
        kicker: "Three lines. Your information.",
        title: "Designed to stay useful at every size.",
        lead: "Home Glance keeps the Pixel-inspired three-line layout while giving you control over what moves, what stays still and how the background blends with your wallpaper.",
        line1Title: "Date + next alarm",
        line1Text: "The date can scroll on narrow widgets while the next alarm remains available beside it.",
        line2Title: "Weather",
        line2Text: "Current weather and optional details can scroll independently when the line is too long.",
        line3Title: "Calendar",
        line3Text: "The next event gets its own scrolling control, so every line can behave differently.",
        imageAlt: "Home Glance widget on an Android home screen",
        backgroundNone: "No background",
        scrollTitle: "Per-line scrolling",
        scrollText: "Choose each line separately",
        backgroundTitle: "Adaptive background",
        backgroundText: "Wallpaper visibility control"
      },
      features: {
        kicker: "Built for the home screen",
        title: "Useful information without the clutter.",
        lead: "A compact widget with the details you want, only when you want them.",
        weatherTitle: "Weather that adapts",
        weatherText: "Current conditions, automatic or manual location, smart refresh intervals, dynamic details and contextual insights.",
        calendarTitle: "Calendar at a glance",
        calendarText: "Upcoming events, selected calendars, countdowns, ongoing events and flexible filters.",
        alarmTitle: "Next alarm",
        alarmText: "Keep the next system alarm beside your date, updated automatically when the alarm changes.",
        customTitle: "Make every line yours",
        customText: "Choose font, size, alignment and independent scrolling for date/alarm, weather and calendar.",
        materialText: "Use system-inspired colors that blend naturally with your Android setup.",
        glassText: "A translucent glass-style background with adjustable wallpaper visibility."
      },
      new: {
        kicker: "What’s new",
        title: "A reliability-focused update in",
        lead: "Home Glance v0.2.1 focuses on faster calendar reactions and smoother widget text behaviour.",
        item1: "Calendar changes can refresh the widget within seconds",
        item2: "Automatic calendar provider change monitoring",
        item3: "Fixed unwanted ellipsis in Standard weather text",
        item4: "Fixed the first-cycle duplicate calendar ticker layer",
        item5: "30-minute Android widget refresh remains as a fallback",
        notes: "Read full release notes",
        refreshMock: "Refresh widget"
      },
      screenshots: {
        kicker: "See it in action",
        title: "Simple outside. Powerful inside.",
        lead: "Tap a screenshot to see it larger.",
        home: "Home",
        appearance: "Appearance",
        smart: "Smart weather",
        calendar: "Calendar",
        homeAlt: "Home Glance main screen",
        appearanceAlt: "Home Glance appearance settings",
        smartAlt: "Home Glance smart weather settings",
        calendarAlt: "Home Glance calendar settings"
      },
      about: {
        kicker: "Why Home Glance?",
        title: "A familiar idea, rebuilt for modern Android.",
        p1: "Home Glance started from a simple idea: keep the clean, useful home-screen experience that made Another Widget so appealing, while bringing it forward for modern Android.",
        p2: "The project focuses on useful information at a glance, strong customization, broad device compatibility and active development.",
        disclaimer: "Home Glance is an independent project and is not affiliated with Another Widget."
      },
      languages: { kicker: "11 languages", title: "Made for more Android users." },
      faq: {
        title: "Good to know before installing.",
        q1: "Can I install v0.2.1 over an older version?",
        a1: "Yes. Home Glance can update over previous versions without removing the app, and existing settings and widget configuration are preserved.",
        q2: "Does Home Glance contain ads?",
        a2: "No. Home Glance is free and does not include advertising.",
        q3: "Which Android versions are supported?",
        a3: "Home Glance supports Android 8.0 (API 26) and newer.",
        q4: "Is this a finished stable release?",
        a4: "Not yet. Home Glance is still in public testing, so feedback and bug reports are especially useful."
      },
      download: {
        latest: "Latest public test",
        title: "Bring Home Glance to your home screen.",
        text: "Download the APK from GitHub and help shape the next release.",
        button: "Download APK",
        feedback: "Feedback & issues"
      },
      releaseDetails: {
        kicker: "Release notes",
        title: "Home Glance v0.2.1",
        lead: "A focused reliability update for calendar refresh and widget text animation.",
        publicTest: "Public test",
        changesTitle: "What changed",
        change1: "Calendar changes can refresh the widget automatically instead of waiting for the regular update window.",
        change2: "Added Android Calendar provider change monitoring using a content-triggered background job.",
        change3: "Calendar event and reminder changes are briefly debounced before refresh.",
        change4: "Fixed clipped Standard weather text showing an unwanted ellipsis.",
        change5: "Fixed a first-cycle long-text scrolling glitch that could briefly show two calendar text layers.",
        change6: "The 30-minute system widget refresh remains as a fallback.",
        testingTitle: "Testing focus",
        test1: "Add a new calendar event while the widget is visible.",
        test2: "Edit an existing event.",
        test3: "Delete an event.",
        test4: "Change an event reminder.",
        test5: "Dismiss a smart weather insight while calendar scrolling is enabled.",
        test6: "Check long text in Standard weather mode.",
        status: "Home Glance remains in public testing. Feedback and bug reports are welcome.",
        download: "Go to download"
      },
      footer: {
        text: "Useful information, right where you need it.",
        feedback: "Feedback & issues",
        privacy: "Privacy",
        roadmap: "Roadmap",
        testing: "Testing",
        contributing: "Contributing"
      }
    },

    pl: {
      page: {
        title: "Home Glance — Pogoda i kalendarz na pierwszy rzut oka",
        description: "Home Glance to lekki i konfigurowalny widżet Androida z pogodą, wydarzeniami z kalendarza i informacjami kontekstowymi.",
        ogDescription: "Nowoczesny i konfigurowalny widżet ekranu głównego Androida inspirowany Pixel At a Glance."
      },
      nav: { widget: "Widżet", features: "Funkcje", whatsNew: "Co nowego", screenshots: "Zrzuty", faq: "FAQ", download: "Pobierz" },
      theme: { toggle: "Przełącz jasny i ciemny motyw" },
      hero: {
        eyebrow: "Publiczne testy",
        title: "Twój dzień.<br><span>Na pierwszy rzut oka.</span>",
        lead: "Pogoda, wydarzenia z kalendarza, najbliższy alarm i inteligentny kontekst w czystym widżecie Androida pasującym do nowoczesnych launcherów.",
        download: "Pobierz APK",
        releaseNotes: "Informacje o wydaniu",
        free: "Bezpłatna",
        noAds: "Bez reklam",
        languages: "języków",
        imageAlt: "Widżet Home Glance na ekranie głównym Androida",
        weatherCard: "Pogoda",
        weatherCardSub: "Inteligentne szczegóły",
        calendarCard: "Kalendarz",
        calendarCardSub: "Najbliższe wydarzenie",
        styleCardSub: "Adaptacyjny styl"
      },
      trust: {
        lightweight: "Lekki",
        lightweightSub: "Skupiony na ekranie głównym",
        customizable: "Konfigurowalny",
        customizableSub: "Tekst, układ, przewijanie i tła",
        compatible: "Szeroka zgodność",
        compatibleSub: "Tworzony z myślą o różnych urządzeniach i launcherach"
      },
      widget: {
        kicker: "Trzy linie. Twoje informacje.",
        title: "Zaprojektowany tak, by pozostać użyteczny w każdym rozmiarze.",
        lead: "Home Glance zachowuje trzywierszowy układ inspirowany Pixelem, dając Ci kontrolę nad tym, co się przewija, co pozostaje nieruchome i jak tło łączy się z tapetą.",
        line1Title: "Data + najbliższy alarm",
        line1Text: "Data może przewijać się w wąskim widżecie, a informacja o najbliższym alarmie pozostaje obok niej.",
        line2Title: "Pogoda",
        line2Text: "Aktualna pogoda i opcjonalne szczegóły mogą przewijać się niezależnie, gdy linia jest zbyt długa.",
        line3Title: "Kalendarz",
        line3Text: "Najbliższe wydarzenie ma własne sterowanie przewijaniem, więc każda linia może zachowywać się inaczej.",
        imageAlt: "Widżet Home Glance na ekranie głównym Androida",
        backgroundNone: "Bez tła",
        scrollTitle: "Przewijanie każdej linii",
        scrollText: "Wybieraj każdą linię osobno",
        backgroundTitle: "Adaptacyjne tło",
        backgroundText: "Regulacja przenikania tapety"
      },
      features: {
        kicker: "Stworzony dla ekranu głównego",
        title: "Przydatne informacje bez zbędnego bałaganu.",
        lead: "Kompaktowy widżet pokazujący dokładnie te informacje, których potrzebujesz.",
        weatherTitle: "Pogoda, która się dostosowuje",
        weatherText: "Aktualne warunki, automatyczna lub ręczna lokalizacja, inteligentne odświeżanie, dynamiczne szczegóły i wskazówki kontekstowe.",
        calendarTitle: "Kalendarz na pierwszy rzut oka",
        calendarText: "Nadchodzące wydarzenia, wybrane kalendarze, odliczanie, trwające wydarzenia i elastyczne filtry.",
        alarmTitle: "Najbliższy alarm",
        alarmText: "Pokazuj najbliższy alarm obok daty i aktualizuj go automatycznie po zmianie alarmu systemowego.",
        customTitle: "Dopasuj każdą linię",
        customText: "Wybierz krój, rozmiar, wyrównanie i niezależne przewijanie daty/alarmu, pogody oraz kalendarza.",
        materialText: "Korzystaj z kolorów inspirowanych systemem, które naturalnie pasują do Twojego Androida.",
        glassText: "Półprzezroczyste tło w stylu szkła z regulacją przenikania tapety."
      },
      new: {
        kicker: "Co nowego",
        title: "Aktualizacja niezawodności w",
        lead: "Home Glance v0.2.1 skupia się na szybszej reakcji kalendarza i płynniejszym działaniu tekstu widżetu.",
        item1: "Zmiany kalendarza mogą odświeżać widżet w ciągu kilku sekund",
        item2: "Automatyczne monitorowanie zmian w kalendarzu Androida",
        item3: "Usunięto niechciane wielokropki w trybie Standard pogody",
        item4: "Naprawiono podwójną warstwę pierwszego przewinięcia kalendarza",
        item5: "30-minutowe systemowe odświeżanie pozostaje jako zabezpieczenie",
        notes: "Zobacz pełne informacje o wydaniu",
        refreshMock: "Odśwież widget"
      },
      screenshots: {
        kicker: "Zobacz go w działaniu",
        title: "Prosty z zewnątrz. Rozbudowany w środku.",
        lead: "Kliknij zrzut ekranu, aby zobaczyć go w większym rozmiarze.",
        home: "Ekran główny",
        appearance: "Wygląd",
        smart: "Inteligentna pogoda",
        calendar: "Kalendarz",
        homeAlt: "Główny ekran Home Glance",
        appearanceAlt: "Ustawienia wyglądu Home Glance",
        smartAlt: "Ustawienia inteligentnej pogody Home Glance",
        calendarAlt: "Ustawienia kalendarza Home Glance"
      },
      about: {
        kicker: "Dlaczego Home Glance?",
        title: "Znany pomysł zbudowany od nowa dla współczesnego Androida.",
        p1: "Home Glance powstał z prostej idei: zachować czyste i użyteczne doświadczenie ekranu głównego, za które użytkownicy polubili Another Widget, i przenieść je na współczesnego Androida.",
        p2: "Projekt skupia się na przydatnych informacjach dostępnych od razu, szerokiej personalizacji, dobrej zgodności z różnymi urządzeniami i aktywnym rozwoju.",
        disclaimer: "Home Glance jest niezależnym projektem i nie jest powiązany z Another Widget."
      },
      languages: { kicker: "11 języków", title: "Dla jeszcze większej liczby użytkowników Androida." },
      faq: {
        title: "Warto wiedzieć przed instalacją.",
        q1: "Czy mogę zainstalować v0.2.1 na starszej wersji?",
        a1: "Tak. Home Glance aktualizuje się bez usuwania poprzedniej wersji, a istniejące ustawienia i konfiguracja widżetu zostają zachowane.",
        q2: "Czy Home Glance zawiera reklamy?",
        a2: "Nie. Home Glance jest bezpłatny i nie zawiera reklam.",
        q3: "Jakie wersje Androida są obsługiwane?",
        a3: "Home Glance obsługuje Androida 8.0 (API 26) i nowsze wersje.",
        q4: "Czy to już stabilne, finalne wydanie?",
        a4: "Jeszcze nie. Home Glance nadal jest w publicznych testach, dlatego opinie i zgłoszenia błędów są szczególnie przydatne."
      },
      download: {
        latest: "Najnowsza wersja testowa",
        title: "Dodaj Home Glance do swojego ekranu głównego.",
        text: "Pobierz APK z GitHuba i pomóż kształtować kolejne wydanie.",
        button: "Pobierz APK",
        feedback: "Opinie i błędy"
      },
      releaseDetails: {
        kicker: "Informacje o wydaniu",
        title: "Home Glance v0.2.1",
        lead: "Aktualizacja skupiona na niezawodności odświeżania kalendarza i animacji tekstu widżetu.",
        publicTest: "Publiczne testy",
        changesTitle: "Co się zmieniło",
        change1: "Zmiany w kalendarzu mogą automatycznie odświeżyć widżet bez czekania na regularne odświeżenie.",
        change2: "Dodano monitorowanie zmian dostawcy Kalendarza Androida przez zadanie uruchamiane zmianą danych.",
        change3: "Zmiany wydarzeń i przypomnień są krótko opóźniane przed odświeżeniem, aby zapis danych mógł się zakończyć.",
        change4: "Naprawiono ucinanie tekstu pogody w trybie Standard z niechcianym wielokropkiem.",
        change5: "Naprawiono błąd pierwszego przewinięcia długiego tekstu, który mógł chwilowo pokazać dwie warstwy kalendarza.",
        change6: "Systemowe odświeżanie co 30 minut pozostaje jako zabezpieczenie.",
        testingTitle: "Na czym skupić testy",
        test1: "Dodanie nowego wydarzenia, gdy widżet jest widoczny.",
        test2: "Edycja istniejącego wydarzenia.",
        test3: "Usunięcie wydarzenia.",
        test4: "Zmiana przypomnienia wydarzenia.",
        test5: "Ukrycie inteligentnej wskazówki pogodowej przy włączonym przewijaniu kalendarza.",
        test6: "Długi tekst w trybie Standard pogody.",
        status: "Home Glance nadal jest w publicznych testach. Opinie i zgłoszenia błędów są mile widziane.",
        download: "Przejdź do pobierania"
      },
      footer: {
        text: "Przydatne informacje dokładnie tam, gdzie ich potrzebujesz.",
        feedback: "Opinie i błędy",
        privacy: "Prywatność",
        roadmap: "Plan rozwoju",
        testing: "Testowanie",
        contributing: "Współpraca"
      }
    }
  };

  let currentLanguage = "en";

  const getValue = (object, path) =>
    path.split(".").reduce((value, key) => value && value[key], object);

  const detectInitialLanguage = () => {
    const saved = localStorage.getItem(LANGUAGE_KEY);
    if (supportedLanguages.includes(saved)) return saved;
    return (navigator.language || "").toLowerCase().startsWith("pl") ? "pl" : "en";
  };

  const applyLanguage = (language) => {
    const lang = supportedLanguages.includes(language) ? language : "en";
    currentLanguage = lang;
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

    document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
      const value = getValue(dictionary, element.dataset.i18nAria);
      if (typeof value === "string") element.setAttribute("aria-label", value);
    });

    document.querySelectorAll(".language-option").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.lang === lang));
    });

    localStorage.setItem(LANGUAGE_KEY, lang);
  };

  const getSystemDark = () =>
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

  const applyTheme = (theme) => {
    const normalized = ["light", "dark", "system"].includes(theme) ? theme : "system";
    document.documentElement.dataset.theme = normalized;

    const effectiveDark = normalized === "dark" || (normalized === "system" && getSystemDark());
    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) themeColor.setAttribute("content", effectiveDark ? "#0e1118" : "#f5f6fb");

    localStorage.setItem(THEME_KEY, normalized);
  };

  const toggleTheme = () => {
    const current = document.documentElement.dataset.theme || "system";
    const effectiveDark = current === "dark" || (current === "system" && getSystemDark());
    applyTheme(effectiveDark ? "light" : "dark");
  };

  const initReleaseMetadata = async () => {
    try {
      const response = await fetch("https://api.github.com/repos/vanloocek-collab/Home-Glance-Releases/releases?per_page=10", {
        headers: { Accept: "application/vnd.github+json" }
      });
      if (!response.ok) return;

      const releases = await response.json();
      const latest = releases.find((release) => !release.draft);
      if (!latest) return;

      const version = latest.tag_name || "0.2.1";
      const apk = (latest.assets || []).find((asset) =>
        asset.name && asset.name.toLowerCase().endsWith(".apk") &&
        !asset.name.toLowerCase().includes("debug")
      );

      document.querySelectorAll("[data-release-version]").forEach((element) => {
        element.textContent = version.startsWith("v") ? version : `v${version}`;
      });

      document.querySelectorAll("[data-release-url]").forEach((element) => {
        if (latest.html_url) element.href = latest.html_url;
      });

      document.querySelectorAll("[data-release-download]").forEach((element) => {
        if (apk && apk.browser_download_url) element.href = apk.browser_download_url;
      });
    } catch (_) {
      // Static v0.2.1 links remain as a safe fallback.
    }
  };

  const initReveal = () => {
    const elements = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.10 });

    elements.forEach((element) => observer.observe(element));
  };

  const initActiveNavigation = () => {
    const links = [...document.querySelectorAll('nav a[href^="#"]')];
    if (!links.length || !("IntersectionObserver" in window)) return;

    const sections = links
      .map((link) => document.querySelector(link.getAttribute("href")))
      .filter(Boolean);

    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;

      links.forEach((link) => {
        link.classList.toggle(
          "active",
          link.getAttribute("href") === `#${visible.target.id}`
        );
      });
    }, {
      rootMargin: "-22% 0px -58% 0px",
      threshold: [0.05, 0.2, 0.5]
    });

    sections.forEach((section) => observer.observe(section));
  };

  const initLightbox = () => {
    const dialog = document.querySelector(".lightbox");
    if (!dialog || typeof dialog.showModal !== "function") return;

    const image = dialog.querySelector("img");
    const caption = dialog.querySelector("p");
    const close = dialog.querySelector(".lightbox-close");

    document.querySelectorAll("[data-lightbox]").forEach((button) => {
      button.addEventListener("click", () => {
        image.src = button.dataset.lightbox;
        image.alt = button.querySelector("img")?.alt || "";
        const captionKey = button.dataset.lightboxCaption;
        const localized = captionKey ? getValue(translations[currentLanguage], captionKey) : "";
        caption.textContent = localized || "";
        dialog.showModal();
      });
    });

    close?.addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });
  };

  document.querySelectorAll(".language-option").forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.lang));
  });

  document.querySelector(".theme-toggle")?.addEventListener("click", toggleTheme);

  const savedTheme = localStorage.getItem(THEME_KEY) || "system";
  applyTheme(savedTheme);
  applyLanguage(detectInitialLanguage());
  initReveal();
  initActiveNavigation();
  initLightbox();
  initReleaseMetadata();
})();
