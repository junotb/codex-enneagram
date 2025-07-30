import type { Answer } from "@/types";

export function findEnneagramType(answers: Answer[]): number {
  const scores = new Map<number, number>();
  for (const ans of answers) {
    const prev = scores.get(ans.type) ?? 0;
    scores.set(ans.type, prev + ans.answer);
  }
  let maxType = 1;
  let maxScore = -Infinity;
  for (const [type, score] of scores.entries()) {
    if (score > maxScore) {
      maxScore = score;
      maxType = type;
    }
  }
  return maxType;
}
