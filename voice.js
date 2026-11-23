// ててまる 音声(VOICEVOX連携)
//
// VOICEVOX(https://voicevox.hiroshiba.jp/)のエンジンをローカルで起動しておくと、
// このページから直接 http://localhost:50021 のAPIを呼び出して音声合成ができる。
// エンジンが起動していない場合は、音声なしで静かに失敗する(アプリ自体は問題なく動く)。
//
// 発表デモのやり方:
//   1. VOICEVOX(エンジン単体 or アプリ)を起動しておく(デフォルトで localhost:50021 で待受)
//   2. このアプリ(child.html等)をブラウザで開く
//   3. 「はじめる」「ぎゅっとする」などを押すと、ててまるの声がしゃべる
//
// 声のキャラクター:「ずんだもん(あまあま)」をデフォルトにしている。
// 子ども向けで可愛らしく、親しみやすいマスコット感のある声としてVOICEVOXコミュニティでも
// 定番の人気キャラクター。もし別の声にしたい場合は VOICE_NAME / VOICE_STYLE を変更する。

const VOICEVOX_BASE = "http://localhost:50021";
const VOICE_NAME = "ずんだもん";
const VOICE_STYLE = "あまあま"; // 見つからない場合は、そのキャラの最初のスタイルにフォールバック

let cachedSpeakerId = null;
let voicevoxAvailable = null; // null=未確認, true/false=確認済み

async function resolveSpeakerId() {
  if (cachedSpeakerId !== null) return cachedSpeakerId;
  const res = await fetch(`${VOICEVOX_BASE}/speakers`);
  if (!res.ok) throw new Error("speakers fetch failed");
  const speakers = await res.json();
  const char = speakers.find((s) => s.name === VOICE_NAME) || speakers[0];
  const style = char.styles.find((s) => s.name === VOICE_STYLE) || char.styles[0];
  cachedSpeakerId = style.id;
  console.info(`[てて voice] ${char.name}(${style.name}) speaker=${cachedSpeakerId}`);
  return cachedSpeakerId;
}

async function speak(text) {
  if (voicevoxAvailable === false) return; // 一度失敗したら、以降は静かにスキップ(毎回タイムアウトを待たない)
  try {
    const speaker = await resolveSpeakerId();
    const queryRes = await fetch(`${VOICEVOX_BASE}/audio_query?text=${encodeURIComponent(text)}&speaker=${speaker}`, { method: "POST" });
    if (!queryRes.ok) throw new Error("audio_query failed");
    const query = await queryRes.json();

    const synthRes = await fetch(`${VOICEVOX_BASE}/synthesis?speaker=${speaker}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(query),
    });
    if (!synthRes.ok) throw new Error("synthesis failed");
    const blob = await synthRes.blob();
    const url = URL.createObjectURL(blob);
    const audio = new Audio(url);
    audio.addEventListener("ended", () => URL.revokeObjectURL(url));
    await audio.play();
    voicevoxAvailable = true;
  } catch (e) {
    if (voicevoxAvailable === null) {
      console.warn("[てて voice] VOICEVOXに接続できません。ローカルでVOICEVOXエンジンを起動すると、ててまるが話すようになります。", e);
    }
    voicevoxAvailable = false;
  }
}
