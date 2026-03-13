import React, { useState, useRef } from "react";

const STORES = [
  { id: 1,   name: "Benešov",                  code: "BNS-01" },
  { id: 2,   name: "Beroun",                   code: "BER-01" },
  { id: 3,   name: "Brandýs nad Labem",        code: "BRL-01" },
  { id: 4,   name: "Bruntál",                  code: "BRU-01" },
  { id: 5,   name: "Břeclav",                  code: "BRC-01" },
  { id: 6,   name: "Bystřice nad Pernštejnem", code: "BYS-01" },
  { id: 7,   name: "Čáslav",                   code: "CAS-01" },
  { id: 8,   name: "Čelákovice",               code: "CEL-01" },
  { id: 9,   name: "Česká Lípa",               code: "CLI-01" },
  { id: 10,  name: "České Budějovice",         code: "CBJ-01" },
  { id: 11,  name: "Český Krumlov",            code: "CKR-01" },
  { id: 12,  name: "Domažlice",                code: "DOM-01" },
  { id: 13,  name: "Dvůr Králové nad Labem",   code: "DVK-01" },
  { id: 14,  name: "Frýdek-Místek",            code: "FRM-01" },
  { id: 15,  name: "Havlíčkův Brod",           code: "HVB-01" },
  { id: 16,  name: "Hlinsko v Čechách",        code: "HLI-01" },
  { id: 17,  name: "Hlučín",                   code: "HLU-01" },
  { id: 18,  name: "Hodonín",                  code: "HOD-01" },
  { id: 19,  name: "Holešov",                  code: "HOL-01" },
  { id: 20,  name: "Horažďovice",              code: "HOR-01" },
  { id: 21,  name: "Hořice",                   code: "HOI-01" },
  { id: 22,  name: "Hradec Králové",           code: "HRK-01" },
  { id: 23,  name: "Hranice",                  code: "HRA-01" },
  { id: 24,  name: "Cheb",                     code: "CHE-01" },
  { id: 25,  name: "Chlumec nad Cidlinou",     code: "CHC-01" },
  { id: 26,  name: "Chotěboř",                 code: "CHT-01" },
  { id: 27,  name: "Chrudim",                  code: "CHR-01" },
  { id: 28,  name: "Jablonec nad Nisou",       code: "JAB-01" },
  { id: 29,  name: "Jaroměřice nad Rokytnou",  code: "JAR-01" },
  { id: 30,  name: "Jeseník",                  code: "JES-01" },
  { id: 31,  name: "Jičín",                    code: "JIC-01" },
  { id: 32,  name: "Jihlava",                  code: "JIH-01" },
  { id: 33,  name: "Jindřichův Hradec",        code: "JHR-01" },
  { id: 34,  name: "Kácov",                    code: "KAC-01" },
  { id: 35,  name: "Karlovy Vary",             code: "KVA-01" },
  { id: 36,  name: "Kladno",                   code: "KLA-01" },
  { id: 37,  name: "Kladno 2",                 code: "KLA-02" },
  { id: 38,  name: "Kolín",                    code: "KOL-01" },
  { id: 39,  name: "Kroměříž",                 code: "KRO-01" },
  { id: 40,  name: "Kutná Hora",               code: "KUT-01" },
  { id: 41,  name: "Lanškroun",                code: "LAN-01" },
  { id: 42,  name: "Ledeč nad Sázavou",        code: "LED-01" },
  { id: 43,  name: "Letohrad",                 code: "LET-01" },
  { id: 44,  name: "Liberec",                  code: "LIB-01" },
  { id: 45,  name: "Litoměřice",               code: "LIT-01" },
  { id: 46,  name: "Litomyšl",                 code: "LTM-01" },
  { id: 47,  name: "Louny",                    code: "LOU-01" },
  { id: 48,  name: "Lysá nad Labem",           code: "LYS-01" },
  { id: 49,  name: "Mariánské Lázně",          code: "MAL-01" },
  { id: 50,  name: "Mělník",                   code: "MEL-01" },
  { id: 51,  name: "Milevsko",                 code: "MIL-01" },
  { id: 52,  name: "Mladá Boleslav",           code: "MLB-01" },
  { id: 53,  name: "Mladá Vožice",             code: "MLV-01" },
  { id: 54,  name: "Mnichovo Hradiště",        code: "MNH-01" },
  { id: 55,  name: "Nové Město na Moravě",     code: "NMM-01" },
  { id: 56,  name: "Nové Město nad Metují",    code: "NMT-01" },
  { id: 57,  name: "Nový Bydžov",              code: "NBY-01" },
  { id: 58,  name: "Nový Jičín",               code: "NJI-01" },
  { id: 59,  name: "Nymburk",                  code: "NYM-01" },
  { id: 60,  name: "Olomouc",                  code: "OLM-01" },
  { id: 61,  name: "Opava",                    code: "OPA-01" },
  { id: 62,  name: "Ostrava",                  code: "OST-01" },
  { id: 63,  name: "Pardubice",                code: "PAR-01" },
  { id: 64,  name: "Pelhřimov",                code: "PEL-01" },
  { id: 65,  name: "Písek",                    code: "PIS-01" },
  { id: 66,  name: "Plzeň město",              code: "PLZ-01" },
  { id: 67,  name: "Poděbrady",                code: "POD-01" },
  { id: 68,  name: "Polička",                  code: "POL-01" },
  { id: 69,  name: "Polná",                    code: "PLN-01" },
  { id: 70,  name: "Praha Dejvice",            code: "PRG-01" },
  { id: 71,  name: "Praha Smíchov",            code: "PRG-02" },
  { id: 72,  name: "Praha Strašnice",          code: "PRG-03" },
  { id: 73,  name: "Praha Vinohrady",          code: "PRG-04" },
  { id: 74,  name: "Prachatice",               code: "PRA-01" },
  { id: 75,  name: "Prostějov",                code: "PRO-01" },
  { id: 76,  name: "Příbor",                   code: "PIB-01" },
  { id: 77,  name: "Příbram",                  code: "PIM-01" },
  { id: 78,  name: "Rakovník",                 code: "RAK-01" },
  { id: 79,  name: "Roudnice nad Labem",       code: "ROU-01" },
  { id: 80,  name: "Rychnov nad Kněžnou",      code: "RYC-01" },
  { id: 81,  name: "Říčany",                   code: "RIC-01" },
  { id: 82,  name: "Sobotka",                  code: "SOB-01" },
  { id: 83,  name: "Strakonice",               code: "STR-01" },
  { id: 84,  name: "Svitavy",                  code: "SVI-01" },
  { id: 85,  name: "Šternberk",                code: "STE-01" },
  { id: 86,  name: "Šumperk",                  code: "SUM-01" },
  { id: 87,  name: "Tábor Albert",             code: "TAB-01" },
  { id: 88,  name: "Tábor město",              code: "TAB-02" },
  { id: 89,  name: "Tachov",                   code: "TAC-01" },
  { id: 90,  name: "Telč",                     code: "TEL-01" },
  { id: 91,  name: "Teplice",                  code: "TEP-01" },
  { id: 92,  name: "Trutnov",                  code: "TRU-01" },
  { id: 93,  name: "Třebíč",                   code: "TRE-01" },
  { id: 94,  name: "Třeboň",                   code: "TRB-01" },
  { id: 95,  name: "Uherské Hradiště",         code: "UHR-01" },
  { id: 96,  name: "Uhlířské Janovice",        code: "UHL-01" },
  { id: 97,  name: "Ústí nad Labem",           code: "USL-01" },
  { id: 98,  name: "Valašské Meziříčí",        code: "VAL-01" },
  { id: 99,  name: "Velké Meziříčí",           code: "VEM-01" },
  { id: 100, name: "Vlašim",                   code: "VLA-01" },
  { id: 101, name: "Votice",                   code: "VOT-01" },
  { id: 102, name: "Vsetín",                   code: "VSE-01" },
  { id: 103, name: "Vysoké Mýto",              code: "VYM-01" },
  { id: 104, name: "Znojmo",                   code: "ZNO-01" },
  { id: 105, name: "Žatec",                    code: "ZAT-01" },
  { id: 106, name: "Železný Brod",             code: "ZEB-01" },
];

