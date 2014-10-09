var ObjectID = require('mongodb').ObjectID;

var CollectionDriver = function (db) {
  this.db = db;
};

CollectionDriver.prototype.getCollection = function (collectionName, callback) {
  this.db.collection(collectionName, function(error, the_collection) {
    if ( error ) { calback( error ); }
    else { callback(null, the_collection); }
  });
};

//save new object
CollectionDriver.prototype.save = function(collectionName, obj, callback) {
    this.getCollection(collectionName, function(error, the_collection) {
      if( error ) { callback(error); }
      else {
        obj.created_at = new Date();
        the_collection.insert(obj, function() {
          callback(null, obj);
        });
      }
    });
};

exports.CollectionDriver = CollectionDriver;