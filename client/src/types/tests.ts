export type Option = {
  _id: string;
  name: string;
  isCorrect: boolean;
}

export type Question = {
  _id: string;
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

export type CreateTest = {
  name: string;
  description: string;
  questions: {
    name: string;
    options: {
      name: string;
      isCorrect: boolean;
    }[];
  }[];
}