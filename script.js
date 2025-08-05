let choice = prompt("1:Check website\n2:Develop for Yourself\nChoose Option :");

//Profile Picture
const profilePic = document.querySelector("#profile-pic");
const inputfile = document.querySelector("#imageupload");
inputfile.onchange = function () {
    profilePic.src = URL.createObjectURL(inputfile.files[0]);
};

//DOM Elements
let light_mode = document.querySelector(".light");
let dark_mode = document.querySelector(".dark");

//When User Change Mode
let dark = () => {
    //Dark Mode
            dark_mode.style.color = "#fff"
            dark_mode.style.backgroundColor = "#333333";
            light_mode.style.color = "#333333"
            light_mode.style.backgroundColor = "#fff";
    changetodark();
}

//When User Change to Dark Mode
let changetodark = () => {
    document.querySelector('body').style.backgroundColor = "#333333";
    document.querySelector('body').style.color = "#fff";
    document.querySelector('header').style.color = "#333333";
    document.querySelector('header').style.backgroundColor = "#fff";
    document.querySelector('nav').style.color = "#333333";
    document.querySelector('nav').style.backgroundColor = "#fff";
    document.querySelector('footer').style.color = "#333333";
    document.querySelector('footer').style.backgroundColor = "#fff";
}

let light = () => {
    //Light Mode
            light_mode.style.color = "#fff"
            light_mode.style.backgroundColor = "#333333";
            dark_mode.style.color = "#333333"
            dark_mode.style.backgroundColor = "#fff";
    changetolight();
}
//When User Change to Dark Mode
let changetolight = () => {
    document.querySelector('body').style.backgroundColor = "#fff";
    document.querySelector('body').style.color = "#333333";
    document.querySelector('header').style.color = "#fff";
    document.querySelector('header').style.backgroundColor = "#333333";
    document.querySelector('nav').style.color = "#fff";
    document.querySelector('nav').style.backgroundColor = "#333333";
    document.querySelector('footer').style.color = "#fff";
    document.querySelector('footer').style.backgroundColor = "#333333";
}

if(choice == 2){
    let name = document.querySelector(".name");
    let inputname = prompt("Enter Your Name : ");
    name.innerText = inputname;
    let titlename = document.querySelector(".title");
    titlename = inputname + " | Portfolio";
    let footername = document.querySelector(".footer-name");
    footername.innerText =inputname;
    let about = document.querySelector(".information");
    let inputabout = prompt("Enter Brief intro, education, skills, and goals : ");
    about.innerText = inputabout;

    let projectnumbers = prompt("Enter Project Numbers : ");

    if(projectnumbers == 1){
        let projecttitle = document.querySelector(".project-title");
        let inputprojecttitle = prompt("Enter Your Project Title : ");
        projecttitle.innerText = inputprojecttitle;

        let projectdetails = document.querySelector(".project-details");
        let inputprojectdetails = prompt("Enter Project Details : ");
        projectdetails.innerText = inputprojectdetails;

        let projectlink = document.querySelector("project-link");
        let inputprojectlink = prompt("Enter Project link : ");
        projectlink.src = inputprojectlink;
    }
    else if(projectnumbers == 2){
        let projecttitle = document.querySelector(".project-title");
        let inputprojecttitle = prompt("Enter Your Project Title : ");
        projecttitle.innerText = inputprojecttitle;

        let projectdetails = document.querySelector(".project-details");
        let inputprojectdetails = prompt("Enter Project Details : ");
        projectdetails.innerText = inputprojectdetails;

        let projectlink = document.querySelector(".project-link");
        let inputprojectlink = prompt("Enter Project link : ");
        projectlink.innerText = "View on Github";
        projectlink.src = inputprojectlink;
        let projectsection = document.querySelector("#projects");
        let projectarticle = document.querySelector(".project-article");
        
        let projectarticle2 = document.createElement("article");
        projectarticle2.className = "project-article";
        projectsection.append(projectarticle2);
        let projecttitle2 = document.createElement("h3");
        projecttitle2.innerText = prompt("Enter 2nd Project title : ");
        projectarticle2.prepend(projecttitle2);
        let projectdetails2 = document.createElement("p");
        projectdetails2.innerText = prompt("Enter 2nd Project Details : ");
        projectarticle2.append(projectdetails2);
        let projectlink2 = document.createElement("a");
        projectlink2.src = prompt("Enter Project Link : ");
        projectlink2.innerText = "View on GitHub";
        projectarticle2.append(projectlink2);
    }
    
}else{
    alert("If You Want to Creat For YourSelf Just Refresh!");
}
