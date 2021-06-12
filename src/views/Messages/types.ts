export interface MessagesProps {
  
}

export interface Message {
  id: number;
  date: string;
  content: string;
  threadId: number;
  author: {
    firstName: string;
    lastName: string;
  };
}