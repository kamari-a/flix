import React from 'react';
import './Main.scss';
import MainVideo from '../components/MainVideo/MainVideo';
import MainVideoLayout from '../components/MainVideoLayout/MainVideoLayout';
import CommentInput from '../components/CommentInput/CommentInput';
import Comments from '../components/Comments/Comments';
import SideVideoLayout from '../components/SideVideoLayout/SideVideoLayout';
import SideVideo from '../components/SideVideo/SideVideo';
import axios from 'axios';

const API_URL = '/videos';

class Main extends React.Component {
	state = {
		videos: [],
		mainVideo: [],
		comments: [],
		comment: '',
		name: 'Kamari Akers'
	}

	componentDidMount() {
		axios
		.get(`${API_URL}`)
		.then(response => {
			const defaultVideo = response.data[0];

			this.setState({
				videos: response.data,
			});

			axios
			.get(`${API_URL}/${defaultVideo.id}`)
			.then(response => {
				this.setState({
				mainVideo: response.data,
				comments: response.data.comments
				});
			})
			.catch((error) => console.log(error));
		})
		.catch((error) => console.log(error));
	}

	handleChange = (event) => {
		this.setState({
			comment: event.target.value,
		})
	}

	handleSubmit = (event) => {
		event.preventDefault();

		axios({
            method: 'POST',
            url: `${API_URL}/${this.props.match.params.videoId}/comments`,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            data: {
				name: this.state.name,
                comment: this.state.comment,
            }
        })
        .then(response => {
            return;
        })
        .catch(error => {
            console.log(error)
        })  

        this.setState({
			comment: '',
        })
	}

	componentDidUpdate(prevProps) {
		//if the previous ID doesn't match the current ID, the main video will update with the new video's data
		if(prevProps.match.params.videoId !== this.props.match.params.videoId) {
			axios
			.get(`${API_URL}/${this.props.match.params.videoId}`)
			.then(response => {
				this.setState({
					mainVideo: response.data,
					comments: response.data.comments,
				});
			})
			.catch((error) => console.log(error));
		}

		//updates the comments if new comment is added
		axios
		.get(`${API_URL}/${this.props.match.params.videoId}`)
		.then(response => {
			this.setState({
				comments: response.data.comments
			})
		})
	}

	render(){
		//if the side video and the main video have the same ID, the main video will not show in the sideVideo component
		let sideVideos = this.state.videos.filter(video => video.id !== this.state.mainVideo.id)
		return (
			<main>
				<MainVideo mainVideo={this.state.mainVideo} />

				<section className='content'>
				<section className='content__main-video'>
					<MainVideoLayout mainVideo={this.state.mainVideo} />

					<CommentInput comment={this.state.comment}handleChange={this.handleChange} handleSubmit={this.handleSubmit} />

					{this.state.comments.map(comments =>
					<Comments 
					comments={comments}
					id={comments.id}
					name={comments.name}
					comment={comments.comment}
					timestamp={comments.timestamp}
					/>
					)}	
				</section>

				<section className='content__side-videos'>
					<SideVideoLayout />
					
					{sideVideos.map(video => 
					<SideVideo video={video}/>
					)} 
				</section>
				</section>
			</main>
		)
	}
}

export default Main;
  