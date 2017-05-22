import React from 'react';
import store from '../store';
import { getState } from 'redux';
import Lyrics from '../components/Lyrics';
import {setLyrics, fetchLyrics} from '../action-creators/lyrics';


export default class LyricsContainer extends React.Component{
  constructor(props){
    super(props)
    this.state = Object.assign({
      artistQuery: '',
      songQuery: ''
    }, store.getState());

    this.setArtist = this.setArtist.bind(this);
    this.setSong = this.setSong.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.unsubscribeFromStore = store.subscribe(() => {
      this.setState(store.getState());
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromStore();
  }

  setArtist(artist){
    this.setState({
      artistQuery: artist
    })
  }

   setSong(song){
    this.setState({
      songQuery: song
    })
  }

   handleSubmit(e){
    e.preventDefault();
    let artist = this.state.artistQuery;
    let song = this.state.songQuery;
    if (this.state.artistQuery && this.state.songQuery){
      store.dispatch(fetchLyrics(artist, song));
    }
  }

  render (){
    return (
      <Lyrics
      text={this.state.text}
      setArtist={this.setArtist}
      setSong={this.setSong}
      artistQuery={this.state.artistQuery}
      songQuery={this.state.songQuery}
      handleSubmit={this.handleSubmit}
      />
    );
  }
}
