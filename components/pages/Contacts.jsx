import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import useTranslation from 'hooks/useTranslations.js';

import Section from '../reusable/Section';
import Container from '../reusable/Container';
import Heading from '../reusable/Heading';
import Form from '../Form/Form';
import ModalReport from '../ModalReport/ModalReport';

const Contacts = ({ data: { attributes } }) => {
  const [showModal, setShowModal] = useState(false);

  const { validation, message, error } = attributes;
  const callbackBtn = useTranslation('callbackBtn');

  const router = useRouter();

  useEffect(() => {
    if (showModal === true) {
      setTimeout(() => {
        router.push('/');
        setShowModal(false);
      }, 2000);
    }
  }, [router, showModal]);

  const openModal = () => {
    setShowModal(true);
  };
  const headingText = router.query.clickFrom
    ? `${router.query.clickFrom}`
    : `${callbackBtn}`;
  return (
    <Section className="py-[152px]  lg:py-[244px]" id="contact form">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="lg:w-[464px]">
            <Heading
              text={headingText}
              className={
                'font-semibold text-lg tracking-[0.005em] uppercase leading-7 text-[#065A92] mb-4 md:text-28 md:tracking-normal md:mb-6 lg:mb-14'
              }
            />
          </div>
          {showModal && <ModalReport show={showModal} />}
          <Form
            fromForm={headingText}
            openModal={openModal}
            inputsData={validation}
            errorMessage={error}
            textareaMsg={message}
          />
        </div>
      </Container>
    </Section>
  );
};

export default Contacts;
