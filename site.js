(() => {
  const LANGUAGE_KEY = "home-glance-language";
  const THEME_KEY = "home-glance-theme";
  const supportedLanguages = ["en-US", "en-GB", "pl", "de", "es", "fr", "it", "pt-BR", "ru", "zh-CN", "ja"];

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
        releaseNotes: "v0.2.2 release notes",
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
        lead: "Home Glance v0.2.2 improves alarm reliability, launcher text handling, resizing and refresh stability.",
        item1: "Reliable next-alarm updates on Xiaomi / POCO",
        item2: "Direct monitoring of Xiaomi / POCO alarm-setting changes",
        item3: "Fixed duplicate ticker text on affected launchers",
        item4: "Fixed weather text clipping on Xiaomi / POCO",
        item5: "Improved resize, refresh and Dynamic Weather stability",
        notes: "Read full release notes",
        refreshMock: "Refresh widget"
      },
      screenshots: {
        kicker: "See it in action",
        title: "Simple outside. Powerful inside.",
        lead: "Reference screenshots from earlier builds; the current interface may differ. Tap a screenshot to enlarge it.",
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
        p2: "It is also made for Android users who like the clean, Pixel-like look but do not want to switch to a custom ROM just to get it — especially when keeping Strong Play Integrity matters to them. Home Glance brings a little of that clean-Android feel to the home screen while leaving the rest of the system untouched.",
        p3: "The project focuses on useful information at a glance, strong customization, broad device compatibility and active development.",
        disclaimer: "Home Glance is an independent project and is not affiliated with Another Widget."
      },
      languages: { kicker: "11 languages", title: "Made for more Android users." },
      faq: {
        title: "Good to know before installing.",
        q1: "Can I install v0.2.2 over an older version?",
        a1: "Yes, when the APK uses the same package name and signing key as your installed build. Settings are preserved during a compatible update. Debug, Play and GitHub builds may not be interchangeable.",
        q2: "Does Home Glance contain ads?",
        a2: "No. Home Glance is free and does not include advertising.",
        q3: "Which Android versions are supported?",
        a3: "Home Glance supports Android 8.0 (API 26) and newer.",
        q4: "Is this a finished stable release?",
        a4: "Not yet. Home Glance is still in public testing. Development builds can contain changes that are not included in the public APK."
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
        title: "Home Glance v0.2.2",
        lead: "A compatibility and reliability update for alarms, text layout, resizing and refresh behaviour.",
        publicTest: "Public test",
        changesTitle: "What changed",
        change1: "Fixed incorrect and stale next-alarm times on Xiaomi / POCO, including temporary 00:00 after disabling an alarm.",
        change2: "Added direct Settings-provider monitoring for Xiaomi / POCO alarm changes.",
        change3: "Fixed duplicate ticker text on some POCO and OnePlus launchers.",
        change4: "Fixed weather text clipping on Xiaomi / POCO.",
        change5: "Fixed date text remaining clipped after widget resize.",
        change6: "Improved Refresh Widget full rebuilds and Dynamic Weather transition stability.",
        testingTitle: "Testing focus",
        test1: "Enable and disable alarms repeatedly on Xiaomi / POCO.",
        test2: "Switch between multiple enabled alarms and verify the next one updates automatically.",
        test3: "Resize the widget narrow and wide and verify the date restores correctly.",
        test4: "Check long weather text on Xiaomi / POCO.",
        test5: "Cycle Dynamic Weather details and verify ticker text does not duplicate.",
        test6: "Use Refresh Widget on different launchers and verify a clean rebuild.",
        status: "Home Glance remains in public testing. Feedback and bug reports are welcome.",
        download: "Go to download"
      },
      fullRelease: {
        kicker: "FULL RELEASE NOTES",
        lead: "Release notes for the v0.2.2 public test.",
        close: "Close full release notes",
        intro: "Home Glance v0.2.2 is a compatibility and reliability update focused on Xiaomi / POCO alarms, launcher text handling, widget resizing and refresh stability.",
        whatsNew: "What's new",
        item1: "Fixed incorrect and stale next-alarm times on Xiaomi / POCO, including temporary 00:00 after disabling an alarm",
        item2: "Added Settings-provider monitoring for Xiaomi / POCO alarm changes so the widget updates reliably without manual refresh",
        item3: "Fixed duplicate ticker text on some POCO and OnePlus launchers",
        item4: "Fixed weather text clipping on Xiaomi / POCO",
        item5: "Fixed date text remaining clipped after widget resize",
        item6: "Improved Refresh Widget full rebuilds and Dynamic Weather transitions to prevent stale launcher state",
        testingFocus: "Testing focus",
        attention: "Please pay particular attention to:",
        test1: "enabling and disabling alarms repeatedly on Xiaomi / POCO",
        test2: "switching between multiple enabled alarms",
        test3: "resizing the widget between narrow and wide layouts",
        test4: "long weather text on Xiaomi / POCO",
        test5: "Dynamic Weather transitions with ticker scrolling enabled",
        test6: "Refresh Widget behaviour on different launchers",
        final: "Home Glance remains in public testing. Feedback and bug reports are welcome."
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
        releaseNotes: "Informacje o wydaniu v0.2.2",
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
        lead: "Home Glance v0.2.2 poprawia niezawodność alarmów, tekstu, zmiany rozmiaru i odświeżania widżetu.",
        item1: "Pewne aktualizacje najbliższego alarmu na Xiaomi / POCO",
        item2: "Bezpośrednie monitorowanie zmian ustawień alarmu Xiaomi / POCO",
        item3: "Naprawiono powielanie tekstu tickera na części launcherów",
        item4: "Naprawiono ucinanie tekstu pogody na Xiaomi / POCO",
        item5: "Ulepszono zmianę rozmiaru, odświeżanie i Dynamic Weather",
        notes: "Zobacz pełne informacje o wydaniu",
        refreshMock: "Odśwież widget"
      },
      screenshots: {
        kicker: "Zobacz go w działaniu",
        title: "Prosty z zewnątrz. Rozbudowany w środku.",
        lead: "Zrzuty poglądowe z wcześniejszych wersji; obecny interfejs może się różnić. Dotknij zrzutu, aby go powiększyć.",
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
        p2: "To także aplikacja dla użytkowników Androida, którzy lubią czysty, pixelowy wygląd, ale nie chcą przechodzić na custom ROM tylko po to, żeby go uzyskać — szczególnie jeśli zależy im na zachowaniu Strong Play Integrity. Home Glance ma dawać odrobinę klimatu czystego Androida na ekranie głównym bez konieczności zmiany całego systemu.",
        p3: "Projekt skupia się na przydatnych informacjach dostępnych od razu, szerokiej personalizacji, dobrej zgodności z różnymi urządzeniami i aktywnym rozwoju.",
        disclaimer: "Home Glance jest niezależnym projektem i nie jest powiązany z Another Widget."
      },
      languages: { kicker: "11 języków", title: "Dla jeszcze większej liczby użytkowników Androida." },
      faq: {
        title: "Warto wiedzieć przed instalacją.",
        q1: "Czy mogę zainstalować v0.2.2 na starszej wersji?",
        a1: "Tak, jeśli APK ma tę samą nazwę pakietu i klucz podpisu co zainstalowana wersja. Zgodna aktualizacja zachowuje ustawienia. Wersje debug, Play i GitHub mogą nie być wzajemnie zgodne.",
        q2: "Czy Home Glance zawiera reklamy?",
        a2: "Nie. Home Glance jest bezpłatny i nie zawiera reklam.",
        q3: "Jakie wersje Androida są obsługiwane?",
        a3: "Home Glance obsługuje Androida 8.0 (API 26) i nowsze wersje.",
        q4: "Czy to już stabilne, finalne wydanie?",
        a4: "Jeszcze nie. Home Glance nadal jest w publicznych testach. Wersje rozwojowe mogą zawierać zmiany niedostępne w publicznym APK."
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
        title: "Home Glance v0.2.2",
        lead: "Aktualizacja zgodności i niezawodności alarmów, tekstu, zmiany rozmiaru i odświeżania widżetu.",
        publicTest: "Publiczne testy",
        changesTitle: "Co się zmieniło",
        change1: "Naprawiono błędne i nieaktualne godziny alarmów na Xiaomi / POCO, w tym chwilowe 00:00 po wyłączeniu alarmu.",
        change2: "Dodano bezpośrednie monitorowanie ustawień alarmu Xiaomi / POCO.",
        change3: "Naprawiono powielanie tekstu tickera na części launcherów POCO i OnePlus.",
        change4: "Naprawiono ucinanie tekstu pogody na Xiaomi / POCO.",
        change5: "Naprawiono pozostawanie uciętej daty po zmianie rozmiaru widżetu.",
        change6: "Ulepszono pełną przebudowę przez Odśwież widget oraz przejścia Dynamic Weather.",
        testingTitle: "Na czym skupić testy",
        test1: "Wielokrotne włączanie i wyłączanie alarmów na Xiaomi / POCO.",
        test2: "Przełączanie pomiędzy kilkoma aktywnymi alarmami.",
        test3: "Zwężanie i rozszerzanie widżetu oraz powrót pełnej daty.",
        test4: "Długi tekst pogody na Xiaomi / POCO.",
        test5: "Przejścia Dynamic Weather przy włączonym przewijaniu.",
        test6: "Działanie Odśwież widget na różnych launcherach.",
        status: "Home Glance nadal jest w publicznych testach. Opinie i zgłoszenia błędów są mile widziane.",
        download: "Przejdź do pobierania"
      },
      fullRelease: {
        kicker: "PEŁNE INFORMACJE O WYDANIU",
        lead: "Informacje o publicznej wersji testowej v0.2.2.",
        close: "Zamknij pełne informacje o wydaniu",
        intro: "Home Glance v0.2.2 to aktualizacja zgodności i niezawodności skupiona na alarmach Xiaomi / POCO, tekście launchera, zmianie rozmiaru i odświeżaniu widżetu.",
        whatsNew: "Co nowego",
        item1: "Naprawiono błędne i nieaktualne godziny alarmów na Xiaomi / POCO, w tym chwilowe 00:00 po wyłączeniu alarmu",
        item2: "Dodano monitorowanie ustawień alarmu Xiaomi / POCO, aby widżet aktualizował się niezawodnie bez ręcznego odświeżania",
        item3: "Naprawiono powielanie tekstu tickera na części launcherów POCO i OnePlus",
        item4: "Naprawiono ucinanie tekstu pogody na Xiaomi / POCO",
        item5: "Naprawiono pozostawanie uciętej daty po zmianie rozmiaru widżetu",
        item6: "Ulepszono pełną przebudowę widżetu oraz przejścia Dynamic Weather, aby zapobiegać pozostawaniu starego stanu launchera",
        testingFocus: "Na czym skupić testy",
        attention: "Prosimy zwrócić szczególną uwagę na:",
        test1: "wielokrotne włączanie i wyłączanie alarmów na Xiaomi / POCO",
        test2: "przełączanie pomiędzy kilkoma aktywnymi alarmami",
        test3: "zmianę rozmiaru widżetu między wąskim i szerokim układem",
        test4: "długi tekst pogody na Xiaomi / POCO",
        test5: "przejścia Dynamic Weather przy włączonym przewijaniu tickera",
        test6: "działanie Odśwież widget na różnych launcherach",
        final: "Home Glance nadal jest w publicznych testach. Opinie i zgłoszenia błędów są mile widziane."
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

  translations["en-US"] = translations.en;
  Object.assign(translations, window.HOME_GLANCE_LOCALES || {});

  let currentLanguage = "en-US";

  const readValue = (object, path) =>
    path.split(".").reduce((value, key) => value && value[key], object);

  const getValue = (object, path) =>
    readValue(object, path) ?? readValue(translations["en-US"], path);

  const detectInitialLanguage = () => {
    const saved = localStorage.getItem(LANGUAGE_KEY);
    if (saved === "en") return "en-US";
    if (supportedLanguages.includes(saved)) return saved;

    const browserLanguage = (navigator.language || "en-US");
    const normalized = browserLanguage.replace("_", "-");

    if (supportedLanguages.includes(normalized)) return normalized;
    if (/^en-GB/i.test(normalized)) return "en-GB";
    if (/^en/i.test(normalized)) return "en-US";
    if (/^pt/i.test(normalized)) return "pt-BR";
    if (/^zh/i.test(normalized)) return "zh-CN";

    const base = normalized.split("-")[0].toLowerCase();
    if (supportedLanguages.includes(base)) return base;

    return "en-US";
  };

  const applyLanguage = (language) => {
    const lang = supportedLanguages.includes(language) ? language : "en-US";
    currentLanguage = lang;
    const dictionary = translations[lang] || translations["en-US"];

    document.documentElement.lang = lang;
    document.title = getValue(dictionary, "page.title");

    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", getValue(dictionary, "page.description"));

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute("content", getValue(dictionary, "page.ogDescription"));

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

    const languageMeta = {
      "en-US": { label: "English (US)", flag: "flag-us" },
      "en-GB": { label: "English (UK)", flag: "flag-gb" },
      pl: { label: "Polski", flag: "flag-pl" },
      de: { label: "Deutsch", flag: "flag-de" },
      es: { label: "Español", flag: "flag-es" },
      fr: { label: "Français", flag: "flag-fr" },
      it: { label: "Italiano", flag: "flag-it" },
      "pt-BR": { label: "Português (Brasil)", flag: "flag-ptbr" },
      ru: { label: "Русский", flag: "flag-ru" },
      "zh-CN": { label: "简体中文", flag: "flag-cn" },
      ja: { label: "日本語", flag: "flag-jp" }
    };

    const meta = languageMeta[lang] || languageMeta["en-US"];
    const currentLabel = document.querySelector("[data-current-language-label]");
    const currentFlag = document.querySelector("[data-current-language-flag]");

    if (currentLabel) currentLabel.textContent = meta.label;
    if (currentFlag) {
      currentFlag.className = `flag ${meta.flag}`;
    }

    document.querySelectorAll("[data-lang]").forEach((element) => {
      element.classList.toggle("active", element.dataset.lang === lang);
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
      if (!Array.isArray(releases)) return;

      // A release without a downloadable APK must not relabel the fallback download.
      // Include public prereleases: Home Glance is currently in public testing.
      const candidates = releases.filter((release) =>
        release && !release.draft && typeof release.tag_name === "string" && release.tag_name
      ).map((release) => ({
        release,
        apk: (Array.isArray(release.assets) ? release.assets : []).find((asset) =>
          asset && typeof asset.name === "string" && /\.apk$/i.test(asset.name) &&
          !/debug/i.test(asset.name) &&
          typeof asset.browser_download_url === "string" &&
          asset.browser_download_url.startsWith("https://github.com/vanloocek-collab/Home-Glance-Releases/releases/download/")
        )
      })).filter(({ apk }) => apk).sort((a, b) =>
        (Date.parse(b.release.published_at) || 0) - (Date.parse(a.release.published_at) || 0)
      );
      const latest = candidates[0];
      if (!latest) return;

      const version = latest.release.tag_name;
      document.querySelectorAll("[data-release-version]").forEach((element) => {
        element.textContent = version.startsWith("v") ? version : `v${version}`;
      });

      document.querySelectorAll("[data-release-download]").forEach((element) => {
        element.href = latest.apk.browser_download_url;
      });
    } catch (_) {
      // Static v0.2.2 links remain as a safe fallback.
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


  const initReleaseModal = () => {
    const dialog = document.querySelector(".release-modal");
    if (!dialog || typeof dialog.showModal !== "function") return;

    const openers = document.querySelectorAll("[data-release-modal-open]");
    const closer = dialog.querySelector("[data-release-modal-close]");
    const downloadLink = dialog.querySelector("[data-release-modal-download]");

    openers.forEach((opener) => {
      opener.addEventListener("click", (event) => {
        event.preventDefault();
        if (!dialog.open) dialog.showModal();
      });
    });

    closer?.addEventListener("click", () => dialog.close());

    downloadLink?.addEventListener("click", () => {
      dialog.close();
    });

    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });
  };


  const initFullReleaseModal = () => {
    const dialog = document.querySelector(".full-release-modal");
    if (!dialog || typeof dialog.showModal !== "function") return;

    const openers = document.querySelectorAll("[data-full-release-modal-open]");
    const closer = dialog.querySelector("[data-full-release-modal-close]");

    openers.forEach((opener) => {
      opener.addEventListener("click", (event) => {
        event.preventDefault();
        if (!dialog.open) dialog.showModal();
      });
    });

    closer?.addEventListener("click", () => dialog.close());

    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });
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

  document.querySelectorAll("[data-lang]").forEach((element) => {
    element.addEventListener("click", () => {
      applyLanguage(element.dataset.lang);
      element.closest(".language-menu")?.removeAttribute("open");
    });
  });

  document.addEventListener("click", (event) => {
    const menu = document.querySelector(".language-menu");
    if (menu?.open && !menu.contains(event.target)) menu.removeAttribute("open");
  });

  document.querySelector(".theme-toggle")?.addEventListener("click", toggleTheme);

  const savedTheme = localStorage.getItem(THEME_KEY) || "system";
  applyTheme(savedTheme);
  applyLanguage(detectInitialLanguage());
  initReveal();
  initActiveNavigation();
  initLightbox();
  initReleaseModal();
  initFullReleaseModal();
  initReleaseMetadata();
})();
