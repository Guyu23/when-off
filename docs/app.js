(() => {
  "use strict";

  const COPY = {
    zh: {
      meta: {
        title: "几时下班｜漂亮的计时卡片",
        description: "一个安静的 Windows 桌面倒计时。单文件，免安装，四种背景与四种语言。",
      },
      brand: "几时下班",
      skip: "跳到主要内容",
      nav: { brandAria: "几时下班，回到顶部", lang: "语言", download: "下载" },
      hero: {
        title: "漂亮的计时卡片",
        download: "下载 Windows 版",
        alt: "山影主题的几时下班卡片，距离下班还有两小时三十七分",
      },
      spec: { windows: "Windows 10 / 11", bits: "64 位", size: "约 1.3 MB", install: "免安装" },
      states: {
        title: "三个状态",
        open: "展开",
        folded: "收起",
        done: "该下班了",
        openAlt: "大海主题的展开卡片，距离下班还有两小时三十七分",
        foldedAlt: "收起后的胶囊卡片，显示距离下班还有两小时三十七分",
        doneAlt: "大海主题的下班卡片，绿色文字写着今天辛苦了",
      },
      themes: {
        line: "四个背景",
        paper: "默认",
        sea: "大海",
        aurora: "极光",
        ridge: "山影",
        alt: {
          paper: "默认主题的几时下班卡片，距离下班还有两小时三十七分",
          sea: "大海主题的几时下班卡片，日落与海",
          aurora: "极光主题的几时下班卡片，夜与光",
          ridge: "山影主题的几时下班卡片，云与山",
        },
      },
      download: {
        title: "带走一张小卡片。",
        copy: "单文件，下载后双击就能用。默认上班 09:00，下班 18:00。",
        bits: "64 位",
        mirror: "下载 Windows 版",
        note: "由 Cloudflare 加速，国内外都可访问；文件与 GitHub Release 相同。",
        iconAlt: "几时下班图标",
        trust: { install: "免安装", size: "约 1.3 MB", offline: "不联网", open: "开源" },
        struck: { account: "账号", install: "安装", network: "联网", push: "推送", aria: "不需要账号、安装、联网、推送" },
        checksum: "查看 SHA256 校验值",
      },
      faq: {
        title: "还有一些小问题。",
        copy: "没有隐藏的条款，也没有需要注册的东西。",
        q1: "需要安装吗？",
        a1: "不需要。下载一个 exe，双击打开。设置只存在本机，删掉文件就干净了。",
        q2: "支持哪些 Windows？",
        a2: "Windows 10 和 Windows 11，64 位。更老的系统没有测试过。",
        q3: "为什么会有 SmartScreen 提示？",
        a3: "程序没有代码签名。点「更多信息」再点「仍要运行」即可。完整源码在 GitHub，也可以自己构建。",
        q4: "会上传我的数据吗？",
        a4: "不会。程序没有联网功能，设置只存在本机。",
        q5: "怎么改上下班时间？",
        a5: "点卡片右上角的齿轮，用加减号调整。设置保存在",
        a5end: "。",
        q6: "卡片会挡住屏幕内容吗？",
        a6: "卡片可以隐藏在屏幕边框外，鼠标移入再显示。",
      },
      footer: {
        brandAria: "几时下班，回到顶部",
        copyright: "© 2026",
      },
    },
    en: {
      meta: {
        title: "When Off — A pretty little timer",
        description: "A quiet Windows desktop countdown. One file, no install, four backdrops and four languages.",
      },
      brand: "When Off",
      skip: "Skip to content",
      nav: { brandAria: "When Off, back to top", lang: "Language", download: "Download" },
      hero: {
        title: "A pretty little timer.",
        download: "Download for Windows",
        alt: "When Off card with the Ridge backdrop, two hours thirty-seven minutes until off work",
      },
      spec: { windows: "Windows 10 / 11", bits: "64-bit", size: "~1.3 MB", install: "No install" },
      states: {
        title: "Three states",
        open: "Open",
        folded: "Folded",
        done: "Off work",
        openAlt: "Open card with the Sea backdrop",
        foldedAlt: "Folded capsule showing the time until off work",
        doneAlt: "Off-work card with the Sea backdrop and green text saying nice work today",
      },
      themes: {
        line: "Four backdrops",
        paper: "Plain",
        sea: "Sea",
        aurora: "Aurora",
        ridge: "Ridge",
        alt: {
          paper: "When Off card with the Plain backdrop",
          sea: "When Off card with the Sea backdrop",
          aurora: "When Off card with the Aurora backdrop",
          ridge: "When Off card with the Ridge backdrop",
        },
      },
      download: {
        title: "Take a little card.",
        copy: "One file. Download, double-click, done. Default 09:00–18:00.",
        bits: "64-bit",
        mirror: "Download for Windows",
        note: "Served through Cloudflare worldwide; same file as the GitHub Release.",
        iconAlt: "When Off icon",
        trust: { install: "No install", size: "~1.3 MB", offline: "Offline", open: "Open source" },
        struck: { account: "Account", install: "Install", network: "Network", push: "Notifications", aria: "No account, install, network or notifications" },
        checksum: "View SHA256 checksum",
      },
      faq: {
        title: "A few small questions.",
        copy: "No hidden terms, nothing to sign up for.",
        q1: "Do I need to install it?",
        a1: "No. Download one exe and double-click it. Settings stay on this machine; delete the file and it is gone.",
        q2: "Which Windows versions?",
        a2: "Windows 10 and Windows 11, 64-bit. Older versions are untested.",
        q3: "Why does SmartScreen warn me?",
        a3: "The app is not code-signed. Click More info, then Run anyway. The full source is on GitHub; you can build it yourself.",
        q4: "Does it upload my data?",
        a4: "No. It has no network features; settings stay on this machine.",
        q5: "How do I change the hours?",
        a5: "Click the gear at the top-right of the card and use the plus/minus buttons. Settings live in",
        a5end: ".",
        q6: "Will the card block what's on screen?",
        a6: "It can hide beyond the screen edge and come back when you move the pointer in.",
      },
      footer: {
        brandAria: "When Off, back to top",
        copyright: "© 2026",
      },
    },
    ja: {
      meta: {
        title: "何時に退勤｜きれいなタイマーカード",
        description: "静かな Windows デスクトップのカウントダウン。単一ファイル、インストール不要、4つの背景と4つの言語。",
      },
      brand: "何時に退勤",
      skip: "本文へ",
      nav: { brandAria: "何時に退勤、トップへ", lang: "言語", download: "ダウンロード" },
      hero: {
        title: "きれいなタイマーカード。",
        download: "Windows 版をダウンロード",
        alt: "山影の何時に退勤カード、退勤まで2時間37分",
      },
      spec: { windows: "Windows 10 / 11", bits: "64 ビット", size: "約 1.3 MB", install: "インストール不要" },
      states: {
        title: "3つの状態",
        open: "開く",
        folded: "たたむ",
        done: "退勤",
        openAlt: "海の展開カード",
        foldedAlt: "たたんだカプセル。退勤までの時間を表示",
        doneAlt: "海の退勤カード。緑の文字で今日もお疲れ様",
      },
      themes: {
        line: "四つの背景",
        paper: "標準",
        sea: "海",
        aurora: "オーロラ",
        ridge: "山影",
        alt: {
          paper: "標準背景の何時に退勤カード",
          sea: "海背景の何時に退勤カード",
          aurora: "オーロラ背景の何時に退勤カード",
          ridge: "山影背景の何時に退勤カード",
        },
      },
      download: {
        title: "小さなカードを。",
        copy: "単一ファイル。ダウンロードしてダブルクリックするだけ。既定は 09:00–18:00。",
        bits: "64 ビット",
        mirror: "Windows 版をダウンロード",
        note: "Cloudflare 経由で世界各地から。GitHub Release と同じファイルです。",
        iconAlt: "何時に退勤のアイコン",
        trust: { install: "インストール不要", size: "約 1.3 MB", offline: "オフライン", open: "オープンソース" },
        struck: { account: "アカウント", install: "インストール", network: "通信", push: "通知", aria: "アカウント、インストール、通信、通知は不要" },
        checksum: "SHA256 を表示",
      },
      faq: {
        title: "小さな質問。",
        copy: "隠れた条項も、登録もありません。",
        q1: "インストールは必要？",
        a1: "不要です。exe をダウンロードしてダブルクリックするだけ。設定はこの PC に保存され、ファイルを消せば残りません。",
        q2: "対応 Windows は？",
        a2: "Windows 10 / 11 の 64 ビット。古い版は未検証です。",
        q3: "SmartScreen の警告は？",
        a3: "コード署名がないためです。「詳細情報」→「実行」で起動できます。ソースは GitHub にあり、自分でビルドもできます。",
        q4: "データは送信されますか？",
        a4: "いいえ。通信機能はなく、設定はこの PC だけに保存されます。",
        q5: "勤務時間の変更は？",
        a5: "カード右上の歯車を押し、＋／－で調整します。設定は",
        a5end: "。",
        q6: "カードは画面の内容を隠しますか？",
        a6: "カードは画面の端の外に隠せて、マウスを近づけると再表示されます。",
      },
      footer: {
        brandAria: "何時に退勤、トップへ",
        copyright: "© 2026",
      },
    },
    ko: {
      meta: {
        title: "몇 시 퇴근｜예쁜 타이머 카드",
        description: "조용한 Windows 바탕화면 카운트다운. 단일 파일, 설치 없음, 네 가지 배경과 네 가지 언어.",
      },
      brand: "몇 시 퇴근",
      skip: "본문으로",
      nav: { brandAria: "몇 시 퇴근, 맨 위로", lang: "언어", download: "다운로드" },
      hero: {
        title: "예쁜 타이머 카드.",
        download: "Windows 다운로드",
        alt: "산그림자 배경의 몇 시 퇴근 카드, 퇴근까지 2시간 37분",
      },
      spec: { windows: "Windows 10 / 11", bits: "64비트", size: "약 1.3 MB", install: "설치 없음" },
      states: {
        title: "세 가지 상태",
        open: "펼침",
        folded: "접힘",
        done: "퇴근",
        openAlt: "바다 배경의 펼친 카드",
        foldedAlt: "접힌 캡슐 카드. 퇴근까지 남은 시간 표시",
        doneAlt: "바다 배경의 퇴근 카드, 초록색 글씨로 수고했어요",
      },
      themes: {
        line: "네 가지 배경",
        paper: "기본",
        sea: "바다",
        aurora: "오로라",
        ridge: "산그림자",
        alt: {
          paper: "기본 배경의 몇 시 퇴근 카드",
          sea: "바다 배경의 몇 시 퇴근 카드",
          aurora: "오로라 배경의 몇 시 퇴근 카드",
          ridge: "산그림자 배경의 몇 시 퇴근 카드",
        },
      },
      download: {
        title: "작은 카드를.",
        copy: "단일 파일. 다운로드 후 더블클릭하면 끝. 기본 09:00–18:00.",
        bits: "64비트",
        mirror: "Windows 다운로드",
        note: "Cloudflare를 통해 전 세계에서 이용할 수 있으며 GitHub Release와 같은 파일입니다.",
        iconAlt: "몇 시 퇴근 아이콘",
        trust: { install: "설치 없음", size: "약 1.3 MB", offline: "오프라인", open: "오픈 소스" },
        struck: { account: "계정", install: "설치", network: "네트워크", push: "알림", aria: "계정, 설치, 네트워크, 알림이 필요 없습니다" },
        checksum: "SHA256 보기",
      },
      faq: {
        title: "작은 질문들.",
        copy: "숨은 약관도, 가입도 없습니다.",
        q1: "설치가 필요한가요?",
        a1: "아니요. exe 하나를 내려받아 더블클릭하면 됩니다. 설정은 이 PC에만 저장되고 파일을 지우면 끝입니다.",
        q2: "어떤 Windows를 지원하나요?",
        a2: "Windows 10 / 11 64비트. 더 오래된 버전은 테스트하지 않았습니다.",
        q3: "SmartScreen 경고가 뜨는 이유는?",
        a3: "코드 서명이 없기 때문입니다. '추가 정보' → '실행'을 누르면 됩니다. 전체 소스는 GitHub에 있고 직접 빌드할 수 있습니다.",
        q4: "데이터를 업로드하나요?",
        a4: "아니요. 네트워크 기능이 없고 설정은 이 PC에만 저장됩니다.",
        q5: "출퇴근 시간은 어떻게 바꾸나요?",
        a5: "카드 오른쪽 위 톱니바퀴를 누르고 +/−로 조정합니다. 설정은",
        a5end: ".",
        q6: "카드가 화면 내용을 가리나요?",
        a6: "카드는 화면 가장자리 밖으로 숨길 수 있고, 마우스를 가져가면 다시 나타납니다.",
      },
      footer: {
        brandAria: "몇 시 퇴근, 맨 위로",
        copyright: "© 2026",
      },
    },
  };

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const langMenu = document.querySelector(".lang-menu");
  const langToggle = document.getElementById("lang-toggle");
  const langPopover = document.getElementById("lang-popover");
  const langOptions = [...document.querySelectorAll(".lang-option")];
  let currentLang = "zh";

  const at = (lang, key) =>
    key.split(".").reduce((value, part) => (value == null ? value : value[part]), COPY[lang]);

  const setText = (lang) => {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const value = at(lang, el.dataset.i18n);
      if (typeof value === "string") el.textContent = value;
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const value = at(lang, el.dataset.i18nAria);
      if (typeof value === "string") el.setAttribute("aria-label", value);
    });
    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
      const value = at(lang, el.dataset.i18nAlt);
      if (typeof value === "string") el.alt = value;
    });
  };

  const applyLanguage = (lang, persist = true) => {
    if (!COPY[lang]) lang = "zh";
    currentLang = lang;
    const copy = COPY[lang];
    document.documentElement.lang = lang === "zh" ? "zh-CN" : lang;
    document.title = copy.meta.title;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = copy.meta.description;
    setText(lang);
    langOptions.forEach((option) => {
      option.setAttribute("aria-checked", String(option.dataset.lang === lang));
    });
    if (langToggle) langToggle.setAttribute("aria-label", copy.nav.lang);
    if (langPopover) langPopover.setAttribute("aria-label", copy.nav.lang);
    if (persist) {
      try {
        localStorage.setItem("jishi-lang", lang);
      } catch (_) {
        /* storage can be unavailable; the page still works */
      }
    }
  };

  const stored = (() => {
    try {
      return localStorage.getItem("jishi-lang");
    } catch (_) {
      return null;
    }
  })();
  applyLanguage(stored && COPY[stored] ? stored : "zh", false);

  const switchLanguage = (lang, persist = true) => {
    if (!COPY[lang] || lang === currentLang) return;
    if (reduceMotion.matches) {
      applyLanguage(lang, persist);
      return;
    }
    document.documentElement.classList.add("lang-switching");
    window.setTimeout(() => {
      applyLanguage(lang, persist);
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          document.documentElement.classList.remove("lang-switching");
        });
      });
    }, 180);
  };

  let languageChosen = false;

  if (!stored) {
    const detectRegion = () => {
      fetch("/cdn-cgi/trace", { cache: "no-store", priority: "low" })
        .then((response) => (response.ok ? response.text() : ""))
        .then((text) => {
          if (languageChosen) return;
          const match = text.match(/^loc=([A-Z]{2})$/m);
          if (!match) return;
          const language =
            { CN: "zh", HK: "zh", MO: "zh", TW: "zh", JP: "ja", KR: "ko" }[match[1]] || "en";
          if (languageChosen || language === currentLang) return;
          applyLanguage(language, false);
        })
        .catch(() => {});
    };
    if ("requestIdleCallback" in window) {
      requestIdleCallback(detectRegion, { timeout: 2000 });
    } else {
      window.addEventListener("load", detectRegion, { once: true });
    }
  }

  if (langMenu && langToggle && langPopover && langOptions.length) {
    let closeTimer = 0;
    const setLangOpen = (open, focus = false) => {
      langMenu.classList.toggle("is-open", open);
      langToggle.setAttribute("aria-expanded", String(open));
      if (open && focus) {
        const selected =
          langOptions.find((option) => option.getAttribute("aria-checked") === "true") || langOptions[0];
        window.setTimeout(() => selected.focus({ preventScroll: true }), 0);
      }
    };
    const cancelClose = () => {
      window.clearTimeout(closeTimer);
      closeTimer = 0;
    };
    const openOnHover = () => {
      cancelClose();
      setLangOpen(true);
    };
    const closeOnLeave = () => {
      cancelClose();
      closeTimer = window.setTimeout(() => setLangOpen(false), 120);
    };

    langMenu.addEventListener("pointerenter", openOnHover);
    langMenu.addEventListener("pointerleave", closeOnLeave);
    langMenu.addEventListener("focusout", (event) => {
      if (!langMenu.contains(event.relatedTarget)) setLangOpen(false);
    });
    langToggle.addEventListener("click", () => {
      cancelClose();
      setLangOpen(true, true);
    });

    langOptions.forEach((option, index) => {
      option.addEventListener("click", () => {
        languageChosen = true;
        switchLanguage(option.dataset.lang, true);
        setLangOpen(false);
        langToggle.focus();
      });
      option.addEventListener("keydown", (event) => {
        let next = -1;
        if (event.key === "ArrowDown") next = index + 1;
        if (event.key === "ArrowUp") next = index - 1;
        if (event.key === "Home") next = 0;
        if (event.key === "End") next = langOptions.length - 1;
        if (next >= 0) {
          event.preventDefault();
          langOptions[(next + langOptions.length) % langOptions.length].focus();
        }
      });
    });

    document.addEventListener("click", (event) => {
      if (langMenu.classList.contains("is-open") && !langMenu.contains(event.target)) {
        setLangOpen(false);
      }
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && langMenu.classList.contains("is-open")) {
        setLangOpen(false);
        langToggle.focus();
      }
    });
  }

  // Section entrances: 12px, 400ms, once.
  const reveals = [...document.querySelectorAll(".reveal")];
  const showAll = () => reveals.forEach((el) => el.classList.add("is-in"));
  if (!("IntersectionObserver" in window) || reduceMotion.matches) {
    showAll();
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    reveals.forEach((el) => observer.observe(el));
    if (typeof reduceMotion.addEventListener === "function") {
      reduceMotion.addEventListener("change", () => {
        if (reduceMotion.matches) showAll();
      });
    }
  }
})();
