export interface MessagesProps {
  
}

export interface ConversationThread {
  id: 5;
  lastMessage: {
    id: number;
    threadId: number;
    author: studentifyAccount;
    content: string;
    date: string;
    isViewed: boolean;
  }
  referencedEvent: StudentifyEvent;
  userAccount: studentifyAccount;
}