// ててまる モックデータ
// ユーザー像:ゆい(小学3年生)/ 得意:理科(生き物・実験が好き)/ 苦手:算数(わり算)
// 3年生で新しく始まる単元(わり算、理科、社会、外国語活動)を中心に教材を設定している
// index.html・study-log.html・child.html で共通利用する

const SUBJECT_COLORS = {
  "算数": "#C9435A",
  "国語": "#F2707E",
  "英語": "#F6B9A8",
  "理科": "#6FB5C9",
  "社会": "#E8B84B",
};

// 1週間の学習記録(教科別セッション単位)
// session: { subject, material, pages, start, end }
// breaks:  { start, end, minutes, reason }
const WEEK_DETAIL = [
  {
    date: "2026-11-16", label: "月", weekday: "月曜日",
    sessions: [
      { subject: "算数", material: "calc.ドリル3年 あまりのあるわり算", pages: "12〜14", start: "16:00", end: "16:25" },
      { subject: "理科", material: "こん虫のそだちかた", pages: "8〜10", start: "16:35", end: "16:45" },
    ],
    breaks: [{ start: "16:25", end: "16:35", minutes: 10, reason: "お茶を飲んだ" }],
  },
  {
    date: "2026-11-17", label: "火", weekday: "火曜日",
    sessions: [
      { subject: "国語", material: "かんじれんしゅうノート 3年", pages: "3", start: "17:00", end: "17:10" },
      { subject: "英語", material: "えいごリズムあそびワーク", pages: "5〜6", start: "17:10", end: "17:20" },
      { subject: "社会", material: "まちたんけんノート(お店しらべ)", pages: "20〜21", start: "17:25", end: "17:30" },
    ],
    breaks: [{ start: "17:20", end: "17:25", minutes: 5, reason: "トイレ" }],
  },
  {
    date: "2026-11-18", label: "水", weekday: "水曜日",
    sessions: [
      { subject: "算数", material: "calc.ドリル3年 あまりのあるわり算", pages: "15〜16", start: "16:10", end: "16:30" },
      { subject: "国語", material: "かんじれんしゅうノート 3年", pages: "4", start: "16:30", end: "16:40" },
      { subject: "英語", material: "えいごリズムあそびワーク", pages: "7", start: "16:50", end: "17:00" },
    ],
    breaks: [{ start: "16:40", end: "16:50", minutes: 10, reason: "ストレッチ" }],
  },
  {
    date: "2026-11-19", label: "木", weekday: "木曜日",
    sessions: [
      { subject: "算数", material: "calc.ドリル3年 あまりのあるわり算", pages: "17", start: "16:00", end: "16:15" },
      { subject: "社会", material: "まちたんけんノート(地図記号)", pages: "22〜23", start: "16:15", end: "16:25" },
    ],
    breaks: [],
  },
  {
    date: "2026-11-20", label: "金", weekday: "金曜日",
    sessions: [
      { subject: "算数", material: "calc.ドリル3年 わり算の筆算", pages: "1〜3", start: "16:00", end: "16:30" },
      { subject: "理科", material: "こん虫のそだちかた", pages: "11〜12", start: "16:40", end: "16:50" },
      { subject: "国語", material: "かんじれんしゅうノート 3年", pages: "5", start: "16:50", end: "17:00" },
      { subject: "社会", material: "まちたんけんノート(地図記号)", pages: "24", start: "17:05", end: "17:10" },
    ],
    breaks: [{ start: "16:30", end: "16:40", minutes: 10, reason: "お茶を飲んだ" }],
  },
  {
    date: "2026-11-21", label: "土", weekday: "土曜日",
    sessions: [
      { subject: "算数", material: "calc.ドリル3年 わり算の筆算", pages: "4〜7", start: "10:00", end: "10:25" },
      { subject: "理科", material: "じしゃくのふしぎ", pages: "1〜4", start: "10:35", end: "10:50" },
      { subject: "国語", material: "かんじれんしゅうノート 3年", pages: "6〜7", start: "11:00", end: "11:10" },
      { subject: "英語", material: "えいごリズムあそびワーク", pages: "8〜9", start: "11:10", end: "11:20" },
    ],
    breaks: [
      { start: "10:25", end: "10:35", minutes: 10, reason: "おやつ" },
      { start: "10:50", end: "11:00", minutes: 10, reason: "すこし遊んだ" },
    ],
  },
  {
    date: "2026-11-22", label: "日", weekday: "日曜日",
    sessions: [
      { subject: "算数", material: "calc.ドリル3年 わり算の筆算", pages: "8〜9", start: "15:00", end: "15:10" },
    ],
    breaks: [],
  },
];

