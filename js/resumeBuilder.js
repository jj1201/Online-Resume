
var bio = {
	"name" : "Jenny Chen",
	"role" : "Software Developer",
	"contacts" : {
		"mobile" : "858-729-4621",
		"email" : "jennycjk1201@gmail.com",
		"github" : "jj1201",
		"linkedIn" : "Jenny Chen",
		"location" : "San Francisco"
	},
	"welcomeMessage" : "Hi there! I am a software developer passionate about building web-based applications. I love designing and building fast and robust websites that everyone can enjoy and find helpful. Thanks for stopping by!",
	"skills" : ["html/css/javascript", "jQuery", "Bootstrap & Knockout JS", "Gulp", "Jasmine", "Java"],
	"biopic" :  "images/jiajia.jpg"
};
bio.display = function (){
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedLinkedIn = HTMLlinkedIn.replace("%data%", bio.contacts.linkedIn);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
	var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedLinkedIn);
	$("#topContacts").append(formattedLocation);
	$("#header").append(formattedbioPic);
	$("#header").append(formattedwelcomeMsg);
	$("#footerContacts").append(formattedMobile);
	$("#footerContacts").append(formattedEmail);
	$("#footerContacts").append(formattedGithub);
	$("#footerContacts").append(formattedLinkedIn);
	$("#footerContacts").append(formattedLocation);
	if(bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		for(var i = 0; i < bio.skills.length; i++) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
			$("#skills").append(formattedSkill);
		}
	}
};
bio.display();

var education = {
	"schools" : [
	{
		"name" : "University of California, San Diego",
		"location" : "San Diego, CA",
		"degree" : "Masters",
		"majors" : ["CS"],
		"dates" : "2015 - 2016",
		"url" : "https:////ucsd.edu//"

	},
	{
		"name" : "Zhejiang University",
		"location" : "Zhejiang, China",
		"degree" : "BA",
		"majors" : ["CS"],
		"dates" : "2010 - 2015",
		"url" : "http:////www.zju.edu.cn//english//"

	}],
	"OnlineCourses" : [
	{
		"title" : "Front-End Web Developer Nanodegree Program",
		"school" : "Udacity",
		"dates" : "March, 2017 - Present",
		"url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	}
	]
};

education.display = function () {
	for(var i = 0; i < education.schools.length; i++) {
		$("#education").append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
		var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
		$(".education-entry:last").append(formattedSchoolNameDegree);
		$(".education-entry:last").append(formattedSchoolDates);
		$(".education-entry:last").append(formattedSchoolLocation);
		$(".education-entry:last").append(formattedSchoolMajor);
	}
	$("#education").append(HTMLonlineClasses);
	for(var i = 0; i < education.OnlineCourses.length; i++) {
		$("#education").append(HTMLschoolStart);
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.OnlineCourses[i].title).replace('#', education.OnlineCourses[i].url);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.OnlineCourses[i].school);
		var formattedOnlineSchoolTitle = formattedOnlineTitle + formattedOnlineSchool;
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.OnlineCourses[i].dates);
		$(".education-entry:last").append(formattedOnlineSchoolTitle);
		$(".education-entry:last").append(formattedOnlineDates);
		
	}
};
education.display();

var work = {
	"jobs" : [
	// {
	// 	"title" : "Web Developer",
	// 	"employer" : "XCG Design Corp",
	// 	"location" : "San Fransico, CA",
	// 	"dates" : "March 2017 - 	Present",
	// 	"description" : "Designed a new UI for an internal search engine. <br>Provided technical support to other web design team members as directed." 

	// },
	{
		"title" : "Assistant Researcher ",
		"employer" : "EAGLE Laboratory, Zhejiang University",
		"dates" : "2014 - 2015",
		"location" : "Zhejiang, China",
		"description" : "Wrote a thesis on social information depression models from algebraic connectivity. <br>Provided a proposal for an efficient algorithm to reduce the dissemination of bad information." 

	}

	]
};
work.display = function () {
	for(var job = 0; job < work.jobs.length; job++) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		var formattedWorkDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedWorkDate);
		$(".work-entry:last").append(formattedWorkLocation);
		$(".work-entry:last").append(formattedDescription);
	}
};

