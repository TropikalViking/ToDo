var app = angular.module('app', []);

app.controller('ctrl', [ '$scope', '$window', function($scope, $window) {
    var vm = {
        text: "",
        list: [],
        addToDo: addToDo,
        save: save,
        removeToDo: removeToDo
    };

    init();
    function addToDo() {
        vm.list.push({done : false, listItem : vm.text});
        save();
        vm.text = ""
    }
    function removeToDo($index) {
        vm.list.splice($index, 1);
        save()

    }
    function save() {
        $window.localStorage.setItem('list', JSON.stringify(vm.list))
    }

    function init() {
        $scope.vm = vm;
        if($window.localStorage.getItem('list') != null){
            vm.list = JSON.parse($window.localStorage.getItem('list'));
            console.log(vm.list)
        }

    }
}]);