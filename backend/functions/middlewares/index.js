const admin = require('firebase-admin');

exports.authentication = (req, res, next) => {
  if (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer ')) {
    res.status(403).send('Unauthorized');
    return;
  }

  let idToken;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
    const token = req.headers.authorization.split('Bearer ');
    [, idToken] = token;
  }
  admin.auth().verifyIdToken(idToken).then((decodedIdToken) => {
    req.user = decodedIdToken;
    return next();
  }).catch(() => {
    res.status(403).send('Unauthorized');
  });
};
