const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err) {
    return console.log('Unable to connect mongo db');
  }
  console.log('Connected to mongo db');

  const db = client.db('TodoApp')


  // db.collection('Users').insertOne({
  //   name: 'Rohan Parekh',
  //   age: 33,
  //   location: 'Pune, India'
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('Unable to insert into Todo');
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  client.close();
});
