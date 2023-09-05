export type Option = {
  id: string;
  createdAt: string;
  name: string;
  isCorrect: boolean;
}

export type Question = {
  id: string;
  createdAt: string;
  name: string;
  options: Option[];
}

export type Test = {
  id: string;
  createdAt: string;
  name: string;
  description: string;
  questions: Question[];
  creatorId: string;
}