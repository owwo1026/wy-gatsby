
import { Resend } from 'resend';

const resend = new Resend(process.env.GATSBY_RESEND_API_KEY);
console.log('GATSBY_RESEND_API_KEY:', GATSBY_RESEND_API_KEY);

export const sendContactEmail = async (params) => {
  const {
    from = '維域設計 <wei.yu.design22@gmail.com>',
    to = '維域設計 <wei.yu.design22@gmail.com>',
    subject  = '[維域設計-官網] 新客人留言通知',
    template
  } = params;

  const { data, error } = await resend.emails.send({
    from,
    to,
    subject,
    react: template,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
