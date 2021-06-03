import React from 'react';

import { FormWrapper } from './MessageForm-style';

import { MessageFormProps } from './types';


const MessageForm: React.FC<MessageFormProps> = ({ closeModal }) => {
  return (
    <FormWrapper>
      <form>

        <button onClick={closeModal}>cancel</button>
        <button>send</button>
      </form>
    </FormWrapper>
  )
}

export default MessageForm;
