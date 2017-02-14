/*
 *  Inserts "doc" into the collection "movies".
 */
exports.insert = function(db, doc, callback) {
  // TODO: implement
  var movies = db.collection("movies");
  movies.insert(doc);
  callback(null);
};

/*
 *  Finds all documents in the "movies" collection
 *  whose "director" field equals the given director,
 *  ordered by the movie's "title" field. See
 *  http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#sort
 */
exports.byDirector = function(db, director, callback) {
  // TODO: implement
  var movies = db.collection("movies");
	var query = movies.find({ director: director}).sort({ 'title' : 1}).toArray(function (error, data){
		callback(null, data);
	});
};