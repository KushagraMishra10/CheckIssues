angular.module('checkIssues.view').controller('chartController',['$scope','checkIssuesService',function($scope,checkIssuesService){
    
    
 

   Highcharts.chart('container',{
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Timeline'
        },
        xAxis: {
            categories: ['Total Issues','Last 24 Hours', '1-7 days', 'Before 7 days']
        },
        yAxis: {
            title: {
                text: 'Open Issues'
            }
        },
        series: [{
            data: checkIssuesService.getChartData()
        }]
    });


    
    
}])