'use strict';

/**
 * @ngdoc service
 * @name blocksquadApp.demo
 * @description
 * # demo
 * Service in the blocksquadApp.
 */
angular.module('blocksquadApp')
  .service('DemoService', function demo() {
  	var OHIO={
			steps:{
				1:{
					message:{
						1:{
							effect:{
								type:'expand',
								options:{
									duration:'500',
									pauseAfter:'1000'
								}
							},
							word:'O',
							pause:'300'
						},
						2:{
							effect:{
								type:'expand',
								options:{
									duration:'500',
									pauseAfter:'1000'
								}
							},
							word:'H',
							pause:'300'
						},
						3:{
							effect:{
								type:'expand',
								options:{
									duration:'500',
									pauseAfter:'1000'
								}
							},
							word:'I',
							pause:'300'
						},
						4:{
							effect:{
								type:'expand',
								options:{
									duration:'500',
									pauseAfter:'1000'
								}
							},
							word:'O',
							pause:'300'
						}
					},
					icon:'/eo40'
				}
			},
			author:{
				name:'Buckeye Brutus',
				type:'Cheer Squad'
			},
			theme:{},
			initiate:{},
			image:{},
			title:'O-H-I-O!'
		};
  	var cheers={
			indexasdf4lj:OHIO,
			inasdf:OHIO,
			asdflkjasfd:OHIO,
			asldfkj:OHIO,
			asldfkjsfda:OHIO,
			asdlfkjsa:OHIO,
			asldfkjfasd:OHIO,
			asdlfkjsdaf:OHIO,
			asdlasdf:OHIO
		};
  	return{
  		cheers:function(){
  			return cheers;
  		},
  		pushCheers:function(cheer){
  			cheers.push(cheer);
  		},
  		initiateCheer:function(index,time){
  			cheers.index.initiate.time=time;
  		}
  	};
  });
