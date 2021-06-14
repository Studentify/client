export interface Message {
  id: number;
  content: string;
  date: string;
  authorId: number;
  isViewed?: boolean;
};