$(document).ready(function() {
	const imdbUrlTemplate = `http://www.imdb.com/find?ref_=nv_sr_fn&q=VIDEO_TITLE&s=all`;
	let previousSelectedTitleElement = 'undefined';
	
    var imdbImage = $( "<span/>" ) ;
    imdbImage.css({"max-width":"80px","height":"auto"});
    imdbImage.append("<img id=\"imdb_img\" src=\"equo/images/IMDB_logo_2016.png\" style=\"max-width:60px;height:auto;\" alt=\"IMDB\" />")
    
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
	
	var getVideoTitle = function() {
		var outerElement = $('.title.has-jawbone-nav-transition');
		var currentTitle = outerElement.first();
		if (currentTitle[0] == previousSelectedTitleElement) {
			currentTitle = outerElement.last();
		}
		previousSelectedTitleElement = currentTitle[0];
		var imgTitle = $(currentTitle).children('img.logo');
		var altAttr = imgTitle.attr('alt');
		var videoTitle;
		if (typeof altAttr !== 'undefined') {
			videoTitle = altAttr;
		} else {
			var divTitle = $(currentTitle).children('div.text');
			videoTitle = divTitle.text();
		}
		return videoTitle;
	};

	var getImdbUrl = function(videoTitle) {
		var imdbVideoTitle = videoTitle.replace(/ /g, '+');
		var imdbUrl = imdbUrlTemplate.replace('VIDEO_TITLE', imdbVideoTitle);
		return imdbUrl;
	};

	var refreshImdbPage = function() {
		var videoTitle = getVideoTitle();
		var imdbUrl = getImdbUrl(videoTitle);
		equo.updateBrowser({
			url: imdbUrl, 
			name: 'IMDB'
		});
	};
    
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
			if (mutation.addedNodes.length) {
				var addedNode = $(mutation.addedNodes[0]);
				var optionalOverview = addedNode.find('#pane-Overview div.overview');
				if (optionalOverview.length) {
					var overviewElement = $(optionalOverview[0]);
					imdbDiv.insertAfter(overviewElement);
					refreshImdbPage();
				}
			}
		}
	});

	imdbDiv.click(function() {
		var videoTitle = getVideoTitle();
		var imdbUrl = getImdbUrl(videoTitle);
		equo.openBrowser({
			url: imdbUrl, 
			name: 'IMDB',
			position: 'bottom'
		});
	});
    
});