const STORE_STAFF = {
  1: ["Věra Pešková", "Ludmila Pitelková"],
  2: ["Eva Mojžíšová"],
  3: ["Vlastimila Králíčková"],
  4: ["Jindřiška Königsmarková"],
  5: ["Marcela Vráblíková"],
  6: ["Bohdana Krondráfová"],
  7: ["Hana Vilímková"],
  8: ["Martina Šelembová"],
  9: ["Markéta Lohrová"],
  10: ["Magdalena Harudová"],
  11: ["Štěpánka Holá"],
  12: ["Marie Konopíková"],
  13: ["Petra Bělovská"],
  14: ["Magda Janáková", "Irena Žebráková Jagrová"],
  15: ["Miroslava Procházková"],
  16: ["Olga Marková"],
  17: ["Libuše Krokerová", "Karin Smolková"],
  18: ["Anna Fiurášková", "Jana Kománková"],
  19: ["Dana Gábová"],
  20: ["Alena Rendlová"],
  21: ["Monika Dvořáková"],
  22: ["Věra Kubiasová"],
  23: ["Věra Koláčková"],
  24: ["Dagmar Novotná"],
  25: ["Jana Karbanová"],
  26: ["Eva Němcová"],
  27: ["Andrea Kudláčková", "Tereza Slejšková"],
  28: ["Martina Doleželová", "Lucie Havrdová"],
  29: ["Marie Doležalová"],
  30: ["Jana Měsíčková"],
  31: ["Renata Dvorská", "Radmila Porubová", "Václava Vitíková"],
  32: ["Jana Metalová"],
  33: ["Dana Gonosová"],
  34: ["Eva Podloucká"],
  35: ["Iva Farská"],
  36: ["Jana Michnicová", "Zina Turková"],
  37: ["Hana Holcová"],
  38: ["Marta Němcová"],
  39: ["Jana Dvořáková"],
  40: ["Anna Hanulová"],
  41: ["Lenka Prouzová"],
  42: ["Zdeňka Bízová", "Vlasta Hrindová"],
  43: ["Iva Janoušková", "Hana Maříková"],
  44: ["Monika Pálová"],
  45: ["Dana Černá"],
  46: ["Jana Bednářová"],
  47: ["Marie Vencourová"],
  48: ["Jana Procházková"],
  49: ["Martina Hanzlíková", "Ivana Potužáková"],
  50: ["Blanka Chlapcová", "Růžena Kučerová"],
  51: ["Lenka Pánková"],
  52: ["Lenka Orendášová"],
  53: ["Jitka Vítková"],
  54: ["Lenka Pacltová"],
  55: ["Kateřina Milinková"],
  56: ["Eva Netíková"],
  57: ["Adéla Drbohlavová"],
  59: ["Šárka Pánková", "Lenka Píšová"],
  60: ["Zdeňka Vašíčková Häfliger"],
  61: ["Denisa Khucová", "Klára Korphová"],
  62: ["Barbora Gabrielová"],
  63: ["Eva Jandovská"],
  64: ["Jana Kubátová"],
  65: ["Pavlína Rychlíková", "Martina Zobalová"],
  66: ["Alena Freiová", "Lada Šmídlová"],
  67: ["Lucie Martínková"],
  68: ["Iva Hegerová"],
  69: ["Jana Stöhrová"],
  70: ["Lenka Bednářová"],
  71: ["Zdeňka Šturmová"],
  72: ["Monika Janečková"],
  73: ["Lenka Bakosová"],
  74: ["Veronika Dubšíková"],
  75: ["Eva Langerová"],
  76: ["Radka Kubečková"],
  77: ["Eva Nováková"],
  78: ["Věra Pilná", "Vladimíra Tokárová"],
  79: ["Lenka Kadlečíková", "Renata Vurmová"],
  80: ["Kateřina Balcarová", "Ivana Chmurová"],
  81: ["Eva Lipárová", "Hana Pítrová"],
  82: ["Zuzana Hejnová", "Jana Rejmanová"],
  83: ["Věra Gabčová", "Marie Kubová"],
  84: ["Soňa Žufánková"],
  85: ["Dagmar Vránová"],
  86: ["Iveta Juřinová"],
  87: ["Ludmila Jelínková", "Bohuslava Jiroušková", "Eva Novotná", "Alena Papežová"],
  89: ["Drahomíra Fehérová", "Hana Kremlová"],
  90: ["Jana Bustová"],
  91: ["Marcela Čermáková"],
  92: ["Irena Altmanová"],
  93: ["Dana Kratochvílová", "Ilona Svobodová"],
  94: ["Daniela Brezovská", "Pavla Čechová"],
  96: ["Jana Bohatcová", "Hana Červená"],
  97: ["Žaneta Tranová"],
  98: ["Zdenka Vlčková"],
  99: ["Hana Marková", "Lenka Melicharová"],
  100: ["Drahomíra Zamrzlová"],
  101: ["Pavla Šachová"],
  102: ["Drahomíra Prajzlerová"],
  104: ["Blanka Douchová"],
  106: ["Petra Valášková"],
};

const CATEGORIES = [
  { id: "technical",     label: "Technické problémy",  icon: "🔧", color: "#FF6B35" },
  { id: "store",         label: "Hodnocení prodejny",  icon: "🏪", color: "#4ECDC4" },
  { id: "staff",         label: "Hodnocení personálu", icon: "👤", color: "#45B7D1" },
  { id: "merchandising", label: "Visual merchandising",icon: "🎨", color: "#A78BFA" },
  { id: "notes",         label: "Obecné poznámky",     icon: "📝", color: "#FBBF24" },
];

