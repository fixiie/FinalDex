var createTool = function() {
	var toolOuter = document.createElement("div");
	var toolAside1 = document.createElement("aside");
	var toolAside1OptionsTitleOuter = document.createElement("div");
	var toolAside1OptionsTitle = document.createElement("h2");
	var toolAside1OptionsOuter = document.createElement("div");
	var toolAside1Options = document.createElement("div");
	var toolAside2 = document.createElement("aside");
	var toolAside2Title = document.createElement("h1");
	var toolAside3 = document.createElement("aside");
	var toolAside3TimersOuter = document.createElement("div");
	var toolAside3TimerSelectorOuter = document.createElement("div");
	toolOuter.setAttribute("id", "tool-outer");
	toolOuter.setAttribute("name", "Tools");
	toolAside1.setAttribute("id", "tool-aside1");
	toolAside1OptionsTitleOuter.setAttribute("id", "tool-options-title");
	toolAside1OptionsTitle.innerText = "Tools";
	toolAside1OptionsOuter.setAttribute("id", "tool-options-outer");
	toolAside1OptionsOuter.classList.add("scroll");
	toolAside1Options.setAttribute("id", "tool-options");
	toolAside2.setAttribute("id", "tool-aside2");
	toolAside2Title.innerText = "Tools";
	toolAside3.setAttribute("id", "tool-aside3");
	toolAside3TimersOuter.setAttribute("id", "timers-outer");
	toolAside3TimersOuter.setAttribute("name", "0");
	toolAside3TimerSelectorOuter.setAttribute("id", "timer-selector-outer");
	document.querySelector("#contain").appendChild(toolOuter);
	toolOuter.appendChild(toolAside1);
	toolAside1.appendChild(toolAside1OptionsTitleOuter);
	toolAside1OptionsTitleOuter.appendChild(toolAside1OptionsTitle);
	toolAside1.appendChild(toolAside1OptionsOuter);
	toolAside1OptionsOuter.appendChild(toolAside1Options);
	toolOuter.appendChild(toolAside2);
	toolAside2.appendChild(toolAside2Title);
	toolOuter.appendChild(toolAside3);
	toolAside3.appendChild(toolAside3TimersOuter);
	toolAside3TimersOuter.appendChild(toolAside3TimerSelectorOuter);

	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}
	var stopwatchcountdown = ["stopwatch", "countdown"];
	for(var q = 0; q < stopwatchcountdown.length; q++) {
		var toolAside3TimerOuter = document.createElement("div");
		var toolAside3Timer = document.createElement("div");
		var toolAside3TimerPausePlay = document.createElement("button");
		var toolAside3TimerTime = document.createElement("div");
		var toolAside3TimerSet = document.createElement("div");
		var toolAside3TimerSetSpan = document.createElement("span");
		var toolAside3TimerSetInputHours = document.createElement("input");
		var toolAside3TimerSetInputMinutes = document.createElement("input");
		var toolAside3TimerSetInputSeconds = document.createElement("input");
		var toolAside3TimerSetInputMilliseconds = document.createElement("input");
		var toolAside3TimerList = document.createElement("ul");
		var toolAside3TimerLaps = document.createElement("button");
		var toolAside3TimerReset = document.createElement("button");
		toolAside3TimerOuter.setAttribute("id", stopwatchcountdown[q] + "-outer");
		toolAside3Timer.setAttribute("id", stopwatchcountdown[q]);
		toolAside3TimerPausePlay.setAttribute("id", stopwatchcountdown[q] + "-start-stop");
		toolAside3TimerPausePlay.setAttribute("title", "Start");
		toolAside3TimerPausePlay.innerText = "\u23F5";
		toolAside3TimerTime.setAttribute("id", stopwatchcountdown[q] + "-time");
		toolAside3TimerSet.setAttribute("id", stopwatchcountdown[q] + "-set");
		toolAside3TimerSetSpan;
		toolAside3TimerSetInputHours.setAttribute("type", "number");
		toolAside3TimerSetInputHours.setAttribute("min", "0");
		toolAside3TimerSetInputHours.setAttribute("max", "9999");
		toolAside3TimerSetInputHours.setAttribute("autocomplete", "off");
		toolAside3TimerSetInputHours.setAttribute("placeholder", "00");
		toolAside3TimerSetInputHours.setAttribute("title", "Hours");
		toolAside3TimerSetInputHours.classList.add(stopwatchcountdown[q] + "-hours");
		toolAside3TimerSetInputMinutes.setAttribute("type", "number");
		toolAside3TimerSetInputMinutes.setAttribute("min", "0");
		toolAside3TimerSetInputMinutes.setAttribute("max", "59");
		toolAside3TimerSetInputMinutes.setAttribute("autocomplete", "off");
		toolAside3TimerSetInputMinutes.setAttribute("placeholder", "00");
		toolAside3TimerSetInputMinutes.setAttribute("title", "Minutes");
		toolAside3TimerSetInputMinutes.classList.add(stopwatchcountdown[q] + "-minutes");
		toolAside3TimerSetInputSeconds.setAttribute("type", "number");
		toolAside3TimerSetInputSeconds.setAttribute("min", "0");
		toolAside3TimerSetInputSeconds.setAttribute("max", "59");
		toolAside3TimerSetInputSeconds.setAttribute("autocomplete", "off");
		toolAside3TimerSetInputSeconds.setAttribute("placeholder", "00");
		toolAside3TimerSetInputSeconds.setAttribute("title", "Seconds");
		toolAside3TimerSetInputSeconds.classList.add(stopwatchcountdown[q] + "-seconds");
		toolAside3TimerSetInputMilliseconds.setAttribute("type", "number");
		toolAside3TimerSetInputMilliseconds.setAttribute("min", "0");
		toolAside3TimerSetInputMilliseconds.setAttribute("max", "99");
		toolAside3TimerSetInputMilliseconds.setAttribute("autocomplete", "off");
		toolAside3TimerSetInputMilliseconds.setAttribute("placeholder", "00");
		toolAside3TimerSetInputMilliseconds.setAttribute("title", "Milliseconds");
		toolAside3TimerSetInputMilliseconds.classList.add(stopwatchcountdown[q] + "-milliseconds");
		toolAside3TimerList.setAttribute("id", stopwatchcountdown[q] + "-list");
		toolAside3TimerLaps.setAttribute("id", stopwatchcountdown[q] + "-laps");
		toolAside3TimerLaps.setAttribute("title", "Laps");
		toolAside3TimerLaps.innerText = "\u23F6";
		toolAside3TimerReset.setAttribute("id", stopwatchcountdown[q] + "-reset");
		toolAside3TimerReset.setAttribute("title", "Reset");
		toolAside3TimerReset.innerText = "\u23F9";
		toolAside3TimersOuter.appendChild(toolAside3TimerOuter);
		toolAside3TimerOuter.appendChild(toolAside3Timer);
		toolAside3Timer.appendChild(toolAside3TimerPausePlay);
		toolAside3Timer.appendChild(toolAside3TimerTime);
		toolAside3Timer.appendChild(toolAside3TimerSet);
		toolAside3TimerSet.appendChild(toolAside3TimerSetSpan);
		toolAside3TimerSetSpan.appendChild(toolAside3TimerSetInputHours);
		toolAside3TimerSetSpan.innerHTML += ":";
		toolAside3TimerSetSpan.appendChild(toolAside3TimerSetInputMinutes);
		toolAside3TimerSetSpan.innerHTML += ":";
		toolAside3TimerSetSpan.appendChild(toolAside3TimerSetInputSeconds);
		toolAside3TimerSetSpan.innerHTML += ":";
		toolAside3TimerSetSpan.appendChild(toolAside3TimerSetInputMilliseconds);
		toolAside3TimerOuter.appendChild(toolAside3TimerList);
		toolAside3TimerOuter.appendChild(toolAside3TimerLaps);
		toolAside3TimerOuter.appendChild(toolAside3TimerReset);
	}
	for(var q = 0; q < stopwatchcountdown.length; q++) {
		var x = q + 1;
		var toolAside3TimerSelector = document.createElement("div");
		var toolAside3TimerSelectorInput = document.createElement("input");
		var toolAside3TimerSelectorLabel = document.createElement("label");
		toolAside3TimerSelector.setAttribute("id", "timer-selector");
		toolAside3TimerSelectorInput.setAttribute("type", "radio");
		toolAside3TimerSelectorInput.setAttribute("id", "timerselector" + x);
		toolAside3TimerSelectorInput.setAttribute("name", "timerselector");
		toolAside3TimerSelectorInput.setAttribute("autocomplete", "off");
		toolAside3TimerSelectorLabel.setAttribute("for", "timerselector" + x);
		toolAside3TimerSelectorLabel.innerText = capitalizeFirstLetter(stopwatchcountdown[q]);
		toolAside3TimerSelectorOuter.appendChild(toolAside3TimerSelector);
		toolAside3TimerSelector.appendChild(toolAside3TimerSelectorInput);
		toolAside3TimerSelector.appendChild(toolAside3TimerSelectorLabel);
		if(q == 0) {
			toolAside3TimerSelectorLabel.click();
		}
		toolAside3TimerSelectorInput.addEventListener("click", timerSelector);
	}
	var toolAside3RNGOuter = document.createElement("div");
	var toolAside3RNG = document.createElement("div");
	var toolAside3RNGOptions = document.createElement("div");
	var toolAside3RNGOptionsIterations = document.createElement("div");
	var toolAside3RNGOptionsIterationsText = document.createElement("p");
	var toolAside3RNGOptionsIterationsInput = document.createElement("input");
	var toolAside3RNGOptionsTitle = document.createElement("div");
	var toolAside3RNGOptionsTitleIterations = document.createElement("div");
	var toolAside3RNGOptionsTitleIterationsText = document.createElement("p");
	var toolAside3RNGOptionsTitleMin = document.createElement("div");
	var toolAside3RNGOptionsTitleMinText = document.createElement("p");
	var toolAside3RNGOptionsTitleMax = document.createElement("div");
	var toolAside3RNGOptionsTitleMaxText = document.createElement("p");
	var toolAside3RNGOptionsUl = document.createElement("ul");
	var toolAside3RNGOptionsExecute = document.createElement("div");
	var toolAside3RNGOptionsExecuteButton = document.createElement("button");
	var toolAside3RNGResult = document.createElement("div");
	toolAside3RNGOuter.classList.add("rng-outer");
	toolAside3RNGOuter.setAttribute("name", "2");
	toolAside3RNG.setAttribute("id", "rng");
	toolAside3RNGResult.classList.add("result");
	toolAside3RNGResult.classList.add("scroll");
	toolAside3RNGOptions.classList.add("options");
	toolAside3RNGOptionsIterations.classList.add("iterations");
	toolAside3RNGOptionsIterationsText.innerText = "Iterations";
	toolAside3RNGOptionsIterationsInput.setAttribute("type", "number");
	toolAside3RNGOptionsIterationsInput.setAttribute("min", "1");
	toolAside3RNGOptionsIterationsInput.setAttribute("max", "1000");
	toolAside3RNGOptionsIterationsInput.setAttribute("value", "1");
	toolAside3RNGOptionsIterationsInput.setAttribute("autocomplete", "off");
	toolAside3RNGOptionsTitle.classList.add("title");
	toolAside3RNGOptionsTitleIterations.classList.add("it");
	toolAside3RNGOptionsTitleIterationsText.innerText = "#";
	toolAside3RNGOptionsTitleMin.classList.add("min");
	toolAside3RNGOptionsTitleMinText.innerText = "Min";
	toolAside3RNGOptionsTitleMax.classList.add("max");
	toolAside3RNGOptionsTitleMaxText.innerText = "Max";
	toolAside3RNGOptionsUl.classList.add("scroll");
	toolAside3RNGOptionsExecute.classList.add("execute");
	toolAside3RNGOptionsExecuteButton.innerText = "Generate Random Numbers";
	toolAside3.appendChild(toolAside3RNGOuter);
	toolAside3RNGOuter.appendChild(toolAside3RNG);
	toolAside3RNG.appendChild(toolAside3RNGResult);
	toolAside3RNG.appendChild(toolAside3RNGOptions);
	toolAside3RNGOptions.appendChild(toolAside3RNGOptionsExecute);
	toolAside3RNGOptionsExecute.appendChild(toolAside3RNGOptionsExecuteButton);
	toolAside3RNGOptions.appendChild(toolAside3RNGOptionsIterations);
	toolAside3RNGOptionsIterations.appendChild(toolAside3RNGOptionsIterationsText);
	toolAside3RNGOptionsIterations.appendChild(toolAside3RNGOptionsIterationsInput);
	toolAside3RNGOptions.appendChild(toolAside3RNGOptionsTitle);
	toolAside3RNGOptionsTitle.appendChild(toolAside3RNGOptionsTitleIterations);
	toolAside3RNGOptionsTitleIterations.appendChild(toolAside3RNGOptionsTitleIterationsText);
	toolAside3RNGOptionsTitle.appendChild(toolAside3RNGOptionsTitleMin);
	toolAside3RNGOptionsTitleMin.appendChild(toolAside3RNGOptionsTitleMinText);
	toolAside3RNGOptionsTitle.appendChild(toolAside3RNGOptionsTitleMax);
	toolAside3RNGOptionsTitleMax.appendChild(toolAside3RNGOptionsTitleMaxText);
	toolAside3RNGOptions.appendChild(toolAside3RNGOptionsUl);
	var toolOptionsTitle = ["Timers", "Counter", "Random Number Generator", "Damage Calculator", "Catch Rate Calculator", "Shiny Odds Calculator", "IV Calculator", "Pokémon Finder", "Item Checklist", ];
	for(var q = 0; q < toolOptionsTitle.length; q++) {
		var toolAside1OptionsInput = document.createElement("input");
		var toolAside1OptionsLabel = document.createElement("label");
		toolAside1OptionsInput.setAttribute("type", "radio");
		toolAside1OptionsInput.setAttribute("name", "tool-options");
		toolAside1OptionsInput.setAttribute("id", "tool-options-" + q);
		toolAside1OptionsInput.setAttribute("autocomplete", "off");
		toolAside1OptionsInput.value = q;
		toolAside1OptionsLabel.setAttribute("for", "tool-options-" + q);
		toolAside1OptionsLabel.setAttribute("name", "large");
		toolAside1OptionsLabel.innerHTML = toolOptionsTitle[q];
		toolAside1Options.appendChild(toolAside1OptionsInput);
		toolAside1Options.appendChild(toolAside1OptionsLabel);
		toolAside1OptionsInput.addEventListener("click", toolOptionsSelector);

		function toolOptionsSelector() {
			toolAside2Title.innerText = toolOptionsTitle[this.value];
			var toolContents = document.querySelectorAll("#tool-aside3 > div[name]");
			var toolContent = document.querySelectorAll("#tool-aside3 > div[name='" + this.value + "']");
			for(var q = 0; q < toolContents.length; q++) {
				toolContents[q].style.display = "none";
			}
			for(var q = 0; q < toolContent.length; q++) {
				toolContent[q].style.display = "block";
			}
		}
		if(q == 0) {
			toolAside1OptionsLabel.click();
		}
	}
};

