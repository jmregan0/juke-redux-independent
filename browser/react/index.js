import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import AppContainer from './containers/AppContainer';
import Albums from './components/Albums';
import Album from './components/Album';
import FilterableArtistsContainer from './containers/FilterableArtistsContainer';
import Artist from './components/Artist';
import Songs from './components/Songs';
import NewPlaylistContainer from './containers/NewPlaylistContainer';
import Playlist from './components/Playlist';
import LyricsContainer from './containers/LyricsContainer';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={AppContainer} foo={'foo'}>
      <Route path="/albums" component={Albums} />
      <Route path="/albums/:albumId" component={Album} />
      <Route path="/artists" component={FilterableArtistsContainer} />
      <Route path="/artists/:artistId" component={Artist}>
        <Route path="albums" component={Albums} />
        <Route path="songs" component={Songs} />
      </Route>
      <Route path="/songs/:songId" component={LyricsContainer} />
      <Route path="/new-playlist" component={NewPlaylistContainer} />
      <Route path="playlists/:playlistId" component={Playlist} />
      <IndexRedirect to='/albums' />
    </Route>
  </Router>,
  document.getElementById('app')
);

/*
    React Flow:

    1) Constraints (define action types)
    2) Action Creators () =>
    3) Reducer
    4) Container (class)
      -Subscribe to store
      -Unsubscribe
      -Dispatches actions when appropriate
    5) Components (presentational/dumb)


    ***************************************

    Action type - Anonymous Func that returns an
    object with an action type ({type: START_PLAY})

    Action Creators - In Container, functions that fire on certain actions
    which will be tracked on the dom with listeners that
    are rendered by containers components.

    Reducer - Function passed initial state and action.
    Based on what the action is, it will build onto the newState
    it is creating and attempt to update initial state with info.

    Container - Main hub(class extention) that has constructor,
    special functions, and renders components which contain HTML.

    Components - Don't know how to interact with React etc. Just
    contains the HTML for its container to eventually render to DOM.

*/
