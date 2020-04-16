// eslint-disable-next-line no-unused-vars
module.exports = (app, server, compiler) => {
  app.use('/api', (req, res) => {
    res.json({ message: 'hi from an example express middleware' });
  });
};
