angular.module('myapp',[])
.controller('myctrl',function($scope)
{
    // var d=;
    $scope.courselist=[
        {id:'101',name:'HED',availability:'yes',validity:new Date("July 21,2025").toISOString().slice(0, 10),mobile:7891492201},
        {id:'102',name:'C',availability:'yes',validity:new Date("November 11,2025").toISOString().slice(0, 10),mobile:785412664},
        {id:'103',name:'JAVASCRIPT',availability:'yes',validity:new Date("July 27,2025").toISOString().slice(0, 10),mobile:781588996},
        {id:'104',name:'PYTHON',availability:'no',validity:new Date("November 10,2020").toISOString().slice(0, 10),mobile:781166999},
    ];
    $scope.save=function()
    {
        var index=getindex($scope.id);
        $scope.courselist[index].name=$scope.name;
        $scope.courselist[index].availability=$scope.availability;
        $scope.courselist[index].validity=$scope.validity;
        $scope.courselist[index].mobile=$scope.mobile;
    }
    $scope.add=function()
    {
        $scope.courselist.push({
            id:$scope.id,name:$scope.name,availability:$scope.availability,validity:$scope.validity,mobile:$scope.mobile
        });
    }
    function getindex(id)
    {
        for(var i=0;i<$scope.courselist.length;i++)
        if($scope.courselist[i].id==id)
        return i;
        return -1;
    }
    $scope.edit=function(id)
    {
        var index=this.$index;
        var course=$scope.courselist[index];
        $scope.id=course.id;
        $scope.name=course.name;
        $scope.availability=course.availability;
        $scope.validity=course.validity;
        $scope.mobile=course.mobile;
    }
    $scope.delete=function()
    {
        var result=confirm('Are you sure?');
        if(result==true)
        {
            var index=this.$index;
            $scope.courselist.splice(index,1);
        }
    };
});