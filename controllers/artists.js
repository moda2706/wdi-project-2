const Artist = require('../models/artist');

function artistsIndex(req, res, next) {
  Artist
  .find()
  .then((artists) => res.render('artists/index', { artists }))
  .catch(next);
}

function artistsNew(req, res) {
  res.render('artists/new', { artists });
}
// why is there 'next' but not in the above
function artistsCreate(req, res, next) {
  Artist
  .create(req.body)
  .then(() => res.redirect('/artists'))
  .catch(next);
}

function artistsShow(req, res, next) {
  Artist
  .findById(req.params.id)
  .then((artist) => {
    if(!artist) return res.status(404).render('static/404');
    res.render('artists/show', { artist });
  })
  .catch(next);
}

function artistsEdit(req, res, next) {
  Artist
  .findById(req.params.id)
  .then((artist) => {
    if(!artist) return res.status(404).render('static/404');
    res.render('artists/edit', { artist });
  })
  .catch(next);
}
// Need explanation on the below
function artistsUpdate(req, res, next) {
  Artist
  .findById(req.params.id)
  .then((artist) => {
    if(!artist) return res.status(404).render('static/404');

    for (const field in req.body) {
      artist[field] = req.body[field];
    }

    return artist.save();
  })
  .then((artist) => res.render(`/artists/${artist.id}`))
  .catch(next);
}

function artistsDelete(req,res, next) {
  Artist
  .findById(req.params.id)
  .then((artist) => {
    if(!artist) return res.status(404).render('static/404');
    return artist.remove();
  })
  .then(() => res.redirect('/artists'))
  .catch(next);
}

module.exports = {
  index: artistsIndex,
  new: artistsNew,
  create: artistsCreate,
  show: artistsShow,
  edit: artistsEdit,
  update: artistsUpdate,
  delete: artistsDelete
};
