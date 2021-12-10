var resetDiv = document.createElement("div");
var resetDivOverlay = document.createElement("div");
var resetDivContent = document.createElement("div");
var resetAside1 = document.createElement("aside");
var resetAside1Text = document.createElement("p");
var resetAside2 = document.createElement("aside");
var resetAside2ButtonCheck = document.createElement("button");
var resetAside2ButtonUncheck = document.createElement("button");


resetDiv.setAttribute("id","reset-modal");
resetDiv.classList.add("reset-modal-outer");
resetDivOverlay.classList.add("reset-modal-overlay");
resetDivContent.classList.add("reset-modal");
resetAside1.setAttribute("id","reset-aside1");
resetAside1Text.innerText = "Select Option:";
resetAside2.setAttribute("id","reset-aside2");
resetAside2ButtonCheck.classList.add("reset-modal-close1");
resetAside2ButtonCheck.innerText = "Check All";
resetAside2ButtonCheck.setAttribute("title","Applies to current filters only");
resetAside2ButtonUncheck.classList.add("reset-modal-close2");
resetAside2ButtonUncheck.innerText = "Uncheck All";
resetAside2ButtonUncheck.setAttribute("title","Applies to current filters only");


document.getElementById("reset").appendChild(resetDiv);
resetDiv.appendChild(resetDivOverlay);
resetDiv.appendChild(resetDivContent);
resetDivContent.appendChild(resetAside1);
resetAside1.appendChild(resetAside1Text);
resetDivContent.appendChild(resetAside2);
resetAside2.appendChild(resetAside2ButtonCheck);
resetAside2.appendChild(resetAside2ButtonUncheck);