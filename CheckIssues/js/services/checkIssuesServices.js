var ServiceModule=angular.module('checkIssues.service',[]);

ServiceModule.factory('checkIssuesService',['$http',function($http){
    
    var chartData=[]
    return{
        
        getRepoIssuesData:function(searchPhrase,callback){
            
            var searchPhraseUrl=searchPhrase+"/issues"
          
            $http.get(searchPhraseUrl).then(function(result){
                
                callback(result.data);
                
            },function(error){
                
                console.log(error);
                
            });
            
        },
        
        setChartData:function(result){
            
            chartData=result;
        },
        getChartData:function(){
            return chartData;
        }
    }
    
}]);