export interface Question {
  seq: number;
  type: number;
  question: string;
}

export interface Answer {
  seq: number;
  type: number;
  answer: number;
}

export interface EnneagramTitle {
  korean: string;
  english: string;
}

export interface EnneagramWing {
  type: number;
  title: EnneagramTitle;
  description: string;
}

export interface Enneagram {
  type: number;
  title: EnneagramTitle;
  core_fear: string;
  core_desire: string;
  summary: string;
  description: string;
  wings: EnneagramWing[];
}
