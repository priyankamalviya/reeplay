import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';

const API_KEY ='AIzaSyB1d7njORVLD6S0Ye3Al-MO3BAba7uMcLs';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    }; //default your state here

    YTSearch({
      key: API_KEY,
      term: 'fireworks'
    	},
			(videos) => {
        // console.log(data);
        this.setState({
          videos: videos,
           selectedVideo: videos[0]
        });
    	}
		);

		this.videoSearch('fireworks'); // initialize the search term to a default value
  }

	videoSearch(term) {
		YTSearch({
			key: API_KEY,
			term: term
			},
			(videos) => {
				// console.log(data);
				this.setState({
					videos: videos,
					 selectedVideo: videos[0]
				});
			}
		);
	}
  render(){

		const videoSearch = _.debounce(term => {this.videoSearch(term)}, 300);
      return (
      <div>
        <div className="navigation"><SearchBar onSearchChange = {videoSearch} /></div>
        <div className="container">

            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList
              onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
              videos={this.state.videos} />

        </div>
      </div>
      );
  }
}

// React - plz take this component and put it on the page
ReactDOM.render(<App />, document.querySelector(".main"));  // App is a class, <App /> is an instance of a class
