function pressedSkills(){
    document.getElementById("skills").style.display = "block";
    document.getElementById("experiences").style.display = "none";
    document.getElementById("buttonSkills").classList.remove("nonSelected");
    document.getElementById("buttonSkills").classList.add("selected");
    document.getElementById("buttonExperiences").classList.add("nonSelected");
}

function pressedExperiences(){
    document.getElementById("experiences").style.display = "block";
    document.getElementById("skills").style.display = "none";
    document.getElementById("buttonExperiences").classList.remove("nonSelected");
    document.getElementById("buttonExperiences").classList.add("selected");
    document.getElementById("buttonSkills").classList.add("nonSelected");
}