import logo from '../../images/logo.png';
import { navLinks } from '../data';
const Navbar = () => {
  return (
    <nav>
      <li>
        <a href=''>
          <img src={logo} alt={logo} />
        </a>
      </li>
      {/* <!-- left this comment on purpose --> */}
      <ul className='navlinks'>
        {navLinks.map((link, index) => {
          if (index === 2) {
            return (
              <li key={link.id}>
                <a className='signUp' href='#'>
                  {link.text}
                </a>
              </li>
            );
          }
          if (index === 3) {
            return (
              <li key={link.id}>
                <a className='login' href='#'>
                  {link.text}
                </a>
              </li>
            );
          }
          return (
            <li key={link.id}>
              <a href='#'>{link.text}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Navbar;
