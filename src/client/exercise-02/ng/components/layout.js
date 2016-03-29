import 'client/exercise-02/ng/services/chuck-norris';
import 'client/exercise-02/ng/components/fact';

window._app.global_ng_module
.component('layout', {
  templateUrl: 'client/exercise-02/ng/components/layout.html',
  controller: ['chuckNorris','$scope', function(chuckNorris, $scope) {

    chuckNorris.fetch3Random().then((res) => {
      console.log(res.data.value);
      $scope.randomFacts = res.data.value;
    })
  }]
});
