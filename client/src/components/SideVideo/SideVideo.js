import React from 'react';
import './SideVideo.scss';
import {Link} from 'react-router-dom';
 
const SideVideo = (props) => {
	return (
		<Link to={'/' + props.video.id} className='side-video__link' style={{textDecoration: 'none', color: '#323232'}}>
			<div className='side-video__container' key={props.video.id}>
				<img className='side-video__img' src={props.video.image} alt=''/>
				<div className='side-video__text-container'>
					<h3 className='side-video__title'>{props.video.title}</h3>
					<p className='side-video__channel'>{props.video.channel}</p>
				</div>
			</div>
		</Link>
	)
}

export default SideVideo;






