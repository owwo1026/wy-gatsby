
export const ContactEmail = (props) => {
  const { name, phone, email, address, type, housingStatus, budgetRange, remark } = props;

  var msg =
  '\n==== [新留言] ====' +
  `\n名稱: ${data.name ?? ''}` +
  `\n電話: ${data.phone ?? ''}` +
  `\n電子信箱: ${data.email ?? ''}` +
  `\n案件地址: ${data.address ?? ''}` +
  `\n類型: ${data.type ?? ''}` +
  `\n狀態: ${data.housingStatus ?? ''}` +
  `\n預算: ${data.budgetRange ?? ''}` +
  `\n需求說明: ${data.remark ?? ''}` +
  '\n==== [END] ====';
  return (
    <html>
      <body style={main}>
        <div style={container}>
          <img
            src={`https://nextauth.dannyisadog.com/logo.png`}
            width="50"
            height="50"
            alt="nextjs-authjs-template"
            style={logo}
          />
          <p style={paragraph}>Hi {firstName},</p>
          <p style={paragraph}>
            Welcome to the Next.js Auth.js Template!
            <br />
            We{"'"}re thrilled to have you with us!
          </p>
          <section style={btnContainer}>
            <a style={button} href="https://github.com/Dannyisadog/nextjs-authjs-template">
              Get started
            </a>
          </section>
          <p style={paragraph}>
            Best,
            <br />
            Nextjs Authjs Template Team
          </p>
        </div>
      </body>
    </html>
  );
};

ContactEmail.PreviewProps = {
  firstName: '',
};

export default ContactEmail;

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  maxWidth: '37.5em',
  margin: '0 auto',
  padding: '20px 0 48px',
};

const logo = {
  margin: '0 auto',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '26px',
};

const btnContainer = {
  textAlign: 'center',
};

const button = {
  backgroundColor: '#0773f7',
  borderRadius: '3px',
  color: '#fff',
  fontSize: '16px',
  textDecoration: 'none',
  textAlign: 'center',
  display: 'block',
  padding: '12px',
};
