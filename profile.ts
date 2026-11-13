export type ExperienceCategory = "esports" | "corporate" | "media";

export interface WorkExperience {
  company: string;
  role: string;
  period: string;
  type: string;
  location: string;
  category: ExperienceCategory;
  current?: boolean;
  summary: string;
}

export const profileData = {
  fullName: "adam bertulfo aseniero",
  handle: "shycodelix",
  tagline: "content creator for avante esports • operations & esports manager",
  status: "looking for team / open to opportunities",
  location: "mandaue city, cebu, philippines",
  contactEmail: "shycodelix@gmail.com",
  socials: [
    { name: "twitch", url: "https://twitch.tv/shycodelix" },
    { name: "faceit", url: "https://faceit.com/en/players/shycodelix-" },
    { name: "steam", url: "https://steamcommunity.com/id/shycodelix/" },
    { name: "spotify", url: "https://open.spotify.com/user/f1n8o3gbee19lcxwjhr1rozx7" },
    { name: "tips / donations", url: "https://www.streamelements.com/shycodelix/tip" },
  ],
  portfolioOverview: {
    headline: "a jack of all trades in the corporate & esports world.",
    bio: "multifaceted professional with multi-industry corporate and esports experience, combining administrative efficiency with strong organizational skills. proven track record managing live esports operations, international bootcamp logistics, and high-volume marketplace/bpo teams.",
    languages: ["english", "tagalog", "cebuano", "korean (conversational)", "german (basic)"],
    coreSkills: [
      "esports & tournament operations",
      "team & performance management",
      "short-form video production",
      "international logistics & visas",
      "social media & brand strategy",
      "qa & escalation management",
    ],
  },
  workExperience: [
    {
      company: "alorica",
      role: "team manager (doordash account)",
      period: "nov 2025 - aug 2026",
      type: "full-time",
      location: "cebu city",
      category: "corporate",
      summary:
        "oversaw daily operations and performance management for the doordash account. specialized in contact scrubbing, metric analysis, targeted coaching, onboarding incoming management, and leading site culture initiatives.",
    },
    {
      company: "intouchcx philippines",
      role: "subject matter expert (whatnot account)",
      period: "apr 2024 - oct 2025",
      type: "full-time",
      location: "cebu city",
      category: "corporate",
      summary:
        "provided operational floor support and specialized email resolution for a high-volume live shopping marketplace (collectibles, luxury items, sports cards). key contact for real-time agent guidance and escalation handling.",
    },
    {
      company: "acadarena",
      role: "senior event marshal",
      period: "jun 2023 - present",
      type: "freelance",
      location: "remote / philippines",
      category: "esports",
      current: true,
      summary:
        "senior marshal within acadarena's play team pool, executing live tournament administration for major events including the alliance games at conquest 2023 and monthly campus aces tournaments.",
    },
    {
      company: "vng corporation / tencent games",
      role: "short-form video editor (pubg mobile esports)",
      period: "mar 2023 - mar 2024",
      type: "part-time",
      location: "remote",
      category: "media",
      summary:
        "produced high-retention tiktoks, reels, and youtube shorts for pubg mobile esports in collaboration with tencent games, leveraging competitive gaming trends to amplify global social reach.",
    },
    {
      company: "abaddon esports / liz avenue management opc",
      role: "operations director & head of socials",
      period: "dec 2022 - apr 2023",
      type: "full-time",
      location: "cebu city",
      category: "esports",
      summary:
        "served as executive support to the ceo while overseeing daily organizational operations, competitive rosters, and administrative staff. concurrently led the social media and digital marketing division.",
    },
    {
      company: "boom esports",
      role: "assistant manager (dota 2)",
      period: "aug 2022 - jan 2023",
      type: "full-time",
      location: "pampanga",
      category: "esports",
      summary:
        "provided full-scope operational and logistical support for a tier-1 pro dota 2 roster—managing daily team needs, executive reporting, international visa processing, and high-performance bootcamps ahead of the international 2022.",
    },
    {
      company: "lionne esports",
      role: "chief operating officer",
      period: "jun 2022 - aug 2022",
      type: "full-time",
      location: "mandaue city",
      category: "esports",
      summary:
        "directed daily operations and team logistics across the organization, acting as the central liaison between competitive players, marketing, content management, and service partners.",
    },
    {
      company: "polaris esports",
      role: "social media manager",
      period: "jan 2022 - apr 2022",
      type: "full-time",
      location: "cebu city",
      category: "media",
      summary:
        "directed brand marketing strategy and digital presence, leading social media campaigns to boost fan engagement and communicate tournament milestones.",
    },
    {
      company: "nooga taxi",
      role: "taxi dispatching specialist",
      period: "jan 2021 - jun 2022",
      type: "part-time",
      location: "remote (chattanooga, tn)",
      category: "corporate",
      summary:
        "managed real-time regional fleet coordination, route optimization, and high-volume customer scheduling across chattanooga, tn and surrounding markets.",
    },
    {
      company: "unity productions",
      role: "production assistant",
      period: "nov 2019 - present",
      type: "freelance",
      location: "cebu city",
      category: "esports",
      current: true,
      summary:
        "grew from local esports marshaling to leading cross-departmental floor production and schedule enforcement for major regional pop-culture conventions like archcon 2019.",
    },
    {
      company: "amazon operation services philippines, inc.",
      role: "customer service associate (l2)",
      period: "oct 2018 - feb 2022",
      type: "full-time",
      location: "cebu city",
      category: "corporate",
      summary:
        "delivered multi-channel support for amazon uk across tier 2 specialized logistics (delivery escalations and driver issues) and frontline retail order/subscription management.",
    },
    {
      company: "gazoop dispatch solutions",
      role: "technical support specialist",
      period: "jun 2017 - sep 2018",
      type: "part-time",
      location: "remote",
      category: "corporate",
      summary:
        "provided non-voice technical support via email and live chat, diagnosing software issues and guiding users through dispatch platform capabilities.",
    },
    {
      company: "mcdonald's philippines (golden arches devt. corp.)",
      role: "local store marketing",
      period: "oct 2017 - apr 2018",
      type: "full-time",
      location: "cebu city",
      category: "media",
      summary:
        "drove store-level promotional campaigns, direct guest relations, and event bookings for corporate functions and parties.",
    },
    {
      company: "bertulfo-piasidad law firm",
      role: "assistant secretary",
      period: "sep 2014 - may 2015",
      type: "part-time",
      location: "cebu city",
      category: "corporate",
      summary:
        "managed client schedules, phone/email inquiries, meeting minutes, notary processing, and legal documentation workflows.",
    },
  ] as WorkExperience[],
  education: [
    {
      school: "deped alternative learning system",
      level: "high school (als curriculum)",
      period: "jun 2016 - apr 2017",
      location: "cebu city",
    },
    {
      school: "matilda l. bradford christian school",
      level: "elementary school",
      period: "jun 2010 - apr 2011",
      location: "cebu city",
    },
  ],
  sensitivities: [
    { game: "valorant", sens: "0.382", dpi: "1600 dpi", edpi: "611.2 edpi" },
    { game: "cs2 / apex / farlight 84", sens: "1.2145892", dpi: "1600 dpi" },
    { game: "overwatch 2", sens: "4.05", dpi: "1600 dpi" },
    { game: "pubg", sens: "39", dpi: "1600 dpi" },
    { game: "roblox", sens: "0.094", dpi: "1600 dpi" },
  ],
  valorantSettings: {
    mouse: {
      dpi: "1600",
      sensitivity: "0.382",
      scopedSensitivity: "1",
      pollingRate: "1000 hz",
      rawInputBuffer: "on",
    },
    crosshairCode:
      "0;c;1;s;1;P;c;1;u;000000FF;f;0;m;1;0l;5;0v;5;0a;1;0f;0;1l;5;1v;5;1g;1;1o;3;1a;1;1m;0;1e;2;S;c;6;t;000000FF;s;0.921;o;1",
    keybinds: [
      { action: "walk", key: "shift" },
      { action: "crouch", key: "ctrl" },
      { action: "jump", key: "space" },
      { action: "use object", key: "e" },
      { action: "ability 1", key: "q" },
      { action: "ability 2", key: "c" },
      { action: "ability 3", key: "e" },
      { action: "ultimate", key: "r" },
    ],
    map: {
      rotate: "rotate",
      minimapSize: "1.102",
      minimapZoom: "0.9",
      visionCones: "on",
      regionNames: "always",
    },
  },
  achievements: [
    {
      placement: "1st",
      event: "vcl philippines split 2 - open qualifiers",
      org: "abaddon esports",
      date: "mar 2023",
      note: "1st team to qualify for regular season",
      url: "https://www.vlr.gg/event/1505/challengers-league-philippines-split-2/open-qualifier",
    },
    {
      placement: "6th",
      event: "vcl philippines split 1 - regular season",
      org: "abaddon esports",
      date: "feb 2023",
      note: "qualified for playoffs",
      url: "https://www.vlr.gg/event/1442/challengers-league-philippines-split-1/playoffs",
    },
    {
      placement: "9th - 12th",
      event: "the international 2022 - dota 2",
      org: "boom esports",
      date: "oct 2022",
      note: "finished top 9th-12th at the international",
      url: "https://liquipedia.net/dota2/The_International/2022",
    },
  ],
  roles: [
    { game: "valorant", list: ["controller", "sentinel", "duelist", "initiator"] },
    { game: "counter-strike 2", list: ["rifle", "in-game leader", "support"] },
    { game: "fortnite", list: ["support", "in-game leader"] },
    { game: "overwatch 2", list: ["damage", "tank", "support"] },
  ],
  pcSpecs: [
    { label: "cpu", value: "amd ryzen 5 5600x (6-core, 3.7 ghz)" },
    { label: "gpu", value: "nvidia geforce rtx 2060" },
    { label: "motherboard", value: "gigabyte b550m ds3h ac" },
    { label: "ram", value: "16 gb (2x8) g.skill trident z neo 3600mhz" },
    { label: "storage", value: "1 tb kingston fury renegade nvme + 1 tb toshiba hdd" },
    { label: "cooler", value: "amd wraith stealth" },
    { label: "psu", value: "corsair cv550" },
    { label: "case", value: "fractal design meshify c atx" },
    { label: "os", value: "windows 11" },
  ],
  peripherals: [
    { category: "mouse", item: "logitech g pro x superlight wireless" },
    { category: "mousepad", item: "artisan fx zero soft xl" },
    { category: "keyboard", item: "royal kludge rk61 wireless 60%" },
    { category: "iem / audio", item: "kz pr1 / cooler master mh752" },
    { category: "microphone", item: "hyperx quadcast s" },
    { category: "monitor", item: "asus vg248qe 144hz" },
    { category: "webcam", item: "logitech c922 pro hd" },
    { category: "controller", item: "sony dualsense wireless" },
  ],
};