const SAMPLE_REPORTS = [
  {
    id: 1, storeId: 52, date: "2026-03-01", rep: "Jana K.",
    raw: "Mladá Boleslav. Klimatizace ve skladu je hlučná. Jana byla skvělá se zákazníky. Jarní výloha vypadá zastarale.",
    detectedStore: "Mladá Boleslav",
    categories: {
      technical:     "Klimatizace ve skladu vydává hluk — nutná kontrola. Klika předních dveří je uvolněná.",
      store:         "Prodejna je čistá a dobře uspořádaná. Osvětlení v sekci B vyžaduje výměnu.",
      staff:         "Prodavačka Jana prokázala vynikající přístup k zákazníkům — proaktivní a znalá produktů.",
      merchandising: "Jarní výloha působí zastarale. Doporučuji obnovit pro březnovou kampaň.",
      notes:         "Vysoká návštěvnost zákazníků. Propagační materiály dorazily, ale 2 plakáty jsou poškozené.",
    },
  },
  {
    id: 2, storeId: 22, date: "2026-02-28", rep: "Tomáš W.",
    raw: "Hradec Králové. Pokladní terminál se občas zasekává. Nový pracovník Jakub potřebuje zaškolení.",
    detectedStore: "Hradec Králové",
    categories: {
      technical:     "Pokladní terminál se občas zasekne — zadán IT ticket.",
      store:         "Drobný prach u vchodu. Celkový stav dobrý.",
      staff:         "Nový pracovník Jakub nemá dostatečné znalosti produktů. Doporučuji školení.",
      merchandising: "Výloha je zastaralá — je třeba ji obnovit pro březnovou kampaň.",
      notes:         "",
    },
  },
];

const SAMPLE_DOCS = [
  { id: 1, storeId: 52, name: "Nájemní smlouva 2024.pdf",       type: "lease",    date: "2024-01-15", size: "2,4 MB" },
  { id: 2, storeId: 52, name: "Pracovní smlouva – Jana N.pdf",  type: "contract", date: "2024-06-01", size: "1,1 MB" },
  { id: 3, storeId: 22, name: "Nájemní smlouva 2023.pdf",       type: "lease",    date: "2023-03-10", size: "3,2 MB" },
];

const fmtDate = (d) =>
  new Date(d).toLocaleDateString("cs-CZ", { day: "2-digit", month: "short", year: "numeric" });

async function processReport(rawText, storeList) {
  const storeNames = storeList.map(s => s.name).join(", ");
  const systemPrompt = `Jsi asistent pro zprávy z terénních návštěv maloobchodní firmy.
Zástupce nadiktuje zprávu volně — na začátku obvykle řekne název prodejny, pak obsah.

Seznam všech prodejen: ${storeNames}

Tvůj úkol:
1. Identifikuj název prodejny ze zprávy (hledej shodu se seznamem prodejen — může být přibližná nebo zkrácená).
2. Roztřídí obsah do 5 kategorií.

Vrať POUZE platný JSON v tomto formátu:
{
  "detectedStore": "přesný název prodejny ze seznamu, nebo null pokud není jasné",
  "categories": {
    "technical": "opravy, údržba, poruchy zařízení — nebo prázdný řetězec",
    "store": "celkový stav prodejny, čistota, uspořádání, osvětlení — nebo prázdný řetězec",
    "staff": "výkon prodavačů, chování, profesionalita — nebo prázdný řetězec",
    "merchandising": "výloha, vystavení zboží, visual merchandising — nebo prázdný řetězec",
    "notes": "vše ostatní, obecné postřehy, požadavky — nebo prázdný řetězec"
  }
}

Pravidla:
- Odpověz POUZE JSON. Žádný markdown, žádné vysvětlení, žádné zpětné uvozovky.
- Vždy odpovídej v češtině.
- Každá kategorie musí být srozumitelná, profesionální věta nebo prázdný řetězec "".`;

  const response = await fetch("/api/claude", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 1200,
      system: systemPrompt,
      messages: [{ role: "user", content: rawText }],
    }),
  });
  const data = await response.json();
  const text = data.content?.map(b => b.text || "").join("") || "";
  const clean = text.replace(/```json|```/g, "").trim();
  return JSON.parse(clean);
}

function Tag({ cat, small }) {
  return (
    <span style={{ fontSize: small?10:11, padding: small?"2px 7px":"3px 10px", borderRadius:20, background:cat.color+"22", color:cat.color, fontWeight:700, display:"inline-flex", alignItems:"center", gap:4 }}>
      {cat.icon}{!small && " "+cat.label}
    </span>
  );
}

function Spinner() {
  return <span style={{ display:"inline-block", width:18, height:18, border:"2px solid rgba(255,255,255,0.3)", borderTopColor:"#fff", borderRadius:"50%", animation:"spin 0.7s linear infinite" }} />;
}

