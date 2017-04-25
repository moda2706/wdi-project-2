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
    },{
      artist: 'Banksy',
      title: 'Grim Reaper',
      description: 'Originally painted on the side of a boat in Bristol, this piece has found a new home in the city\'s M Shed gallery.',
      image: 'http://visitbristol.co.uk/imageresizer/?image=%2Fdmsimgs%2FBanksy-thekla.jpg&action=ProductDetail',
      lat: '51.4483204',
      lng: '-2.5983256'
    },{
      artist: 'Banksy',
      title: 'Spy Booth',
      description: 'Painted down the road from GCHQ, this now severely defaced piece was seen as a critique on global surveillance.',
      image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/03/12/11/spy-booth-banksy.jpg',
      lat: '51.4627182',
      lng: '-2.5919744'
    },{
      artist: 'Banksy',
      title: 'The Mild Mild West',
      description: 'Another Bristol piece, this is said to refer to the police\'s heavy-handed approach to breaking up raves.',
      image: 'http://visitbristol.co.uk/imageresizer/?image=%2Fdmsimgs%2FBanksy-Mild-Mild-West_CREDIT_Destination-Bristol_452359259.jpg&action=ProductDetail',
      lat: '51.4627184',
      lng: '-2.5919742'
    },{
      artist: 'Banksy',
      title: 'Yellow Lines Flower Painter',
      description: 'Located in Bethnal Green in London, the Yellow Lines Flower Painter is one of Banksy’s most famous pieces. In this piece, the world-renowned graffiti artist shows a painter, presumably tasked to paint the yellow lines so common to the streets of London, taking a break after painting a large yellow flower on a wall.',
      image: 'http://www.stencilrevolution.com/photopost/2012/09/Yellow-Lines-Flower-Painter-by-Banksy-580x475.jpg',
      lat: '51.5279652',
      lng: '-0.0661011'
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
