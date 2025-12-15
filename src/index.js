const app = require('./app');

const PORT = process.env.PORT || 3030;

app.listen(PORT, (err) => {
  if (err) {
    console.error('Error starting server:', err);
    process.exit(1);
  }
  console.log(`Server is running on port ${PORT}`);
});
