import { useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Backdrop = ({ onClose, transparent }) => {
  useEffect(() => {
    const handleEscape = e => {
      if (e.code !== 'Escape') return;
      window.removeEventListener('keydown', handleEscape);
      onClose();
    };

    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full z-10 bg-black/60 ${classnames(
        { 'opacity-0': transparent },
      )}`}
      onClick={onClose}
    ></div>
  );
};

Backdrop.propTypes = {
  onClose: PropTypes.func.isRequired,
  transparent: PropTypes.bool,
};

export default Backdrop;
