const setup = (app) => {
  app.use('/api', (req, res) => {
    res.json({ message: 'hi from an example express middleware' });
  });
};

export default setup;