// 質問・振り返りログ(ててまるに聞いた「わからない問題」)
const QUESTIONS = [
  {
    id: 1,
    date: "2026-11-21",
    subject: "算数",
    unit: "わり算の筆算",
    question: "あまりが出るわり算の筆算のやりかたがわからない",
    answer: "わる数をかけて、わられる数に一番近い(こえない)数を見つけてから、ひき算をして「あまり」を出すよ。あまりは、わる数より小さくなっているか最後に確かめよう。",
    reviewed: false,
  },
  {
    id: 2,
    date: "2026-11-18",
    subject: "国語",
    unit: "漢字の読み方",
    question: "「流」という漢字の読み方がわからない",
    answer: "「流」は「なが(れる)」「なが(す)」(訓読み)、「リュウ」(音読み)と読むよ。「川が流れる」「流行(りゅうこう)」のように使うよ。",
    reviewed: true,
  },
  {
    id: 3,
    date: "2026-11-16",
    subject: "理科",
    unit: "こん虫のそだちかた",
    question: "ちょうちょは卵からどうやってちょうになるの?",
    answer: "卵→よう虫(いもむし)→さなぎ→せい虫(ちょう)、のじゅんにすがたを変えて育つよ。これを「完全へんたい」と言うんだ。",
    reviewed: true,
  },
];

function minLabel(min) {
  if (min <= 0) return "0分";
  if (min < 60) return min + "分";
  const h = Math.floor(min / 60), m = min % 60;
  return m ? h + "時間" + m + "分" : h + "時間";
}

function timeToMin(t) {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
}

function sessionMinutes(s) {
  return timeToMin(s.end) - timeToMin(s.start);
}

// 教科別の合計分(index.html のグラフで使用)
function daySubjectTotals(day) {
  const totals = {};
  Object.keys(SUBJECT_COLORS).forEach((s) => (totals[s] = 0));
  day.sessions.forEach((s) => { totals[s.subject] = (totals[s.subject] || 0) + sessionMinutes(s); });
  return totals;
}

function dayTotalMinutes(day) {
  return day.sessions.reduce((sum, s) => sum + sessionMinutes(s), 0);
}

function dayBreakMinutes(day) {
  return day.breaks.reduce((sum, b) => sum + b.minutes, 0);
}

// ---- 漢字レベル表示(ふりがな) ----
// [漢字をふくむ語, ふりがな, その漢字が学習指導要領で配当される学年(1〜6)]
// 選択した学年より上で習う漢字だけ、ふりがなを表示する
const FURIGANA = [
  ["学習記録", "がくしゅうきろく", 4],
  ["学習", "がくしゅう", 3],
  ["記録", "きろく", 4],
  ["今週", "こんしゅう", 2],
  ["合計", "ごうけい", 2],
  ["質問", "しつもん", 3],
  ["振り返り", "ふりかえり", 3],
  ["保護者設定", "ほごしゃせってい", 5],
  ["保護者", "ほごしゃ", 5],
  ["設定", "せってい", 3],
  ["目標", "もくひょう", 4],
  ["達成", "たっせい", 4],
  ["休憩", "きゅうけい", 6],
  ["教材", "きょうざい", 4],
  ["算数", "さんすう", 2],
  ["国語", "こくご", 2],
  ["理科", "りか", 2],
  ["社会", "しゃかい", 2],
  ["英語", "えいご", 4],
  ["筆算", "ひっさん", 4],
  ["磁石", "じしゃく", 3],
  ["地図記号", "ちずきごう", 4],
  ["筆算", "ひっさん", 4],
  ["詳細", "しょうさい", 5],
  ["内訳", "うちわけ", 6],
  ["発表", "はっぴょう", 4],
  ["問題", "もんだい", 3],
  ["解説", "かいせつ", 5],
  ["漢字", "かんじ", 2],
  ["読み方", "よみかた", 2],
];

function annotateFurigana(text) {
  let out = text;
  FURIGANA.forEach(([word, reading, grade]) => {
    out = out.split(word).join(`<ruby class="furi" data-grade="${grade}">${word}<rt>${reading}</rt></ruby>`);
  });
  return out;
}

function getKanjiLevel() {
  const v = Number(localStorage.getItem("tetemaru_kanji_level"));
  return v && v >= 1 && v <= 6 ? v : 3;
}

function setKanjiLevel(level) {
  localStorage.setItem("tetemaru_kanji_level", String(level));
  applyKanjiLevel(level);
}

function applyKanjiLevel(level) {
  document.querySelectorAll("ruby.furi").forEach((r) => {
    const grade = Number(r.dataset.grade);
    const rt = r.querySelector("rt");
    if (!rt) return;
    rt.style.display = level < grade ? "" : "none";
  });
}

// ---- なかよし度(親密度ゲージ) ----
// 時間経過での減衰はなし(増える一方)。「無理強いしない」というててまるのコンセプトに合わせている。
const AFFINITY_KEY = "tetemaru_affinity";
const AFFINITY_DEFAULT = 15;
const AFFINITY_LEVELS = [
  { min: 0, name: "はじめまして" },
  { min: 30, name: "なかよし" },
  { min: 60, name: "大親友" },
  { min: 90, name: "ずっといっしょ" },
];

function getAffinity() {
  const v = Number(localStorage.getItem(AFFINITY_KEY));
  return Number.isFinite(v) && v >= 0 ? Math.min(100, v) : AFFINITY_DEFAULT;
}

function addAffinity(amount) {
  const before = getAffinity();
  const after = Math.max(0, Math.min(100, before + amount));
  localStorage.setItem(AFFINITY_KEY, String(after));
  return { before, after, levelUp: affinityLevelName(after) !== affinityLevelName(before) };
}

function affinityLevelName(pct) {
  let name = AFFINITY_LEVELS[0].name;
  AFFINITY_LEVELS.forEach((l) => { if (pct >= l.min) name = l.name; });
  return name;
}
