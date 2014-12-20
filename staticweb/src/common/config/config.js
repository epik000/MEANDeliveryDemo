angular.module('demo.config',[])
  .constant('ENVIRONMENT',{
    SERVER_API_ROOT: '$SERVER_API_ROOT'
  })
  .constant('END_POINTS', {
    record: {
      all: '/record'
    }
  })
  ;
