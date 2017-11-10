$(document).ready(function() {
	
    var imdbImage = $( "<span/>" ) ;
    imdbImage.css({"max-width":"80px","height":"auto"});
    imdbImage.append("<img id=\"imdb_img\" src=\"equo/IMDB_logo_2016.png\" style=\"max-width:60px;height:auto;\" alt=\"IMDB\" />")
    //imdbImage.append("<img id=\"imdb_img\" src=\"file://Users/seba/myRepository/equo-product/netflix-desktop-app/bin/IMDB_logo_2016.png\" alt=\"IMDB\" />")
    
    var imdbLink = $( "<a/>", {
      role: "link",
      class: "nf-icon-button"
    });
    imdbLink.append(imdbImage);
    
    var divWrapper = $("<div/>").css({"margin-top":"10px"});
    
    var imdbDiv = $( "<div/>", {
	  class: "imdbLink"
	});
    imdbDiv.append(divWrapper).append(imdbLink);
    
    var observeDOM = (function(){
	    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver,
	        eventListenerSupported = window.addEventListener;
	
	    return function(obj, callback){
	        if( MutationObserver ){
	            // define a new observer
	            var obs = new MutationObserver(function(mutations, observer){
	                if( mutations[0].addedNodes.length || mutations[0].removedNodes.length )
	                    callback(mutations);
	            });
	            obs.observe( obj, { childList:true, subtree:true });
	        }
	        else if( eventListenerSupported ){
	            obj.addEventListener('DOMNodeInserted', callback, false);
	            obj.addEventListener('DOMNodeRemoved', callback, false);
	        }
	    };
	})();

	// Observe the body
	var targetNode = document.body;
	observeDOM( targetNode ,function(mutations){
		for (var i = 0; i < mutations.length; i++) {
			var mutation = mutations[i];
			if (mutation.addedNodes.length && mutation.addedNodes[0].id == 'pane-Overview') {
				//console.log('siiii es pane overviewwww', mutation.addedNodes);
				imdbDiv.insertAfter('#pane-Overview div.overview');
			}
		}
	});
    
});

