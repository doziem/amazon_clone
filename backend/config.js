module.exports = {
  MONGODB_URL:
    process.env.MONGOBD_URL ||
    'mongodb+srv://Chidozie:A-r.wP7MVYmt2wm@cluster0.d6txa.mongodb.net/usersDB?retryWrites=true&w=majority',
  JWT_SECRET_TOKEN: process.env.JWT_SECRET_TOKEN || 'somethingverysecret ',
};
