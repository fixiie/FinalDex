function countdown() {
    /*
      polyfills for IE8
    */
    if(!Array.prototype.forEach){
      Array.prototype.forEach = function(countdownCallback){
        for(var i=0; i<this.length; i++){
            countdownCallback(this[i]);
        }      
      }
    }
  
    if(!Array.prototype.map){
      Array.prototype.map = function(countdownCallback){
        var countdownItems = [];
        for(var i=0; i<this.length; i++){
            countdownItems.push(countdownCallback(this[i]));
        }
        return countdownItems;
      }
    }
  
    var countdownSecondInMilliseconds = 1000;
    var countdownMinuteInMilliseconds = 60*countdownSecondInMilliseconds;
    var countdownHourInMilliseconds = 60*countdownMinuteInMilliseconds;
    var countdownFloor = Math.floor;
  
    var countdownExtractMilliseconds = function(countdownTimeInMilliseconds){
      return countdownTimeInMilliseconds % 1000;
    }
    var countdownExtractSeconds = function(countdownTimeInMilliseconds){
      return countdownFloor(countdownTimeInMilliseconds/countdownSecondInMilliseconds);
    }
    var countdownExtractMinutes = function(countdownTimeInMilliseconds){
      return countdownFloor(countdownTimeInMilliseconds/countdownMinuteInMilliseconds);
    }
    var countdownExtractHours = function(countdownTimeInMilliseconds){
      return countdownFloor(countdownTimeInMilliseconds/countdownHourInMilliseconds);
    }
    var countdownPad = function(countdownNumber){
      if(countdownNumber < 10){
        return "0"+countdownNumber;
      }else{
        return countdownNumber;
      }
    }
    var countdownExtractTime = function(countdownTimeInMilliseconds){
      var countdownMilliseconds = countdownExtractHours(countdownTimeInMilliseconds);
      countdownTimeInMilliseconds -= countdownHours*countdownHourInMilliseconds;
      var countdownMilliseconds = countdownExtractMinutes(countdownTimeInMilliseconds);
      countdownTimeInMilliseconds -= countdownMinutes*countdownMinuteInMilliseconds;
      var countdownMilliseconds = countdownExtractSeconds(countdownTimeInMilliseconds);
      countdownTimeInMilliseconds -= countdownSeconds*countdownSecondInMilliseconds;
      var countdownMilliseconds = countdownTimeInMilliseconds;
      return {countdownHours: countdownHours, countdownMinutes: countdownMinutes, countdownSeconds: countdownSeconds, countdownMilliseconds: countdownMilliseconds};
    }
  
  
    var countdownLap = function(countdownNetTime, countdownPreviousLap){
      this.countdownPreviousLap = countdownPreviousLap;
      this.countdownNetTime = countdownNetTime;
    };
  
    countdownLap.prototype = {
        countdownMilitaryTime: function(countdownTimeInMilliseconds){     
        var countdownTimeSeparator = ":";
        var countdownTime = countdownExtractTime(countdownTimeInMilliseconds);
        countdownTime.countdownMilliseconds = countdownTime.countdownMilliseconds/10;
        return ['countdownHours', 'countdownMinutes', 'countdownSeconds', 'countdownMilliseconds'].map(function(countdownProperty){
          return countdownPad(countdownTime[countdownProperty]);
        }).join(countdownTimeSeparator);
      },
      countdownSplitString: function(){
        if(this.countdownPreviousLap != null){
          var countdownTimeDifference = this.countdownNetTime - this.countdownPreviousLap.countdownNetTime;
          return this.countdownMilitaryTime(countdownTimeDifference);
        }else{
          return this.countdownMilitaryTime(this.countdownNetTime);
        }
      }
    }
  
    var CountDown = window.CountDown = function(countdownOptions){
      if(countdownOptions == null){
        countdownOptions = {}
      }
      
      var countdown_this = this;
      var countdownCallbackProperties = ['countdownCallback', 'countdownCallbackTarget', 'countdownLapCallback', 'countdownLapCallbackTarget'];
      var countdownNetTime = countdownHours = countdownMinutes = countdownSeconds = countdownMilliseconds = 0;
  
      var countdownTimerSetHours = document.querySelector(".countdown-hours");
      var countdownTimerSetMinutes = document.querySelector(".countdown-minutes");
      var countdownTimerSetSeconds = document.querySelector(".countdown-seconds");
      var countdownTimerSetMilliseconds = document.querySelector(".countdown-milliseconds");
  
      var countdownInput = document.querySelectorAll('#countdown-set input');
      for (var i = 0; i < countdownInput.length; i++) {
          countdownInput[i].addEventListener("click", countdownSetTime);
          countdownInput[i].addEventListener("click", countdownSelect);
          countdownInput[i].addEventListener("focus", countdownSetTime);
          countdownInput[i].addEventListener("keydown", countdownSetTime);
          countdownInput[i].addEventListener("change", countdownSetTime);
          countdownInput[i].addEventListener("change", countdownFormatNumber);
      }
      
      document.querySelector("#countdown-start-stop").addEventListener("click", countdownHideShow);
      document.querySelector("#countdown-reset").addEventListener("click", countdownReset);
  
  
      function countdownReset() {
          countdownTimerSetHours.value = "";
          countdownTimerSetMinutes.value = "";
          countdownTimerSetSeconds.value = "";
          countdownTimerSetMilliseconds.value = "";
          var countdownNetTime = countdownHours = countdownMinutes = countdownSeconds = countdownMilliseconds = 0;
          
          countdownLaps = [];
          countdownLapDidChange(null, true)
          
          if(countdown.countdownRunning()){
              document.getElementById('countdown-time').style.display = "none";
              document.getElementById('countdown-set').style.display = "flex";
              replaceClass(countdownStartStopButton, 'countdown-stop', 'countdown-start');
              countdownStartStopButton.innerHTML = '⏵︎';
              countdownStartStopButton.setAttribute("title","Start");
              countdown.reset();
          }
      }
  
      
      function countdownHideShow() {
      
      countdownTimerSetHours.value = [countdownPad(countdownHours)];
      countdownTimerSetMinutes.value = [countdownPad(countdownMinutes)];
      countdownTimerSetSeconds.value = [countdownPad(countdownSeconds)];
      countdownTimerSetMilliseconds.value = [countdownPad(countdownMilliseconds/10)];
      
      var a = parseInt(countdownTimerSetHours.value);
      var b = parseInt(countdownTimerSetMinutes.value);
      var c = parseInt(countdownTimerSetSeconds.value);
      var d = parseInt(countdownTimerSetMilliseconds.value);
              
      a = a || 0;
      b = b || 0;
      c = c || 0;
      d = d || 0;
      
      if(a+b+c+d > 0) {
          if(!countdown.countdownRunning()){
              document.getElementById('countdown-time').style.display = "flex";
              document.getElementById('countdown-set').style.display = "none";
          }
          else {
              document.getElementById('countdown-time').style.display = "none";
              document.getElementById('countdown-set').style.display = "flex";
          }
      }
      else {
        document.querySelector("#countdown-set span").animate([
            { transform: 'translateX(0%)'},
            { transform: 'translateX(1%)'},
            { transform: 'translateX(0%)'},
            { transform: 'translateX(-1%)'},
            { transform: 'translateX(0%)'}
            ], {
                duration: 200,
                easing: "linear",
                iterations: 1
            });
        }
      }
      
  
      function countdownFormatNumber() {
          if(parseInt(this.value) < 10 && parseInt(this.value) > 0) {
          this.value = '0' + this.value;
          }
      }
      function countdownSelect() {
          this.select();
      }
  
      function countdownSetTime() {
  
      if(this.value == "" || this.value == "0") {
          this.value = '00';
      }
          
      if(!countdown.countdownRunning()){
          if(this.classList.contains("countdown-hours")) {
              var countdownNetTime = countdownHours = parseInt(this.value);
              if(parseInt(this.value) > parseInt(this.max)) {
                  var countdownNetTime = countdownHours = parseInt(this.max);
                  this.value = this.max;
              }
          }
          if(this.classList.contains("countdown-minutes")) {
              var countdownNetTime = countdownMinutes = parseInt(this.value);
              if(parseInt(this.value) > parseInt(this.max)) {
                  var countdownNetTime = countdownMinutes = parseInt(this.max);
                  this.value = this.max;
              }
          }
          if(this.classList.contains("countdown-seconds")) {
              var countdownNetTime = countdownSeconds = parseInt(this.value);
              if(parseInt(this.value) > parseInt(this.max)) {
                  var countdownNetTime = countdownSeconds = parseInt(this.max);
                  this.value = this.max;
              }
          }
          if(this.classList.contains("countdown-milliseconds")) {
              var countdownNetTime = countdownMilliseconds = parseInt(this.value)*10;
              if(parseInt(this.value) > parseInt(this.max)) {
                  var countdownNetTime = countdownMilliseconds = parseInt(this.max)*10;
                  this.value = this.max;
              }
          }
  
      }
  }
  
      var countdownRunning = false;
      var countdownLaps = [];
  
      countdownCallbackProperties.forEach(function(countdownProperty){
        if(countdownOptions[countdownProperty] != null){
          countdown_this[countdownProperty] = countdownOptions[countdownProperty];
        }
      });
  
      this.countdownRunning = function(){
        return countdownRunning;
      };
      this.countdownHours = function(){
        return countdownHours;
      };
      this.countdownMinutes = function(){
        return countdownMinutes;
      };
      this.countdownSeconds = function(){
        return countdownSeconds;
      };
      this.countdownMilliseconds = function(){
        return countdownMilliseconds;
      };
      this.countdownNetTime = function(){
        return countdownNetTime;
      };
  
      this.countdownMilitaryTime = function(){
        return [countdownPad(countdownHours), countdownPad(countdownMinutes), countdownPad(countdownSeconds), countdownPad(countdownMilliseconds/10)].join(":");
      };
  
      this.countdownCallbackArgument = this.countdownMilitaryTime;
  
      var countdownTimeDidChange = function(){
        var countdownCallback = countdown_this.countdownCallback
        if(countdownCallback != null){
          var countdownCallbackTarget = countdown_this.countdownCallbackTarget || window;
          if(typeof countdownCallback === 'string'){
            countdownCallback = countdownCallbackTarget[countdownCallback];
          }
          if(typeof countdownCallback === 'function'){
            countdownCallback.call(countdownCallbackTarget, countdown_this.countdownCallbackArgument.call(countdown_this));
          }
        }
      };
  
      var countdownLapDidChange = function(countdownLap, countdownIsReset){
        if(countdown_this.countdownLapCallback != null){
          var countdownLapCallbackTarget = countdown_this.countdownLapCallbackTarget || window;
          var countdownLapCallback = countdown_this.countdownLapCallback;
          if(typeof countdownLapCallback === "string"){
            countdownLapCallback = countdownLapCallbackTarget[countdownLapCallback];
          }
          if(typeof countdownLapCallback === 'function'){
            countdownLapCallback.call(countdownLapCallbackTarget, (countdownLap && countdownLap.countdownSplitString()), countdownIsReset);
          }
        }
      };
  
      var countdownInitializeTimer = function(countdownTimeInMilliseconds){
        var coutdownTime = countdownExtractTime(countdownTimeInMilliseconds);
        countdownHours = coutdownTime.countdownHours;
        countdownMinutes = coutdownTime.countdownMinutes;
        countdownSeconds = coutdownTime.countdownSeconds;
        countdownMilliseconds = coutdownTime.countdownMilliseconds;
        countdownNetTime = countdownTimeInMilliseconds;
        countdownTimeDidChange();
        return countdown_this;
      };
  
      var countdownIncrementByTenMilliseconds = function(){
        if(countdownMilliseconds === 0){
          countdownMilliseconds = 990;
          if(countdownSeconds === 0){
            countdownSeconds = 59;
            if(countdownMinutes === 0){
              countdownMinutes = 59;
              countdownHours -= 1;
            }else{
              countdownMinutes -= 1;
            }
          }else{
            countdownSeconds -= 1;
          }
        }else{
          countdownMilliseconds -= 10;
        }
  
        if(countdownHours + countdownMinutes + countdownSeconds + countdownMilliseconds <= 0) {
          countdown.stop();
          
          var countdownCompletedAudio = new Audio('./media/Sounds/FinalDex/Complete.wav');
          countdownCompletedAudio.play();
          
          document.getElementById('countdown-time').style.display = "none";
          document.getElementById('countdown-set').style.display = "flex";
          
          var countdownNetTime = countdownHours = countdownMinutes = countdownSeconds = countdownMilliseconds = 0;
          document.querySelector(".countdown-hours").value = "";
          document.querySelector(".countdown-minutes").value = "";
          document.querySelector(".countdown-seconds").value = "";
          document.querySelector(".countdown-milliseconds").value = "";
          countdownTimerSetHours.value = "";
          countdownTimerSetMinutes.value = "";
          countdownTimerSetSeconds.value = "";
          countdownTimerSetMilliseconds.value = "";
      
          replaceClass(countdownStartStopButton, 'countdown-stop', 'countdown-start');
          countdownStartStopButton.innerHTML = '⏵︎';
          countdownStartStopButton.setAttribute("title","Start");
        }
        
        countdownNetTime -= 10;
        countdownTimeDidChange();
        return countdown_this;
      };
  
          
  
      /*
        Kick starts the countdown
      */
      this.start = function(){
        countdownRunning = true;
        this.interval = setInterval(function(){
          countdownIncrementByTenMilliseconds();
        }, 10);
      };
  
      /*
        Halts/Pauses the countdown
      */
      this.stop = function(){
        if(this.interval != null){
          clearInterval(this.interval);
        }
        countdownRunning = false;
      };
  
  
      /*
        Captures a lap
      */
      this.countdownAddLap = function(){
        var countdownPreviousLap = countdownLaps[countdownLaps.length - 1];
        var countdownCurrentLap = new countdownLap(countdownNetTime);
        countdownLaps.push(countdownCurrentLap);
        countdownLapDidChange(countdownCurrentLap, false);
      }
  
      /*
        Resets all laps, invokes lapDidChange
      */
      this.countdownResetLaps = function(){
        countdownLaps = [];
        countdownLapDidChange(null, true)
      }
  
      /*
        resets the countdown
      */
      this.reset = function(){
        this.stop();
        this.countdownResetLaps();
        countdownInitializeTimer(0);
      };
  
      /* 
        Initializing countdownNetTime if provided via options
      */
      if(countdownOptions.countdownNetTime != null){
        countdownNetTime = countdownOptions.countdownNetTime;
        countdownInitializeTimer(countdownNetTime);
      }
    };

  
  
  
  
  var count = document.getElementById("countdown-time");
  var countdownLapContainer = document.getElementById('countdown-list');
  var countdownLapCount = 0;
  
  
  window.countdownUpdateCount = function(countdownMilitaryTime){
    count.innerHTML = countdownMilitaryTime;
  }
  
  
  window.countdownUpdateLap = function(countdownLapSplitString, countdownIsReset){
    if(countdownIsReset){
        countdownLapContainer.innerHTML = "";
        countdownLapCount = 0;
    }else{
      var countdownli = document.createElement('li');
      countdownLapCount += 1;
      countdownli.innerHTML = "<span>#"+countdownLapCount+"</span>"+count.innerHTML;
      countdownLapContainer.appendChild(countdownli);
    }
  }
  
  
  var replaceClass = function(ele, class1, class2){
    if(ele.className.indexOf(class1) > 1){
      ele.className = ele.className.replace(class1, class2);
    }
  }
  
  var countdown = new CountDown({countdownCallback: 'countdownUpdateCount', countdownLapCallback: 'countdownUpdateLap'});
  var countdownStartStopButton = document.getElementById("countdown-start-stop");
  var countdownResetButton = document.querySelector("#countdown-reset");
  var countdownLapsButton = document.querySelector("#countdown-laps");
  var countdownTimerSetHours = document.querySelector(".countdown-hours");
  var countdownTimerSetMinutes = document.querySelector(".countdown-minutes");
  var countdownTimerSetSeconds = document.querySelector(".countdown-seconds");
  var countdownTimerSetMilliseconds = document.querySelector(".countdown-milliseconds");
  
  
  var countdownStartStopButtonEvent = function(){
      var a = parseInt(countdownTimerSetHours.value);
      var b = parseInt(countdownTimerSetMinutes.value);
      var c = parseInt(countdownTimerSetSeconds.value);
      var d = parseInt(countdownTimerSetMilliseconds.value);
  
      a = a || 0;
      b = b || 0;
      c = c || 0;
      d = d || 0;
  
    if(!countdown.countdownRunning() && a+b+c+d > 0){
      replaceClass(countdownStartStopButton, 'countdown-start', 'countdown-stop');
      countdownStartStopButton.innerHTML = '⏸︎';
      countdownStartStopButton.setAttribute("title","Pause");
      countdown.start();
    }
    else if(a+b+c+d > 0){
      replaceClass(countdownStartStopButton, 'countdown-stop', 'countdown-start');
      countdownStartStopButton.innerHTML = '⏵︎';
      countdownStartStopButton.setAttribute("title","Start");
      countdown.stop();
      
  }
  }
  
  var countdownResetButtonEvent = function(){
    if(!countdown.countdownRunning()){
  
    }else{
      countdown.reset();
    }
  }
  
  
  var countdownLapsButtonEvent = function(){
    if(!countdown.countdownRunning()){
    
    }else{
      countdown.countdownAddLap();
    }
  }
  
  function countdownLapsScroll() {
      document.querySelector("#countdown-list").scrollTo(0,document.querySelector("#countdown-list").scrollHeight)
  }
  
  
  countdownStartStopButton.addEventListener("click", countdownStartStopButtonEvent);
  countdownResetButton.addEventListener('click', countdownResetButtonEvent);
  countdownLapsButton.addEventListener('click', countdownLapsButtonEvent);
  countdownLapsButton.addEventListener("click", countdownLapsScroll);    
}