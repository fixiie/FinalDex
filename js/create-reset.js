var createReset = function() {

var resetDiv = document.createElement("div");
var resetDivOverlay = document.createElement("div");
var resetDivContent = document.createElement("div");
var resetGroup = document.createElement("div");
var resetGroupOuter = document.createElement("div");

var resetAside1 = document.createElement("aside");
var resetAside1Options = document.createElement("div");
var resetAside1Apply = document.createElement("div");
var resetAside1ApplyButton = document.createElement("button");
var resetAside2 = document.createElement("aside");
var resetAside2ButtonCheck = document.createElement("button");
var resetAside2ButtonUncheck = document.createElement("button");


var grps = ["Variant","Checkbox"];
for (var i = 0; i < grps.length; i++) {
    var resetGroupOuterInput = document.createElement("input");
    var resetGroupOuterLabel = document.createElement("label");
    resetGroupOuterInput.setAttribute("type","radio");
    resetGroupOuterInput.setAttribute("id","reset-group-"+grps[i]+"-"+i);
    resetGroupOuterInput.setAttribute("name","reset-group");
    resetGroupOuterInput.setAttribute("alt",i+1);
    resetGroupOuterInput.setAttribute("onclick","var x=this.alt;var nodes=this.parentElement.parentElement.parentElement.querySelectorAll(':scope > aside');var node=this.parentElement.parentElement.parentElement.querySelector(':scope > aside#reset-aside'+x+'');for(var i=0;i<nodes.length; i++){nodes[i].style.display='none';};node.style.display='inline-flex';");
    resetGroupOuterLabel.setAttribute("for","reset-group-"+grps[i]+"-"+i);
    if (grps[i].includes("Variant")) {
        resetGroupOuterLabel.innerText = grps[i] + " Selectors";
    }
    else if (grps[i].includes("Checkbox")) {
        resetGroupOuterLabel.innerText = grps[i] + " Options";
    }
    if (i == 0) {
        resetGroupOuterInput.setAttribute("checked","");
    }
    resetGroupOuter.appendChild(resetGroupOuterInput);
    resetGroupOuter.appendChild(resetGroupOuterLabel);
}

var formopts = [];
for (var q = 0; q < finaldataPokémon.length; q++) {
    if (finaldataPokémon[q][JSONPath_Reference] == "true" && finaldataPokémonArea[q]["Filter_"+JSONPath_Area] != "Unobtainable") {
        formopts.push(finaldataPokémon[q]["Variant"])
    }
}

formopts = formopts.filter(item => !item.includes("Default ") && !item.includes(" Form") && !item.includes("Gender"));

for(var q = 0; q < formopts.length; q++) {
    formopts[q] = formopts[q].replace("Form","Other Form");
    formopts[q] = formopts[q].replace("Alolan","Regional Form");
    formopts[q] = formopts[q].replace("Galarian","Regional Form");
    formopts[q] = formopts[q].replace("Mega","Mega Evolution");
}

formopts = [...new Set(formopts)];
/*
formopts.push("Shiny")
*/



for (var i = 0; i < formopts.length; i++) { 
    var resetAside1Input = document.createElement("input");
    var resetAside1Label = document.createElement("label");
    var resetAside1Span = document.createElement("span");
    resetAside1Input.setAttribute("type","checkbox");
    resetAside1Input.classList.add("save-cb-state");
    resetAside1Input.setAttribute("id","reset-form-"+formopts[i]+"-"+i);
    resetAside1Input.setAttribute("name","reset-form-"+formopts[i]+"-"+GameID+"-"+i);
    resetAside1Label.setAttribute("for","reset-form-"+formopts[i]+"-"+i);
    resetAside1Label.innerText = formopts[i];
    resetAside1Options.appendChild(resetAside1Input);
    resetAside1Options.appendChild(resetAside1Label);
    resetAside1Label.appendChild(resetAside1Span);
    resetAside1Input.addEventListener("click",function(){rememberVariant()});
}

resetDiv.setAttribute("id","reset-modal");
resetDiv.classList.add("reset-modal-outer");
resetDivOverlay.classList.add("reset-modal-close");
resetDivOverlay.setAttribute("name","overlay");
resetDivContent.classList.add("reset-modal");
resetAside1.setAttribute("id","reset-aside1");
resetAside1ApplyButton.innerText = "Apply";
resetAside1ApplyButton.addEventListener("click", function(){variantSelector()});
resetAside2.setAttribute("id","reset-aside2");
resetAside2ButtonCheck.classList.add("reset-modal-close");
resetAside2ButtonCheck.innerText = "Check All";
resetAside2ButtonCheck.setAttribute("title","Applies to current filters only");
resetAside2ButtonCheck.addEventListener("click", function(){CheckAll()});
resetAside2ButtonUncheck.classList.add("reset-modal-close");
resetAside2ButtonUncheck.innerText = "Uncheck All";
resetAside2ButtonUncheck.setAttribute("title","Applies to current filters only");
resetAside2ButtonUncheck.addEventListener("click", function(){UncheckAll()});


document.getElementById("reset").appendChild(resetDiv);
resetDiv.appendChild(resetDivOverlay);
resetDiv.appendChild(resetDivContent);
resetDivContent.appendChild(resetGroup);
resetGroup.appendChild(resetGroupOuter);
resetDivContent.appendChild(resetAside1);
resetAside1.appendChild(resetAside1Options);
resetAside1.appendChild(resetAside1Apply);
resetAside1Apply.appendChild(resetAside1ApplyButton);
resetDivContent.appendChild(resetAside2);
resetAside2.appendChild(resetAside2ButtonCheck);
resetAside2.appendChild(resetAside2ButtonUncheck);
}