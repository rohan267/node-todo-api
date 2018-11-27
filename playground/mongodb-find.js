// const {MongoClient, ObjectID} = require('mongodb');
//
// MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true }, (err, client) => {
//   if(err) {
//     return console.log('Unable to connect mongo db');
//   }
//   console.log('Connected to mongo db');
//
//   var db = client.db('Todos');
//
//   db.collection('Todos').find({completed:true}).toArray().then((docs)=>{
//   //   console.log('Todos');
//     console.log(JSON.stringify(docs, undefined, 2));
//   //   // console.log(docs);
//   }, (err)=>{
//     console.log('Unable to fetch docs', err);
//   } );

  // db.collection('Todos').find({}, (err, result)=>{
    //console.log(result.stringify(result, undefined,2));
  // });

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

   //client.close();
// });


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
  db.collection('Todos').find({completed:true}).toArray().then((docs)=>{
   //   console.log('Todos');
     console.log(JSON.stringify(docs, undefined, 2));
   //   // console.log(docs);
   }, (err)=>{
     console.log('Unable to fetch docs', err);
   } );
});
