
var bio = {
	"name" : "Jiajia Chen",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "858-729-4621",
		"email" : "jiajiachen1993@gmail.com",
		"github" : "jj1201",
		"linkedIn" : "Jiajia Chen",
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
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.OnlineCourses[i].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.OnlineCourses[i].school);
		var formattedOnlineSchoolTitle = formattedOnlineTitle + formattedOnlineSchool;
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.OnlineCourses[i].dates);
		var formattedOnlineURL= HTMLonlineURL.replace("%data%", education.OnlineCourses[i].url);
		$(".education-entry:last").append(formattedOnlineSchoolTitle);
		$(".education-entry:last").append(formattedOnlineDates);
		$(".education-entry:last").append(formattedOnlineURL);
	}
};
education.display();

var work = {
	"jobs" : [
	{
		"title" : "Web Developer",
		"employer" : "XCG Design Corp",
		"location" : "San Fransico, CA",
		"dates" : "March 2017 - Now",
		"description" : "· Contributed to maintain and migrate databases. <br> · Assisted in planning and implementing inner system websites. <br>· Provided technical support to other web design team members as directed." 

	}
	]
};

var projects = {
	"project_list" : [
	{
		"title" : "Jiajia's Portfolio",
		"dates" : "2017",
		"description" : "La historia del día de San Valentín comienza en el siglo tercero con un tirano emperador romano y un humilde mártir cristiano. El emperador era Claudio III. El cristiano era Valentino. Claudio había ordenado a todos los cristianos adorar a doce dioses, y había declarado que asociarse con cristianos era un crimen castigado con la pena de muerte. Valentino se había dedicado a los ideales de Cristo y ni siquiera las amenazas de muerte le detenían de practicar sus creencias. Valentino fué arrestado y enviado a prisión. Durante las últimas semanas de su vida, algo impresionante sucedió.",
		"images" : []
	},
	{
		"title" : "Online Resume",
		"dates" : "2017",
		"description" : "La historia del día de San Valentín comienza en el siglo tercero con un tirano emperador romano y un humilde mártir cristiano. El emperador era Claudio III. El cristiano era Valentino. Claudio había ordenado a todos los cristianos adorar a doce dioses, y había declarado que asociarse con cristianos era un crimen castigado con la pena de muerte. Valentino se había dedicado a los ideales de Cristo y ni siquiera las amenazas de muerte le detenían de practicar sus creencias. Valentino fué arrestado y enviado a prisión. Durante las últimas semanas de su vida, algo impresionante sucedió.",
		"images" : []
	},
	{
		"title" : "Project3",
		"dates" : "2017",
		"description" : "La historia del día de San Valentín comienza en el siglo tercero con un tirano emperador romano y un humilde mártir cristiano. El emperador era Claudio III. El cristiano era Valentino. Claudio había ordenado a todos los cristianos adorar a doce dioses, y había declarado que asociarse con cristianos era un crimen castigado con la pena de muerte. Valentino se había dedicado a los ideales de Cristo y ni siquiera las amenazas de muerte le detenían de practicar sus creencias. Valentino fué arrestado y enviado a prisión. Durante las últimas semanas de su vida, algo impresionante sucedió.",
		"images" : []
	},
	{
		"title" : "Project4",
		"dates" : "2017",
		"description" : "La historia del día de San Valentín comienza en el siglo tercero con un tirano emperador romano y un humilde mártir cristiano. El emperador era Claudio III. El cristiano era Valentino. Claudio había ordenado a todos los cristianos adorar a doce dioses, y había declarado que asociarse con cristianos era un crimen castigado con la pena de muerte. Valentino se había dedicado a los ideales de Cristo y ni siquiera las amenazas de muerte le detenían de practicar sus creencias. Valentino fué arrestado y enviado a prisión. Durante las últimas semanas de su vida, algo impresionante sucedió.",
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

