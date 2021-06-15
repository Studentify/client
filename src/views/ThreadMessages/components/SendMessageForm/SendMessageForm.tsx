import React, { useState } from 'react';

import { ContainerForm } from './SendMessageForm-style';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';

interface SendMessageFormProps {
  onSendMessage(message: string): Promise<void>;
}

const SendMessageForm: React.FC<SendMessageFormProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();

    if (message.trim()) {
      setMessage("");
      onSendMessage(message);
    }
  }

  return (
    <ContainerForm onSubmit={handleSendMessage} autoComplete="off">
      <TextField 
        name="Message"
        // label="Message"
        value={message}
        fullWidth
        onChange={e => setMessage(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        endIcon={<SendIcon>send</SendIcon>}
      >
        Send
      </Button>
    </ContainerForm>
  );
}

export default SendMessageForm;
