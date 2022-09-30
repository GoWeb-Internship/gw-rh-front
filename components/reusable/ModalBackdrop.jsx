import PropTypes from 'prop-types';

const ModalBackdrop = ({ children }) => {
  return (
    <div className="fixed flex items-center justify-center z-[1000] inset-0 bg-black/50 transition-opacity overflow-y-auto">
      {children}
    </div>
  );
};

export default ModalBackdrop;

ModalBackdrop.propTypes = {
  children: PropTypes.node,
};
