import React from 'react';
import '../MainVideoLayout/MainVideoLayout.scss';
import Views from '../../assets/icons/icon-views.svg';
import Likes from '../../assets/icons/icon-likes.svg';

const MainVideoLayout = (props) => {
	return (
		<section className='main-video--content'>
			<h1 className='main-video__title'>{props.mainVideo.title}</h1>

			<section className='main-video__info-container'>
				<div className='main-video__data'>
					<h2 className='main-video__channel'>By {props.mainVideo.channel}</h2>
					<h4 className='main-video__post-date'>{new Date(props.mainVideo.timestamp).toLocaleDateString()}</h4>
				</div>
			
				<div className='main-video__interactions'>
					<h4 className='main-video__views'><img className='main-video__views--icon' src={Views} alt='Grey icon of an eye'></img>{props.mainVideo.views}</h4>
					<h4 className='main-video__likes'><img className='main-video__likes--icon' src={Likes} alt='Grey icon of a heart'></img>{props.mainVideo.likes}</h4>
				</div>
			</section>
			
			<p className='main-video__description'>{props.mainVideo.description}</p>
		</section>
	)
}

export default MainVideoLayout;
