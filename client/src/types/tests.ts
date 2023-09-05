export type Option = {
  name: string;
  isCorrect: boolean;
}

export type Question = {
  name: string;
  options: Option[];
}

export type Test = {
  _id: string;
  name: string;
  description: string;
  questions: Question[];
  creatorId: string;
}