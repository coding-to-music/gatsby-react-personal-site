import React, { useRef, useState } from "react";

import {
  ContactContainer,
  ContactForm,
  ContactInput,
  ContactTextArea,
  ContactBtn,
  NameSvg,
  EmailSvg,
  MessageAreaSvg,
} from "./ContactStyle";

import onScreenIntersection from "../../utils/onScreenIntersection";

const Contact = () => {
  const [isNameValid, setIsNameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isTextValid, setIsTextValid] = useState(false);

  const handleEmailValidity = (email) => {
    // don't remember from where i copied this code, but this works.
    const re =
      // eslint-disable-next-line no-useless-escape
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(email)) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
  };

  const contactTextRef = useRef();
  const contactView = onScreenIntersection(contactTextRef, -150, false, 10);

  const contactFormRef = useRef();
  const contactFormView = onScreenIntersection(contactFormRef, -150, false, 10);

  return (
    <ContactContainer animateText={contactView}>
      <div ref={contactTextRef}>
        <h2>
          Contact details<span>:</span>
        </h2>
        <h3>iliasallek.aek@gmail.com</h3>
        <h1>
          For employers<span>:</span>
        </h1>
        <ContactBtn
          animateBtn={contactView}
          style={{ alignSelf: "flex-start" }}
        >
          DOWNLOAD CV
        </ContactBtn>
      </div>
      <div>
        <h1>Say Hello</h1>
        <div>
          <ContactForm
            ref={contactFormRef}
            animateForm={contactFormView}
            action="https://formspree.io/f/xvoddwlj"
            method="POST"
          >
            <div>
              <div>
                <ContactInput
                  id="name-input"
                  name="name"
                  onChange={(e) => {
                    const { value } = e.target;
                    if (value.length >= 2) {
                      setIsNameValid(true);
                    } else {
                      setIsNameValid(false);
                    }
                  }}
                  required
                />
                <NameSvg isvalid={isNameValid ? 1 : 0} />
              </div>
              <div>
                <ContactInput
                  id="email-input"
                  name="email"
                  type="email"
                  placeholder="what's your email?"
                  onChange={(e) => {
                    handleEmailValidity(e.target.value);
                  }}
                  required
                />
                <EmailSvg isvalid={isEmailValid ? 1 : 0} />
              </div>
            </div>

            <div>
              <ContactTextArea
                id="input-message"
                spellCheck="false"
                onChange={(e) => {
                  const { value } = e.target;
                  if (value.length >= 3) {
                    setIsTextValid(true);
                  } else {
                    setIsTextValid(false);
                  }
                }}
                required
              />
              <MessageAreaSvg isvalid={isTextValid ? 1 : 0} />
            </div>
            <ContactBtn type="submit">SUBMIT</ContactBtn>
          </ContactForm>
        </div>
      </div>
    </ContactContainer>
  );
};

export default Contact;
