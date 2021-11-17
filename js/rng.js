function RNG() {

    var lastMin = 1;
    var lastMax = 100;
  
    function rollNumber() {
      addIteration();
      var iteration = document.querySelector("#rng .iterations input").value;
  
      for (var i = 0; i < iteration; i++) {
  
        var x = i + 1;
  
  
  
        function generateNumber(x) {
  
          var min = parseInt(document.querySelector("#rng ul li[name='" + x + "'] div:nth-child(2) input").value);
          var max = parseInt(document.querySelector("#rng ul li[name='" + x + "'] div:nth-child(3) input").value) + 1;
  
          var random1 = Math.floor(Math.random() * (max - min)) + min;
  
          var output = document.querySelector(".result div[name='" + x + "']");
          var intervalRandom = setInterval(genRandom, 100);
          var startDate = new Date();
          var durationMin = 1000;
          var durationMax = 3000;
  
          function genRandom() {
  
            var random2 = Math.floor(Math.random() * (max - min)) + min;
            var currentDate = new Date();
  
            output.innerText = random2;
  
            if (currentDate - startDate > durationMax) {
              stopcount();
            } else if (random1 == random2 && currentDate - startDate > durationMin) {
              stopcount();
            }
  
            function stopcount() {
              output.innerText = random1;
              clearInterval(intervalRandom);
              output.style.color = "gold";
            }
          }
  
  
  
        }
  
        generateNumber(x);
      }
    }
  
  
  
    document.querySelector("#rng button").addEventListener("click", rollNumber);
  
    document.querySelector("#rng .iterations input").addEventListener("change", addIteration);
  
  
    addIteration();
  
  
    function addIteration() {
  
      var iteration = document.querySelector("#rng .iterations input").value;
  
      var themin = [];
      var themax = [];
  
      var lis = document.querySelectorAll("#rng ul li");
      for (var q = 0; q < lis.length; q++) {
        //console.log(lis[q].lastElementChild.firstChild.value)
        themin.push(lis[q].lastElementChild.previousElementSibling.firstChild.value);
        themax.push(lis[q].lastElementChild.firstChild.value);
        lis[q].remove();
      }
      var outs = document.querySelectorAll("#rng .result div");
      for (var q = 0; q < outs.length; q++) {
        outs[q].remove();
      }
  
  
      for (var i = 0; i < iteration; i++) {
  
        var x = i + 1;
  
  
        var li = document.createElement("li");
        var it = document.createElement("div");
        var itText = document.createElement("p");
        var min = document.createElement("div");
        var minInput = document.createElement("input");
        var max = document.createElement("div");
        var maxInput = document.createElement("input");
  
        li.setAttribute("name", x);
        it.setAttribute("name","it");
        itText.innerText = "#" + x;
        itText.setAttribute("title","Iteration")
        min.setAttribute("name", "min");
        minInput.setAttribute("type", "number");
        minInput.setAttribute("title","Min");
        minInput.setAttribute("autocomplete","off");
  
        if (themin[i] != undefined) {
          minInput.setAttribute("value", themin[i]);
        } else if (lastMin != undefined) {
          minInput.setAttribute("value", lastMin);
        } else {
          minInput.setAttribute("value", "1");
        }
  
        max.setAttribute("name", "max");
        maxInput.setAttribute("type", "number");
        maxInput.setAttribute("title","Max");
        maxInput.setAttribute("autocomplete","off");
        
        if (themax[i] != undefined) {
          maxInput.setAttribute("value", themax[i]);
        } else if (lastMax != undefined) {
          maxInput.setAttribute("value", lastMax);
        } else {
          maxInput.setAttribute("value", "100");
        }
  
        minInput.setAttribute("min", "1");
        minInput.setAttribute("max", parseInt(maxInput.value) - 1);
        maxInput.setAttribute("min", parseInt(minInput.value) + 1);
        maxInput.setAttribute("max","1000");
  
        document.querySelector("#rng ul").appendChild(li);
        li.appendChild(it);
        it.appendChild(itText);
        li.appendChild(min);
        min.appendChild(minInput);
        li.appendChild(max);
        max.appendChild(maxInput);
  
  
        var out = document.createElement("div");
        out.setAttribute("name", x);
        out.title = "#" + x + "\n" + "Number between " + minInput.value + "-" + maxInput.value;
        out.innerText = "-";
        document.querySelector("#rng .result").appendChild(out);
  
        minInput.addEventListener("change", minmaxChange);
        maxInput.addEventListener("change", minmaxChange);
      }
  
  
      document.querySelector("#rng ul").scrollTo(0, document.querySelector("#rng ul").scrollHeight)
  
    }
  
  
  
    function minmaxChange() {
  
      var Min = this.parentElement.parentElement.querySelector(':scope > div[name="min"] > input');
      var Max = this.parentElement.parentElement.querySelector(':scope > div[name="max"] > input');
  
      Min.max = parseInt(Max.value) - 1;
      Max.min = parseInt(Min.value) + 1;
  
      lastMin = Min.value;
      lastMax = Max.value;
  
    }
  }