function countdown() {
	/*
	    polyfills for IE8
	  */
	if(!Array.prototype.forEach) {
		Array.prototype.forEach = function(countdownCallback) {
			for(var i = 0; i < this.length; i++) {
				countdownCallback(this[i]);
			}
		};
	}
	if(!Array.prototype.map) {
		Array.prototype.map = function(countdownCallback) {
			var countdownItems = [];
			for(var i = 0; i < this.length; i++) {
				countdownItems.push(countdownCallback(this[i]));
			}
			return countdownItems;
		};
	}
	var countdownSecondInMilliseconds = 1000;
	var countdownMinuteInMilliseconds = 60 * countdownSecondInMilliseconds;
	var countdownHourInMilliseconds = 60 * countdownMinuteInMilliseconds;
	var countdownFloor = Math.floor;
	var countdownExtractMilliseconds = function(countdownTimeInMilliseconds) {
		return countdownTimeInMilliseconds % 1000;
	};
	var countdownExtractSeconds = function(countdownTimeInMilliseconds) {
		return countdownFloor(countdownTimeInMilliseconds / countdownSecondInMilliseconds);
	};
	var countdownExtractMinutes = function(countdownTimeInMilliseconds) {
		return countdownFloor(countdownTimeInMilliseconds / countdownMinuteInMilliseconds);
	};
	var countdownExtractHours = function(countdownTimeInMilliseconds) {
		return countdownFloor(countdownTimeInMilliseconds / countdownHourInMilliseconds);
	};
	var countdownPad = function(countdownNumber) {
		if(countdownNumber < 10) {
			return "0" + countdownNumber;
		} else {
			return countdownNumber;
		}
	};
	var countdownExtractTime = function(countdownTimeInMilliseconds) {
		var countdownMilliseconds = countdownExtractHours(countdownTimeInMilliseconds);
		countdownTimeInMilliseconds -= countdownHours * countdownHourInMilliseconds;
		var countdownMilliseconds = countdownExtractMinutes(countdownTimeInMilliseconds);
		countdownTimeInMilliseconds -= countdownMinutes * countdownMinuteInMilliseconds;
		var countdownMilliseconds = countdownExtractSeconds(countdownTimeInMilliseconds);
		countdownTimeInMilliseconds -= countdownSeconds * countdownSecondInMilliseconds;
		var countdownMilliseconds = countdownTimeInMilliseconds;
		return {
			countdownHours: countdownHours,
			countdownMinutes: countdownMinutes,
			countdownSeconds: countdownSeconds,
			countdownMilliseconds: countdownMilliseconds,
		};
	};
	var countdownLap = function(countdownNetTime, countdownPreviousLap) {
		this.countdownPreviousLap = countdownPreviousLap;
		this.countdownNetTime = countdownNetTime;
	};
	countdownLap.prototype = {
		countdownMilitaryTime: function(countdownTimeInMilliseconds) {
			var countdownTimeSeparator = ":";
			var countdownTime = countdownExtractTime(countdownTimeInMilliseconds);
			countdownTime.countdownMilliseconds = countdownTime.countdownMilliseconds / 10;
			return ["countdownHours", "countdownMinutes", "countdownSeconds", "countdownMilliseconds", ].map(function(countdownProperty) {
				return countdownPad(countdownTime[countdownProperty]);
			}).join(countdownTimeSeparator);
		},
		countdownSplitString: function() {
			if(this.countdownPreviousLap != null) {
				var countdownTimeDifference = this.countdownNetTime - this.countdownPreviousLap.countdownNetTime;
				return this.countdownMilitaryTime(countdownTimeDifference);
			} else {
				return this.countdownMilitaryTime(this.countdownNetTime);
			}
		},
	};
	var CountDown = (window.CountDown = function(countdownOptions) {
		if(countdownOptions == null) {
			countdownOptions = {};
		}
		var countdown_this = this;
		var countdownCallbackProperties = ["countdownCallback", "countdownCallbackTarget", "countdownLapCallback", "countdownLapCallbackTarget", ];
		var countdownNetTime = (countdownHours = countdownMinutes = countdownSeconds = countdownMilliseconds = 0);
		var countdownTimerSetHours = document.querySelector(".countdown-hours");
		var countdownTimerSetMinutes = document.querySelector(".countdown-minutes");
		var countdownTimerSetSeconds = document.querySelector(".countdown-seconds");
		var countdownTimerSetMilliseconds = document.querySelector(".countdown-milliseconds");
		var countdownInput = document.querySelectorAll("#countdown-set input");
		for(var i = 0; i < countdownInput.length; i++) {
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
			var countdownNetTime = (countdownHours = countdownMinutes = countdownSeconds = countdownMilliseconds = 0);
			countdownLaps = [];
			countdownLapDidChange(null, true);
			if(countdown.countdownRunning()) {
				document.getElementById("countdown-time").style.display = "none";
				document.getElementById("countdown-set").style.display = "flex";
				replaceClass(countdownStartStopButton, "countdown-stop", "countdown-start");
				countdownStartStopButton.innerHTML = "⏵︎";
				countdownStartStopButton.setAttribute("title", "Start");
				countdown.reset();
			}
		}

		function countdownHideShow() {
			countdownTimerSetHours.value = [countdownPad(countdownHours)];
			countdownTimerSetMinutes.value = [countdownPad(countdownMinutes)];
			countdownTimerSetSeconds.value = [countdownPad(countdownSeconds)];
			countdownTimerSetMilliseconds.value = [
				countdownPad(countdownMilliseconds / 10),
			];
			var a = parseInt(countdownTimerSetHours.value);
			var b = parseInt(countdownTimerSetMinutes.value);
			var c = parseInt(countdownTimerSetSeconds.value);
			var d = parseInt(countdownTimerSetMilliseconds.value);
			a = a || 0;
			b = b || 0;
			c = c || 0;
			d = d || 0;
			if(a + b + c + d > 0) {
				if(!countdown.countdownRunning()) {
					document.getElementById("countdown-time").style.display = "flex";
					document.getElementById("countdown-set").style.display = "none";
				} else {
					document.getElementById("countdown-time").style.display = "none";
					document.getElementById("countdown-set").style.display = "flex";
				}
			} else {
				document.querySelector("#countdown-set span").animate(
					[{
						transform: "translateX(0%)"
					}, {
						transform: "translateX(1%)"
					}, {
						transform: "translateX(0%)"
					}, {
						transform: "translateX(-1%)"
					}, {
						transform: "translateX(0%)"
					}, ], {
						duration: 200,
						easing: "linear",
						iterations: 1,
					});
			}
		}

		function countdownFormatNumber() {
			if(parseInt(this.value) < 10 && parseInt(this.value) > 0) {
				this.value = "0" + this.value;
			}
		}

		function countdownSelect() {
			this.select();
		}

		function countdownSetTime() {
			if(this.value == "" || this.value == "0") {
				this.value = "00";
			}
			if(!countdown.countdownRunning()) {
				if(this.classList.contains("countdown-hours")) {
					var countdownNetTime = (countdownHours = parseInt(this.value));
					if(parseInt(this.value) > parseInt(this.max)) {
						var countdownNetTime = (countdownHours = parseInt(this.max));
						this.value = this.max;
					}
				}
				if(this.classList.contains("countdown-minutes")) {
					var countdownNetTime = (countdownMinutes = parseInt(this.value));
					if(parseInt(this.value) > parseInt(this.max)) {
						var countdownNetTime = (countdownMinutes = parseInt(this.max));
						this.value = this.max;
					}
				}
				if(this.classList.contains("countdown-seconds")) {
					var countdownNetTime = (countdownSeconds = parseInt(this.value));
					if(parseInt(this.value) > parseInt(this.max)) {
						var countdownNetTime = (countdownSeconds = parseInt(this.max));
						this.value = this.max;
					}
				}
				if(this.classList.contains("countdown-milliseconds")) {
					var countdownNetTime = (countdownMilliseconds = parseInt(this.value) * 10);
					if(parseInt(this.value) > parseInt(this.max)) {
						var countdownNetTime = (countdownMilliseconds = parseInt(this.max) * 10);
						this.value = this.max;
					}
				}
			}
		}
		var countdownRunning = false;
		var countdownLaps = [];
		countdownCallbackProperties.forEach(function(countdownProperty) {
			if(countdownOptions[countdownProperty] != null) {
				countdown_this[countdownProperty] = countdownOptions[countdownProperty];
			}
		});
		this.countdownRunning = function() {
			return countdownRunning;
		};
		this.countdownHours = function() {
			return countdownHours;
		};
		this.countdownMinutes = function() {
			return countdownMinutes;
		};
		this.countdownSeconds = function() {
			return countdownSeconds;
		};
		this.countdownMilliseconds = function() {
			return countdownMilliseconds;
		};
		this.countdownNetTime = function() {
			return countdownNetTime;
		};
		this.countdownMilitaryTime = function() {
			return [
				countdownPad(countdownHours),
				countdownPad(countdownMinutes),
				countdownPad(countdownSeconds),
				countdownPad(countdownMilliseconds / 10),
			].join(":");
		};
		this.countdownCallbackArgument = this.countdownMilitaryTime;
		var countdownTimeDidChange = function() {
			var countdownCallback = countdown_this.countdownCallback;
			if(countdownCallback != null) {
				var countdownCallbackTarget = countdown_this.countdownCallbackTarget || window;
				if(typeof countdownCallback === "string") {
					countdownCallback = countdownCallbackTarget[countdownCallback];
				}
				if(typeof countdownCallback === "function") {
					countdownCallback.call(countdownCallbackTarget, countdown_this.countdownCallbackArgument.call(countdown_this));
				}
			}
		};
		var countdownLapDidChange = function(countdownLap, countdownIsReset) {
			if(countdown_this.countdownLapCallback != null) {
				var countdownLapCallbackTarget = countdown_this.countdownLapCallbackTarget || window;
				var countdownLapCallback = countdown_this.countdownLapCallback;
				if(typeof countdownLapCallback === "string") {
					countdownLapCallback = countdownLapCallbackTarget[countdownLapCallback];
				}
				if(typeof countdownLapCallback === "function") {
					countdownLapCallback.call(countdownLapCallbackTarget, countdownLap && countdownLap.countdownSplitString(), countdownIsReset);
				}
			}
		};
		var countdownInitializeTimer = function(countdownTimeInMilliseconds) {
			var coutdownTime = countdownExtractTime(countdownTimeInMilliseconds);
			countdownHours = coutdownTime.countdownHours;
			countdownMinutes = coutdownTime.countdownMinutes;
			countdownSeconds = coutdownTime.countdownSeconds;
			countdownMilliseconds = coutdownTime.countdownMilliseconds;
			countdownNetTime = countdownTimeInMilliseconds;
			countdownTimeDidChange();
			return countdown_this;
		};
		var countdownIncrementByTenMilliseconds = function() {
			if(countdownMilliseconds === 0) {
				countdownMilliseconds = 990;
				if(countdownSeconds === 0) {
					countdownSeconds = 59;
					if(countdownMinutes === 0) {
						countdownMinutes = 59;
						countdownHours -= 1;
					} else {
						countdownMinutes -= 1;
					}
				} else {
					countdownSeconds -= 1;
				}
			} else {
				countdownMilliseconds -= 10;
			}
			if(countdownHours + countdownMinutes + countdownSeconds + countdownMilliseconds <= 0) {
				countdown.stop();
				var countdownCompletedAudio = new Audio("./media/Sounds/FinalDex/Complete.wav");
				countdownCompletedAudio.play();
				document.getElementById("countdown-time").style.display = "none";
				document.getElementById("countdown-set").style.display = "flex";
				var countdownNetTime = (countdownHours = countdownMinutes = countdownSeconds = countdownMilliseconds = 0);
				document.querySelector(".countdown-hours").value = "";
				document.querySelector(".countdown-minutes").value = "";
				document.querySelector(".countdown-seconds").value = "";
				document.querySelector(".countdown-milliseconds").value = "";
				countdownTimerSetHours.value = "";
				countdownTimerSetMinutes.value = "";
				countdownTimerSetSeconds.value = "";
				countdownTimerSetMilliseconds.value = "";
				replaceClass(countdownStartStopButton, "countdown-stop", "countdown-start");
				countdownStartStopButton.innerHTML = "⏵︎";
				countdownStartStopButton.setAttribute("title", "Start");
			}
			countdownNetTime -= 10;
			countdownTimeDidChange();
			return countdown_this;
		};
		/*
		    Kick starts the countdown
		  */
		this.start = function() {
			countdownRunning = true;
			this.interval = setInterval(function() {
				countdownIncrementByTenMilliseconds();
			}, 10);
		};
		/*
		    Halts/Pauses the countdown
		  */
		this.stop = function() {
			if(this.interval != null) {
				clearInterval(this.interval);
			}
			countdownRunning = false;
		};
		/*
		    Captures a lap
		  */
		this.countdownAddLap = function() {
			var countdownPreviousLap = countdownLaps[countdownLaps.length - 1];
			var countdownCurrentLap = new countdownLap(countdownNetTime);
			countdownLaps.push(countdownCurrentLap);
			countdownLapDidChange(countdownCurrentLap, false);
		};
		/*
		    Resets all laps, invokes lapDidChange
		  */
		this.countdownResetLaps = function() {
			countdownLaps = [];
			countdownLapDidChange(null, true);
		};
		/*
		    resets the countdown
		  */
		this.reset = function() {
			this.stop();
			this.countdownResetLaps();
			countdownInitializeTimer(0);
		};
		/* 
		    Initializing countdownNetTime if provided via options
		  */
		if(countdownOptions.countdownNetTime != null) {
			countdownNetTime = countdownOptions.countdownNetTime;
			countdownInitializeTimer(countdownNetTime);
		}
	});
	var count = document.getElementById("countdown-time");
	var countdownLapContainer = document.getElementById("countdown-list");
	var countdownLapCount = 0;
	window.countdownUpdateCount = function(countdownMilitaryTime) {
		count.innerHTML = countdownMilitaryTime;
	};
	window.countdownUpdateLap = function(countdownLapSplitString, countdownIsReset) {
		if(countdownIsReset) {
			countdownLapContainer.innerHTML = "";
			countdownLapCount = 0;
		} else {
			var countdownli = document.createElement("li");
			countdownLapCount += 1;
			countdownli.innerHTML = "<span>#" + countdownLapCount + "</span>" + count.innerHTML;
			countdownLapContainer.appendChild(countdownli);
		}
	};
	var replaceClass = function(ele, class1, class2) {
		if(ele.className.indexOf(class1) > 1) {
			ele.className = ele.className.replace(class1, class2);
		}
	};
	var countdown = new CountDown({
		countdownCallback: "countdownUpdateCount",
		countdownLapCallback: "countdownUpdateLap",
	});
	var countdownStartStopButton = document.getElementById("countdown-start-stop");
	var countdownResetButton = document.querySelector("#countdown-reset");
	var countdownLapsButton = document.querySelector("#countdown-laps");
	var countdownTimerSetHours = document.querySelector(".countdown-hours");
	var countdownTimerSetMinutes = document.querySelector(".countdown-minutes");
	var countdownTimerSetSeconds = document.querySelector(".countdown-seconds");
	var countdownTimerSetMilliseconds = document.querySelector(".countdown-milliseconds");
	var countdownStartStopButtonEvent = function() {
		var a = parseInt(countdownTimerSetHours.value);
		var b = parseInt(countdownTimerSetMinutes.value);
		var c = parseInt(countdownTimerSetSeconds.value);
		var d = parseInt(countdownTimerSetMilliseconds.value);
		a = a || 0;
		b = b || 0;
		c = c || 0;
		d = d || 0;
		if(!countdown.countdownRunning() && a + b + c + d > 0) {
			replaceClass(countdownStartStopButton, "countdown-start", "countdown-stop");
			countdownStartStopButton.innerHTML = "⏸︎";
			countdownStartStopButton.setAttribute("title", "Pause");
			countdown.start();
		} else if(a + b + c + d > 0) {
			replaceClass(countdownStartStopButton, "countdown-stop", "countdown-start");
			countdownStartStopButton.innerHTML = "⏵︎";
			countdownStartStopButton.setAttribute("title", "Start");
			countdown.stop();
		}
	};
	var countdownResetButtonEvent = function() {
		if(!countdown.countdownRunning()) {} else {
			countdown.reset();
		}
	};
	var countdownLapsButtonEvent = function() {
		if(!countdown.countdownRunning()) {} else {
			countdown.countdownAddLap();
		}
	};

	function countdownLapsScroll() {
		document.querySelector("#countdown-list").scrollTo(0, document.querySelector("#countdown-list").scrollHeight);
	}
	countdownStartStopButton.addEventListener("click", countdownStartStopButtonEvent);
	countdownResetButton.addEventListener("click", countdownResetButtonEvent);
	countdownLapsButton.addEventListener("click", countdownLapsButtonEvent);
	countdownLapsButton.addEventListener("click", countdownLapsScroll);
}

