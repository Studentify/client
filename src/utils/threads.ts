export function deduceInterlocutor(me?: StudentifyAccount, thread?: ConversationThread) {
  if (!me || !thread) {
    return undefined;
  } else {
    return (
      me.id === thread.referencedEvent.authorId 
        ? thread.userAccount
        : thread.referencedEvent.author
    );
  }
}