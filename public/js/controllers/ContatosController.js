angular.module('contatooh').controller('ContatosController',
function(Contato, $scope)
{
    $scope.contatos = [];
    $scope.filtro = '';
    $scope.mensagem = {texto: ''};

    //aqui contatos é plural, é a rota no lado servidor
    //var Contato = $resource('/contatos/:id');

    function buscaContatos(){
      Contato.query(
        function(contatos){
          $scope.contatos = contatos;
          $scope.mensagem = {};
        },
        function(erro){
          $scope.mensagem = {
            texto: 'Não foi possivel obter a lista de contatos'
          };
            console.log(erro);
        }
      );
    }
    buscaContatos();

    $scope.remove = function(contato) {
        console.log(contato);
        Contato.delete({id: contato._id},
          buscaContatos,
          function(erro) {
            $scope.mensagem = {
              texto: 'Não foi possível remover a lista'
            };
            console.log(erro);
          }
        );
    };
});
