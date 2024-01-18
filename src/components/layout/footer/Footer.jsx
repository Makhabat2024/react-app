import React from 'react';
import scss from './Footer.module.scss';
import logo from '../../../assets/logo.png';
import facebook from '../../../assets/icons/facebook.png';
import twitter from '../../../assets/icons/twitter.png';
import instagram from '../../../assets/icons/instagram.png';
import linkedin from '../../../assets/icons/linkedin.png';
import youtube from '../../../assets/icons/youtube.png';
import pinterest from '../../../assets/icons/pinterest.png';
import lineColumn from '../../../assets/smooth-line-top.png';
import ButtonBG from '../../ui/buttons/ButtonBG';

const Footer = () => {
	const link = [
		{
			href: 'http://',
			name: 'ABOUT'
		},
		{
			href: 'http://',
			name: 'SERVICES'
		},
		{
			href: 'http://',
			name: 'TECHNOLOGIES'
		},
		{
			href: 'http://',
			name: 'HOW TO'
		},
		{
			href: 'http://',
			name: 'JOIN HYDRA'
		}
	];
	const link2 = [
		{
			href: 'http://',
			name: 'F.A.Q '
		},
		{
			href: 'http://',
			name: 'SITEMAP'
		},
		{
			href: 'http://',
			name: 'CONDITIONS'
		},
		{
			href: 'http://',
			name: 'LICENSES'
		}
	];

	return (
		<>
			<footer className={scss.footer}>
				<img src={logo} alt="logo" className={scss.footerLogo} />
				
				<div className={scss.left}>

				<img src={lineColumn} alt="lineColumn" />

					<nav>
						<ul>
							{link.map((item, index) => (
								<li key={index}>
									<a href={item.href}>{item.name}</a>
								</li>
							))}
						</ul>
					</nav>
				</div>
				<div className={scss.middle}>
					<img src={scss.arrow} alt="arrow" />
					<nav>
						<ul>
							{link2.map((item, index) => (
								<li key={index}>
									<a href={item.href}>{item.name}</a>
								</li>
							))}
						</ul>
					</nav>
				</div>

				<div className={scss.right}>
					<div>
						<img src={lineColumn} alt="lineColumn" />

						<a href="http://">SOCIALIZE WITH HYDRA</a>
					</div>
					<div>
						<img src={instagram} alt="icon" />
						<img src={facebook} alt="icon" />
						<img src={linkedin} alt="icon" />
						<img src={twitter} alt="icon" />
						<img src={pinterest} alt="icon" />
						<img src={youtube} alt="icon" />
					</div>
					<ButtonBG />
				</div>
			</footer>
		</>
	);
};
export default Footer;
