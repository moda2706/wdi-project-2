const mongoose    = require('mongoose');
mongoose.Promise  = require('bluebird');

const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/wdi-project-2';
mongoose.connect(dbURI);

const Artist      = require('../models/artist');
const User        = require('../models/user');

Artist.collection.drop();
User.collection.drop();

User
.create([{
  username: 'admin',
  email: 'easymonju@gmail.com',
  password: 'password',
  passwordConfirmation: 'password'
}])
.then((user) => {
  console.log(`${user.length} users created`);

return Artist
  .create([
    {
      artist: 'Banksy',
      title: 'Naked Man Hanging from Window',
      description: 'Banksy Well Hung Lover as it is also known, is another enduring icon of the British city of Bristol. ... Having made headlines around the world when it first appeared, “Well Hung Lover” is a wry dedication to the insolent attitude of Bristol.',
      image: 'https://cdn-s3.touchofmodern.com/products/000/004/353/8a7e59f8957c1484ebc5f0a5801bb2e6_large.jpg?1392329799',
      lat: '51.4492436',
      lng: '-2.6088978'
    },{
      artist: 'Banksy',
      title: 'Preserved for posterity',
      description: 'Councils and property owners initially treated Banksy like any other vandal, erasing his work from their walls not long after it appeared. With the artist\'s rise to fame, though, his murals became valuable works of art. People began to protect the stencils with perspex covers. Several remain under screens to this day.',
      image: 'https://assets.londonist.com/uploads/2016/10/i875/img_6938.jpg',
      lat: '51.526328',
      lng: '-0.0809167'
    }]);
})
.then(artists => {
  artists.forEach(artist => {
    artist
    .save(artist, (err, artist) => {
      if(err) return console.log(err);
      return console.log(`${artist.artist} was created`);
    });
  });
});
//   if (artists){
//     console.log(`${artists.length} were created`);
//   } else {
//     console.log('No artists created');
//   }
// })
// .catch(err => {
//   console.log(`Error: ${err}`);
// .finally(() => {
//     mongoose.connection.close();
//   });
