var test_block_c1_prototype_estimation = {
  type: "survey-likert",
  preamble: function(){
      response_preamble = `<p>Where on the scale would you recommend the archaeologists place each species?</p>`
      var html = dino_display_html('static/images/c1-d5.svg', 'static/images/c1-d14.svg', 
        jsPsych.timelineVariable('dino_filepath'), ``, response_preamble, 
        ['A', 'B', 'C'], soft_labels[subj_label_pair])
      return html;
  },
  questions: [
    {prompt: "Species A", labels: likert_scale_dinos, required: true},
    {prompt: "Species B", labels: likert_scale_dinos, required: true},
    {prompt: "Species C", labels: likert_scale_dinos, required: true},
  ]
}

var test_block_c2_prototype_estimation = {
  type: "survey-likert",
  preamble: function(){
      response_preamble = `<p>Where on the scale would you recommend the archaeologists place each species?</p>`
      var html = dino_display_html('static/images/c1-d5.svg', 'static/images/c1-d14.svg', 
        jsPsych.timelineVariable('dino_filepath'), ``, response_preamble, 
        ['D', 'E', 'F'], soft_labels[subj_label_pair])
      return html;
  },
  questions: [
    {prompt: "Species D", labels: likert_scale_dinos, required: true},
    {prompt: "Species E", labels: likert_scale_dinos, required: true},
    {prompt: "Species F", labels: likert_scale_dinos, required: true},
  ]
}