function stopwatch() {
	/*
	    polyfills for IE8
	  */
	if(!Array.prototype.forEach) {
		Array.prototype.forEach = function(stopwatchCallback) {
			for(var i = 0; i < this.length; i++) {
				stopwatchCallback(this[i]);
			}
		};
	}
	if(!Array.prototype.map) {
		Array.prototype.map = function(stopwatchCallback) {
			var stopwatchItems = [];
			for(var i = 0; i < this.length; i++) {
				stopwatchItems.push(stopwatchCallback(this[i]));
			}
			return stopwatchItems;
		};
	}
	var stopwatchSecondInMilliseconds = 1000;
	var stopwatchMinuteInMilliseconds = 60 * stopwatchSecondInMilliseconds;
	var stopwatchHourInMilliseconds = 60 * stopwatchMinuteInMilliseconds;
	var stopwatchFloor = Math.floor;
	var stopwatchExtractMilliseconds = function(stopwatchTimeInMilliseconds) {
		return stopwatchTimeInMilliseconds % 1000;
	};
	var stopwatchExtractSeconds = function(stopwatchTimeInMilliseconds) {
		return stopwatchFloor(stopwatchTimeInMilliseconds / stopwatchSecondInMilliseconds);
	};
	var stopwatchExtractMinutes = function(stopwatchTimeInMilliseconds) {
		return stopwatchFloor(stopwatchTimeInMilliseconds / stopwatchMinuteInMilliseconds);
	};
	var stopwatchExtractHours = function(stopwatchTimeInMilliseconds) {
		return stopwatchFloor(stopwatchTimeInMilliseconds / stopwatchHourInMilliseconds);
	};
	var stopwatchPad = function(stopwatchNumber) {
		if(stopwatchNumber < 10) {
			return "0" + stopwatchNumber;
		} else {
			return stopwatchNumber;
		}
	};
	var stopwatchExtractTime = function(stopwatchTimeInMilliseconds) {
		var stopwatchMilliseconds = stopwatchExtractHours(stopwatchTimeInMilliseconds);
		stopwatchTimeInMilliseconds -= stopwatchHours * stopwatchHourInMilliseconds;
		var stopwatchMilliseconds = stopwatchExtractMinutes(stopwatchTimeInMilliseconds);
		stopwatchTimeInMilliseconds -= stopwatchMinutes * stopwatchMinuteInMilliseconds;
		var stopwatchMilliseconds = stopwatchExtractSeconds(stopwatchTimeInMilliseconds);
		stopwatchTimeInMilliseconds -= stopwatchSeconds * stopwatchSecondInMilliseconds;
		var stopwatchMilliseconds = stopwatchTimeInMilliseconds;
		return {
			stopwatchHours: stopwatchHours,
			stopwatchMinutes: stopwatchMinutes,
			stopwatchSeconds: stopwatchSeconds,
			stopwatchMilliseconds: stopwatchMilliseconds,
		};
	};
	var stopwatchLap = function(stopwatchNetTime, stopwatchPreviousLap) {
		this.stopwatchPreviousLap = stopwatchPreviousLap;
		this.stopwatchNetTime = stopwatchNetTime;
	};
	stopwatchLap.prototype = {
		stopwatchMilitaryTime: function(stopwatchTimeInMilliseconds) {
			var stopwatchTimeSeparator = ":";
			var stopwatchTime = stopwatchExtractTime(stopwatchTimeInMilliseconds);
			stopwatchTime.stopwatchMilliseconds = stopwatchTime.stopwatchMilliseconds / 10;
			return ["stopwatchHours", "stopwatchMinutes", "stopwatchSeconds", "stopwatchMilliseconds", ].map(function(stopwatchProperty) {
				return stopwatchPad(stopwatchTime[stopwatchProperty]);
			}).join(stopwatchTimeSeparator);
		},
		stopwatchSplitString: function() {
			if(this.stopwatchPreviousLap != null) {
				var stopwatchTimeDifference = this.stopwatchNetTime - this.stopwatchPreviousLap.stopwatchNetTime;
				return this.stopwatchMilitaryTime(stopwatchTimeDifference);
			} else {
				return this.stopwatchMilitaryTime(this.stopwatchNetTime);
			}
		},
	};
	var StopWatch = (window.StopWatch = function(stopwatchOptions) {
		if(stopwatchOptions == null) {
			stopwatchOptions = {};
		}
		var stopwatch_this = this;
		var stopwatchCallbackProperties = ["stopwatchCallback", "stopwatchCallbackTarget", "stopwatchLapCallback", "stopwatchLapCallbackTarget", ];
		var stopwatchNetTime = (stopwatchHours = stopwatchMinutes = stopwatchSeconds = stopwatchMilliseconds = 0);
		var stopwatchTimerSetHours = document.querySelector(".stopwatch-hours");
		var stopwatchTimerSetMinutes = document.querySelector(".stopwatch-minutes");
		var stopwatchTimerSetSeconds = document.querySelector(".stopwatch-seconds");
		var stopwatchTimerSetMilliseconds = document.querySelector(".stopwatch-milliseconds");
		var stopwatchInput = document.querySelectorAll("#stopwatch-set input");
		for(var i = 0; i < stopwatchInput.length; i++) {
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
			var stopwatchNetTime = (stopwatchHours = stopwatchMinutes = stopwatchSeconds = stopwatchMilliseconds = 0);
			stopwatchLaps = [];
			stopwatchLapDidChange(null, true);
			if(stopwatch.stopwatchRunning()) {
				document.getElementById("stopwatch-time").style.display = "none";
				document.getElementById("stopwatch-set").style.display = "flex";
				replaceClass(stopwatchStartStopButton, "stopwatch-stop", "stopwatch-start");
				stopwatchStartStopButton.innerHTML = "⏵︎";
				stopwatchStartStopButton.setAttribute("title", "Start");
				stopwatch.reset();
			}
		}

		function stopwatchHideShow() {
			stopwatchTimerSetHours.value = [stopwatchPad(stopwatchHours)];
			stopwatchTimerSetMinutes.value = [stopwatchPad(stopwatchMinutes)];
			stopwatchTimerSetSeconds.value = [stopwatchPad(stopwatchSeconds)];
			stopwatchTimerSetMilliseconds.value = [
				stopwatchPad(stopwatchMilliseconds / 10),
			];
			if(!stopwatch.stopwatchRunning()) {
				document.getElementById("stopwatch-time").style.display = "flex";
				document.getElementById("stopwatch-set").style.display = "none";
			} else {
				document.getElementById("stopwatch-time").style.display = "none";
				document.getElementById("stopwatch-set").style.display = "flex";
			}
		}

		function stopwatchFormatNumber() {
			if(parseInt(this.value) < 10 && parseInt(this.value) > 0) {
				this.value = "0" + this.value;
			}
		}

		function stopwatchSelect() {
			this.select();
		}

		function stopwatchSetTime() {
			if(this.value == "" || this.value == "0") {
				this.value = "00";
			}
			if(!stopwatch.stopwatchRunning()) {
				if(this.classList.contains("stopwatch-hours")) {
					var stopwatchNetTime = (stopwatchHours = parseInt(this.value));
					if(parseInt(this.value) > parseInt(this.max)) {
						var stopwatchNetTime = (stopwatchHours = parseInt(this.max));
						this.value = this.max;
					}
				}
				if(this.classList.contains("stopwatch-minutes")) {
					var stopwatchNetTime = (stopwatchMinutes = parseInt(this.value));
					if(parseInt(this.value) > parseInt(this.max)) {
						var stopwatchNetTime = (stopwatchMinutes = parseInt(this.max));
						this.value = this.max;
					}
				}
				if(this.classList.contains("stopwatch-seconds")) {
					var stopwatchNetTime = (stopwatchSeconds = parseInt(this.value));
					if(parseInt(this.value) > parseInt(this.max)) {
						var stopwatchNetTime = (stopwatchSeconds = parseInt(this.max));
						this.value = this.max;
					}
				}
				if(this.classList.contains("stopwatch-milliseconds")) {
					var stopwatchNetTime = (stopwatchMilliseconds = parseInt(this.value) * 10);
					if(parseInt(this.value) > parseInt(this.max)) {
						var stopwatchNetTime = (stopwatchMilliseconds = parseInt(this.max) * 10);
						this.value = this.max;
					}
				}
			}
		}
		var stopwatchRunning = false;
		var stopwatchLaps = [];
		stopwatchCallbackProperties.forEach(function(stopwatchProperty) {
			if(stopwatchOptions[stopwatchProperty] != null) {
				stopwatch_this[stopwatchProperty] = stopwatchOptions[stopwatchProperty];
			}
		});
		this.stopwatchRunning = function() {
			return stopwatchRunning;
		};
		this.stopwatchHours = function() {
			return stopwatchHours;
		};
		this.stopwatchMinutes = function() {
			return stopwatchMinutes;
		};
		this.stopwatchSeconds = function() {
			return stopwatchSeconds;
		};
		this.stopwatchMilliseconds = function() {
			return stopwatchMilliseconds;
		};
		this.stopwatchNetTime = function() {
			return stopwatchNetTime;
		};
		this.stopwatchMilitaryTime = function() {
			return [
				stopwatchPad(stopwatchHours),
				stopwatchPad(stopwatchMinutes),
				stopwatchPad(stopwatchSeconds),
				stopwatchPad(stopwatchMilliseconds / 10),
			].join(":");
		};
		this.stopwatchCallbackArgument = this.stopwatchMilitaryTime;
		var stopwatchTimeDidChange = function() {
			var stopwatchCallback = stopwatch_this.stopwatchCallback;
			if(stopwatchCallback != null) {
				var stopwatchCallbackTarget = stopwatch_this.stopwatchCallbackTarget || window;
				if(typeof stopwatchCallback === "string") {
					stopwatchCallback = stopwatchCallbackTarget[stopwatchCallback];
				}
				if(typeof stopwatchCallback === "function") {
					stopwatchCallback.call(stopwatchCallbackTarget, stopwatch_this.stopwatchCallbackArgument.call(stopwatch_this));
				}
			}
		};
		var stopwatchLapDidChange = function(stopwatchLap, stopwatchIsReset) {
			if(stopwatch_this.stopwatchLapCallback != null) {
				var stopwatchLapCallbackTarget = stopwatch_this.stopwatchLapCallbackTarget || window;
				var stopwatchLapCallback = stopwatch_this.stopwatchLapCallback;
				if(typeof stopwatchLapCallback === "string") {
					stopwatchLapCallback = stopwatchLapCallbackTarget[stopwatchLapCallback];
				}
				if(typeof stopwatchLapCallback === "function") {
					stopwatchLapCallback.call(stopwatchLapCallbackTarget, stopwatchLap && stopwatchLap.stopwatchSplitString(), stopwatchIsReset);
				}
			}
		};
		var stopwatchInitializeTimer = function(stopwatchTimeInMilliseconds) {
			var coutdownTime = stopwatchExtractTime(stopwatchTimeInMilliseconds);
			stopwatchHours = coutdownTime.stopwatchHours;
			stopwatchMinutes = coutdownTime.stopwatchMinutes;
			stopwatchSeconds = coutdownTime.stopwatchSeconds;
			stopwatchMilliseconds = coutdownTime.stopwatchMilliseconds;
			stopwatchNetTime = stopwatchTimeInMilliseconds;
			stopwatchTimeDidChange();
			return stopwatch_this;
		};
		var stopwatchIncrementByTenMilliseconds = function() {
			if(stopwatchMilliseconds === 990) {
				stopwatchMilliseconds = 0;
				if(stopwatchSeconds === 59) {
					stopwatchSeconds = 0;
					if(stopwatchMinutes === 59) {
						stopwatchMinutes = 0;
						stopwatchHours += 1;
					} else {
						stopwatchMinutes += 1;
					}
				} else {
					stopwatchSeconds += 1;
				}
			} else {
				stopwatchMilliseconds += 10;
			}
			stopwatchNetTime += 10;
			stopwatchTimeDidChange();
			return stopwatch_this;
		};
		/*
		    Kick starts the stopwatch
		  */
		this.start = function() {
			stopwatchRunning = true;
			this.interval = setInterval(function() {
				stopwatchIncrementByTenMilliseconds();
			}, 10);
		};
		/*
		    Halts/Pauses the stopwatch
		  */
		this.stop = function() {
			if(this.interval != null) {
				clearInterval(this.interval);
			}
			stopwatchRunning = false;
		};
		/*
		    Captures a lap
		  */
		this.stopwatchAddLap = function() {
			var stopwatchPreviousLap = stopwatchLaps[stopwatchLaps.length - 1];
			var stopwatchCurrentLap = new stopwatchLap(stopwatchNetTime);
			stopwatchLaps.push(stopwatchCurrentLap);
			stopwatchLapDidChange(stopwatchCurrentLap, false);
		};
		/*
		    Resets all laps, invokes lapDidChange
		  */
		this.stopwatchResetLaps = function() {
			stopwatchLaps = [];
			stopwatchLapDidChange(null, true);
		};
		/*
		    resets the stopwatch
		  */
		this.reset = function() {
			this.stop();
			this.stopwatchResetLaps();
			stopwatchInitializeTimer(0);
		};
		/* 
		    Initializing stopwatchNetTime if provided via options
		  */
		if(stopwatchOptions.stopwatchNetTime != null) {
			stopwatchNetTime = stopwatchOptions.stopwatchNetTime;
			stopwatchInitializeTimer(stopwatchNetTime);
		}
	});
	var watch = document.getElementById("stopwatch-time");
	var stopwatchLapContainer = document.getElementById("stopwatch-list");
	var stopwatchLapCount = 0;
	window.stopwatchUpdateWatch = function(stopwatchMilitaryTime) {
		watch.innerHTML = stopwatchMilitaryTime;
	};
	window.stopwatchUpdateLap = function(stopwatchLapSplitString, stopwatchIsReset) {
		if(stopwatchIsReset) {
			stopwatchLapContainer.innerHTML = "";
			stopwatchLapCount = 0;
		} else {
			var stopwatchli = document.createElement("li");
			stopwatchLapCount += 1;
			stopwatchli.innerHTML = "<span>#" + stopwatchLapCount + "</span>" + watch.innerHTML;
			stopwatchLapContainer.appendChild(stopwatchli);
		}
	};
	var replaceClass = function(ele, class1, class2) {
		if(ele.className.indexOf(class1) > 1) {
			ele.className = ele.className.replace(class1, class2);
		}
	};
	var stopwatch = new StopWatch({
		stopwatchCallback: "stopwatchUpdateWatch",
		stopwatchLapCallback: "stopwatchUpdateLap",
	});
	var stopwatchStartStopButton = document.getElementById("stopwatch-start-stop");
	var stopwatchResetButton = document.querySelector("#stopwatch-reset");
	var stopwatchLapsButton = document.querySelector("#stopwatch-laps");
	var stopwatchTimerSetHours = document.querySelector(".stopwatch-hours");
	var stopwatchTimerSetMinutes = document.querySelector(".stopwatch-minutes");
	var stopwatchTimerSetSeconds = document.querySelector(".stopwatch-seconds");
	var stopwatchTimerSetMilliseconds = document.querySelector(".stopwatch-milliseconds");
	var stopwatchStartStopButtonEvent = function() {
		if(!stopwatch.stopwatchRunning()) {
			replaceClass(stopwatchStartStopButton, "stopwatch-start", "stopwatch-stop");
			stopwatchStartStopButton.innerHTML = "⏸︎";
			stopwatchStartStopButton.setAttribute("title", "Pause");
			stopwatch.start();
		} else {
			replaceClass(stopwatchStartStopButton, "stopwatch-stop", "stopwatch-start");
			stopwatchStartStopButton.innerHTML = "⏵︎";
			stopwatchStartStopButton.setAttribute("title", "Start");
			stopwatch.stop();
		}
	};
	var stopwatchResetButtonEvent = function() {
		if(!stopwatch.stopwatchRunning()) {} else {
			stopwatch.reset();
		}
	};
	var stopwatchLapsButtonEvent = function() {
		if(!stopwatch.stopwatchRunning()) {} else {
			stopwatch.stopwatchAddLap();
		}
	};

	function stopwatchLapsScroll() {
		document.querySelector("#stopwatch-list").scrollTo(0, document.querySelector("#stopwatch-list").scrollHeight);
	}
	stopwatchStartStopButton.addEventListener("click", stopwatchStartStopButtonEvent);
	stopwatchResetButton.addEventListener("click", stopwatchResetButtonEvent);
	stopwatchLapsButton.addEventListener("click", stopwatchLapsButtonEvent);
	stopwatchLapsButton.addEventListener("click", stopwatchLapsScroll);
}

