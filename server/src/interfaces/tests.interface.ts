export interface Option {
  name: string;
  isCorrect: boolean;
}

export interface Question {
  name: string;
  options: Option[];
}

export interface Test {
  name: string;
  description: string;
  questions: Question[];
  creatorId: string;
}