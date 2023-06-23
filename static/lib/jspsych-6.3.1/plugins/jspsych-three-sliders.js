/**
 * jspsych-image-slider-response
 * a jspsych plugin for free response survey questions
 *
 * Josh de Leeuw
 *
 * documentation: docs.jspsych.org
 *
 */

jsPsych.plugins['three-sliders'] = (function() {

  var plugin = {};

  //jsPsych.pluginAPI.registerPreload('new-slider-test', 'stimulus', 'image');

  plugin.info = {
    name: 'three-sliders',

    description: '',

    parameters: {
      text: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
        pretty_name: 'Text for stimulus',
        default: "<h1>Header</h1><p>Some more text.</p>",
        description: "What people read before using slider.",
      },

      accuracy_feedback_label: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
        pretty_name: 'Accuracy Feedback label',
        default: "Estimate:",
        description: "What people read before using slider.",
      },
      accuracy_feedback_label2: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
        pretty_name: 'Accuracy Feedback label 2',
        default: "Estimate:",
        description: "What people read before using slider.",
      },
      accuracy_feedback_label3: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
        pretty_name: 'Accuracy Feedback label 3',
        default: "Estimate:",
        description: "What people read before using slider.",
      },

      proposition: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
        pretty_name: 'Proposition',
        default: "Something is true or false",
        description: "The thing that people are rating the probability of.",
      },

      min: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Min slider',
        default: 0,
        description: 'Sets the minimum value of the slider.'
      },
      max: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Max slider',
        default: 100,
        description: 'Sets the maximum value of the slider',
      },

      start: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Slider starting value',
        default: 50,
        description: 'Sets the starting value of the slider',
      },

      step: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Step',
        default: 5,
        description: 'Sets the step of the slider'
      },

      button_label: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Button label',
        default:  'Continue',
        array: false,
        description: 'Label of the button to advance.'
      },
      require_movement: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Require movement',
        default: true,
        description: 'If true, the participant will have to move the slider before continuing.'
      },
      prompt: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Prompt',
        default: null,
        description: 'Any content here will be displayed below the slider.'
      },
      prompt2: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Prompt2',
        default: null,
        description: 'Any content here will be displayed below the slider.'
      },
      prompt3: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Prompt3',
        default: null,
        description: 'Any content here will be displayed below the slider.'
      },

      stimulus_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Stimulus duration',
        default: null,
        description: 'How long to hide the stimulus.'
      },
      trial_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Trial duration',
        default: null,
        description: 'How long to show the trial.'
      },
      response_ends_trial: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Response ends trial',
        default: true,
        description: 'If true, trial will end when user makes a response.'
      },
    }
  }

  plugin.trial = function(display_element, trial) {

    var html = '<div id="jspsych-new-slider-test-wrapper", margin: 600px;>';
    
    html += '<div id="jspsych-single-slider-stimulus">';
    html += trial.text;
    html += '</div>';

    // NoUISlider       # 1
    html += "<hr>";
    if (trial.prompt !== null){
      html += trial.prompt + "<br><br>";
    }
    html += 'Percent chance that ' + trial.proposition + ':';
    html += '<div id="range"></div>';
    // End No UI Slider 

    html += '<br>'

    // NoUISlider       # 2
    html += "<hr>";
    if (trial.prompt2 !== null){
      html += trial.prompt2 + "<br><br>";
    }
    html += 'Percent chance that ' + trial.proposition + ':';
    html += '<div id="range_two"></div>';
    // End No UI Slider 

    // NoUISlider       # 3
    html += "<hr>";
    if (trial.prompt3 !== null){
      html += trial.prompt3 + "<br><br>";
    }
    html += 'Percent chance that ' + trial.proposition + ':';
    html += '<div id="range_three"></div>';
    // End No UI Slider 


    // add submit button
    html += '<button id="jspsych-image-slider-response-next" class="jspsych-btn" '+ (trial.require_movement ? "disabled" : "") + '>'+trial.button_label+'</button>';

    display_element.innerHTML = html;

    ////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////
    
    var pipFormats = {'0':'0%<br>chance of divorce',
        '10':'10%','20':'20%','30':'30%','40':'40%',
        '50':'50%',
        '60':'60%','70':'70%', '80':'80%','90':'90%',
        '100':'100%<br>chance of divorce'};

    var range = document.getElementById('range');

    noUiSlider.create(range, {
        range: { // Slider can select '0' to '100'
            'min': trial.min,
            'max': trial.max
        },
        step: 5, // Slider moves in increments of '10'
        start: [trial.start],
        // connect: true,
        // margin: 5, // Handles must be more than '0' apart
        behaviour: 'tap-drag', 
        pips: { // Show a scale with the slider
            mode: 'values',
            values: [0,10,20,30,40,50,60,70,80,90,100],
            format: {
              to: function(a){
              return pipFormats[a];
            }
          }
        }
    });

    var range_two = document.getElementById('range_two');

    noUiSlider.create(range_two, {
        range: { // Slider can select '0' to '100'
            'min': trial.min,
            'max': trial.max
        },
        step: 5, // Slider moves in increments of '10'
        start: [trial.start],
        // connect: true,
        // margin: 5, // Handles must be more than '0' apart
        behaviour: 'tap-drag', 
        pips: { // Show a scale with the slider
            mode: 'values',
            values: [0,10,20,30,40,50,60,70,80,90,100],
            format: {
              to: function(a){
              return pipFormats[a];
            }
          }
        }
    });

    var range_three = document.getElementById('range_three');

    noUiSlider.create(range_three, {
        range: { // Slider can select '0' to '100'
            'min': trial.min,
            'max': trial.max
        },
        step: 5, // Slider moves in increments of '10'
        start: [trial.start],
        // connect: true,
        // margin: 5, // Handles must be more than '0' apart
        behaviour: 'tap-drag', 
        pips: { // Show a scale with the slider
            mode: 'values',
            values: [0,10,20,30,40,50,60,70,80,90,100],
            format: {
              to: function(a){
              return pipFormats[a];
            }
          }
        }
    });


    ////////////////////////////////////////////////////////////////////////


    range.getElementsByClassName('noUi-origin')[0].style.opacity = "0.50";
    range_two.getElementsByClassName('noUi-origin')[0].style.opacity = "0.50";
    range_three.getElementsByClassName('noUi-origin')[0].style.opacity = "0.50";

    range.getElementsByClassName('noUi-value-large')[0].style.top = "0%";
    range_two.getElementsByClassName('noUi-value-large')[0].style.top = "0%";
    range_three.getElementsByClassName('noUi-value-large')[0].style.top = "0%";

    range.getElementsByClassName('noUi-value-large')[10].style.top = "0%";
    range_two.getElementsByClassName('noUi-value-large')[10].style.top = "0%";
    range_three.getElementsByClassName('noUi-value-large')[10].style.top = "0%";

    var connect_h = range.querySelectorAll('.noUi-handle');
    var connect_h2 = range_two.querySelectorAll('.noUi-handle');
    var connect_h3 = range_three.querySelectorAll('.noUi-handle');
    var classes_h = ['h-2-color', 'h-1-color', 'h-3-color', 'h-4-color', 'h-5-color'];

    for (var i = 0; i < connect_h.length; i++) {
        connect_h[i].classList.add(classes_h[i]);
        connect_h2[i].classList.add(classes_h[i]);
        connect_h3[i].classList.add(classes_h[i]);
    }

    range.style.width = '500px';
    range.style.margin = '30 30 70px';
    range_two.style.width = '500px';
    range_two.style.margin = '30 30 70px';
    range_three.style.width = '500px';
    range_three.style.margin = '30 30 70px';

    ////////////////////////////////////////////////////////////////////////

    var valuesDivs = [
        document.getElementById('range-value-0'),
        document.getElementById('range_two-value-0'),
        document.getElementById('range_three-value-0')
    ];

    range.noUiSlider.on('update', function (values, handle) {
      valuesDivs[0].innerHTML = Math.round(values[handle]);
    });

    range_two.noUiSlider.on('update', function (values, handle) {
      valuesDivs[1].innerHTML = Math.round(values[handle]);
    });

    range_three.noUiSlider.on('update', function (values, handle) {
      valuesDivs[2].innerHTML = Math.round(values[handle]);
    });

    ////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////

    var response = {
      rt: null,
      accurate: null,
    };

    var range1_moved = false;
    var range2_moved = false;
    var range3_moved = false;

    if(trial.require_movement){
      range.noUiSlider.on('change', function(){
        range.getElementsByClassName('noUi-origin')[0].style.opacity = "1";
        range1_moved = true;
        if(range1_moved & range2_moved) {
          display_element.querySelector('#jspsych-image-slider-response-next').disabled = false;
        }
      })
      range_two.noUiSlider.on('change', function(){
        range_two.getElementsByClassName('noUi-origin')[0].style.opacity = "1";
        range2_moved = true;
        if(range1_moved & range2_moved) {
          display_element.querySelector('#jspsych-image-slider-response-next').disabled = false;
        }
      })
      range_three.noUiSlider.on('change', function(){
        range_three.getElementsByClassName('noUi-origin')[0].style.opacity = "1";
        range2_moved = true;
        if(range1_moved & range2_moved) {
          display_element.querySelector('#jspsych-image-slider-response-next').disabled = false;
        }
      })
    }

    display_element.querySelector('#jspsych-image-slider-response-next').addEventListener('click', function() {
      // measure response time
      var endTime = performance.now();
          response.rt = endTime - startTime;
          response.range1 = range.noUiSlider.get();
          response.range2 = range_two.noUiSlider.get();
          response.range3 = range_three.noUiSlider.get();
      if(trial.response_ends_trial){
        end_trial();
      } else {
        display_element.querySelector('#jspsych-image-slider-response-next').disabled = true;
      }

    });

    ////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////

    function end_trial(){

      jsPsych.pluginAPI.clearAllTimeouts();

      // save data
      var trialdata = {
        "rt": response.rt,
        "range1": response.range1,
        "range2": response.range2,
        "range3": response.range3,
      };

      display_element.innerHTML = '';

      // next trial
      jsPsych.finishTrial(trialdata);
    }

    if (trial.stimulus_duration !== null) {
      jsPsych.pluginAPI.setTimeout(function() {
        display_element.querySelector('#jspsych-image-slider-response-stimulus').style.visibility = 'hidden';
      }, trial.stimulus_duration);
    }

    // end trial if trial_duration is set
    if (trial.trial_duration !== null) {
      jsPsych.pluginAPI.setTimeout(function() {
        end_trial();
      }, trial.trial_duration);
    }

    ////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////

    var startTime = performance.now();
  };

  return plugin;
})();
