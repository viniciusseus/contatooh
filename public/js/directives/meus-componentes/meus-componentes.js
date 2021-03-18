angular.module('meusComponentes', [])
.directive('meuPainel', function() {
    var directive = {};
    directive.restrict = "EA";

    directive.scope = {
        titulo: '@titulo'
    };

    directive.transclude = true;
    
    directive.templateUrl = 'js/directives/meus-componentes/meu-painel.html';

    
    //directive.scope = true;

    return directive;
})
.directive('meuBotaoAviso', function() { 
    var directive = {}
    directive.restrict = 'E';

    directive.scope = {
        nome : '@',
        acao : '&'
    };

    directive.template = 
    '<button ng-click="acao()" class="btn btn-warning">'
    + '{{nome}}'
    + '</button>';

    return directive;
})
.directive('meuFocus', function () {
    var directive = {};
    directive.restrict = 'A';
    directive.scope = {
        evento: '@'
    };
    directive.link = function (scope, element) {
        scope.$on(scope.evento, function () {
                element[0].focus();
        });
    };

    return directive;
});