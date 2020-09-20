import React from 'react';
import './Comments.scss';

const Comments = (props) => {
	return (
		<section className='live-comments'>
			<div className='live-comments__container'>
					
				<div className='live-comments__img-container'>
					<img className='live-comments__comment-img' alt=''></img>
				</div>

				<div className='live-comments__text-container'>
					<div className='live-comments__top-row'>
						<h3 className='live-comments__comment-name'>{props.name}</h3>
						<p className='live-comments__comment-time'>{new Date(props.timestamp).toLocaleDateString()}</p>
					</div>
					<p className='live-comments__comment-text'>{props.comment}</p>
				</div>
				
			</div>
		</section>
	)
}

export default Comments;