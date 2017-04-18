/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
	"name" : "Jiajia Chen",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "858-729-4621",
		"email" : "jiajiachen1993@gmail.com",
		"github" : "jj1201",
		"linedIn" : "Jiajia Chen",
		"location" : "San Francisco"
	},
	"welcomeMsg" : "Welcome to Jiajia's Resume!",
	"skills" : ["html/css/javascript", "Database Adimistration", "Java Application"],
	"biopic" :  "images/jiajia.jpg"
};
bio.display = function (){
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedLinkedIn = HTMLlinkedIn.replace("%data%", bio.contacts.linedIn);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
	var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedLinkedIn);
	$("#topContacts").append(formattedLocation);
	$("#header").append(formattedwelcomeMsg);
	$("#header").append(formattedbioPic);
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
		"major" : ["CS"],
		"dates" : "2015 - 2016"

	},
	{
		"name" : "Zhejiang University",
		"location" : "Zhejiang, China",
		"degree" : "BA",
		"major" : ["CS"],
		"dates" : "2010 - 2015"

	}]
};

education.display = function () {
	for(var i = 0; i < education.schools.length; i++) {
		$("#education").append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
		$(".education-entry:last").append(formattedSchoolName);
		$(".education-entry:last").append(formattedSchoolDegree);
		$(".education-entry:last").append(formattedSchoolDates);
		$(".education-entry:last").append(formattedSchoolLocation);
		$(".education-entry:last").append(formattedSchoolMajor);
	}
}
education.display();

var work = {
	"jobs" : [
	{
		"title" : "Web Developer",
		"employer" : "XCG Design Corp",
		"location" : "San Fransico, CA",
		"dates" : "March 2017 - Now",
		"description" : "· Contributed to maintain and migrate databases. <br> \
		· Assisted in planning and implementing inner system websites. <br>\
		· Provided technical support to other web design team members as directed." 

	}
	]
};

var projects = {
	"project_list" : [
	{
		"title" : "Jiajia's Portfolio",
		"dates" : "2017",
		"description" : "",
		"images" : []
	},
	{
		"title" : "Online Resume",
		"dates" : "",
		"description" : "",
		"images" : []
	},
	{
		"title" : "",
		"dates" : "",
		"description" : "",
		"images" : []
	},
	{
		"title" : "",
		"dates" : "",
		"description" : "",
		"images" : []
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

projects.display = function() {
	for(var i = 0; i < projects.project_list.length; i++) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitile = HTMLprojectTitle.replace("%data%", projects.project_list[i].title);
		$(".project-entry:last").append(formattedTitile);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.project_list[i].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.project_list[i].description);
		$(".project-entry:last").append(formattedDescription);

		if(projects.project_list[i].images.length > 0) {
			for(var j = 0; j < projects.project_list[j].images.length; j++) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.project_list[i].images[j]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
};

projects.display();
$("#mapDiv").append(googleMap);

