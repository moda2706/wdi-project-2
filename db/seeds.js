const mongoose    = require('mongoose');
mongoose.Promise  = require('bluebird');
// const env         = require('../config/env');
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/wdi-project-2';
mongoose.connect(dbURI);
const Artist      = require('../models/artist');
const Users       = require('../models/users');
// mongoose.connect(env.db, () => {
//   console.log('Connected');
// });

Artist.collection.drop();
Users.collection.drop();

Users
.create([{
  username: 'admin',
  email: 'easymonju@gmail.com',
  password: 'password',
  passwordConfirmation: 'password'
}])

.then((user) => {
  console.log(`${user.length} users created`);

  Artist
  .create([
    {
      artist: 'Banksy',
      description: '',
      image: '',
      lat: '',
      lng: ''

    }]);
})
.catch(err => {
  console.log(`Error: ${err}`);
})
.then(artists => {
  if (artists){
    console.log(`${artists.length} were created`);
  } else {
    console.log('No artists created');
  }
})
.catch(err => {
  console.log(`Error: ${err}`);
})
.finally(() => {
  mongoose.connection.close();
});
