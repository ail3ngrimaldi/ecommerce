import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
import './WelcomePage.scss';

function WelcomePage() {
    return (
      <div id='centered'>
        <h1>Locas por la ropa</h1>
                <Link to='/shop' className='main__link'><p>Shop online </p><i className='arrow__icon'><IoIosArrowForward/></i>
                </Link>
      </div>
    );
  }
  
  export default WelcomePage;