work.display();
var projects = {
	"projects" : [
	{
		"title" : "National Park Map",
		"github" : "https://jj1201.github.io/national-park-map/dist/",
		"dates" : "2017",
		"keywords" : "Google Map API, Kockout JS, jQuery, mobile responsive",
		"description" : "I created a website that lists all the national parks and shows them in the map. I used Kockout JS to handle hte list and the filter functionality, and Google Map API to show all the park markers in the map and track click events on markers.",
		"images" : ["images/project1_01.png", "images/project1_02.png"]
	},
	{
		"title" : "Bug Invasion",
		"github" : "https://jj1201.github.io/Bug-Invasion/",
		"dates" : "2017",
		"keywords" : "Objective Oriented Programming, Game Design",
		"description" : "As the name indicated, the bugs are coming and we are trying to survive till the last level.",
		"images" : ["images/project2_01.png", "images/project2_02.png", "images/project2_03.png", "images/project2_04.png"]
	},
	{
		"title" : "Portfolio",
		"github" : "https://jj1201.github.io/Portfolio/",
		"dates" : "2017",
		"keywords" : "Responsive website, Bootstrap",
		"description" : "I created an online Portfolio as part of Udacity FrontEnd Nanodegree.",
		"images" : ["images/project3_01.png"]
	},
	{
		"title" : "Website Optimization",
		"github" : "https://github.com/jj1201/Frontend-Project-Website-Optimization",
		"dates" : "2017",
		"keywords" : "Gulp",
		"description" : "A website optimization project provided by Udacity. The task is to optimize a given website so that it reaches a target score at PageSpeed Insights and have frames per second rate 60 fps or higher.",
		"images" : []
	},
	{
		"title" : "Feedreader Test",
		"github" : "https://github.com/jj1201/Feedreader-Test",
		"dates" : "2017",
		"keywords" : "Jasmine",
		"description" : "This is a web-based application that reads RSS feeds. I have used the starter code from Udacity and the Jasmine framework to write a series of test suites to test out certain functionalities.",
		"images" : ["images/project5_01.png"]
	},
	{
		"title" : "Block Game",
		"github" : "https://github.com/jj1201/Block-Game",
		"dates" : "2017",
		"keywords" : "JAVA",
		"description" : "It is a a Tetris-like game, in which players can drag and drop shapes made of blocks on the board. Once a row or a column is filled with blocks, it disappears. If players run out of spaces to place the next shapes, they lose.",
		"images" : ["images/project6_01.png"]
	}
	]
};






projects.display = function() {
	for(var i = 0; i < projects.projects.length; i++) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitile = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].github);
		$(".project-entry:last").append(formattedTitile);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedKeywords = HTMLprojectKeywords.replace("%data%", projects.projects[i].keywords);
		$(".project-entry:last").append(formattedKeywords);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
		$(".project-entry:last").append(formattedDescription);

		if(projects.projects[i].images.length > 0) {
			var formattedImageStart = HTMLprojectImagesStart.replace(/%data%/g, i);
			$(".project-entry:last").append(formattedImageStart);
			for(var j = 0; j < projects.projects[i].images.length; j++) {
				var formattedImage = HTMLprojectImage.replace(/%data%/g, projects.projects[i].images[j]).replace("%index%", j).replace("%total%", projects.projects[i].images.length);
				var formattedDot = HTMLprojectDot.replace("%data%", j).replace("%proj_index%", i);
				$(".slideshow-container:last").append(formattedImage);
				$(".dots:last").append(formattedDot);
			}
		}
	}
};

projects.display();
$("#mapDiv").append(googleMap);
//script for slideshow
var Project = function(index) {
  this.slideIndex = 1;
  this.showSlides = function(n, index) {
    var i;
    var project = "project" + index;
    var slides = $("." + project+ " .mySlides");
    var dots = $("." + project+ " .mySlides");
    if (n > slides.length) {this.slideIndex = 1}    
    if (n < 1) {this.slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    console.log(this)
    console.log(project + " " + this.slideIndex);
    slides[this.slideIndex-1].style.display = "block";  
    dots[this.slideIndex-1].className += " active";
    };
};
var projects = [];
for(var i = 0; i < $(".slideshow-container").length; i++) {
  var project = new Project(i);
  project.showSlides(1, i);
  projects.push(project);
}
function plusSlides(n, index) {
	var proj = projects[index];
	proj.showSlides(proj.slideIndex += n, index);
}

function currentSlide(n, index) {
	var proj = projects[index];
  	proj.showSlides(proj.slideIndex = n + 1, index);
  	console.log("i opened the " + index + "th project's " + n + "th image");
}
