import React from 'react';
import './MainVideo.scss';

const MainVideo = (props) => {
	return (
		<section className='main-video'>
			<video type='video/mp4' className='main-video__video' src={props.mainVideo.video} poster={props.mainVideo.image} key={props.mainVideo.id} alt='' controls/>
		</section>
	)
}

export default MainVideo;
