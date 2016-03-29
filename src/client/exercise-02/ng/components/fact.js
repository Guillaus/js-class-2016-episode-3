window._app.global_ng_module
.component('fact', {
  templateUrl: 'client/exercise-02/ng/components/fact.html',
  bindings: {
    fact: '='
  },
  controller: ['$scope', function($scope) {
      console.log(this.fact);
  }]
});
