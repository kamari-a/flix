import React from 'react';
import './Header.scss';
import Upload from '../../assets/icons/icon-upload.svg';
import Logo from '../../assets/logo/logo.svg';
import UserImg from '../../assets/images/mohan-muruge.jpg';
import {Link} from 'react-router-dom';

const Header = () => {
	return (
		<header> 
			<nav className='nav-bar'>
				<Link to='/' className='nav-bar__logo-link'>
					<img src={Logo} alt='Logo' className='nav-bar__logo'/>
				</Link>

				<div className='nav-bar__search-container'> 
					<input type='text' placeholder='Search' className='nav-bar__search'></input> 

					<Link to='/upload' className='nav-bar__link'>
						<img src={Upload} className='nav-bar__upload-icon' alt='Upload icon shaped like a plus sign'/> UPLOAD
					</Link>
				
					<img className='nav-bar__user-img' src={UserImg} alt='Users avatar'></img>
				</div>
			</nav>
		</header>
	);
}
  
export default Header;