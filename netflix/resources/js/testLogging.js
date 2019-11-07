$(document).ready(function () {
    
	console.log("Adding Test Button For Loggings");
	
		
	let testLink = $("<a/>", {
		role: "link",
		text: "Logging Send Event Test",
		"colour" : "blue"

	});
	
    
	let divWrapper = $("<div/>").css({
		"margin-top": "10px",
	});

	let testDiv = $("<div/>", {
		class: "testLink"
	});
	testDiv.append(divWrapper).append(testLink);
	
	
	let testSection = $("<section/>", {
		
	});
	
	testSection.append(testDiv);
	
	testSection.append("<h2 class=\"section-heading\">Equo Test Javascript</h2>").append(testDiv);

	testDiv.click(function () {

		equo.logInfo("this is a info log.");

		equo.logWarn("this is a warning log.");

		equo.logError("this is a error log.");

		equo.logInfo({
			message: "this is a info log.",
			segmentation : {}
		});

		equo.logWarn({
			message: "this is a warning log.",
			segmentation : {}
		});

		equo.logError({
			message: "this is a error log.",
			segmentation : {}
		});
	});
	
	const insertTestBeforeAbout = function () {
		testSection.insertAfter($( ".billboard-links" ));
	};
	
	insertTestBeforeAbout();
});