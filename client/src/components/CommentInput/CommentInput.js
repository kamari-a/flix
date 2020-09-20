import React from 'react';
import './CommentInput.scss';
import '../Comments/Comments';
import UserImg from '../../assets/images/mohan-muruge.jpg';

const CommentInput = () => {
	return (
		<section className='comment-form'>
			<h2 className='comment-form__count'>3 Comments</h2>
			<div className='comment-form__container'>
				<img className='comment-form__user-img' src={UserImg} alt='User avatar'></img>

				<form id='commentForm' className='comment-form__form' noValidate>
					<div>
						<label htmlFor='commentBox' className='comment-form__heading'>JOIN THE CONVERSATION</label>
					</div>

					<div className='comment-form__input-container'>
						<textarea id='commentBox' name='commentBox' className='comment-form__comment-box' placeholder='Add a comment' rows='5' cols='5'></textarea>
						<button type='submit' id='commentBtn' className='comment-form__button'>COMMENT</button>
					</div>
				</form>
			</div>
		</section>
	)
}

export default CommentInput;