/**
 * In right-to-left Arabic text, "و50%" is shown as "و%50" by the Unicode bidi
 * algorithm. Wrapping each percentage in a left-to-right isolate keeps it as
 * "50%". Apply at render time only — never to code or CSS values.
 */
export const isolatePercents = (text: string) => text.replace(/(\d+(?:\.\d+)?%)/g, "⁦$1⁩");
