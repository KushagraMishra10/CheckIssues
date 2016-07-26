var ControllerModule = angular.module('checkIssues.view',[]);


ControllerModule.controller('checkIssuesController',['$scope','checkIssuesService',function($scope,checkIssuesService){
    
    
    function init(){
        
        $scope.searchPhrase="";
         $scope.showCharts=false;
        $scope.issueList={
            OpenIssues:0,
            issuesIn24Hours:0,
            issuesIn7days:0,
            issuesbefore7days:0
        }
    }
    
    init();
    
    $scope.search=function(searchPhrase){
        
        $scope.showCharts=false;
        
        var getIssuesResult=function(result){
             var chartData=[];
            
            $scope.issueList.OpenIssues=result.length;
            
            
            var issueListWithin24Hours=result.filter(function(item){
                return ((new Date().getTime()-new Date(item.created_at).getTime())/1000)<=86400;
            });
             $scope.issueList.issuesIn24Hours=issueListWithin24Hours.length;
            
            var issuesIn7days=result.filter(function(item){
                return 86400<((new Date().getTime()-new Date(item.created_at).getTime())/1000)&&((new Date().getTime()-new Date(item.created_at).getTime())/1000)<=(86400*7);
            });
            $scope.issueList.issuesIn7days=issuesIn7days.length;
            
            var issuesbefore7days=result.filter(function(item){
                return (86400*7)<((new Date().getTime()-new Date(item.created_at).getTime())/1000);
            });
            $scope.issueList.issuesbefore7days=issuesbefore7days.length;
            
           chartData.push(result.length);
           chartData.push(issueListWithin24Hours.length);
           chartData.push(issuesIn7days.length);
           chartData.push(issuesbefore7days.length);
            
           checkIssuesService.setChartData(chartData);
            
            $scope.showCharts=true;
            
            
            
        }
        
        checkIssuesService.getRepoIssuesData(searchPhrase,getIssuesResult);
    };
    
}]);