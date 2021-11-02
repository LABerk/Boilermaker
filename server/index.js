const app = require("./app");
const port = process.env.PORT || 3000;

//listen and create server
app.listen(port, () => console.log(`I'm a hail of a sport at port ${port}`));
