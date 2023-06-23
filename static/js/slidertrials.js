var train_trial_slider = {
  type: "html-slider-response",
  stimulus: function(){
      var html = `
      <div class="alert alert-warning hr">
        <p><b>This is a practice trial. You will recieve feedback.</b><br></div><br>
      <p>Now you will need to indicate where Dinosaur 3 belongs on a sliding scale.
      <div class="flexbox-container">
        <div class="flexbox-item">
          <p>Dinosaur 1</p>
          <img src="static/images/test-dino-1.svg"</img>
          <table class="soft-label-table">
            <tr>
              <th>Dinosaur<br>Species</th>
              <th>Percent<br>Related</th>
            </tr>
            <tr>
              <td>X</td>
              <td>25%</td>
            </tr>
            <tr>
              <td>Y</td>
              <td>25%</td>
            </tr>
            <tr>
              <td>Z</td>
              <td>50%</td>
            </tr>
          </table>
        </div>
        <div class="flexbox-item">
          <p>Dinosaur 2</p>
          <img src="static/images/test-dino-2.svg"</img>
          <table class="soft-label-table">
            <tr>
              <th>Dinosaur<br>Species</th>
              <th>Percent<br>Related</th>
            </tr>
            <tr>
              <td>X</td>
              <td>75%</td>
            </tr>
            <tr>
              <td>Y</td>
              <td>25%</td>
            </tr>
            <tr>
              <td>Z</td>
              <td>0%</td>
            </tr>
          </table>
        </div>
      </div>
      <br>
      <p>Dinosaur 3</p>
      <img src="${jsPsych.timelineVariable('dino_filepath')}"></img>
      <br>
      <p>Where does this dinosaur fall on the scale?</p>
        `;
      return html;
  },
  labels: [" ", "Dino 1", " ", "Dino 2", " "],
  data: {
    task: 'training_slider',
    target_dino: jsPsych.timelineVariable('dino_num')
  },
  prompt:`
    Dinosaurs that look like dinosaur 1 should be near the "Dino 1" label on this line.<br>
    Dinosaurs that look like dinosaur 2 should be near dinosaur 2.<br>
    Dinosaurs that look like a mix of both should be in the middle.<br>
    <b>Note that some dinosaurs may be further left on the line than dinosaur 1, and some may be further right than dinosaur 2.</b><br>
    For example, a dinosaur that looks similar to dinosaur 1 and completely unlike dinosaur 2, should be to the left of dinosaur 1.<br><br>
  `,
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

var train_trial_slider_feedback = {
  type: 'html-button-response',
  stimulus: function(){
    var last_trial_correct = jsPsych.data.get().last(1).values()[0].correct;
    var last_trial_target_dino = jsPsych.data.get().last(1).values()[0].correct;
    var feedback_string = "";
    if (last_trial_correct) {
      feedback_string = `
      <div class="alert alert-success"><b>That is correct!</b><p>Because dinosaur ${jsPsych.timelineVariable('dino_num')} 
      and dinosaur 3 are the same, the slider should be positioned directly over the label "Dino ${jsPsych.timelineVariable('dino_num')}"</b>.
      </div>`;
    } else {
      feedback_string = `
      <div class="alert alert-danger"><b>That is incorrect.</b><p>Because dinosaur ${jsPsych.timelineVariable('dino_num')} 
      and dinosaur 3 are the same, the slider should be positioned directly over the label "Dino ${jsPsych.timelineVariable('dino_num')}"</b>.
      </div>`;
    }
    dino_display_string = `
      <div class="flexbox-container">
          <div class="flexbox-item">
            <p>Dinosaur 1</p>
            <img src="static/images/test-dino-1.svg"</img>
            <table class="soft-label-table">
              <tr>
                <th>Dinosaur<br>Species</th>
                <th>Percent<br>Related</th>
              </tr>
              <tr>
                <td>X</td>
                <td>25%</td>
              </tr>
              <tr>
                <td>Y</td>
                <td>25%</td>
              </tr>
              <tr>
                <td>Z</td>
                <td>50%</td>
              </tr>
            </table>
          </div>
          <div class="flexbox-item">
            <p>Dinosaur 2</p>
            <img src="static/images/test-dino-2.svg"</img>
            <table class="soft-label-table">
              <tr>
                <th>Dinosaur<br>Species</th>
                <th>Percent<br>Related</th>
              </tr>
              <tr>
                <td>X</td>
                <td>75%</td>
              </tr>
              <tr>
                <td>Y</td>
                <td>25%</td>
              </tr>
              <tr>
                <td>Z</td>
                <td>0%</td>
              </tr>
            </table>
          </div>
        </div>
        <br>
        <p>Dinosaur 3</p>
        <img src="${jsPsych.timelineVariable('dino_filepath')}"></img>`
    return dino_display_string + feedback_string
  },
  choices: ['Next']
}

var test_trial_c1_slider = {
  type: "html-slider-response",
  stimulus: function(){
      var html = `
      <div class="flexbox-container">
        <div class="flexbox-item">
          <p>Dinosaur 1</p>
          <img src="static/images/c1-d6.svg"</img>
          <table class="soft-label-table">
            <tr>
              <th>Dinosaur<br>Species</th>
              <th>Percent<br>Related</th>
            </tr>
            <tr>
              <td>A</td>
              <td>${soft_labels[subj_label_pair][0][0] * 100}%</td>
            </tr>
            <tr>
              <td>B</td>
              <td>${soft_labels[subj_label_pair][0][1] * 100}%</td>
            </tr>
            <tr>
              <td>C</td>
              <td>${soft_labels[subj_label_pair][0][2] * 100}%</td>
            </tr>
          </table>
        </div>
        <div class="flexbox-item">
          <p>Dinosaur 2</p>
          <img src="static/images/c1-d16.svg"</img>
          <table class="soft-label-table">
            <tr>
              <th>Dinosaur<br>Species</th>
              <th>Percent<br>Related</th>
            </tr>
            <tr>
              <td>A</td>
              <td>${soft_labels[subj_label_pair][1][0] * 100}%</td>
            </tr>
            <tr>
              <td>B</td>
              <td>${soft_labels[subj_label_pair][1][1] * 100}%</td>
            </tr>
            <tr>
              <td>C</td>
              <td>${soft_labels[subj_label_pair][1][2] * 100}%</td>
            </tr>
          </table>
        </div>
      </div>
      <p>Dinosaur 3</p>
      <img src="${jsPsych.timelineVariable('dino_filepath')}"</img>
      <br>
      <p>Where does this dinosaur fall on the scale?</p>
        `;
      return html;
  },
  labels: [" ", "Dino 1", " ", "Dino 2", " "],
  data: {
    task: 'testing_c1_slider',
    target_dino: jsPsych.timelineVariable('dino_num')
  },
  button_label: "Submit",
  post_trial_gap: 150
}

var test_trial_c2_slider = {
  type: "html-slider-response",
  stimulus: function(){
      var html = `
      <div class="flexbox-container">
        <div class="flexbox-item">
          <p>Dinosaur 1</p>
          <img src="static/images/c2-d6.svg"</img>
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
          <img src="static/images/c2-d16.svg"</img>
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
      <br>
      <p>Where does this dinosaur fall on the scale?</p>
        `;
      return html;
  },
  labels: [" ", "Dino 1", " ", "Dino 2", " "],
  data: {
    task: 'testing_c2_slider',
    target_dino: jsPsych.timelineVariable('dino_num')
  },
  button_label: "Submit",
  post_trial_gap: 150
}