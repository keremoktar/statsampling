var practice_trial_alert = `<div class="alert alert-warning hr">
    <p><b>This is a practice trial. You will recieve feedback.</b><br></div><br>`

var display_preamble_likert = `
    <p>In the experiment you will practice using a “relation scale” created by the paleontologists. Paleontologists use the 
    relation scale to determine how a newly discovered dinosaur is related to two well-known dinosaurs.<br><br>
    Before proceeding to the experiment, you will <b>practice with a relation scale for colors.</b><br>
    The scale has two labels on it: one for Color 1 and one for Color 2. 
    The space between the two colors is called the “middle interval”. Color 3 goes in the middle interval if it looks like a mixture of Color 1 and Color 2. 
    To the left of Color 1 and to the right of Color 2 are the “extreme intervals”. 
    Color 3 goes in the left extreme interval if it looks like a more extreme version of Color 1, 
    or in the right extreme interval if it looks like a more extreme version of Color 2. 
    You will be shown Color 1 and Color 2 and asked to pick the location of Color 3 on this scale.<br><br>
    To proceed to the practice trial, select a button in the left extreme interval and click the "Submit" button.
  `


var color_scale_instructions = {
  type: "html-likert-response",
  stimulus: function() {return practice_trial_alert + display_preamble_likert},
  labels: ["", "", "Color 1", "", "", "", "Color 2", "", ""],
  data: {
    task: 'training_slider_color'
  },
  button_label: "Submit",
  on_finish: function(data) { //storing information about subj response to give feedback in next trial
    correct_slider_val = jsPsych.timelineVariable("dino_slider")
    if ((data.response >= correct_slider_val-5) && (data.response <= correct_slider_val+5)) {
      data.correct = true;
    } else {
      data.correct = false; 
    }
  }
}

var color_scale_practice = {
  type: "html-likert-response",
  stimulus: function(){
    display_preamble_likert = `<div class="alert alert-warning hr">
      <p><b>This is a practice trial. You will recieve feedback.</b><br></div><br>
      <p>In the experiment you will practice using a “relation scale” created by the paleontologists. Paleontologists use the 
      relation scale to determine how a newly discovered dinosaur is related to two well-known dinosaurs.<br><br>
      Before proceeding to the experiment, you will <b>practice with a relation scale for colors.</b><br>
      The scale has two labels on it: one for Color 1 and one for Color 2. 
      The space between the two colors is called the “middle interval”. Color 3 goes in the middle interval if it looks like a mixture of Color 1 and Color 2. 
      To the left of Color 1 and to the right of Color 2 are the “extreme intervals”. 
      Color 3 goes in the left extreme interval if it looks like a more extreme version of Color 1, 
      or in the right extreme interval if it looks like a more extreme version of Color 2. 
      You will be shown Color 1 and Color 2 and asked to pick the location of Color 3 on this scale.<br><br>
      To proceed to the practice trial, select a button in the left extreme interval and click the "Submit" button.
    `;
    return display_preamble_likert
  },
  labels: ["", "", "Color 1", "", "", "", "Color 2", "", ""],
  data: {
    task: 'training_slider_color'
  },
  button_label: "Submit",
  on_finish: function(data) { //storing information about subj response to give feedback in next trial
    correct_slider_val = jsPsych.timelineVariable("dino_slider")
    if ((data.response >= correct_slider_val-5) && (data.response <= correct_slider_val+5)) {
      data.correct = true;
    } else {
      data.correct = false; 
    }
  }


}

var color_scale_feedback = {

}

var train_trial_likert = {
  type: "html-slider-response",
  stimulus: function(){
    display_preamble_likert = `<div class="alert alert-warning hr">
      <p><b>This is a practice trial. You will recieve feedback.</b><br></div><br>
      <p>Now you will need to indicate where Dinosaur 3 belongs on a sliding scale.`;
    response_preamble_likert = `Where does this dinosaur fall on the scale?`;
    var html = dino_display_html('static/images/test-dino-1.svg', 'static/images/test-dino-2.svg', 
      jsPsych.timelineVariable('dino_filepath'), display_preamble_likert, response_preamble_likert, 
      ['X', 'Y', 'Z'], [[.25, .25, .5],[.75, .25, 0]])
      return html;
  },
  labels: [" ", "Dino 1", " ", "Dino 2", " "],
  data: {
    task: 'training_slider',
    target_dino: jsPsych.timelineVariable('dino_num')
  },
  button_label: "Submit",
  on_finish: function(data) { //storing information about subj response to give feedback in next trial
    correct_slider_val = jsPsych.timelineVariable("dino_slider")
    if ((data.response >= correct_slider_val-5) && (data.response <= correct_slider_val+5)) {
      data.correct = true;
    } else {
      data.correct = false; 
    }
  }
}

