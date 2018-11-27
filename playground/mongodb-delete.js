const { MongoClient, ObjectID } = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  const db = client.db('TodoApp')
  console.log('Connected to MongoDB server');
  // db.collection('Todos').insertOne({
  //   text: 'Wash car',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });
  // db.collection('Todos').find({completed:true}).toArray().then((docs)=>{
  //  //   console.log('Todos');
  //    console.log(JSON.stringify(docs, undefined, 2));
  //  //   // console.log(docs);
  //  }, (err)=>{
  //    console.log('Unable to fetch docs', err);
  //  } );

  db.collection('Todos').deleteMany({text: 'have lunch'}).then((result) => {
    console.log(result);
  });

  db.collection('Todos').deleteOne({text: 'have dinner'}).then((result) => {
    console.log(result);
  });

  db.collection('Todos').findOneAndDelete({text: 'have dinner'}).then((result) => {
    console.log(result);
  });

  db.collection('Users').deleteMany({name: 'John'}).then((result) => {
    console.log(result);
  });
});
