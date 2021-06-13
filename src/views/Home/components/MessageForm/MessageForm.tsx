import React from 'react';
import { useParams } from 'react-router-dom';
import { Formik, Field } from 'formik';
import * as yup from "yup";
import axios from 'api/axiosInstance';

import { FormWrapper, Form, Controls, ErrorMessage } from './MessageForm-style';
import { Typography, Button, TextField } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';

import { MessageFormProps, MessageFormAttributes } from './types';


const MessageForm = React.forwardRef<HTMLElement, MessageFormProps>(({ closeModal }) => {
  const { id } = useParams<{ id?: string }>();

  const validationSchema = yup.object().shape({
    content: yup.string()
      .required('Message content is required')
      .min(10, 'Message must be at least 10 characters long')
      .max(100, 'Message can be at most 100 characters long')
  });

  const initialValues : MessageFormAttributes = {
    content: ""
  }

  const handleSendMessage = async ({ content }: { content: string }) => {
    console.log({ content, id});

    try {
      const { id: threadId } = (await axios.post<{ id: number }>(`/Threads?eventId=${id}`)).data;
      const res = await axios.post('/Threads/Messages', { threadId, content: content });
      console.log(res.data);
      closeModal();
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <FormWrapper>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSendMessage}
      >
        {({ dirty, isValid }) => (
          <Form>
            <Typography variant="h5">Enter your message to {"User name"}:</Typography>
            <Field
              required
              autoComplete="off"
              name="content"
              as={TextField}
              variant="outlined"
              multiline
              rows={5}
              label="Your message:"
              helperText={<ErrorMessage name="content"/>}
            />
            <Controls>
              <Button 
                variant="contained" 
                color="secondary" 
                onClick={closeModal}
              >
                cancel
              </Button>
              <Button 
                variant="contained" 
                color="primary" 
                disabled={!dirty || !isValid} 
                type="submit"
                endIcon={<SendIcon />}
              >
                Send
              </Button>
            </Controls>
          </Form>
        )}
      </Formik>
    </FormWrapper>
  )
});

export default MessageForm;
