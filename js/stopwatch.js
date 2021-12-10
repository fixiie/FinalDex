function stopwatch() {
    /*
      polyfills for IE8
    */
    if(!Array.prototype.forEach){
      Array.prototype.forEach = function(stopwatchCallback){
        for(var i=0; i<this.length; i++){
            stopwatchCallback(this[i]);
        }      
      }
    }
  
    if(!Array.prototype.map){
      Array.prototype.map = function(stopwatchCallback){
        var stopwatchItems = [];
        for(var i=0; i<this.length; i++){
            stopwatchItems.push(stopwatchCallback(this[i]));
        }
        return stopwatchItems;
      }
    }
  
    var stopwatchSecondInMilliseconds = 1000;
    var stopwatchMinuteInMilliseconds = 60*stopwatchSecondInMilliseconds;
    var stopwatchHourInMilliseconds = 60*stopwatchMinuteInMilliseconds;
    var stopwatchFloor = Math.floor;
  
    var stopwatchExtractMilliseconds = function(stopwatchTimeInMilliseconds){
      return stopwatchTimeInMilliseconds % 1000;
    }
    var stopwatchExtractSeconds = function(stopwatchTimeInMilliseconds){
      return stopwatchFloor(stopwatchTimeInMilliseconds/stopwatchSecondInMilliseconds);
    }
    var stopwatchExtractMinutes = function(stopwatchTimeInMilliseconds){
      return stopwatchFloor(stopwatchTimeInMilliseconds/stopwatchMinuteInMilliseconds);
    }
    var stopwatchExtractHours = function(stopwatchTimeInMilliseconds){
      return stopwatchFloor(stopwatchTimeInMilliseconds/stopwatchHourInMilliseconds);
    }
    var stopwatchPad = function(stopwatchNumber){
      if(stopwatchNumber < 10){
        return "0"+stopwatchNumber;
      }else{
        return stopwatchNumber;
      }
    }
    var stopwatchExtractTime = function(stopwatchTimeInMilliseconds){
      var stopwatchMilliseconds = stopwatchExtractHours(stopwatchTimeInMilliseconds);
      stopwatchTimeInMilliseconds -= stopwatchHours*stopwatchHourInMilliseconds;
      var stopwatchMilliseconds = stopwatchExtractMinutes(stopwatchTimeInMilliseconds);
      stopwatchTimeInMilliseconds -= stopwatchMinutes*stopwatchMinuteInMilliseconds;
      var stopwatchMilliseconds = stopwatchExtractSeconds(stopwatchTimeInMilliseconds);
      stopwatchTimeInMilliseconds -= stopwatchSeconds*stopwatchSecondInMilliseconds;
      var stopwatchMilliseconds = stopwatchTimeInMilliseconds;
      return {stopwatchHours: stopwatchHours, stopwatchMinutes: stopwatchMinutes, stopwatchSeconds: stopwatchSeconds, stopwatchMilliseconds: stopwatchMilliseconds};
    }
  
  
    var stopwatchLap = function(stopwatchNetTime, stopwatchPreviousLap){
      this.stopwatchPreviousLap = stopwatchPreviousLap;
      this.stopwatchNetTime = stopwatchNetTime;
    };
  
    stopwatchLap.prototype = {
        stopwatchMilitaryTime: function(stopwatchTimeInMilliseconds){     
        var stopwatchTimeSeparator = ":";
        var stopwatchTime = stopwatchExtractTime(stopwatchTimeInMilliseconds);
        stopwatchTime.stopwatchMilliseconds = stopwatchTime.stopwatchMilliseconds/10;
        return ['stopwatchHours', 'stopwatchMinutes', 'stopwatchSeconds', 'stopwatchMilliseconds'].map(function(stopwatchProperty){
          return stopwatchPad(stopwatchTime[stopwatchProperty]);
        }).join(stopwatchTimeSeparator);
      },
      stopwatchSplitString: function(){
        if(this.stopwatchPreviousLap != null){
          var stopwatchTimeDifference = this.stopwatchNetTime - this.stopwatchPreviousLap.stopwatchNetTime;
          return this.stopwatchMilitaryTime(stopwatchTimeDifference);
        }else{
          return this.stopwatchMilitaryTime(this.stopwatchNetTime);
        }
      }
    }
  
    var StopWatch = window.StopWatch = function(stopwatchOptions){
      if(stopwatchOptions == null){
        stopwatchOptions = {}
      }
      
      var stopwatch_this = this;
      var stopwatchCallbackProperties = ['stopwatchCallback', 'stopwatchCallbackTarget', 'stopwatchLapCallback', 'stopwatchLapCallbackTarget'];
      var stopwatchNetTime = stopwatchHours = stopwatchMinutes = stopwatchSeconds = stopwatchMilliseconds = 0;
  
      var stopwatchTimerSetHours = document.querySelector(".stopwatch-hours");
      var stopwatchTimerSetMinutes = document.querySelector(".stopwatch-minutes");
      var stopwatchTimerSetSeconds = document.querySelector(".stopwatch-seconds");
      var stopwatchTimerSetMilliseconds = document.querySelector(".stopwatch-milliseconds");
  
      var stopwatchInput = document.querySelectorAll('#stopwatch-set input');
      for (var i = 0; i < stopwatchInput.length; i++) {
          stopwatchInput[i].addEventListener("click", stopwatchSetTime);
          stopwatchInput[i].addEventListener("click", stopwatchSelect);
          stopwatchInput[i].addEventListener("focus", stopwatchSetTime);
          stopwatchInput[i].addEventListener("keydown", stopwatchSetTime);
          stopwatchInput[i].addEventListener("change", stopwatchSetTime);
          stopwatchInput[i].addEventListener("change", stopwatchFormatNumber);
      }
      
      document.querySelector("#stopwatch-start-stop").addEventListener("click", stopwatchHideShow);
      document.querySelector("#stopwatch-reset").addEventListener("click", stopwatchReset);
  
  
      function stopwatchReset() {
          stopwatchTimerSetHours.value = "";
          stopwatchTimerSetMinutes.value = "";
          stopwatchTimerSetSeconds.value = "";
          stopwatchTimerSetMilliseconds.value = "";
          var stopwatchNetTime = stopwatchHours = stopwatchMinutes = stopwatchSeconds = stopwatchMilliseconds = 0;
          
          stopwatchLaps = [];
          stopwatchLapDidChange(null, true)
          
          if(stopwatch.stopwatchRunning()){
              document.getElementById('stopwatch-time').style.display = "none";
              document.getElementById('stopwatch-set').style.display = "flex";
              replaceClass(stopwatchStartStopButton, 'stopwatch-stop', 'stopwatch-start');
              stopwatchStartStopButton.innerHTML = '⏵︎';
              stopwatchStartStopButton.setAttribute("title","Start");
              stopwatch.reset();
          }
      }
  
      
      function stopwatchHideShow() {
      
      stopwatchTimerSetHours.value = [stopwatchPad(stopwatchHours)];
      stopwatchTimerSetMinutes.value = [stopwatchPad(stopwatchMinutes)];
      stopwatchTimerSetSeconds.value = [stopwatchPad(stopwatchSeconds)];
      stopwatchTimerSetMilliseconds.value = [stopwatchPad(stopwatchMilliseconds/10)];
      
          if(!stopwatch.stopwatchRunning()){
              document.getElementById('stopwatch-time').style.display = "flex";
              document.getElementById('stopwatch-set').style.display = "none";
          }
          else {
              document.getElementById('stopwatch-time').style.display = "none";
              document.getElementById('stopwatch-set').style.display = "flex";
          }
      }
      
  
      function stopwatchFormatNumber() {
          if(parseInt(this.value) < 10 && parseInt(this.value) > 0) {
          this.value = '0' + this.value;
          }
      }
      function stopwatchSelect() {
          this.select();
      }
  
      function stopwatchSetTime() {
  
      if(this.value == "" || this.value == "0") {
          this.value = '00';
      }
          
      if(!stopwatch.stopwatchRunning()){
          if(this.classList.contains("stopwatch-hours")) {
              var stopwatchNetTime = stopwatchHours = parseInt(this.value);
              if(parseInt(this.value) > parseInt(this.max)) {
                  var stopwatchNetTime = stopwatchHours = parseInt(this.max);
                  this.value = this.max;
              }
          }
          if(this.classList.contains("stopwatch-minutes")) {
              var stopwatchNetTime = stopwatchMinutes = parseInt(this.value);
              if(parseInt(this.value) > parseInt(this.max)) {
                  var stopwatchNetTime = stopwatchMinutes = parseInt(this.max);
                  this.value = this.max;
              }
          }
          if(this.classList.contains("stopwatch-seconds")) {
              var stopwatchNetTime = stopwatchSeconds = parseInt(this.value);
              if(parseInt(this.value) > parseInt(this.max)) {
                  var stopwatchNetTime = stopwatchSeconds = parseInt(this.max);
                  this.value = this.max;
              }
          }
          if(this.classList.contains("stopwatch-milliseconds")) {
              var stopwatchNetTime = stopwatchMilliseconds = parseInt(this.value)*10;
              if(parseInt(this.value) > parseInt(this.max)) {
                  var stopwatchNetTime = stopwatchMilliseconds = parseInt(this.max)*10;
                  this.value = this.max;
              }
          }
  
      }
  }
  
      var stopwatchRunning = false;
      var stopwatchLaps = [];
  
      stopwatchCallbackProperties.forEach(function(stopwatchProperty){
        if(stopwatchOptions[stopwatchProperty] != null){
          stopwatch_this[stopwatchProperty] = stopwatchOptions[stopwatchProperty];
        }
      });
  
      this.stopwatchRunning = function(){
        return stopwatchRunning;
      };
      this.stopwatchHours = function(){
        return stopwatchHours;
      };
      this.stopwatchMinutes = function(){
        return stopwatchMinutes;
      };
      this.stopwatchSeconds = function(){
        return stopwatchSeconds;
      };
      this.stopwatchMilliseconds = function(){
        return stopwatchMilliseconds;
      };
      this.stopwatchNetTime = function(){
        return stopwatchNetTime;
      };
  
      this.stopwatchMilitaryTime = function(){
        return [stopwatchPad(stopwatchHours), stopwatchPad(stopwatchMinutes), stopwatchPad(stopwatchSeconds), stopwatchPad(stopwatchMilliseconds/10)].join(":");
      };
  
      this.stopwatchCallbackArgument = this.stopwatchMilitaryTime;
  
      var stopwatchTimeDidChange = function(){
        var stopwatchCallback = stopwatch_this.stopwatchCallback
        if(stopwatchCallback != null){
          var stopwatchCallbackTarget = stopwatch_this.stopwatchCallbackTarget || window;
          if(typeof stopwatchCallback === 'string'){
            stopwatchCallback = stopwatchCallbackTarget[stopwatchCallback];
          }
          if(typeof stopwatchCallback === 'function'){
            stopwatchCallback.call(stopwatchCallbackTarget, stopwatch_this.stopwatchCallbackArgument.call(stopwatch_this));
          }
        }
      };
  
      var stopwatchLapDidChange = function(stopwatchLap, stopwatchIsReset){
        if(stopwatch_this.stopwatchLapCallback != null){
          var stopwatchLapCallbackTarget = stopwatch_this.stopwatchLapCallbackTarget || window;
          var stopwatchLapCallback = stopwatch_this.stopwatchLapCallback;
          if(typeof stopwatchLapCallback === "string"){
            stopwatchLapCallback = stopwatchLapCallbackTarget[stopwatchLapCallback];
          }
          if(typeof stopwatchLapCallback === 'function'){
            stopwatchLapCallback.call(stopwatchLapCallbackTarget, (stopwatchLap && stopwatchLap.stopwatchSplitString()), stopwatchIsReset);
          }
        }
      };
  
      var stopwatchInitializeTimer = function(stopwatchTimeInMilliseconds){
        var coutdownTime = stopwatchExtractTime(stopwatchTimeInMilliseconds);
        stopwatchHours = coutdownTime.stopwatchHours;
        stopwatchMinutes = coutdownTime.stopwatchMinutes;
        stopwatchSeconds = coutdownTime.stopwatchSeconds;
        stopwatchMilliseconds = coutdownTime.stopwatchMilliseconds;
        stopwatchNetTime = stopwatchTimeInMilliseconds;
        stopwatchTimeDidChange();
        return stopwatch_this;
      };
  
      var stopwatchIncrementByTenMilliseconds = function(){
        if(stopwatchMilliseconds === 990){
          stopwatchMilliseconds = 0;
          if(stopwatchSeconds === 59){
            stopwatchSeconds = 0;
            if(stopwatchMinutes === 59){
              stopwatchMinutes = 0;
              stopwatchHours += 1;
            }else{
              stopwatchMinutes += 1;
            }
          }else{
            stopwatchSeconds += 1;
          }
        }else{
          stopwatchMilliseconds += 10;
        }
  
        stopwatchNetTime += 10;
        stopwatchTimeDidChange();
        return stopwatch_this;
      };
  
          
  
      /*
        Kick starts the stopwatch
      */
      this.start = function(){
        stopwatchRunning = true;
        this.interval = setInterval(function(){
          stopwatchIncrementByTenMilliseconds();
        }, 10);
      };
  
      /*
        Halts/Pauses the stopwatch
      */
      this.stop = function(){
        if(this.interval != null){
          clearInterval(this.interval);
        }
        stopwatchRunning = false;
      };
  
  
      /*
        Captures a lap
      */
      this.stopwatchAddLap = function(){
        var stopwatchPreviousLap = stopwatchLaps[stopwatchLaps.length - 1];
        var stopwatchCurrentLap = new stopwatchLap(stopwatchNetTime);
        stopwatchLaps.push(stopwatchCurrentLap);
        stopwatchLapDidChange(stopwatchCurrentLap, false);
      }
  
      /*
        Resets all laps, invokes lapDidChange
      */
      this.stopwatchResetLaps = function(){
        stopwatchLaps = [];
        stopwatchLapDidChange(null, true)
      }
  
      /*
        resets the stopwatch
      */
      this.reset = function(){
        this.stop();
        this.stopwatchResetLaps();
        stopwatchInitializeTimer(0);
      };
  
      /* 
        Initializing stopwatchNetTime if provided via options
      */
      if(stopwatchOptions.stopwatchNetTime != null){
        stopwatchNetTime = stopwatchOptions.stopwatchNetTime;
        stopwatchInitializeTimer(stopwatchNetTime);
      }
    };

  
  
  
  
  var watch = document.getElementById("stopwatch-time");
  var stopwatchLapContainer = document.getElementById('stopwatch-list');
  var stopwatchLapCount = 0;
  
  
  window.stopwatchUpdateWatch = function(stopwatchMilitaryTime){
    watch.innerHTML = stopwatchMilitaryTime;
  }
  
  
  window.stopwatchUpdateLap = function(stopwatchLapSplitString, stopwatchIsReset){
    if(stopwatchIsReset){
        stopwatchLapContainer.innerHTML = "";
        stopwatchLapCount = 0;
    }else{
      var stopwatchli = document.createElement('li');
      stopwatchLapCount += 1;
      stopwatchli.innerHTML = "<span>#"+stopwatchLapCount+"</span>"+watch.innerHTML;
      stopwatchLapContainer.appendChild(stopwatchli);
    }
  }
  
  
  var replaceClass = function(ele, class1, class2){
    if(ele.className.indexOf(class1) > 1){
      ele.className = ele.className.replace(class1, class2);
    }
  }
  
  var stopwatch = new StopWatch({stopwatchCallback: 'stopwatchUpdateWatch', stopwatchLapCallback: 'stopwatchUpdateLap'});
  var stopwatchStartStopButton = document.getElementById("stopwatch-start-stop");
  var stopwatchResetButton = document.querySelector("#stopwatch-reset");
  var stopwatchLapsButton = document.querySelector("#stopwatch-laps");
  var stopwatchTimerSetHours = document.querySelector(".stopwatch-hours");
  var stopwatchTimerSetMinutes = document.querySelector(".stopwatch-minutes");
  var stopwatchTimerSetSeconds = document.querySelector(".stopwatch-seconds");
  var stopwatchTimerSetMilliseconds = document.querySelector(".stopwatch-milliseconds");
  
  
  var stopwatchStartStopButtonEvent = function(){
    if(!stopwatch.stopwatchRunning()){
      replaceClass(stopwatchStartStopButton, 'stopwatch-start', 'stopwatch-stop');
      stopwatchStartStopButton.innerHTML = '⏸︎';
      stopwatchStartStopButton.setAttribute("title","Pause");
      stopwatch.start();
    }
    else {
      replaceClass(stopwatchStartStopButton, 'stopwatch-stop', 'stopwatch-start');
      stopwatchStartStopButton.innerHTML = '⏵︎';
      stopwatchStartStopButton.setAttribute("title","Start");
      stopwatch.stop(); 
    }
  }
  
  var stopwatchResetButtonEvent = function(){
    if(!stopwatch.stopwatchRunning()){
  
    }else{
      stopwatch.reset();
    }
  }
  
  
  var stopwatchLapsButtonEvent = function(){
    if(!stopwatch.stopwatchRunning()){
    
    }else{
      stopwatch.stopwatchAddLap();
    }
  }
  
  function stopwatchLapsScroll() {
      document.querySelector("#stopwatch-list").scrollTo(0,document.querySelector("#stopwatch-list").scrollHeight)
  }
  
  
  stopwatchStartStopButton.addEventListener("click", stopwatchStartStopButtonEvent);
  stopwatchResetButton.addEventListener('click', stopwatchResetButtonEvent);
  stopwatchLapsButton.addEventListener('click', stopwatchLapsButtonEvent);
  stopwatchLapsButton.addEventListener("click", stopwatchLapsScroll);    

}