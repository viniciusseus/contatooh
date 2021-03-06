var MongoClient = require('mongodb').MongoClient;

var contatos = [
    {nome: "xyz1", email: 'xyz1@email.com'},
    {nome: "xyz2", email: 'xyz2@email.com'},
    {nome: "xyz3", email: 'xyz3@email.com'}
];

MongoClient.connect('mongodb://127.0.0.1:27017/contatooh_test', 
    function(erro, client) {
        if(erro) throw err;

        var db = client.db('contatooh_test');

        db.dropDatabase(function (err) {
            if(err) return console.log(err);
            console.log('Banco apagado com sucesso')
            db.collection('contatos').insertMany(contatos, 
            function(err, inserted) {
                if(err) return console.log(err);
                console.log('Banco populado com sucesso')
                process.exit(0);
            });
        });
    }
);