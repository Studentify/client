export interface Message {
  id: number;
  threadId: number
  author: StudentifyAccount;
  content: string;
  date: string;
  isViewed: boolean;
};