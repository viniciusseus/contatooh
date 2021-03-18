var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;

//ObjectID de algum contato existente
var _idProcurado = new ObjectId('5fc64f42184336ee9eb92cc5')

MongoClient.connect('mongodb://127.0.0.1:27017/contatooh',
{ useNewUrlParser: true, useUnifiedTopology: true },
function(erro, db) {
	if(erro) throw err;
	db.collection('contatos').findOne({_id : _idProcurado}, 
		function(erro, contato) {
			if(erro) throw err;
			console.log(contato);
		}
	);
	}
); 
