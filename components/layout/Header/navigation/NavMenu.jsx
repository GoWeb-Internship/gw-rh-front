import NavMenuItem from './NavMenuItem';
import PropTypes from 'prop-types';

const NavMenu = ({ navData = [], className = '' }) => {
  return (
    <nav className={className}>
      <ul className="flex gap-x-3">
        {!!navData.length &&
          navData.map(item => (
            <li key={item.id} className="relative">
              <NavMenuItem navItemData={item} />
            </li>
          ))}
      </ul>
    </nav>
  );
};

NavMenu.propTypes = {
  className: PropTypes.string,
};

export default NavMenu;