export default function App() {
  const [screen, setScreen]               = useState("home");
  const [reports, setReports]             = useState(SAMPLE_REPORTS);
  const [docs]                            = useState(SAMPLE_DOCS);
  const [selectedStore, setSelectedStore] = useState(null);
  const [reportView, setReportView]       = useState(null);
  const [prevScreen, setPrevScreen]       = useState("home");
  const [rawInput, setRawInput]           = useState("");
  const [aiResult, setAiResult]           = useState(null);
  const [confirmedStore, setConfirmedStore] = useState(null);
  const [aiLoading, setAiLoading]         = useState(false);
  const [aiError, setAiError]             = useState("");
  const [submitted, setSubmitted]         = useState(false);
  const [needStoreConfirm, setNeedStoreConfirm] = useState(false);
  const [isRecording, setIsRecording]     = useState(false);
  const [liveText, setLiveText]           = useState("");
  const [recordingTime, setRecordingTime] = useState(0);
  const recognitionRef                    = useRef(null);
  const timerRef                          = useRef(null);
  const [searchQ, setSearchQ]             = useState("");
  const [filterCat, setFilterCat]         = useState("all");
  const [filterDate, setFilterDate]       = useState("");
  const [storeSearch, setStoreSearch]     = useState("");
  const [notif, setNotif]                 = useState(null);
  const [activeTab, setActiveTab]         = useState("technical");

  const toast = (msg, type="ok") => { setNotif({msg,type}); setTimeout(()=>setNotif(null),3500); };

  const resetDraft = () => {
    setRawInput(""); setAiResult(null); setConfirmedStore(null);
    setAiError(""); setLiveText(""); setIsRecording(false);
    setSubmitted(false); setNeedStoreConfirm(false); setRecordingTime(0);
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const startRecording = () => {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) { toast("Hlasový vstup není podporován — napište zprávu.", "err"); return; }
    setIsRecording(true); setLiveText(""); setRecordingTime(0);
    timerRef.current = setInterval(()=>setRecordingTime(t=>t+1), 1000);
    const startSR = () => {
      if (!recognitionRef.current) return;
      const r = new SR();
      r.continuous = false; r.interimResults = true; r.lang = "cs-CZ";
      r.onresult = (e) => {
        let final = ""; let interim = "";
        for (let i = 0; i < e.results.length; i++) {
          if (e.results[i].isFinal) { final += e.results[i][0].transcript + " "; }
          else { interim += e.results[i][0].transcript; }
        }
        if (final) setRawInput(prev => (prev + " " + final).trim());
        setLiveText(interim);
      };
      r.onerror = (ev) => {
        if (ev.error === "no-speech" || ev.error === "aborted") return;
        recognitionRef.current = null;
        setIsRecording(false); clearInterval(timerRef.current); toast("Chyba mikrofonu.", "err");
      };
      r.onend = () => { setLiveText(""); if (recognitionRef.current) startSR(); };
      r.start();
      recognitionRef.current = r;
    };
    recognitionRef.current = {};
    startSR();
  };

  const stopRecording = () => {
    const r = recognitionRef.current;
    recognitionRef.current = null;
    if (r && r.stop) { try { r.onend=null; r.stop(); } catch(e) {} }
    clearInterval(timerRef.current); setIsRecording(false);
    setLiveText("");
  };

  const fmtTime = (s) => `${Math.floor(s/60).toString().padStart(2,"0")}:${(s%60).toString().padStart(2,"0")}`;

  const runAI = async () => {
    const text = (rawInput+" "+liveText).trim();
    if (!text) { toast("Nejprve nadiktujte nebo napište zprávu.", "err"); return; }
    setAiLoading(true); setAiError(""); setAiResult(null); setNeedStoreConfirm(false);
    try {
      const result = await processReport(text, STORES);
      setAiResult(result);
      if (result.detectedStore) {
        const found = STORES.find(s => s.name.toLowerCase() === result.detectedStore.toLowerCase());
        if (found) { setConfirmedStore(found); } else { setNeedStoreConfirm(true); }
      } else { setNeedStoreConfirm(true); }
    } catch { setAiError("AI nemohla zprávu zpracovat. Zkontrolujte připojení a zkuste znovu."); }
    finally { setAiLoading(false); }
  };

  const submitReport = () => {
    if (!confirmedStore) { toast("Potvrďte prosím prodejnu.", "err"); return; }
    const rep = { id:Date.now(), storeId:confirmedStore.id, date:new Date().toISOString().split("T")[0], rep:"Obchodní zástupce", raw:rawInput, detectedStore:confirmedStore.name, categories:aiResult.categories };
    setReports(prev=>[rep,...prev]);
    setSubmitted(true);
    setTimeout(()=>{ resetDraft(); setScreen("home"); }, 2000);
  };

  const filtered = reports.filter(r => {
    const store = STORES.find(s=>s.id===r.storeId);
    if (selectedStore && r.storeId!==selectedStore.id) return false;
    if (filterDate && r.date<filterDate) return false;
    if (filterCat!=="all" && !r.categories[filterCat]?.trim()) return false;
    if (searchQ) {
      const q = searchQ.toLowerCase();
      if (!Object.values(r.categories).some(v=>v.toLowerCase().includes(q)) && !store?.name.toLowerCase().includes(q) && !r.raw?.toLowerCase().includes(q)) return false;
    }
    return true;
  });

  const filteredStores = STORES.filter(s =>
    s.name.toLowerCase().includes(storeSearch.toLowerCase()) ||
    s.code.toLowerCase().includes(storeSearch.toLowerCase())
  );

  const readyToSubmit = aiResult && confirmedStore && !needStoreConfirm;

  return (
    <div style={{ fontFamily:"'DM Sans',sans-serif", background:"#09090E", minHeight:"100vh", color:"#E2E2EE", maxWidth:430, margin:"0 auto" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=DM+Mono:wght@400;500&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent;}
        input,textarea{outline:none;font-family:inherit;}
        button{cursor:pointer;border:none;font-family:inherit;}
        ::-webkit-scrollbar{width:3px;height:3px;}
        ::-webkit-scrollbar-thumb{background:#2a2a40;border-radius:2px;}
        @keyframes spin{to{transform:rotate(360deg)}}
        @keyframes fadeUp{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
        @keyframes pulseRed{0%,100%{box-shadow:0 0 0 0 rgba(239,68,68,0.5)}50%{box-shadow:0 0 0 14px rgba(239,68,68,0)}}
        @keyframes notifIn{0%{transform:translateY(-16px) translateX(-50%);opacity:0}12%{transform:translateY(0) translateX(-50%);opacity:1}85%{transform:translateY(0) translateX(-50%);opacity:1}100%{transform:translateY(-16px) translateX(-50%);opacity:0}}
        @keyframes checkPop{0%{transform:scale(0)}60%{transform:scale(1.2)}100%{transform:scale(1)}}
        @keyframes waveBar{0%,100%{transform:scaleY(0.4)}50%{transform:scaleY(1)}}
        .fade{animation:fadeUp 0.3s ease both;}
        .card{transition:background 0.18s;}
        .card:active{background:#181828 !important;}
        .bp:active{transform:scale(0.97);}
      `}</style>

      {notif && (
        <div style={{ position:"fixed", top:18, left:"50%", zIndex:9999, background:notif.type==="err"?"#EF4444":"#10B981", color:"#fff", padding:"11px 22px", borderRadius:30, fontSize:13, fontWeight:600, animation:"notifIn 3.5s ease forwards", whiteSpace:"nowrap", boxShadow:"0 8px 28px rgba(0,0,0,0.5)", pointerEvents:"none" }}>
          {notif.type==="err"?"⚠ ":"✓ "}{notif.msg}
        </div>
      )}

      {/* HOME */}
      {screen==="home" && (
        <div style={{ paddingBottom:90 }}>
          <div style={{ padding:"52px 22px 22px", background:"linear-gradient(175deg,#0e0e1c 0%,#09090e 100%)" }}>
            <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:22 }}>
              <div>
                <div style={{ fontSize:10, letterSpacing:3, color:"#444", fontFamily:"'DM Mono',monospace", marginBottom:3 }}>TERÉNNÍ OPERACE · v3</div>
                <div style={{ fontSize:28, fontWeight:700, color:"#fff", letterSpacing:-1 }}>StoreIQ <span style={{ fontSize:13, fontWeight:400, color:"#6366F1", verticalAlign:"middle", background:"#6366F122", borderRadius:8, padding:"2px 8px" }}>AI</span></div>
              </div>
              <div style={{ width:42, height:42, borderRadius:21, background:"linear-gradient(135deg,#6366F1,#8B5CF6)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:15, fontWeight:700 }}>OZ</div>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:8 }}>
              {[{ v:STORES.length, l:"Prodejny", e:"🏪" },{ v:reports.length, l:"Zprávy", e:"📋" },{ v:reports.filter(r=>r.date>="2026-03-01").length, l:"Tento měsíc", e:"📅" }].map((s,i)=>(
                <div key={i} style={{ background:"#111120", borderRadius:14, padding:"14px 10px", textAlign:"center" }}>
                  <div style={{ fontSize:18, marginBottom:3 }}>{s.e}</div>
                  <div style={{ fontSize:22, fontWeight:700, color:"#fff", lineHeight:1 }}>{s.v}</div>
                  <div style={{ fontSize:10, color:"#444", marginTop:3 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ padding:"14px 22px 0" }}>
            <button className="bp" onClick={()=>{ resetDraft(); setScreen("new-report"); }}
              style={{ width:"100%", background:"linear-gradient(135deg,#6366F1 0%,#8B5CF6 100%)", borderRadius:20, padding:"22px", display:"flex", alignItems:"center", gap:16, marginBottom:12, boxShadow:"0 10px 36px rgba(99,102,241,0.32)", border:"none" }}>
              <div style={{ width:56, height:56, borderRadius:16, background:"rgba(255,255,255,0.18)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:28 }}>🎙️</div>
              <div style={{ textAlign:"left" }}>
                <div style={{ fontSize:18, fontWeight:700, color:"#fff" }}>Nová zpráva</div>
                <div style={{ fontSize:12, color:"rgba(255,255,255,0.6)", marginTop:4 }}>Zmáčkněte a mluvte — AI vše vyřídí</div>
              </div>
              <div style={{ marginLeft:"auto", color:"rgba(255,255,255,0.35)", fontSize:24 }}>›</div>
            </button>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, marginBottom:22 }}>
              {[{ icon:"🏪", label:"Profily prodejen", sub:"106 prodejen", sc:"stores" },{ icon:"🔍", label:"Hledat zprávy", sub:"Filtrovat a třídit", sc:"reports" }].map(b=>(
                <button key={b.sc} className="bp" onClick={()=>setScreen(b.sc)} style={{ background:"#111120", borderRadius:16, padding:"16px 14px", textAlign:"left", border:"none" }}>
                  <div style={{ fontSize:24, marginBottom:8 }}>{b.icon}</div>
                  <div style={{ fontSize:14, fontWeight:600, color:"#ddd" }}>{b.label}</div>
                  <div style={{ fontSize:11, color:"#444", marginTop:2 }}>{b.sub}</div>
                </button>
              ))}
            </div>
            <div style={{ fontSize:11, letterSpacing:2, color:"#444", fontWeight:700, textTransform:"uppercase", marginBottom:12 }}>Poslední zprávy</div>
            {reports.slice(0,5).map(r=>{
              const store = STORES.find(s=>s.id===r.storeId);
              return (
                <div key={r.id} className="card fade" onClick={()=>{ setReportView(r); setPrevScreen(screen); setActiveTab(CATEGORIES.filter(c=>r.categories[c.id]?.trim())[0]?.id||"technical"); setScreen("report-detail"); }} style={{ background:"#111120", borderRadius:16, padding:"15px 16px", marginBottom:9, cursor:"pointer" }}>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
                    <div style={{ flex:1 }}>
                      <div style={{ fontSize:15, fontWeight:600, color:"#fff", marginBottom:5 }}>{store?.name}</div>
                      <div style={{ display:"flex", gap:5, flexWrap:"wrap" }}>{CATEGORIES.filter(c=>r.categories[c.id]?.trim()).map(c=><Tag key={c.id} cat={c} small />)}</div>
                    </div>
                    <div style={{ flexShrink:0, marginLeft:12, textAlign:"right" }}>
                      <div style={{ fontSize:11, color:"#444", fontFamily:"'DM Mono',monospace" }}>{fmtDate(r.date)}</div>
                      <div style={{ fontSize:10, color:"#333", marginTop:2 }}>{r.rep}</div>
                    </div>
                  </div>
                  {r.raw && <div style={{ fontSize:12, color:"#555", marginTop:9, lineHeight:1.55, overflow:"hidden", display:"-webkit-box", WebkitLineClamp:2, WebkitBoxOrient:"vertical" }}>{r.raw}</div>}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* NOVÁ ZPRÁVA */}
      {screen==="new-report" && (
        <div style={{ paddingBottom:120 }}>
          <div style={{ padding:"52px 22px 18px", background:"#0d0d1a", position:"sticky", top:0, zIndex:20 }}>
            <button onClick={()=>{ resetDraft(); setScreen("home"); }} style={{ background:"none", color:"#6366F1", fontSize:14, marginBottom:14, border:"none" }}>‹ Zrušit</button>
            <div style={{ fontSize:22, fontWeight:700, color:"#fff" }}>Nová zpráva</div>
            <div style={{ fontSize:13, color:"#555", marginTop:4, lineHeight:1.6 }}>Začněte názvem prodejny, pak mluvte volně.<br/><span style={{ color:"#6366F1" }}>„Mladá Boleslav. Klimatizace nefunguje..."</span></div>
          </div>
          <div style={{ padding:"8px 22px" }}>
            {!aiResult && (
              <div style={{ display:"flex", flexDirection:"column", alignItems:"center", padding:"28px 0 20px" }}>
                <button className="bp" onClick={isRecording?stopRecording:startRecording}
                  style={{ width:110, height:110, borderRadius:55, border:"none", background:isRecording?"radial-gradient(circle,#EF4444,#DC2626)":"linear-gradient(135deg,#6366F1,#8B5CF6)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:42, animation:isRecording?"pulseRed 1.6s ease infinite":"none", boxShadow:isRecording?"none":"0 12px 40px rgba(99,102,241,0.45)", transition:"background 0.25s" }}>
                  {isRecording?"⏹":"🎙"}
                </button>
                {isRecording && (
                  <div style={{ marginTop:14, display:"flex", flexDirection:"column", alignItems:"center", gap:8 }}>
                    <div style={{ fontSize:24, fontWeight:700, color:"#EF4444", fontFamily:"'DM Mono',monospace" }}>{fmtTime(recordingTime)}</div>
                    <div style={{ display:"flex", gap:3, alignItems:"center", height:20 }}>
                      {[0.3,0.6,1,0.7,0.4,0.8,0.5,1,0.6,0.3].map((h,i)=>(
                        <div key={i} style={{ width:3, borderRadius:2, background:"#EF4444", height:20*h, animation:`waveBar 0.8s ease ${i*0.08}s infinite`, opacity:0.7 }}/>
                      ))}
                    </div>
                    <div style={{ fontSize:13, color:"#EF4444", fontWeight:500 }}>Nahrávám… klepnutím zastavíte</div>
                  </div>
                )}
                {!isRecording && !rawInput && <div style={{ marginTop:14, fontSize:14, color:"#444" }}>Klepnutím spustíte nahrávání</div>}
              </div>
            )}
            {isRecording && liveText && (
              <div style={{ background:"#111120", borderRadius:14, padding:"14px", marginBottom:14, border:"1px solid #EF444433" }}>
                <div style={{ fontSize:11, color:"#EF4444", fontWeight:700, marginBottom:6, letterSpacing:1 }}>ŽIVÝ PŘEPIS</div>
                <div style={{ fontSize:14, color:"#aaa", lineHeight:1.65, fontStyle:"italic" }}>{liveText}</div>
              </div>
            )}
            {!aiResult && (
              <>
                <div style={{ textAlign:"center", fontSize:11, color:"#333", margin:"4px 0 10px" }}>— nebo napište —</div>
                <textarea value={rawInput} onChange={e=>setRawInput(e.target.value)} placeholder="Mladá Boleslav. Klimatizace nefunguje, Jana pracovala skvěle, výloha potřebuje obměnu..."
                  style={{ width:"100%", background:"#111120", border:"1px solid #1e1e30", borderRadius:14, padding:"14px", color:"#E2E2EE", fontSize:14, minHeight:100, resize:"none", lineHeight:1.65 }} />
              </>
            )}
            {rawInput && !aiResult && !aiLoading && !isRecording && (
              <div style={{ background:"#111120", borderRadius:12, padding:"12px 14px", marginTop:10, fontSize:12, color:"#666", lineHeight:1.6 }}>
                <div style={{ fontSize:10, color:"#444", fontWeight:700, letterSpacing:1, marginBottom:4 }}>VAŠE ZPRÁVA</div>
                {rawInput}
              </div>
            )}
            {aiResult && !submitted && (
              <div className="fade">
                <div style={{ background:"#111120", borderRadius:14, padding:"16px", marginBottom:14, border:confirmedStore?"1px solid #10B98133":"1px solid #FBBF2433" }}>
                  <div style={{ fontSize:11, color:confirmedStore?"#10B981":"#FBBF24", fontWeight:700, letterSpacing:1, marginBottom:8 }}>
                    {confirmedStore?"✓ PRODEJNA ROZPOZNÁNA":"⚠ POTVRĎTE PRODEJNU"}
                  </div>
                  {confirmedStore ? (
                    <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
                      <div>
                        <div style={{ fontSize:16, fontWeight:700, color:"#fff" }}>{confirmedStore.name}</div>
                        <div style={{ fontSize:11, color:"#555", fontFamily:"'DM Mono',monospace", marginTop:2 }}>{confirmedStore.code}</div>
                      </div>
                      <button onClick={()=>{ setConfirmedStore(null); setNeedStoreConfirm(true); }} style={{ background:"none", color:"#555", fontSize:12, border:"none" }}>Změnit</button>
                    </div>
                  ) : (
                    <>
                      {aiResult.detectedStore && <div style={{ fontSize:13, color:"#888", marginBottom:10 }}>AI rozpoznala: <strong style={{color:"#fff"}}>„{aiResult.detectedStore}"</strong> — vyberte ze seznamu:</div>}
                      <div style={{ display:"flex", gap:7, flexWrap:"wrap", maxHeight:200, overflowY:"auto" }}>
                        {STORES.map(s=>(
                          <button key={s.id} className="bp" onClick={()=>{ setConfirmedStore(s); setNeedStoreConfirm(false); }}
                            style={{ background:"#1a1a28", border:"1px solid #2a2a40", borderRadius:10, padding:"8px 12px", color:"#ccc", fontSize:12, fontWeight:500 }}>
                            {s.name}
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </div>
                <div style={{ fontSize:11, color:"#10B981", letterSpacing:2, fontWeight:700, textTransform:"uppercase", marginBottom:12 }}>✓ AI ROZTŘÍDILA ZPRÁVU</div>
                {CATEGORIES.map(cat=> aiResult.categories[cat.id]?.trim() ? (
                  <div key={cat.id} style={{ background:"#111120", borderRadius:14, padding:"14px 16px", marginBottom:10, borderLeft:`3px solid ${cat.color}` }}>
                    <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:8 }}>
                      <span style={{ fontSize:16 }}>{cat.icon}</span>
                      <span style={{ fontSize:11, fontWeight:700, color:cat.color, letterSpacing:0.5 }}>{cat.label.toUpperCase()}</span>
                    </div>
                    <textarea value={aiResult.categories[cat.id]} onChange={e=>setAiResult(prev=>({...prev,categories:{...prev.categories,[cat.id]:e.target.value}}))}
                      style={{ width:"100%", background:"transparent", border:"none", color:"#ccc", fontSize:14, resize:"none", lineHeight:1.65, minHeight:50 }} />
                  </div>
                ) : null)}
                <button onClick={resetDraft} style={{ background:"none", color:"#555", fontSize:13, border:"none", marginTop:4 }}>↩ Nadiktovat znovu</button>
              </div>
            )}
            {aiError && <div style={{ background:"#2d1111", border:"1px solid #EF444444", borderRadius:12, padding:"12px 14px", marginTop:12, fontSize:13, color:"#EF4444" }}>{aiError}</div>}
            {submitted && (
              <div className="fade" style={{ textAlign:"center", padding:"48px 0" }}>
                <div style={{ fontSize:64, animation:"checkPop 0.5s ease", display:"inline-block" }}>✅</div>
                <div style={{ fontSize:20, fontWeight:700, color:"#fff", marginTop:14 }}>Zpráva odeslána!</div>
                <div style={{ fontSize:13, color:"#555", marginTop:6 }}>Uloženo: {confirmedStore?.name}</div>
              </div>
            )}
          </div>
          {!submitted && (
            <div style={{ position:"fixed", bottom:0, left:"50%", transform:"translateX(-50%)", width:"100%", maxWidth:430, padding:"14px 22px 32px", background:"linear-gradient(0deg,#09090e 60%,transparent)", zIndex:30 }}>
              {!aiResult ? (
                <button className="bp" onClick={runAI} disabled={aiLoading||(!rawInput.trim()&&!liveText.trim())||isRecording}
                  style={{ width:"100%", borderRadius:18, padding:"18px", border:"none", background:(!rawInput.trim()&&!liveText.trim())||isRecording?"#1a1a28":"linear-gradient(135deg,#6366F1,#8B5CF6)", color:(!rawInput.trim()&&!liveText.trim())||isRecording?"#444":"#fff", fontSize:16, fontWeight:700, display:"flex", alignItems:"center", justifyContent:"center", gap:10 }}>
                  {aiLoading?<><Spinner/> AI zpracovává zprávu…</>:isRecording?"Nejdříve zastavte nahrávání":"✨ Zpracovat pomocí AI"}
                </button>
              ) : (
                <button className="bp" onClick={submitReport} disabled={!readyToSubmit}
                  style={{ width:"100%", borderRadius:18, padding:"18px", border:"none", background:readyToSubmit?"linear-gradient(135deg,#10B981,#059669)":"#1a1a28", color:readyToSubmit?"#fff":"#444", fontSize:16, fontWeight:700 }}>
                  {readyToSubmit?"Odeslat zprávu →":"Potvrďte nejdříve prodejnu"}
                </button>
              )}
            </div>
          )}
        </div>
      )}

      {/* PRODEJNY */}
      {screen==="stores" && (
        <div style={{ paddingBottom:90 }}>
          <div style={{ padding:"52px 22px 16px", background:"#0d0d1a", position:"sticky", top:0, zIndex:10 }}>
            <button onClick={()=>setScreen("home")} style={{ background:"none", color:"#6366F1", fontSize:14, marginBottom:14, border:"none" }}>‹ Domů</button>
            <div style={{ fontSize:22, fontWeight:700, color:"#fff", marginBottom:14 }}>Síť prodejen <span style={{ fontSize:14, color:"#555", fontWeight:400 }}>({STORES.length})</span></div>
            <div style={{ position:"relative" }}>
              <span style={{ position:"absolute", left:13, top:"50%", transform:"translateY(-50%)", color:"#444" }}>🔍</span>
              <input value={storeSearch} onChange={e=>setStoreSearch(e.target.value)} placeholder="Hledat prodejny…"
                style={{ width:"100%", background:"#111120", border:"1px solid #1e1e30", borderRadius:13, padding:"12px 14px 12px 40px", color:"#E2E2EE", fontSize:14 }} />
            </div>
          </div>
          <div style={{ padding:"10px 22px" }}>
            {filteredStores.map(s=>{
              const rc = reports.filter(r=>r.storeId===s.id).length;
              const dc = docs.filter(d=>d.storeId===s.id).length;
              return (
                <div key={s.id} className="card fade" onClick={()=>{ setSelectedStore(s); setScreen("store-profile"); }}
                  style={{ background:"#111120", borderRadius:16, padding:"14px 16px", marginBottom:8, cursor:"pointer", display:"flex", alignItems:"center", gap:12 }}>
                  <div style={{ width:44, height:44, borderRadius:12, background:"linear-gradient(135deg,#6366F1,#8B5CF6)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:20, flexShrink:0 }}>🏪</div>
                  <div style={{ flex:1 }}>
                    <div style={{ fontSize:15, fontWeight:600, color:"#fff" }}>{s.name}</div>
                    <div style={{ display:"flex", gap:12, marginTop:4 }}>
                      <span style={{ fontSize:10, color:"#555", fontFamily:"'DM Mono',monospace" }}>{s.code}</span>
                      {rc>0 && <span style={{ fontSize:10, color:"#6366F1" }}>📋 {rc}</span>}
                      {dc>0 && <span style={{ fontSize:10, color:"#8B5CF6" }}>📁 {dc}</span>}
                    </div>
                  </div>
                  <span style={{ color:"#2a2a40", fontSize:18 }}>›</span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* PROFIL PRODEJNY */}
      {screen==="store-profile" && selectedStore && (()=>{
        const sr = reports.filter(r=>r.storeId===selectedStore.id);
        const sd = docs.filter(d=>d.storeId===selectedStore.id);
        return (
          <div style={{ paddingBottom:90 }}>
            <div style={{ padding:"52px 22px 22px", background:"linear-gradient(175deg,#120f20 0%,#09090e 100%)" }}>
              <button onClick={()=>setScreen("stores")} style={{ background:"none", color:"#6366F1", fontSize:14, marginBottom:18, border:"none" }}>‹ Prodejny</button>
              <div style={{ display:"flex", alignItems:"center", gap:16, marginBottom:18 }}>
                <div style={{ width:58, height:58, borderRadius:18, background:"linear-gradient(135deg,#6366F1,#8B5CF6)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:26 }}>🏪</div>
                <div>
                  <div style={{ fontSize:22, fontWeight:700, color:"#fff" }}>{selectedStore.name}</div>
                  <div style={{ fontSize:12, color:"#555", fontFamily:"'DM Mono',monospace", marginTop:2 }}>{selectedStore.code}</div>
                </div>
              </div>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
                <div style={{ background:"#111120", borderRadius:14, padding:"14px" }}>
                  <div style={{ fontSize:24, fontWeight:700, color:"#6366F1" }}>{sr.length}</div>
                  <div style={{ fontSize:11, color:"#444", marginTop:2 }}>Zprávy z návštěv</div>
                </div>
                <div style={{ background:"#111120", borderRadius:14, padding:"14px" }}>
                  <div style={{ fontSize:24, fontWeight:700, color:"#8B5CF6" }}>{sd.length}</div>
                  <div style={{ fontSize:11, color:"#444", marginTop:2 }}>Dokumenty</div>
                </div>
              </div>
            </div>
            <div style={{ padding:"14px 22px" }}>
              <button className="bp" onClick={()=>{ resetDraft(); setScreen("new-report"); }}
                style={{ width:"100%", background:"linear-gradient(135deg,#6366F1,#8B5CF6)", borderRadius:14, padding:"15px", color:"#fff", fontSize:15, fontWeight:700, marginBottom:20, border:"none" }}>
                🎙️ Nová zpráva z návštěvy
              </button>
              {STORE_STAFF[selectedStore.id] && (
                <div style={{ background:"#111120", borderRadius:14, padding:"14px 16px", marginBottom:20 }}>
                  <div style={{ fontSize:11, color:"#45B7D1", letterSpacing:2, fontWeight:700, textTransform:"uppercase", marginBottom:10 }}>👤 Personál</div>
                  {STORE_STAFF[selectedStore.id].map((name, i) => (
                    <div key={i} style={{ fontSize:14, color:"#ccc", padding:"6px 0", borderBottom: i < STORE_STAFF[selectedStore.id].length-1 ? "1px solid #1e1e30" : "none" }}>{name}</div>
                  ))}
                </div>
              )}
              <div style={{ fontSize:11, color:"#444", letterSpacing:2, fontWeight:700, textTransform:"uppercase", marginBottom:12 }}>Historie návštěv</div>
              {sr.length===0 && <div style={{ color:"#333", fontSize:14, textAlign:"center", padding:"24px 0" }}>Zatím žádné zprávy</div>}
              {sr.map(r=>(
                <div key={r.id} className="card fade" onClick={()=>{ setReportView(r); setPrevScreen(screen); setActiveTab(CATEGORIES.filter(c=>r.categories[c.id]?.trim())[0]?.id||"technical"); setScreen("report-detail"); }}
                  style={{ background:"#111120", borderRadius:14, padding:"14px 16px", marginBottom:8, cursor:"pointer" }}>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                    <div>
                      <div style={{ fontSize:14, fontWeight:600, color:"#fff" }}>{fmtDate(r.date)}</div>
                      <div style={{ fontSize:11, color:"#444", marginTop:2 }}>{r.rep}</div>
                    </div>
                    <div style={{ display:"flex", gap:5 }}>{CATEGORIES.filter(c=>r.categories[c.id]?.trim()).map(c=><Tag key={c.id} cat={c} small />)}</div>
                  </div>
                </div>
              ))}
              <div style={{ fontSize:11, color:"#444", letterSpacing:2, fontWeight:700, textTransform:"uppercase", marginBottom:12, marginTop:22 }}>Dokumenty</div>
              {sd.length===0 && <div style={{ color:"#333", fontSize:14, textAlign:"center", padding:"16px 0" }}>Žádné dokumenty</div>}
              {sd.map(d=>(
                <div key={d.id} style={{ background:"#111120", borderRadius:14, padding:"13px 16px", marginBottom:8, display:"flex", alignItems:"center", gap:12 }}>
                  <div style={{ width:38, height:38, borderRadius:10, background:"#1a1a28", display:"flex", alignItems:"center", justifyContent:"center", fontSize:18 }}>
                    {d.type==="lease"?"📄":d.type==="contract"?"📝":"📁"}
                  </div>
                  <div style={{ flex:1 }}>
                    <div style={{ fontSize:13, fontWeight:500, color:"#ccc" }}>{d.name}</div>
                    <div style={{ fontSize:11, color:"#444", marginTop:2 }}>{fmtDate(d.date)} · {d.size}</div>
                  </div>
                </div>
              ))}
              <button className="bp" onClick={()=>toast("Pro nahrávání dokumentů je potřeba připojit backend.")}
                style={{ width:"100%", background:"transparent", border:"1px dashed #1e1e30", borderRadius:14, padding:"14px", color:"#444", fontSize:13, marginTop:4 }}>
                + Nahrát dokument
              </button>
            </div>
          </div>
        );
      })()}

      {/* ZPRÁVY */}
      {screen==="reports" && (
        <div style={{ paddingBottom:90 }}>
          <div style={{ padding:"52px 22px 14px", background:"#0d0d1a", position:"sticky", top:0, zIndex:10 }}>
            <button onClick={()=>setScreen("home")} style={{ background:"none", color:"#6366F1", fontSize:14, marginBottom:14, border:"none" }}>‹ Domů</button>
            <div style={{ fontSize:22, fontWeight:700, color:"#fff", marginBottom:14 }}>Všechny zprávy</div>
            <div style={{ position:"relative", marginBottom:10 }}>
              <span style={{ position:"absolute", left:13, top:"50%", transform:"translateY(-50%)", color:"#444" }}>🔍</span>
              <input value={searchQ} onChange={e=>setSearchQ(e.target.value)} placeholder="Hledat klíčová slova, prodejny…"
                style={{ width:"100%", background:"#111120", border:"1px solid #1e1e30", borderRadius:13, padding:"12px 14px 12px 40px", color:"#E2E2EE", fontSize:14 }} />
            </div>
            <div style={{ display:"flex", gap:7, overflowX:"auto", paddingBottom:6, marginBottom:8 }}>
              {[{id:"all",label:"Vše",icon:"",color:"#6366F1"},...CATEGORIES].map(c=>(
                <button key={c.id} className="bp" onClick={()=>setFilterCat(c.id)}
                  style={{ background:filterCat===c.id?c.color:"#111120", border:"none", borderRadius:20, padding:"7px 13px", color:filterCat===c.id?"#fff":"#555", fontSize:11, fontWeight:600, whiteSpace:"nowrap" }}>
                  {c.icon} {c.label||"Vše"}
                </button>
              ))}
            </div>
            <div style={{ display:"flex", alignItems:"center", gap:8 }}>
              <span style={{ fontSize:11, color:"#444" }}>Od:</span>
              <input type="date" value={filterDate} onChange={e=>setFilterDate(e.target.value)}
                style={{ background:"#111120", border:"1px solid #1e1e30", borderRadius:10, padding:"7px 10px", color:"#888", fontSize:12, flex:1 }} />
              {filterDate && <button onClick={()=>setFilterDate("")} style={{ background:"none", color:"#555", fontSize:12, border:"none" }}>Smazat</button>}
            </div>
          </div>
          <div style={{ padding:"8px 22px" }}>
            <div style={{ fontSize:11, color:"#444", marginBottom:12 }}>{filtered.length} {filtered.length===1?"výsledek":"výsledků"}</div>
            {filtered.length===0 && <div style={{ textAlign:"center", padding:"52px 0", color:"#333" }}><div style={{ fontSize:44, marginBottom:12 }}>🔍</div><div style={{ fontSize:14 }}>Žádné zprávy neodpovídají filtrům</div></div>}
            {filtered.map(r=>{
              const store = STORES.find(s=>s.id===r.storeId);
              return (
                <div key={r.id} className="card fade" onClick={()=>{ setReportView(r); setPrevScreen(screen); setActiveTab(CATEGORIES.filter(c=>r.categories[c.id]?.trim())[0]?.id||"technical"); setScreen("report-detail"); }}
                  style={{ background:"#111120", borderRadius:16, padding:"15px 16px", marginBottom:10, cursor:"pointer" }}>
                  <div style={{ display:"flex", justifyContent:"space-between", marginBottom:8 }}>
                    <div>
                      <div style={{ fontSize:15, fontWeight:600, color:"#fff" }}>{store?.name}</div>
                      <div style={{ fontSize:10, color:"#444", fontFamily:"'DM Mono',monospace", marginTop:2 }}>{store?.code} · {fmtDate(r.date)} · {r.rep}</div>
                    </div>
                  </div>
                  <div style={{ display:"flex", gap:5, flexWrap:"wrap", marginBottom:filterCat!=="all"&&r.categories[filterCat]?.trim()?8:0 }}>
                    {CATEGORIES.filter(c=>r.categories[c.id]?.trim()).map(c=><Tag key={c.id} cat={c} />)}
                  </div>
                  {filterCat!=="all"&&r.categories[filterCat]?.trim()&&(
                    <div style={{ fontSize:12, color:"#666", lineHeight:1.55, overflow:"hidden", display:"-webkit-box", WebkitLineClamp:2, WebkitBoxOrient:"vertical", marginTop:2 }}>{r.categories[filterCat]}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* DETAIL ZPRÁVY */}
      {screen==="report-detail" && reportView && (()=>{
        const store = STORES.find(s=>s.id===reportView.storeId);
        const activeCats = CATEGORIES.filter(c=>reportView.categories[c.id]?.trim());
        return (
          <div style={{ paddingBottom:40 }}>
            <div style={{ padding:"52px 22px 18px", background:"#0d0d1a" }}>
              <button onClick={()=>setScreen(prevScreen)} style={{ background:"none", color:"#6366F1", fontSize:14, marginBottom:16, border:"none" }}>‹ Zpět</button>
              <div style={{ fontSize:22, fontWeight:700, color:"#fff" }}>{store?.name}</div>
              <div style={{ fontSize:12, color:"#555", fontFamily:"'DM Mono',monospace", marginTop:4 }}>{fmtDate(reportView.date)} · {reportView.rep}</div>
              {reportView.raw && <div style={{ marginTop:12, fontSize:12, color:"#444", fontStyle:"italic", lineHeight:1.6, background:"#111120", borderRadius:10, padding:"10px 12px" }}><span style={{ color:"#333", fontStyle:"normal" }}>Originál: </span>{reportView.raw}</div>}
            </div>
            <div style={{ padding:"0 22px" }}>
              <div style={{ display:"flex", gap:7, overflowX:"auto", paddingBottom:6, marginBottom:16 }}>
                {activeCats.map(c=>(
                  <button key={c.id} className="bp" onClick={()=>setActiveTab(c.id)}
                    style={{ background:activeTab===c.id?c.color:"#111120", border:"none", borderRadius:20, padding:"8px 14px", color:activeTab===c.id?"#fff":"#555", fontSize:12, fontWeight:600, whiteSpace:"nowrap" }}>
                    {c.icon} {c.label}
                  </button>
                ))}
              </div>
              {activeCats.map(c=>activeTab===c.id&&(
                <div key={c.id} className="fade" style={{ background:"#111120", borderRadius:16, padding:"20px", borderLeft:`3px solid ${c.color}` }}>
                  <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:14 }}>
                    <span style={{ fontSize:22 }}>{c.icon}</span>
                    <span style={{ fontSize:13, fontWeight:700, color:c.color, letterSpacing:0.5 }}>{c.label.toUpperCase()}</span>
                  </div>
                  <div style={{ fontSize:15, color:"#ccc", lineHeight:1.75 }}>{reportView.categories[c.id]}</div>
                </div>
              ))}
            </div>
          </div>
        );
      })()}

      {/* SPODNÍ NAVIGACE */}
      {["home","stores","reports"].includes(screen) && (
        <div style={{ position:"fixed", bottom:0, left:"50%", transform:"translateX(-50%)", width:"100%", maxWidth:430, background:"#0d0d1a", borderTop:"1px solid #141424", display:"grid", gridTemplateColumns:"1fr 1fr 1fr", zIndex:100 }}>
          {[{id:"home",icon:"⊞",label:"Domů"},{id:"stores",icon:"🏪",label:"Prodejny"},{id:"reports",icon:"📋",label:"Zprávy"}].map(t=>(
            <button key={t.id} onClick={()=>setScreen(t.id)}
              style={{ background:"none", border:"none", padding:"14px 0 22px", display:"flex", flexDirection:"column", alignItems:"center", gap:4, color:screen===t.id?"#6366F1":"#333" }}>
              <span style={{ fontSize:20 }}>{t.icon}</span>
              <span style={{ fontSize:10, fontWeight:600 }}>{t.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
