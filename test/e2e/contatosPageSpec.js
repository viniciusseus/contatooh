var ContatosPage = require('./pages/contatosPage');

describe('Página principal', function() {
    var pagina = new ContatosPage();

    beforeEach(function() {
        //await browser.get('http://127.0.0.1:3000/#/contatos');
        pagina.visitar();
    });

    it('Deve estar logado', function() {
        pagina.obterUsuarioLogado().then(function(texto) {
            expect(texto.trim().length).toBeGreaterThan(0);
        });

    });


    it('Deve remover um contato da lista', function() {
        var totalAntes = pagina.obterTotalDeItensDaLista();
        pagina.removerPrimeiroItemDaLista();
        var totalDepois = pagina.obterTotalDeItensDaLista();
        expect(totalDepois).toBeLessThanOrEqual(totalAntes);
    });

});