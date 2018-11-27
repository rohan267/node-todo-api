const { MongoClient, ObjectID } = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  const db = client.db('TodoApp')
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("5bf4894cd9ead303936b5491")
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }). then((result) =>{
  //   console.log(result);
  // })

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("5bf337d0f095e92d1c210426")
  }, {
    $set: {
      location: "Tokyo, Japan"
    },
    $inc: {
      age: -10
    }
  }, {
    returnOriginal: false
  }). then((result) =>{
    console.log(result);
  })
});