function RNG() {
	var lastMin = 1;
	var lastMax = 100;

	function rollNumber() {
		addIteration();
		var iteration = document.querySelector("#rng .iterations input").value;
		for(var i = 0; i < iteration; i++) {
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
					if(currentDate - startDate > durationMax) {
						stopcount();
					} else if(random1 == random2 && currentDate - startDate > durationMin) {
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
		for(var q = 0; q < lis.length; q++) {
			themin.push(lis[q].lastElementChild.previousElementSibling.firstChild.value);
			themax.push(lis[q].lastElementChild.firstChild.value);
			lis[q].remove();
		}
		var outs = document.querySelectorAll("#rng .result div");
		for(var q = 0; q < outs.length; q++) {
			outs[q].remove();
		}
		for(var i = 0; i < iteration; i++) {
			var x = i + 1;
			var li = document.createElement("li");
			var it = document.createElement("div");
			var itText = document.createElement("p");
			var min = document.createElement("div");
			var minInput = document.createElement("input");
			var max = document.createElement("div");
			var maxInput = document.createElement("input");
			li.setAttribute("name", x);
			it.setAttribute("name", "it");
			itText.innerText = "#" + x;
			itText.setAttribute("title", "Iteration");
			min.setAttribute("name", "min");
			minInput.setAttribute("type", "number");
			minInput.setAttribute("title", "Min");
			minInput.setAttribute("autocomplete", "off");
			if(themin[i] != undefined) {
				minInput.setAttribute("value", themin[i]);
			} else if(lastMin != undefined) {
				minInput.setAttribute("value", lastMin);
			} else {
				minInput.setAttribute("value", "1");
			}
			max.setAttribute("name", "max");
			maxInput.setAttribute("type", "number");
			maxInput.setAttribute("title", "Max");
			maxInput.setAttribute("autocomplete", "off");
			if(themax[i] != undefined) {
				maxInput.setAttribute("value", themax[i]);
			} else if(lastMax != undefined) {
				maxInput.setAttribute("value", lastMax);
			} else {
				maxInput.setAttribute("value", "100");
			}
			minInput.setAttribute("min", "1");
			minInput.setAttribute("max", parseInt(maxInput.value) - 1);
			maxInput.setAttribute("min", parseInt(minInput.value) + 1);
			maxInput.setAttribute("max", "1000");
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
		document.querySelector("#rng ul").scrollTo(0, document.querySelector("#rng ul").scrollHeight);
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

function timerSelector() {
	if(document.querySelector("#timerselector1").checked == true) {
		document.querySelector("#stopwatch-outer").style.display = "inline-block";
		document.querySelector("#countdown-outer").style.display = "none";
		document.querySelector("#countdown-reset").click();
	}
	if(document.querySelector("#timerselector2").checked == true) {
		document.querySelector("#stopwatch-outer").style.display = "none";
		document.querySelector("#countdown-outer").style.display = "inline-block";
		document.querySelector("#stopwatch-reset").click();
	}
}