const Artist = require('../models/artist');

function commentsCreate(req, res, next) {
  Artist
    .findById(req.params.id)
    .exec()
    .then(artist => {
      if (!artist) {
        const err = new Error('Artist not found');
        err.status = 404;
        throw err;
      }

      const comment = {
        user: res.locals.user._id,
        body: req.body.body
      };

      artist.comments.push(comment);

      return artist.save();
    })
    .then((artist) => {
      console.log(artist);
      res.redirect(`/artists/${req.params.id}`);
    })
    .catch(next);
}

module.exports = {
  create: commentsCreate
};
