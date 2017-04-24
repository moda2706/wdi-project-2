const express        = require('express');
const router         = express.Router();
const artists        = require('../controllers/artists');
const registrations  = require('../controllers/registrations');
const sessions       = require('../controllers/sessions');
const statics        = require('../controllers/statics');

function secureRoute(req, res, next) {
  if (!req.session.userId) {
    return req.session.regenerate(() => {
      req.flash('danger', 'You must be logged in.');
      res.redirect('/login');
    });
  }

  return next();
}

router.route('/')
.get(statics.index);

router.route('/artists')
  .get(artists.index)
  .post(secureRoute, artists.create);

router.route('/artists/new')
  .get(secureRoute, artists.new);

router.route('/artists/:id')
  .get(artists.show)
  .put(secureRoute, artists.update)
  .delete(secureRoute, artists.delete);

router.route('/artists/;id/edit')
  .get(secureRoute, artists.edit);

router.route('/register')
.get(registrations.new)
.post(registrations.create);

router.route('/login')
  .get(sessions.new)
  .post(sessions.create);

router.route('/logout')
  .get(sessions.delete);


module.exports = router;
