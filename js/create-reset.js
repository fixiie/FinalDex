var resetDiv = document.createElement("div");
var resetDivOverlay = document.createElement("div");
var resetDivContent = document.createElement("div");
var resetAside1 = document.createElement("aside");
var resetAside1Text = document.createElement("p");
var resetAside2 = document.createElement("aside");
var resetAside2ButtonYes = document.createElement("button");
var resetAside2ButtonNo = document.createElement("button");


resetDiv.setAttribute("id","resetcheck-modal");
resetDiv.classList.add("resetcheck-modal-outer");
resetDivOverlay.classList.add("resetcheck-modal-overlay");
resetDivContent.classList.add("resetcheck-modal");
resetAside1.setAttribute("id","reset-aside1");
resetAside1Text.innerText = "Are you sure you want to reset the Pokédex?";
resetAside2.setAttribute("id","reset-aside2");
resetAside2ButtonYes.classList.add("resetcheck-modal-close2");
resetAside2ButtonYes.innerText = "Yes";
resetAside2ButtonNo.classList.add("resetcheck-modal-close1");
resetAside2ButtonNo.innerText = "No";


document.getElementById("reset").appendChild(resetDiv);
resetDiv.appendChild(resetDivOverlay);
resetDiv.appendChild(resetDivContent);
resetDivContent.appendChild(resetAside1);
resetAside1.appendChild(resetAside1Text);
resetDivContent.appendChild(resetAside2);
resetAside2.appendChild(resetAside2ButtonYes);
resetAside2.appendChild(resetAside2ButtonNo);