var ContatoPage = require('./pages/contatoPage');

describe('Cadastro de contatos', function() {
    var pagina = new ContatoPage();

    beforeEach(function() {
        //browser.get('http://127.0.0.1:3000/#/contato');
        pagina.visitar();
    });

    it('Deve cadastrar um contato', function() {
        var aleatorio = 
            Math.floor(Math.random() * 10000000 + 1);
        pagina.digitarNome('teste' + aleatorio);
        pagina.digitarEmail('teste@email' + aleatorio);
        pagina.selecionarPrimeiraEmergenciaDaLista();
        pagina.salvar();
        expect(pagina.obterMensagem())
                 .toContain('sucesso');
    });
});