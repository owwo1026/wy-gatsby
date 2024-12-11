import React, { useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      allSocialJson {
        nodes {
          id
          name
          href
          icon {
            publicURL
          }
        }
      }
    }
  `);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      const chatbox = document.getElementById('fb-customer-chat');
      if (chatbox) {
        chatbox.setAttribute('page_id', '101262169275934');
        chatbox.setAttribute('attribution', 'biz_inbox');

        window.fbAsyncInit = function () {
          window.FB.init({
            xfbml: true,
            version: 'v14.0',
          });
        };

        (function (d, s, id) {
          var js,
            fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s);
          js.id = id;
          js.src = 'https://connect.facebook.net/zh_TW/sdk/xfbml.customerchat.js';
          fjs.parentNode.insertBefore(js, fjs);
        })(document, 'script', 'facebook-jssdk');
      }
    }
  }, []);

  return (
    <footer>
      <div id="fb-root"></div>
      <div id="fb-customer-chat" className="fb-customerchat"></div>
      <div className="container mx-auto">
        <div className="mt-2 md:mb-20 mb-10">
          <hr className="text-neutral-300"></hr>
        </div>
        <div className="flex md:flex-row flex-col gap-8 md:items-center justify-between md:mb-20 mb-10">
          <div className="text-body-md font-light">Copyright © 2022 WY DESIGN</div>
          <div className="flex md:flex-row flex-col md:items-center md:gap-6 gap-4">
            <div className="flex flex-row items-center opacity-70">
              <p className="text-body-sm font-semibold tracking-widest text-neutral-700 pr-4">CONNECT</p>
              <hr className="w-16 text-neutral-700"></hr>
            </div>
            <div className="flex flex-row  items-center gap-6">
              {data.allSocialJson.nodes.map((node) => (
                <a href={node.href} key={node.name} target="_blank" rel="noreferrer">
                  <img className="h-10 w-10" src={node.icon.publicURL} alt={node.name} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
