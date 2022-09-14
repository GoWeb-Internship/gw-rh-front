import DropdownArrowIcon from 'public/dropdownArrow.svg';

const LangButton = ({ currentLanguage, onClick }) => {
  return (
    <button
      onClick={onClick}
      aria-label={'Кнопка переключения языка'}
      id={'lang-switcher-button'}
      type="button"
      className={`flex items-center gap-x-3 px-3 py-2 font-navigation text-light`}
    >
      <span>{currentLanguage}</span>
      <DropdownArrowIcon className="stroke-light" />
    </button>
  );
};

export default LangButton;
