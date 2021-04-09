import MongoClient from 'mongodb';

const URL = "";

MongoClient.connect(URL, { useUnifiedTopology: true})
.then(connection => {
    let database = connection.db("sample_airbnb"); 

    let collection = database.collection("listingsAndReviews");

    let cursor = collection.find({review_scores: {seq: "99"}});
    let cursor = collection.find({beds: {seq: "5"}});
    let cursor = collection.find({price: {seq: "200"}});

    cursor.forEach(document => {
        console.log(document.name);
    }, () => {
        connection.close();
    })
})
.catch(error => {
    console.log("Error: " + error);
});