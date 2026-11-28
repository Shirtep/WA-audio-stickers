const $ = (id) => document.getElementById(id);
const T = (k, vars) => (window.WAAS && WAAS.t ? WAAS.t(k, vars) : k);
let onlyErrors = false;
let entries = [];

function applyLang() {
  document.documentElement.lang = WAAS.lang;
  document.title = T("log.title");
  $("title").textContent = T("log.title");
  $("desc").textContent = T("log.desc");
  $("dl").textContent = T("log.download");
  $("copy").textContent = T("log.copy");
  $("errors").textContent = onlyErrors ? T("log.showAll") : T("log.onlyErrors");
  $("clear").textContent = T("log.clear");
  for (const b of $("langs").children) b.classList.toggle("on", b.dataset.lang === WAAS.lang);
  render();
}

function render() {
  const box = $("log");
  box.textContent = "";
  const list = (onlyErrors ? entries.filter((e) => e.level !== "info") : entries).slice(-2000);
  for (const e of list) {
    const div = document.createElement("div");
    div.className = e.level === "error" ? "e" : e.level === "warn" ? "w" : "";
    div.textContent = `${e.ts.replace("T", " ").slice(0, 19)} [${e.level}] ${e.event}${e.data != null ? " " + JSON.stringify(e.data) : ""}`;
    box.append(div);
  }
  box.scrollTop = box.scrollHeight;
  const errs = entries.filter((e) => e.level === "error").length;
  const warns = entries.filter((e) => e.level === "warn").length;
  const sessions = new Set(entries.map((e) => e.session)).size;
  $("summary").textContent = T("log.summary", { total: entries.length, errs, warns, sessions });
}

function load() {
  chrome.storage.local.get({ log: [], lang: null }, (res) => {
    entries = res.log || [];
    if (WAAS.LANGS.includes(res.lang)) WAAS.setLang(res.lang, { persist: false });
    applyLang();
  });
}

for (const code of WAAS.LANGS) {
  const b = document.createElement("button");
  b.textContent = code.toUpperCase();
  b.dataset.lang = code;
  b.addEventListener("click", () => WAAS.setLang(code));
  $("langs").append(b);
}
WAAS.onLangChange(applyLang);

$("dl").addEventListener("click", () => {
  const content = JSON.stringify({ exportado: new Date().toISOString(), version: chrome.runtime.getManifest().version, ua: navigator.userAgent, entradas: entries }, null, 1);
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([content], { type: "application/json" }));
  a.download = "registro-stickers-con-sonido-" + new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19) + ".json";
  a.click();
});
$("copy").addEventListener("click", async () => {
  await navigator.clipboard.writeText(JSON.stringify(entries, null, 1));
  $("copy").textContent = T("log.copied");
  setTimeout(() => ($("copy").textContent = T("log.copy")), 1500);
});
$("errors").addEventListener("click", () => {
  onlyErrors = !onlyErrors;
  $("errors").textContent = onlyErrors ? T("log.showAll") : T("log.onlyErrors");
  render();
});
$("clear").addEventListener("click", () => {
  if (!confirm(T("log.clearConfirm"))) return;
  chrome.storage.local.set({ log: [] }, load);
});
chrome.storage.onChanged.addListener((changes) => {
  if (changes.log) { entries = changes.log.newValue || []; render(); }
  if (changes.lang && WAAS.LANGS.includes(changes.lang.newValue)) {
    WAAS.setLang(changes.lang.newValue, { persist: false });
  }
});
load();
