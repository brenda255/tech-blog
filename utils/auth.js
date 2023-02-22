const withAuth = (req, res, next) => {
  // If the user is not logged in, redirect the request to the login route
  if (!req.session.logged_in) {
    console.log('COMMENT 1');
    res.redirect('/login');
  } else {
    console.log('COMMENT 2');
    next();
  }
};

module.exports = withAuth;
