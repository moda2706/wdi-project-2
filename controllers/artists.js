const Artist = require('../models/artist');

function artistsIndex(req, res, next) {
  Artist
    .find()
    .exec()
    .then(artists => {
      return res.render('artists/index', { artists });
    })
    .catch(next);
}

function artistsMap(req, res, next) {
  return res.render('artists/map');
}

function artistsShow(req, res, next) {
  Artist
    .findById(req.params.id)
    .populate('comments.user')
    .exec()
    .then(artist => {
      if (!artist) {
        return res.render('error', { error: 'No media found.' });
      }
      return res.render('artists/show', { artist });
    })
    .catch(next);
}

function artistsNew(req, res) {
  return res.render('artists/new');
}

function artistsCreate(req, res, next) {
  Artist
    .create(req.body)
    .then(artist => {
      if (!artist) return res.render('error', { error: 'No media was created!' });
      return res.redirect('/artists');
    })
    .catch(next);
}

function artistsEdit(req, res, next) {
  Artist
    .findById(req.params.id)
    .exec()
    .then(artist => {
      if (!artist) {
        return res.render('error', { error: 'No media found.' });
      }
      return res.render('artists/edit', { artist });
    })
    .catch(next);
}

function artistsUpdate(req, res, next) {
  Artist
    .findById(req.params.id)
    .exec()
    .then(artist => {
      if (!artist) {
        return res.render('error', { error: 'No media found.' });
      }
      for (const field in req.body) {
        artist[field] = req.body[field];
      }
      return artist.save();
    })
    .then(artist => {
      if (!artist) {
        return res.render('error', { error: 'Something went wrong during the update.' });
      }
      return res.render('artists/show', { artist });
    })
    .catch(next);
}

function artistsDelete(req, res, next) {
  Artist
    .findByIdAndRemove(req.params.id)
    .exec()
    .then(() => {
      return res.redirect('/artists');
    })
    .catch(next);
}

function artistsAPI(req, res) {
  Artist.find({}, (err, artists) => {
    if (err) return res.status(500).send();
    return res.status(200).json({ artists: artists });
  });
}

module.exports = {
  index: artistsIndex,
  show: artistsShow,
  new: artistsNew,
  create: artistsCreate,
  edit: artistsEdit,
  update: artistsUpdate,
  delete: artistsDelete,
  api: artistsAPI,
  map: artistsMap
};
