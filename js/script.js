$(document).ready(function() {
	
	var imdbDiv = $( "<div/>", {
	  class: "imdbLink"
	});
	var imdbLink = $( "<a/>", {
      role: "link",
      class: "nf-icon-button"
    })
    .append("<span role=\"presentation\" class=\"nf-icon-button-icon\"></span>")
    .append("<span class=\"nf-icon-button-label\" role=\"status\" aria-live=\"assertive\">IMDB</span>");
    
    imdbDiv.append(imdbLink);
    
    
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

	// Observe the mount point element
	observeDOM( document.getElementById('appMountPoint') ,function(mutations){
		for (var i = 0; i < mutations.length; i++) {
			var mutation = mutations[i];
			if (mutation.addedNodes.length && mutation.addedNodes[0].id == 'pane-Overview') {
				console.log('siiii es pane overviewwww', mutation.addedNodes);
				imdbLink.insertAfter('#pane-Overview div.overview');
			}
		}
	});
    
});

