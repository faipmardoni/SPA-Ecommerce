exports.getItemFromDatabase = (res, db) => db.once('value', (snapshot) => {
  res.status(200).json({
    id: snapshot.key,
    item: snapshot.val(),
  });
}, (error) => {
  res.status(error.code).json({
    message: `Something went wrong. ${error.message}`,
  });
});

exports.getItemsFromDatabase = (res, db, objectKey) => db.on('value', (snapshots) => {
  const items = [];
  snapshots.forEach((item) => {
    const data = item.val();
    delete data[objectKey];
    items.push({
      id: item.key,
      item: data,
    });
  });
  return res.status(200).json(items);
}, error => res.status(error.code).json({
  message: `Something went wrong. ${error.message}`,
}));
