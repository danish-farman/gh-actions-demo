const {
    app
} = require('./app');

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`);
});