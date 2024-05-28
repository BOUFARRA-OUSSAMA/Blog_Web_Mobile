// middlewares/someMiddleware.js

module.exports = (req, res, next) => {
    console.log('Custom middleware executed');
    next();
  };
  