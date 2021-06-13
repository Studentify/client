export interface Message {
  id: number;
  threadId: number
  author: studentifyAccount;
  content: string;
  date: string;
  isViewed: boolean;
};