const User = require('../models/user');

function staticsIndex(req, res) {
  return res.render('statics/index', { path: '/'})
}

module.exports = {
  index: staticsIndex
};
