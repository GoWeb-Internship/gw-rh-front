import IconButton from '../../../reusable/IconButton';
import DropDownArrow from 'public/dropdownArrow.svg';
import SubMenu from './SubMenu';
import Backdrop from '../../../reusable/BackDrop';
import useShowElement from '../../../../hooks/useShowElement';

const DropDownOption = ({ subMenuData }) => {
  const { subMenu, slug, name } = subMenuData;

  const [render, show, classes, onToggle] = useShowElement();

  return (
    <>
      <IconButton
        onClick={onToggle}
        text={name}
        IconComponent={DropDownArrow}
        light
      />
      {render && (
        <SubMenu
          navData={subMenu}
          from={slug}
          className={classes}
          onClick={onToggle}
        />
      )}
      {show && <Backdrop onClose={onToggle} transparent />}
    </>
  );
};

export default DropDownOption;
