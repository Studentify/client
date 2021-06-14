export interface MessagesProps {
  
}

export interface MessagesThread {
  id: number;
  date: string;
  content: string;
  threadId: number;
  author: {
    firstName: string;
    lastName: string;
  };
}