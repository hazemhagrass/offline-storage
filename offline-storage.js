 /** 
 * @author HazemHagrass
 */

 var OfflineStorage = {
 	
 	saveInLocalStorage: function(key, obj){
 		localStorage.setItem(key, JSON.stringify(obj));
 	},
 	
 	getFromLocalStorage: function(key){
 		return $.parseJSON(localStorage.getItem(key));
 	},

 	removeFromLocalStorage: function(key){
 		localStorage.removeItem(key);
 	},

 	clearLocalStorage: function(){
 		localStorage.clear();
 	},

 	saveInSessionStorage: function(key, obj){
 		sessionStorage.setItem(key, JSON.stringify(obj));
 	},

 	getFromSessionStorage: function(key){
 		return $.parseJSON(sessionStorage.getItem(key));
 	},

 	removeFromSessionStorage: function(key){
 		sessionStorage.removeItem(key);
 	},

 	clearSessionStorage: function(){
 		sessionStorage.clear();
 	},
 }