import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Fly Me To The Moon', duration: '2:27' },
    { title: 'What a Wonderful World', duration: '2:19' },
    { title: "It's A Mans World", duration: '4:15' },
    { title: "Can't Take My Eyes off You", duration: '3:23' },
    { title: 'I Will Survive', duration: '4:21' },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
