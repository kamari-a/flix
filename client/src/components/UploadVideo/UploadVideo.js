import React from 'react';
import'./UploadVideo.scss';
import Upload from '../../assets/images/preview.jpg';
import axios from 'axios';

class UploadVideo extends React.Component {
	state = {
		title: '',
		channel: 'Kamari Akers',
		description: '',
		image: 'http://localhost:8080/images/preview.jpg',
	}

	handleTitleChange = (event) => {
		this.setState({
			title: event.target.value,
		})
	}

	handleDescriptionChange = (event) => {
		this.setState({
			description: event.target.value,
		})
	}

	handleSubmit = (event) => {
		event.preventDefault();
		axios({
			method: 'POST',
			url: '/videos',
			headers: {
				'Content-Type': 'application/json;charset=UTF-8'
			},
			data: {
				'title': this.state.title, 
				'channel': this.state.channel,
				'description': this.state.description,
				'image': this.state.image,
			},
		})
		.then(response => {
			console.log(response);
		})
		.catch(error => {
			console.log(error);
		})

		this.setState({
			'title': '', 
			'description': '',
		})
	}

	render () {
		return (
			<section className='upload-form'>
				<h1 className='upload-form__main-title'>Upload Video</h1>

				<div className='upload-form__content'>
					<form onSubmit={this.handleSubmit} id='uploadForm' className='upload-form__form' noValidate>
						<div>
							<h3 className='upload-form__thumbnail-title'>VIDEO THUMBNAIL</h3>
							<img src={Upload} className='upload-form__thumbnail-img' alt='Preview of video to be uploaded'/>
						</div>

						<div className='upload-form__title-container'>
							<label htmlFor='title' className='upload-form__heading'>TITLE YOUR VIDEO</label>
							<input 
								onChange={this.handleTitleChange}
								value={this.state.title}
								type='text' id='title' name='title' className='upload-form__title' placeholder='Add a title to your video'
							/>
						</div>

						<div className='upload-form__description-container'>
							<label htmlFor='description' className='upload-form__heading'>ADD A VIDEO DESCRIPTION</label>
							<textarea 
								onChange={this.handleDescriptionChange}
								value={this.state.description}
								id='description' name='description' className='upload-form__description' placeholder='Add a description of your video' rows='5' cols='5'>
							</textarea>
						</div>

						<div className='upload-form__publish-container'>
							<button type='submit' id='publish' className='upload-form__btn'>PUBLISH</button>
							<button type='submit' id='cancel' className='upload-form__btn--cancel'>CANCEL</button>
						</div>
					</form>
				</div>			
			</section>			
		);
	}
}

export default UploadVideo;