// ててまる モックデータ
// ユーザー像:ゆい(小学4年生)/ 得意:理科(生き物・実験が好き)/ 苦手:算数(分数)
// index.html・study-log.html・child.html で共通利用する

const SUBJECT_COLORS = {
  "算数": "#C9435A",
  "国語": "#F2707E",
  "英語": "#F6B9A8",
  "理科": "#6FB5C9",
  "社会": "#E8B84B",
};

const SUBJECT_ICONS = {
  "算数": "📐", // 使わない(アイコンはSVGで別途描画。教材名の参照用に残す)
};

// 1週間の学習記録(教科別セッション単位)
// session: { subject, material, pages, start, end }
// breaks:  { start, end, minutes, reason }
const WEEK_DETAIL = [
  {
    date: "2026-11-16", label: "月", weekday: "月曜日",
    sessions: [
      { subject: "算数", material: "標準ドリル4年 分数のたし算", pages: "12〜14", start: "16:00", end: "16:25" },
      { subject: "理科", material: "こん虫のからだのひみつ", pages: "8〜10", start: "16:35", end: "16:45" },
    ],
    breaks: [{ start: "16:25", end: "16:35", minutes: 10, reason: "お茶を飲んだ" }],
  },
  {
    date: "2026-11-17", label: "火", weekday: "火曜日",
    sessions: [
      { subject: "国語", material: "漢字れんしゅうプリント 5級", pages: "3", start: "17:00", end: "17:10" },
      { subject: "英語", material: "えいご表現ワーク", pages: "5〜6", start: "17:10", end: "17:20" },
      { subject: "社会", material: "都道府県しらべノート", pages: "20〜21", start: "17:25", end: "17:30" },
    ],
    breaks: [{ start: "17:20", end: "17:25", minutes: 5, reason: "トイレ" }],
  },
  {
    date: "2026-11-18", label: "水", weekday: "水曜日",
    sessions: [
      { subject: "算数", material: "標準ドリル4年 分数のたし算", pages: "15〜16", start: "16:10", end: "16:30" },
      { subject: "国語", material: "漢字れんしゅうプリント 5級", pages: "4", start: "16:30", end: "16:40" },
      { subject: "英語", material: "えいご表現ワーク", pages: "7", start: "16:50", end: "17:00" },
    ],
    breaks: [{ start: "16:40", end: "16:50", minutes: 10, reason: "ストレッチ" }],
  },
  {
    date: "2026-11-19", label: "木", weekday: "木曜日",
    sessions: [
      { subject: "算数", material: "標準ドリル4年 分数のたし算", pages: "17", start: "16:00", end: "16:15" },
      { subject: "社会", material: "都道府県しらべノート", pages: "22〜23", start: "16:15", end: "16:25" },
    ],
    breaks: [],
  },
  {
    date: "2026-11-20", label: "金", weekday: "金曜日",
    sessions: [
      { subject: "算数", material: "標準ドリル4年 分数のひき算", pages: "1〜3", start: "16:00", end: "16:30" },
      { subject: "理科", material: "こん虫のからだのひみつ", pages: "11〜12", start: "16:40", end: "16:50" },
      { subject: "国語", material: "漢字れんしゅうプリント 5級", pages: "5", start: "16:50", end: "17:00" },
      { subject: "社会", material: "都道府県しらべノート", pages: "24", start: "17:05", end: "17:10" },
    ],
    breaks: [{ start: "16:30", end: "16:40", minutes: 10, reason: "お茶を飲んだ" }],
  },
  {
    date: "2026-11-21", label: "土", weekday: "土曜日",
    sessions: [
      { subject: "算数", material: "標準ドリル4年 分数のひき算", pages: "4〜7", start: "10:00", end: "10:25" },
      { subject: "理科", material: "じしゃくのふしぎ", pages: "1〜4", start: "10:35", end: "10:50" },
      { subject: "国語", material: "漢字れんしゅうプリント 5級", pages: "6〜7", start: "11:00", end: "11:10" },
      { subject: "英語", material: "えいご表現ワーク", pages: "8〜9", start: "11:10", end: "11:20" },
    ],
    breaks: [
      { start: "10:25", end: "10:35", minutes: 10, reason: "おやつ" },
      { start: "10:50", end: "11:00", minutes: 10, reason: "すこし遊んだ" },
    ],
  },
  {
    date: "2026-11-22", label: "日", weekday: "日曜日",
    sessions: [
      { subject: "算数", material: "標準ドリル4年 分数のひき算", pages: "8〜9", start: "15:00", end: "15:10" },
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
    unit: "分数のひき算",
    question: "分母がちがう分数のひき算のやりかたがわからない",
    answer: "分母をそろえる(通分する)と、分子だけのひき算になるよ。まず2つの分母の最小公倍数を見つけて、それぞれの分数を同じ分母にそろえてから、分子をひき算しよう。",
    reviewed: false,
  },
  {
    id: 2,
    date: "2026-11-18",
    subject: "国語",
    unit: "漢字の読み方",
    question: "「照」という漢字の読み方がわからない",
    answer: "「照」は「て(る)」「て(らす)」(訓読み)、「ショウ」(音読み)と読むよ。「日照り(ひでり)」「照明(しょうめい)」のように使うよ。",
    reviewed: true,
  },
  {
    id: 3,
    date: "2026-11-16",
    subject: "理科",
    unit: "こん虫のからだ",
    question: "こん虫の足は何本あるの?",
    answer: "こん虫の足は6本(3対)だよ。頭・むね・はらの3つに分かれていて、足とはねは「むね」についているよ。",
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