var train_trial_likert_feedback = {
  type: 'html-button-response',
  stimulus: function(){
    var last_trial_correct = jsPsych.data.get().last(1).values()[0].correct;
    var last_trial_target_dino = jsPsych.data.get().last(1).values()[0].correct;
    var feedback_string = "";
    if (last_trial_correct) {
      feedback_string = `
      <div class="alert alert-success"><b>That is correct!</b><p>Because dinosaur ${jsPsych.timelineVariable('dino_num')} 
      and dinosaur 3 are very similar, the slider should be positioned directly over the label "Dino ${jsPsych.timelineVariable('dino_num')}"</b>.
      </div>`;
    } else {
      feedback_string = `
      <div class="alert alert-danger"><b>That is incorrect.</b><p>Because dinosaur ${jsPsych.timelineVariable('dino_num')} 
      and dinosaur 3 are very similar, the slider should be positioned directly over the label "Dino ${jsPsych.timelineVariable('dino_num')}"</b>.
      </div>`;
    }
    dino_display_string = dino_display_html('static/images/test-dino-1.svg', 'static/images/test-dino-2.svg', 
      dino_3_filepath = jsPsych.timelineVariable('dino_filepath'), ``, feedback_string, 
      ['X', 'Y', 'Z'], [[.25, .25, .5],[.75, .25, 0]]);

    return dino_display_string
  },
  choices: ['Next']
}




var test_trial_c1_likert = {
  type: "survey-likert",
  preamble: function(){
      response_preamble = `<p>Where does this dinosaur fall on the scale?</p>`
      var html = dino_display_html('static/images/c1-d5.svg', 'static/images/c1-d14.svg', 
        jsPsych.timelineVariable('dino_filepath'), ``, response_preamble, 
        ['A', 'B', 'C'], soft_labels[subj_label_pair])
      return html;
  },
  questions: [
    {prompt: "", labels: likert_scale_dinos},
  ],
  data: {
    task: 'testing_c1_likert',
    target_dino: jsPsych.timelineVariable('dino_num')
  },
  button_label: "Submit",
  post_trial_gap: 150
}




var test_trial_c2_likert = {
  type: "survey-likert",
  preamble: function(){
      var html = 


      `
      <div class="flexbox-container">
        <div class="flexbox-item">
          <p>Dinosaur 1</p>
          <img src="static/images/c2-d5.svg"</img>
          <table class="soft-label-table">
            <tr>
              <th>Dinosaur<br>Species</th>
              <th>Percent<br>Related</th>
            </tr>
            <tr>
              <td>D</td>
              <td>${soft_labels[subj_label_pair][0][0] * 100}%</td>
            </tr>
            <tr>
              <td>E</td>
              <td>${soft_labels[subj_label_pair][0][1] * 100}%</td>
            </tr>
            <tr>
              <td>F</td>
              <td>${soft_labels[subj_label_pair][0][2] * 100}%</td>
            </tr>
          </table>
        </div>

        <div class="flexbox-item">
          <p>Dinosaur 2</p>
          <img src="static/images/c2-d14.svg"</img>
          <table class="soft-label-table">
            <tr>
              <th>Dinosaur<br>Species</th>
              <th>Percent<br>Related</th>
            </tr>
            <tr>
              <td>D</td>
              <td>${soft_labels[subj_label_pair][1][0] * 100}%</td>
            </tr>
            <tr>
              <td>E</td>
              <td>${soft_labels[subj_label_pair][1][1] * 100}%</td>
            </tr>
            <tr>
              <td>F</td>
              <td>${soft_labels[subj_label_pair][1][2] * 100}%</td>
            </tr>
          </table>
        </div>
      </div>
      <p>Dinosaur 3</p>
      <img src="${jsPsych.timelineVariable('dino_filepath')}"</img>
      <br><br>
      <p>Where does this dinosaur fall on the scale?</p>
        `;
      return html;
  },
  questions: [
    {prompt: "", labels: likert_scale_dinos},
  ],
  data: {
    task: 'testing_c1_likert',
    target_dino: jsPsych.timelineVariable('dino_num')
  },
  button_label: "Submit",
  post_trial_gap: 150
}