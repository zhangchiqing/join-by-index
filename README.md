# join-by-index
A function that joins two arrays with index fields

## Usage:
```javascript
var R = require('ramda');
var joinByIndex = require('join-by-index');

// [User]
var users = [
  { id: 1, name: 'userA' },
  { id: 2, name: 'userB' },
  { id: 3, name: 'userC' },
];

// [Photo]
var photos = [
  { userId: 1, photo: ' :) ' },
  { userId: 3, photo: ' :( ' },
  { userId: 2, photo: ' :-) ' },
  { userId: 2, photo: ' :-/ ' },
  { userId: 4, photo: ' :-)) ' },
];


// (User?, Photo) -> PhotoWithUserName
var makePhotoWithUserName = function(user, photo) {
  return {
    userId: photo.userId,
    username: user ? user.name : null,
    photo: photo.photo,
  };
};

// [PhotoWithUserName]
var photosWithUserName = joinByIndex(
  R.prop('id'),
  R.prop('userId'),
  makePhotoWithUserName,
  users,
  photos
);

console.log(photosWithUserName);
// [
//   { userId: 1, photo: ' :) ', username: 'userA' },
//   { userId: 3, photo: ' :( ', username: 'userC' },
//   { userId: 2, photo: ' :-) ', username: 'userB' },
//   { userId: 2, photo: ' :-/ ', username: 'userB' },
//   { userId: 4, photo: ' :-)) ', username: null },
// ]
```

## API
```
joinByIndex :: (a -> c) -> (b -> c) -> (a?, b) -> d -> [a] -> [b] -> [d]
```
