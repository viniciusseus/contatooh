angular.module('contatooh').controller('ContatoController',
function($scope, $routeParams, Contato)
{
    console.log($routeParams.contatoId);

    //aqui contatos é plural, é a rota no lado servidor
    //var Contato = $resource('/contatos/:id');

    if($routeParams.contatoId)
    {
      Contato.get({id: $routeParams.contatoId},
        function(contato){
          $scope.contato = contato;
        },
        function(erro){
          $scope.mensagem = {texto: 'Não foi possível obter o contato'};
          console.log(erro);
      });
      console.log($routeParams.contatoId);
    }
    else{
      $scope.contato = new Contato();
    }

    //funcao salva
    $scope.salva = function() {
      $scope.contato.$save()
        .then(function(){
          $scope.mensagem = {texto: 'Salvo com sucesso'};
          //limpa o formulário
          $scope.contato = new Contato();
          //$scope.btnBackFocus = true;
          $scope.$broadcast('contatoSalvo');
        })
        .catch(function(erro)
        {
          $scope.mensagem = {texto: 'Não foi possível salvar'};
        });
    }

    Contato.query(function(contatos) {
      $scope.contatos = contatos;
    });
});
