export interface MessagesProps {
  
}

export interface ConversationThread {
  id: 5;
  lastMessage: {
    id: number;
    threadId: number;
    author: StudentifyAccount;
    content: string;
    date: string;
    isViewed: boolean;
  }
  referencedEvent: StudentifyEvent;
  userAccount: StudentifyAccount;
}