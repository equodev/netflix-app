$(document).ready(function () {
	const imdbUrlTemplate = `http://www.imdb.com/find?ref_=nv_sr_fn&q=VIDEO_TITLE&s=all`;
	let previousSelectedTitleElement = 'undefined';

	let imdbImage = $("<span/>");
	imdbImage.css({
		"max-width": "80px",
		"height": "auto"
	});
	imdbImage.append("<img id=\"imdb_img\" src=\"equo/IMDB_logo_2016.png\" style=\"max-width:60px;height:auto;\" alt=\"IMDB\" />")
	//imdbImage.append("<img id=\"imdb_img\" src=\"file://Users/seba/myRepository/equo-product/netflix-desktop-app/bin/IMDB_logo_2016.png\" alt=\"IMDB\" />")

	let imdbLink = $("<a/>", {
		role: "link",
		class: "nf-icon-button"
	});
	imdbLink.append(imdbImage);

	let divWrapper = $("<div/>").css({
		"margin-top": "10px"
	});

	let imdbDiv = $("<div/>", {
		class: "imdbLink"
	});
	imdbDiv.append(divWrapper).append(imdbLink);

	const getVideoTitle = function () {
		let outerElement = $('.title.has-jawbone-nav-transition');
		let currentTitle = outerElement.first();
		if (currentTitle[0] == previousSelectedTitleElement) {
			currentTitle = outerElement.last();
		}
		previousSelectedTitleElement = currentTitle[0];
		let imgTitle = $(currentTitle).children('img.logo');
		let altAttr = imgTitle.attr('alt');
		let videoTitle;
		if (typeof altAttr !== 'undefined') {
			videoTitle = altAttr;
		} else {
			let divTitle = $(currentTitle).children('div.text');
			videoTitle = divTitle.text();
		}
		return videoTitle;
	};

	const getImdbUrl = function (videoTitle) {
		let imdbVideoTitle = videoTitle.replace(/ /g, '+');
		let imdbUrl = imdbUrlTemplate.replace('VIDEO_TITLE', imdbVideoTitle);
		return imdbUrl;
	};

	const refreshImdbPage = function () {
		let videoTitle = getVideoTitle();
		let imdbUrl = getImdbUrl(videoTitle);
		equo.updateBrowser({
			url: imdbUrl,
			name: 'IMDB'
		});
	};

	equo.onNativeDomChanged((addedNode) => {
		let optionalOverview = addedNode.find('#pane-Overview div.overview');
		if (optionalOverview.length) {
			let overviewElement = $(optionalOverview[0]);
			imdbDiv.insertAfter(overviewElement);
			refreshImdbPage();
		}
	});

	imdbDiv.click(function () {
		let videoTitle = getVideoTitle();
		let imdbUrl = getImdbUrl(videoTitle);
		equo.openBrowser({
			url: imdbUrl,
			name: 'IMDB',
			position: 'bottom'
		});
	});

});
