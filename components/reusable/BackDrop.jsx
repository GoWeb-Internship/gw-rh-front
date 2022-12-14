import { useEffect } from 'react';
import PropTypes from 'prop-types';

const Backdrop = ({ onClose, transparent, className = '' }) => {
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
      className={[
        'fixed top-0 left-0 w-full h-full z-10 bg-black/40',
        transparent ? 'opacity-0' : '',
        className,
      ].join(' ')}
      onClick={onClose}
    ></div>
  );
};

Backdrop.propTypes = {
  onClose: PropTypes.func.isRequired,
  transparent: PropTypes.bool,
};

export default Backdrop;
