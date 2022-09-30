import PropTypes from 'prop-types';

import useTranslations from '../../hooks/useTranslations';

const ModalReport = ({ show }) => {
  const translation = useTranslations(['thankYou', 'connect']);
  const opacity = show ? 'opacity-1' : 'opacity-0';

  return (
    <div
      className={`${opacity}  fixed flex items-center justify-center z-[1500] inset-0 bg-[#065A92] bg-opacity-25 transition-opacity duration-1000 overflow-y-hidden  `}
    >
      <div className="bg-white rounded-l text-center font-semibold text-lg p-8 md:text-2xl leading-[1.83] md:p-[50px] border border-[#AAACB3] ">
        <p>{translation.thankYou}</p>
        <p>{translation.connect}</p>
      </div>
    </div>
  );
};

export default ModalReport;

ModalReport.propTypes = {
  show: PropTypes.bool.isRequired,
};
