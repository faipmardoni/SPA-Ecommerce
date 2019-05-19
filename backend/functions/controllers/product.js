const admin = require('firebase-admin');
const { getItemFromDatabase, getItemsFromDatabase } = require('../helpers');

admin.initializeApp();
const database = admin.database().ref('/items');

module.exports = {
  addItem: (req, res) => {
    database.push(req.body.item);
    return database.on('child_added', (snapshot) => {
      const newItem = snapshot.val();

      return res.status(200).json({
        id: snapshot.key,
        item: newItem,
      });
    }, error => res.status(error.code).json({
      message: `Something went wrong. ${error.message}`,
    }));
  },
  getAllItems: (req, res) => getItemsFromDatabase(res, database, 'detail'),
  getItemById: (req, res) => {
    const db = database.child(req.params.id);

    return getItemFromDatabase(res, db);
  },
  updateItem: (req, res) => {
    const { item } = req.body;
    const db = admin.database().ref(`/items/${req.params.id}`);
    db.set(item);
    return getItemFromDatabase(res, db);
  },
  deleteItem: (req, res) => {
    const db = admin.database().ref(`/items/${req.params.id}`);
    db.remove();

    return getItemFromDatabase(res, db);
  },
};
