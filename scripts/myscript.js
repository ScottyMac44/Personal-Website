const courseList = [

    {
        code:"ACIT-1620",
        name:"Fundamental Web Technologies",
        description:"This course introduces the fundamental principles, concepts, and techniques for understanding and developing modern web sites.",
        term:"Winter 2023",
        outline:"https://www.bcit.ca/outlines/20231089205/"
    },
    {
        code:"ACIT-1515",
        name:"Scripting for IT",
        description:"The course introduces the fundamental concepts of programming for IT professionals, with a focus on scripting languages that are commonly found in the workplace.",
        term:"Winter 2023",
        outline:"https://www.bcit.ca/outlines/20231089204/"
    },
    {
        code:"ACIT-1420",
        name:"Introduction to Systems Administration",
        description:"This course introduces students to the configuration, maintenance, and administration of a Windows laptop computer.",
        term:"Winter 2023",
        outline:"https://www.bcit.ca/outlines/20231089202/"
    }

];


let courseCodeFromUser;
let validInputCheck = false;
do {

    courseCodeFromUser = prompt("Enter a 4 digit course code");

    if (courseCodeFromUser.length != 4 || isNaN(courseCodeFromUser)) {

        alert("Invalid Input!");

    } else {

        validInputCheck = true;

    };

} while (validInputCheck === false);


let courseCodeFromList;
let courseAlreadyExists = false;
for (let i in courseList) {

    courseCodeFromList = courseList[i].code.replace("ACIT-", "");

    if (courseCodeFromList == courseCodeFromUser) {

        console.log(
            `Yes, I am taking the course ${courseList[i].code} ${courseList[i].name}`
        );

        courseAlreadyExists = true;
        break;

    };

};

if (!courseAlreadyExists) {

    courseList.push(
        {code:("ACIT-" + courseCodeFromUser)},
        {name:null},
        {description:null},
        {term:null},
        {outline:null}
        );

    console.log("Success! course added");

};