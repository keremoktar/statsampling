async function initializeExperiment() {
  LOG_DEBUG('initializeExperiment');

///////////
// Setup //
///////////

function drawProgressBar(msg) {
    document.querySelector('.jspsych-display-element').insertAdjacentHTML('afterbegin',
      '<div id="jspsych-progressbar-container">'+
      '<span>'+
      msg+ 
      '</span>'+
      '<div id="jspsych-progressbar-outer">'+
        '<div id="jspsych-progressbar-inner"></div>'+
      '</div></div>');
}

function button_display_html() {
  return `<button class="jspsych-btn" style="
    margin-top: 20px; position: relative;">
    %choice%</button>`
}

let all_domains = ["Moral", "Politics", "Religion", "Science"]
var subj_domain = all_domains[condition] //condition is randomly set from [0, CONDITION] in config.txt 

jsPsych.data.addProperties({
  condition: condition,
  domain: subj_domain
})

/////////////////////////////
//    Importing Stimuli    //
/////////////////////////////

let stimuli =
[
 {
   "Issue": "Eating Meat",
   "Domain": "Moral",
   "Item": "eating meat is always immoral",
   "Agree": 7,
   "Disagree": 79,
   "Disagreement Level": "high",
   "Source": "https://docs.cdn.yougov.com/uta5gqhscr/Morality.pdf"
 },
 {
   "Issue": "Revenge Morality",
   "Domain": "Moral",
   "Item": "it is always morally acceptable to take revenge from someone who has deliberately wronged you",
   "Agree": 8,
   "Disagree": 79,
   "Disagreement Level": "high",
   "Source": "https://docs.cdn.yougov.com/uta5gqhscr/Morality.pdf"
 },
 {
   "Issue": "Cheating Morality",
   "Domain": "Moral",
   "Item": "cheating in a relationship is never immoral",
   "Agree": 9,
   "Disagree": 82,
   "Disagreement Level": "high",
   "Source": "https://docs.cdn.yougov.com/uta5gqhscr/Morality.pdf"
 },
 {
   "Issue": "Hungry Steal",
   "Domain": "Moral",
   "Item": "it is always acceptable for someone to steal food if they cannot afford it",
   "Agree": 10,
   "Disagree": 78,
   "Disagreement Level": "high",
   "Source": "https://docs.cdn.yougov.com/uta5gqhscr/Morality.pdf"
 },
 {
   "Issue": "Moral Taint",
   "Domain": "Moral",
   "Item": "people who have done very bad things in their life (for example, a terrible crime) can never be genuinely good people",
   "Agree": 11,
   "Disagree": 75,
   "Disagreement Level": "high",
   "Source": "https://docs.cdn.yougov.com/uta5gqhscr/Morality.pdf"
 },
 {
   "Issue": "Alcohol Morality",
   "Domain": "Moral",
   "Item": "in general, drinking alcohol is not morally acceptable",
   "Agree": 12,
   "Disagree": 86,
   "Disagreement Level": "high",
   "Source": "Gallup Organization (2020). Gallup Poll, Question 20 [31117397.00034]. Gallup Organization. Cornell University, Ithaca, NY: Roper Center for Public Opinion Research."
 },
 {
   "Issue": "Killing Justification",
   "Domain": "Moral",
   "Item": "killing a person can never be justified",
   "Agree": 14,
   "Disagree": 78,
   "Disagreement Level": "high",
   "Source": "https://docs.cdn.yougov.com/uta5gqhscr/Morality.pdf"
 },
 {
   "Issue": "Moral Universalism",
   "Domain": "Moral",
   "Item": "moral values are fundamentally the same everywhere",
   "Agree": 15,
   "Disagree": 75,
   "Disagreement Level": "high",
   "Source": "https://docs.cdn.yougov.com/uta5gqhscr/Morality.pdf"
 },
 {
   "Issue": "Overall Morality",
   "Domain": "Moral",
   "Item": "the state of moral values in the country as a whole is getting better",
   "Agree": 18,
   "Disagree": 78,
   "Disagreement Level": "medium",
   "Source": "Gallup Organization (2022). Gallup Poll, Question 23 [31119602.00022]. Gallup Organization. Cornell University, Ithaca, NY: Roper Center for Public Opinion Research."
 },
 {
   "Issue": "Suicide Morality",
   "Domain": "Moral",
   "Item": "in general, suicide is morally acceptable",
   "Agree": 22,
   "Disagree": 72,
   "Disagreement Level": "medium",
   "Source": "Gallup Organization (2022). Gallup Poll, Question 23 [31119602.00022]. Gallup Organization. Cornell University, Ithaca, NY: Roper Center for Public Opinion Research."
 },
 {
   "Issue": "Unmarried Sex",
   "Domain": "Moral",
   "Item": "sex between an unmarried man and woman is generally immoral",
   "Agree": 23,
   "Disagree": 76,
   "Disagreement Level": "medium",
   "Source": "https://news.gallup.com/poll/117328/Marriage.aspx"
 },
 {
   "Issue": "Polygamy Moral",
   "Domain": "Moral",
   "Item": "a married person having more than one spouse at the same time is morally acceptable",
   "Agree": 23,
   "Disagree": 75,
   "Disagreement Level": "medium",
   "Source": "https://news.gallup.com/poll/117328/Marriage.aspx"
 },
 {
   "Issue": "Gambling Morality",
   "Domain": "Moral",
   "Item": "in general, gambling is morally wrong",
   "Agree": 25,
   "Disagree": 71,
   "Disagreement Level": "medium",
   "Source": "Gallup Organization (2022). Gallup Poll, Question 23 [31119602.00022]. Gallup Organization. Cornell University, Ithaca, NY: Roper Center for Public Opinion Research."
 },
 {
   "Issue": "Gay Morality",
   "Domain": "Moral",
   "Item": "in general, gay or lesbian relations are morally wrong",
   "Agree": 25,
   "Disagree": 71,
   "Disagreement Level": "medium",
   "Source": "Gallup Organization (2022). Gallup Poll, Question 23 [31119602.00022]. Gallup Organization. Cornell University, Ithaca, NY: Roper Center for Public Opinion Research."
 },
 {
   "Issue": "Marijuana Morality",
   "Domain": "Moral",
   "Item": "in general, smoking marijuana is not morally acceptable",
   "Agree": 28,
   "Disagree": 70,
   "Disagreement Level": "medium",
   "Source": "Gallup Organization (2020). Gallup Poll, Question 20 [31117397.00034]. Gallup Organization. Cornell University, Ithaca, NY: Roper Center for Public Opinion Research."
 },
 {
   "Issue": "Unmarried Baby",
   "Domain": "Moral",
   "Item": "it is not moral to have a baby outside of marriage",
   "Agree": 28,
   "Disagree": 70,
   "Disagreement Level": "medium",
   "Source": "https://news.gallup.com/poll/117328/Marriage.aspx"
 },
 {
   "Issue": "Animal Testing",
   "Domain": "Moral",
   "Item": "it is never morally acceptable to test products on animals before using them on humans",
   "Agree": 36,
   "Disagree": 49,
   "Disagreement Level": "low",
   "Source": "https://docs.cdn.yougov.com/uta5gqhscr/Morality.pdf"
 },
 {
   "Issue": "Fur Clothing",
   "Domain": "Moral",
   "Item": "in general, buying or wearing clothing made of animal fur is morally wrong",
   "Agree": 37,
   "Disagree": 60,
   "Disagreement Level": "low",
   "Source": "Gallup Organization (2022). Gallup Poll, Question 23 [31119602.00022]. Gallup Organization. Cornell University, Ithaca, NY: Roper Center for Public Opinion Research."
 },
 {
   "Issue": "Sick Stealing",
   "Domain": "Moral",
   "Item": "it is never morally acceptable for someone to steal medication if they cannot afford it",
   "Agree": 37,
   "Disagree": 59,
   "Disagreement Level": "low",
   "Source": "https://docs.cdn.yougov.com/uta5gqhscr/Morality.pdf"
 },
 {
   "Issue": "Rich Morality",
   "Domain": "Moral",
   "Item": "in general, rich people are less moral than poor people",
   "Agree": 37,
   "Disagree": 48,
   "Disagreement Level": "low",
   "Source": "https://docs.cdn.yougov.com/uta5gqhscr/Morality.pdf"
 },
 {
   "Issue": "Death Penalty",
   "Domain": "Moral",
   "Item": "in general, the death penalty is morally wrong",
   "Agree": 38,
   "Disagree": 55,
   "Disagreement Level": "low",
   "Source": "Gallup Organization (2022). Gallup Poll, Question 23 [31119602.00022]. Gallup Organization. Cornell University, Ithaca, NY: Roper Center for Public Opinion Research."
 },
 {
   "Issue": "Moral Pirating",
   "Domain": "Moral",
   "Item": "downloading pirated media from the internet is always immoral",
   "Agree": 38,
   "Disagree": 44,
   "Disagreement Level": "low",
   "Source": "https://docs.cdn.yougov.com/uta5gqhscr/Morality.pdf"
 },
 {
   "Issue": "Animal Cloning",
   "Domain": "Moral",
   "Item": "it is morally acceptable to clone animals",
   "Agree": 38,
   "Disagree": 58,
   "Disagreement Level": "low",
   "Source": "https://news.gallup.com/poll/6028/Cloning.aspx"
 },
 {
   "Issue": "Prostitution Morality",
   "Domain": "Moral",
   "Item": "paying for sex is always immoral",
   "Agree": 43,
   "Disagree": 42,
   "Disagreement Level": "low",
   "Source": "https://docs.cdn.yougov.com/uta5gqhscr/Morality.pdf"
 },
 {
   "Issue": "National Debt",
   "Domain": "Politics",
   "Item": "the national debt is not a problem at all",
   "Agree": 4,
   "Disagree": 95,
   "Disagreement Level": "high",
   "Source": "Fox News (2023). Fox News Poll, Question 52 [31120191.00051]. Beacon Research/Shaw & Co. Research. Cornell University, Ithaca, NY: Roper Center for Public Opinion Research."
 },
 {
   "Issue": "Riot Agree",
   "Domain": "Politics",
   "Item": "I support the actions of people who stormed the U.S. Capitol",
   "Agree": 8,
   "Disagree": 89,
   "Disagreement Level": "high",
   "Source": "ABC News/Washington Post Poll. Jan. 10-13, 2021. N=1,002 adults nationwide. Margin of error ± 3.5."
 },
 {
   "Issue": "SS Funding",
   "Domain": "Politics",
   "Item": "the funding of Social Security is not a problem at all",
   "Agree": 11,
   "Disagree": 87,
   "Disagreement Level": "high",
   "Source": "Fox News (2023). Fox News Poll, Question 52 [31120191.00051]. Beacon Research/Shaw & Co. Research. Cornell University, Ithaca, NY: Roper Center for Public Opinion Research."
 },
 {
   "Issue": "Minimum Wage",
   "Domain": "Politics",
   "Item": "The federal minimum wage is about right",
   "Agree": 13,
   "Disagree": 81,
   "Disagreement Level": "high",
   "Source": "https://today.yougov.com/topics/politics/articles-reports/2022/12/01/most-americans-think-minimum-wage-is-too-low"
 },
 {
   "Issue": "CDC COVID",
   "Domain": "Politics",
   "Item": "public health officials (e.g., at CDC) have done an excellent job of responding to COVID",
   "Agree": 13,
   "Disagree": 87,
   "Disagreement Level": "high",
   "Source": "Pew Research Center for the People & the Press (2022). Pew American Trends Panel Poll. Ipsos. Cornell University, Ithaca, NY: Roper Center for Public Opinion Research."
 },
 {
   "Issue": "Gun Laws",
   "Domain": "Politics",
   "Item": "gun laws should be less strict than they are today",
   "Agree": 14,
   "Disagree": 85,
   "Disagreement Level": "high",
   "Source": "https://www.pewresearch.org/short-reads/2021/09/13/key-facts-about-americans-and-guns/"
 },
 {
   "Issue": "Trump Performance",
   "Domain": "Politics",
   "Item": "Donald Trump will go down in history as an outstanding president",
   "Agree": 15,
   "Disagree": 85,
   "Disagreement Level": "high",
   "Source": "ABC News/Washington Post Poll. Jan. 10-13, 2021. N=1,002 adults nationwide. Margin of error ? 3.5."
 },
 {
   "Issue": "SS Benefits",
   "Domain": "Politics",
   "Item": "Social Security benefits for some future retirees should be reduced",
   "Agree": 16,
   "Disagree": 82,
   "Disagreement Level": "high",
   "Source": "Fox News (2023). Fox News Poll, Question 52 [31120191.00051]. Beacon Research/Shaw & Co. Research. Cornell University, Ithaca, NY: Roper Center for Public Opinion Research."
 },
 {
   "Issue": "Income Tax",
   "Domain": "Politics",
   "Item": "income tax rates for all Americans should be increased",
   "Agree": 17,
   "Disagree": 80,
   "Disagreement Level": "medium",
   "Source": "Fox News (2023). Fox News Poll, Question 52 [31120191.00051]. Beacon Research/Shaw & Co. Research. Cornell University, Ithaca, NY: Roper Center for Public Opinion Research."
 },
 {
   "Issue": "Drug Reform",
   "Domain": "Politics",
   "Item": "it is not important to reform the country's drug laws",
   "Agree": 18,
   "Disagree": 82,
   "Disagreement Level": "medium",
   "Source": "Bully Pulpit Interactive (2021). Poll for ACLU, American Attitudes on the War on Drug; https://www.aclu.org/other/poll-results-american-attitudes-toward-war-drugs"
 },
 {
   "Issue": "Scientist Influence",
   "Domain": "Politics",
   "Item": "scientists have too much influence in public policy debates",
   "Agree": 19,
   "Disagree": 81,
   "Disagreement Level": "medium",
   "Source": "Pew Research Center for the People & the Press (2022). Pew American Trends Panel Poll. Ipsos. Cornell University, Ithaca, NY: Roper Center for Public Opinion Research."
 },
 {
   "Issue": "Ukraine Support",
   "Domain": "Politics",
   "Item": "the US is providing too much support to Ukraine",
   "Agree": 20,
   "Disagree": 80,
   "Disagreement Level": "medium",
   "Source": "Pew Research Center for the People & the Press (2022). Pew American Trends Panel Poll. Ipsos. Cornell University, Ithaca, NY: Roper Center for Public Opinion Research."
 },
 {
   "Issue": "Justice Tenure",
   "Domain": "Politics",
   "Item": "Supreme Court justices should be limited to 18-year terms",
   "Agree": 30,
   "Disagree": 66,
   "Disagreement Level": "medium",
   "Source": "Fox News. (2022). Fox News Poll (Version 1) [Dataset]. Beacon Research; Shaw & Co. Research. Cornell University, Ithaca, NY: Roper Center for Public Opinion Research."
 },
 {
   "Issue": "Slavery Reparations",
   "Domain": "Politics",
   "Item": "descendants of people enslaved in the U.S. should be repaid in some way",
   "Agree": 30,
   "Disagree": 68,
   "Disagreement Level": "medium",
   "Source": "https://www.pewresearch.org/short-reads/2022/11/28/black-and-white-americans-are-far-apart-in-their-views-of-reparations-for-slavery/ft_22-11-09_reparations_1/"
 },
 {
   "Issue": "Electoral College",
   "Domain": "Politics",
   "Item": "presidential elections should be decided based on the electoral college, not the popular vote",
   "Agree": 30,
   "Disagree": 65,
   "Disagreement Level": "medium",
   "Source": "PRRI (2022). PRRI American Values Survey, Question 100 [31119979.00099]. Ipsos. Cornell University, Ithaca, NY: Roper Center for Public Opinion Research."
 },
 {
   "Issue": "Marijuana Legality",
   "Domain": "Politics",
   "Item": "the use of marijuana should be illegal",
   "Agree": 32,
   "Disagree": 68,
   "Disagreement Level": "medium",
   "Source": "https://news.gallup.com/poll/1657/Illegal-Drugs.aspx"
 },
 {
   "Issue": "Democrat Strategy",
   "Domain": "Politics",
   "Item": "the Democratic Party has a clear plan for dealing with the problems facing the country",
   "Agree": 35,
   "Disagree": 65,
   "Disagreement Level": "low",
   "Source": "Fox News. (2022). Fox News Poll (Version 1) [Dataset]. Beacon Research; Shaw & Co. Research. Cornell University, Ithaca, NY: Roper Center for Public Opinion Research."
 },
 {
   "Issue": "Military Spending",
   "Domain": "Politics",
   "Item": "the U.S is spending too much on immigration",
   "Agree": 35,
   "Disagree": 65,
   "Disagreement Level": "low",
   "Source": "https://news.gallup.com/poll/1666/Military-National-Defense.aspx"
 },
 {
   "Issue": "Bible Influence",
   "Domain": "Politics",
   "Item": "the Bible should have no influence on laws in the US",
   "Agree": 36,
   "Disagree": 64,
   "Disagreement Level": "low",
   "Source": "Pew Research Center for the People & the Press (2022). Pew American Trends Panel Poll. Ipsos. Cornell University, Ithaca, NY: Roper Center for Public Opinion Research."
 },
 {
   "Issue": "Tax Rates",
   "Domain": "Politics",
   "Item": "tax rates on household incomes over $400,00 should not be raised",
   "Agree": 37,
   "Disagree": 61,
   "Disagreement Level": "low",
   "Source": "https://www.pewresearch.org/short-reads/2023/04/07/top-tax-frustrations-for-americans-the-feeling-that-some-corporations-wealthy-people-dont-pay-fair-share/"
 },
 {
   "Issue": "Drug Offence",
   "Domain": "Politics",
   "Item": " sentences of people incarcerated for drugs should not be commuted or reduced",
   "Agree": 39,
   "Disagree": 61,
   "Disagreement Level": "low",
   "Source": "Bully Pulpit Interactive (2021). Poll for ACLU, American Attitudes on the War on Drug; https://www.aclu.org/other/poll-results-american-attitudes-toward-war-drugs"
 },
 {
   "Issue": "Health Insurance",
   "Domain": "Politics",
   "Item": "health coverage is a responsibility of the government",
   "Agree": 40,
   "Disagree": 57,
   "Disagreement Level": "low",
   "Source": "https://news.gallup.com/poll/4708/Healthcare-System.aspx"
 },
 {
   "Issue": "Federal Oil",
   "Domain": "Politics",
   "Item": "the U.S should get more oil from its federal lands",
   "Agree": 41,
   "Disagree": 36,
   "Disagreement Level": "low",
   "Source": "https://docs.cdn.yougov.com/m6hvcx4qgt/The_Willow_Project_poll_results.pdf"
 },
 {
   "Issue": "Spending Plan",
   "Domain": "Politics",
   "Item": "President Biden's multi-trillion dollar social spending plan will hurt the economy",
   "Agree": 42,
   "Disagree": 58,
   "Disagreement Level": "low",
   "Source": "Fox Business Poll conducted by Beacon Research (D) and Shaw & Company Research (R). Dec. 11-14, 2021. N=1,002 registered voters nationwide. Margin of error ? 3."
 },
 {
   "Issue": "Priest Marriage",
   "Domain": "Religion",
   "Item": "Catholic priests should not be able to get married",
   "Agree": 8,
   "Disagree": 69,
   "Disagreement Level": "high",
   "Source": "https://docs.cdn.yougov.com/ptbxx6jlng/toplines_Abuse_Allegations_in_Churches_20220830.pdf"
 },
 {
   "Issue": "Contraceptive Sin",
   "Domain": "Religion",
   "Item": "using contraceptives is sinful",
   "Agree": 10,
   "Disagree": 63,
   "Disagreement Level": "high",
   "Source": "https://www.pewresearch.org/religion/2015/09/02/chapter-5-beliefs-about-sin/"
 },
 {
   "Issue": "God Gender",
   "Domain": "Religion",
   "Item": "God is both male and female",
   "Agree": 10,
   "Disagree": 71,
   "Disagreement Level": "high",
   "Source": "https://www.prnewswire.com/news-releases/americans-belief-in-god-miracles-and-heaven-declines-236051651.html"
 },
 {
   "Issue": "Holy America",
   "Domain": "Religion",
   "Item": "God intended America to be a new promised land where European Christians could create a society that could be an example to the rest of the world",
   "Agree": 10,
   "Disagree": 83,
   "Disagreement Level": "high",
   "Source": "PRRI (2022). PRRI American Values Survey, Question 100 [31119979.00099]. Ipsos. Cornell University, Ithaca, NY: Roper Center for Public Opinion Research."
 },
 {
   "Issue": "Residence Sin",
   "Domain": "Religion",
   "Item": "living in a house larger than needed is sinful",
   "Agree": 11,
   "Disagree": 64,
   "Disagreement Level": "high",
   "Source": "https://www.pewresearch.org/religion/2015/09/02/chapter-5-beliefs-about-sin/"
 },
 {
   "Issue": "God Choice",
   "Domain": "Religion",
   "Item": "people do not have the ability to turn to God of their own initiative",
   "Agree": 14,
   "Disagree": 79,
   "Disagreement Level": "high",
   "Source": "http://research.lifeway.com/wp-content/uploads/2016/09/Ligonier-State-of-American-Theology-2016-Final-Report.pdf"
 },
 {
   "Issue": "Alcohol Sin",
   "Domain": "Religion",
   "Item": "drinking alcohol is sinful",
   "Agree": 15,
   "Disagree": 58,
   "Disagreement Level": "high",
   "Source": "https://www.pewresearch.org/religion/2015/09/02/chapter-5-beliefs-about-sin/"
 },
 {
   "Issue": "Salvation Effort",
   "Domain": "Religion",
   "Item": "individuals do not need to contribute their own effort for personal salvation",
   "Agree": 16,
   "Disagree": 76,
   "Disagreement Level": "high",
   "Source": "http://research.lifeway.com/wp-content/uploads/2016/09/Ligonier-State-of-American-Theology-2016-Final-Report.pdf"
 },
 {
   "Issue": "Small Sin",
   "Domain": "Religion",
   "Item": "even the smallest sin deserves eternal damnation",
   "Agree": 19,
   "Disagree": 78,
   "Disagreement Level": "medium",
   "Source": "http://research.lifeway.com/wp-content/uploads/2016/09/Ligonier-State-of-American-Theology-2016-Final-Report.pdf"
 },
 {
   "Issue": "God Belief",
   "Domain": "Religion",
   "Item": "I do not believe in god",
   "Agree": 19,
   "Disagree": 81,
   "Disagreement Level": "medium",
   "Source": "https://news.gallup.com/poll/393737/belief-god-dips-new-low.aspx"
 },
 {
   "Issue": "Witchcraft Belief",
   "Domain": "Religion",
   "Item": "witches or spells exist",
   "Agree": 21,
   "Disagree": 79,
   "Disagreement Level": "medium",
   "Source": "Ipsos (2021). Ipsos Understanding Society: Wave 24 October 2021, Question 6 [31118753.00005]. Ipsos. Cornell University, Ithaca, NY: Roper Center for Public Opinion Research."
 },
 {
   "Issue": "God Influence",
   "Domain": "Religion",
   "Item": "God or a higher power directly influences everything that occurs in the world",
   "Agree": 21,
   "Disagree": 78,
   "Disagreement Level": "medium",
   "Source": "Pew Research Center for the People & the Press (2021). Pew Research Center's American Trends Panel Poll, Question 56 [31118724.00056]. Ipsos. Cornell University, Ithaca, NY: Roper Center for Public Opinion Research."
 },
 {
   "Issue": "Scripture Literality",
   "Domain": "Religion",
   "Item": "holy scripture is the word of God and should be taken literally, word for word",
   "Agree": 22,
   "Disagree": 76,
   "Disagreement Level": "medium",
   "Source": "Pew Research Center for the People & the Press (2022). Pew American Trends Panel Poll, Question 22 [31120005.00021]. Ipsos. Cornell University, Ithaca, NY: Roper Center for Public Opinion Research."
 },
 {
   "Issue": "Direct Revelation",
   "Domain": "Religion",
   "Item": "it is impossible to receive a direct revelation from a higher power",
   "Agree": 29,
   "Disagree": 67,
   "Disagreement Level": "medium",
   "Source": "Pew Research Center for the People & the Press (2021). Pew Research Center's American Trends Panel Poll, Question 56 [31118724.00056]. Ipsos. Cornell University, Ithaca, NY: Roper Center for Public Opinion Research."
 },
 {
   "Issue": "Prayer Answered",
   "Domain": "Religion",
   "Item": "it is impossible to get a definite answer to a specific prayer request",
   "Agree": 31,
   "Disagree": 67,
   "Disagreement Level": "medium",
   "Source": "Pew Research Center for the People & the Press (2021). Pew Research Center's American Trends Panel Poll, Question 56 [31118724.00056]. Ipsos. Cornell University, Ithaca, NY: Roper Center for Public Opinion Research."
 },
 {
   "Issue": "Existential Reason",
   "Domain": "Religion",
   "Item": "everything in life does not necessarily happen for a reason",
   "Agree": 32,
   "Disagree": 68,
   "Disagreement Level": "medium",
   "Source": "https://www.pewresearch.org/religion/2021/11/23/views-on-the-afterlife/"
 },
 {
   "Issue": "Hell Belief",
   "Domain": "Religion",
   "Item": "Hell does not exist",
   "Agree": 36,
   "Disagree": 62,
   "Disagreement Level": "low",
   "Source": "Pew Research Center for the People & the Press (2021). Pew Research Center's American Trends Panel Poll, Question 56 [31118724.00056]. Ipsos. Cornell University, Ithaca, NY: Roper Center for Public Opinion Research."
 },
 {
   "Issue": "God Control",
   "Domain": "Religion",
   "Item": "God observes but does not control what happens on Earth",
   "Agree": 37,
   "Disagree": 63,
   "Disagreement Level": "low",
   "Source": "https://www.prnewswire.com/news-releases/americans-belief-in-god-miracles-and-heaven-declines-236051651.html"
 },
 {
   "Issue": "Doomsday Belief",
   "Domain": "Religion",
   "Item": "we are living in the end times",
   "Agree": 39,
   "Disagree": 58,
   "Disagreement Level": "low",
   "Source": "Pew Research Center for the People & the Press (2022). Pew American Trends Panel Poll, Question 22 [31120005.00021]. Ipsos. Cornell University, Ithaca, NY: Roper Center for Public Opinion Research."
 },
 {
   "Issue": "Bible Interpretation",
   "Domain": "Religion",
   "Item": "the Bible was not written for each person to interpret as he or she chooses",
   "Agree": 40,
   "Disagree": 51,
   "Disagreement Level": "low",
   "Source": "http://research.lifeway.com/wp-content/uploads/2016/09/Ligonier-State-of-American-Theology-2016-Final-Report.pdf"
 },
 {
   "Issue": "Bible Homosexual",
   "Domain": "Religion",
   "Item": "the Bible’s condemnation of homosexual behavior doesn’t apply today",
   "Agree": 42,
   "Disagree": 44,
   "Disagreement Level": "low",
   "Source": "http://research.lifeway.com/wp-content/uploads/2016/09/Ligonier-State-of-American-Theology-2016-Final-Report.pdf"
 },
 {
   "Issue": "Bible Authority",
   "Domain": "Religion",
   "Item": "the Bible does not have the authority to tell us what we must do",
   "Agree": 42,
   "Disagree": 50,
   "Disagreement Level": "low",
   "Source": "http://research.lifeway.com/wp-content/uploads/2016/09/Ligonier-State-of-American-Theology-2016-Final-Report.pdf"
 },
 {
   "Issue": "Sex Sin",
   "Domain": "Religion",
   "Item": "sex outside of traditional marriage is not a sin",
   "Agree": 43,
   "Disagree": 49,
   "Disagreement Level": "low",
   "Source": "http://research.lifeway.com/wp-content/uploads/2016/09/Ligonier-State-of-American-Theology-2016-Final-Report.pdf"
 },
 {
   "Issue": "Devil Belief",
   "Domain": "Religion",
   "Item": "the devil does not exist",
   "Agree": 46,
   "Disagree": 54,
   "Disagreement Level": "low",
   "Source": "https://www.ipsos.com/sites/default/files/ct/news/documents/2023-05/Ipsos%20Global%20Advisor%20-%20Religion%202023%20Report%20-%2026%20countries.pdf"
 },
 {
   "Issue": "COVID Infertility",
   "Domain": "Science",
   "Item": "COVID-19 vaccines have been shown to cause infertility",
   "Agree": 8,
   "Disagree": 92,
   "Disagreement Level": "high",
   "Source": "https://www.kff.org/coronavirus-covid-19/poll-finding/the-covid-19-pandemic-insights-from-three-years-of-kff-polling/"
 },
 {
   "Issue": "Vax Chips",
   "Domain": "Science",
   "Item": "vaccinations for COVID-19 implant microchips to track people",
   "Agree": 9,
   "Disagree": 91,
   "Disagreement Level": "high",
   "Source": "https://carsey.unh.edu/publication/conspiracy-vs-science-a-survey-of-us-public-beliefs"
 },
 {
   "Issue": "Flat Earth",
   "Domain": "Science",
   "Item": "the Earth is flat, not round",
   "Agree": 10,
   "Disagree": 90,
   "Disagreement Level": "high",
   "Source": "https://carsey.unh.edu/publication/conspiracy-vs-science-a-survey-of-us-public-beliefs"
 },
 {
   "Issue": "Antibiotic Bacterial",
   "Domain": "Science",
   "Item": "antibiotics are not effective against viral infections",
   "Agree": 10,
   "Disagree": 90,
   "Disagreement Level": "high",
   "Source": "https://www.pewtrusts.org/~/media/assets/2012/11/12/abxpollsummarypdf.pdf"
 },
 {
   "Issue": "Moon Landing",
   "Domain": "Science",
   "Item": "NASA astronauts did not really land on the Moon",
   "Agree": 12,
   "Disagree": 88,
   "Disagreement Level": "high",
   "Source": "https://carsey.unh.edu/publication/conspiracy-vs-science-a-survey-of-us-public-beliefs"
 },
 {
   "Issue": "Ivermectin Efficacy",
   "Domain": "Science",
   "Item": "Ivermectin is a safe and effective treatment for COVID-19",
   "Agree": 14,
   "Disagree": 86,
   "Disagreement Level": "high",
   "Source": "https://www.kff.org/coronavirus-covid-19/poll-finding/the-covid-19-pandemic-insights-from-three-years-of-kff-polling/"
 },
 {
   "Issue": "Earth Center",
   "Domain": "Science",
   "Item": "the center of the Earth is not very hot",
   "Agree": 15,
   "Disagree": 85,
   "Disagreement Level": "high",
   "Source": "https://www.nsf.gov/statistics/2018/nsb20181/assets/404/science-and-technology-public-attitudes-and-understanding.pdf#%5B%7B%22num%22%3A71%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C40%2C679.5%2C0%5D"
 },
 {
   "Issue": "Media Mind-change",
   "Domain": "Science",
   "Item": "social media is very effective at changing people's minds about political issues",
   "Agree": 16,
   "Disagree": 83,
   "Disagreement Level": "high",
   "Source": "Pew Research Center for the People & the Press (2022). Spring 2022 Global Attitudes Survey, Question 7 [31119465.00086]. Ipsos. Cornell University, Ithaca, NY: Roper Center for Public Opinion Research."
 },
 {
   "Issue": "Solar Rotation",
   "Domain": "Science",
   "Item": "it takes one day for the Earth to go around the Sun",
   "Agree": 18,
   "Disagree": 75,
   "Disagreement Level": "medium",
   "Source": "https://www.pewtrusts.org/~/media/assets/2012/11/12/abxpollsummarypdf.pdf"
 },
 {
   "Issue": "AI Economy",
   "Domain": "Science",
   "Item": "having machines with the ability to think for themselves will help the economy",
   "Agree": 19,
   "Disagree": 73,
   "Disagreement Level": "medium",
   "Source": "Monmouth University Polling Institute (2023). Monmouth University Poll, Question 24 [31120110.00024]. Monmouth University Polling Institute. Cornell University, Ithaca, NY: Roper Center for Public Opinion Research."
 },
 {
   "Issue": "Climate Change",
   "Domain": "Science",
   "Item": "the earth is getting warmer mostly due to natural patterns",
   "Agree": 24,
   "Disagree": 76,
   "Disagreement Level": "medium",
   "Source": "https://www.pewresearch.org/short-reads/2023/02/09/the-pope-is-concerned-about-climate-change-how-do-u-s-catholics-feel-about-it/"
 },
 {
   "Issue": "AI News",
   "Domain": "Science",
   "Item": "there will never be a time when entire news articles will be written by artificial intelligence",
   "Agree": 24,
   "Disagree": 72,
   "Disagreement Level": "medium",
   "Source": "Monmouth University Polling Institute (2023). Monmouth University Poll, Question 24 [31120110.00024]. Monmouth University Polling Institute. Cornell University, Ithaca, NY: Roper Center for Public Opinion Research."
 },
 {
   "Issue": "Earth Age",
   "Domain": "Science",
   "Item": "the Earth is not billions of years old",
   "Agree": 25,
   "Disagree": 75,
   "Disagreement Level": "medium",
   "Source": "https://carsey.unh.edu/publication/conspiracy-vs-science-a-survey-of-us-public-beliefs"
 },
 {
   "Issue": "Pesticide Safety",
   "Domain": "Science",
   "Item": "it is safe to eat foods grown with pesticides",
   "Agree": 28,
   "Disagree": 72,
   "Disagreement Level": "medium",
   "Source": "https://www.pewresearch.org/science/2015/01/29/public-and-scientists-views-on-science-and-society/"
 },
 {
   "Issue": "Radiactivity Source",
   "Domain": "Science",
   "Item": "all radioactivity is not man-made",
   "Agree": 30,
   "Disagree": 70,
   "Disagreement Level": "medium",
   "Source": "https://www.nsf.gov/statistics/2018/nsb20181/assets/404/science-and-technology-public-attitudes-and-understanding.pdf#%5B%7B%22num%22%3A71%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C40%2C679.5%2C0%5D"
 },
 {
   "Issue": "Vaccine Benefits",
   "Domain": "Science",
   "Item": "vaccines have not mostly been a benefit to human health.",
   "Agree": 31,
   "Disagree": 69,
   "Disagreement Level": "medium",
   "Source": "https://carsey.unh.edu/publication/conspiracy-vs-science-a-survey-of-us-public-beliefs"
 },
 {
   "Issue": "Water Boil",
   "Domain": "Science",
   "Item": "water boils at lower temperatures at higher altitudes",
   "Agree": 34,
   "Disagree": 66,
   "Disagreement Level": "low",
   "Source": "https://www.pewresearch.org/science/2015/09/10/what-the-public-knows-and-does-not-know-about-science/"
 },
 {
   "Issue": "Amplitude Loudness",
   "Domain": "Science",
   "Item": "amplitude or height determines loudness in a sound wave",
   "Agree": 35,
   "Disagree": 65,
   "Disagreement Level": "low",
   "Source": "https://www.pewresearch.org/science/2015/09/10/what-the-public-knows-and-does-not-know-about-science/"
 },
 {
   "Issue": "Body Elements",
   "Domain": "Science",
   "Item": "the elements in the human body are made of stardust from stars millions of years ago",
   "Agree": 37,
   "Disagree": 58,
   "Disagreement Level": "low",
   "Source": "https://maristpoll.marist.edu/cleveland-museum-of-natural-history-survey/"
 },
 {
   "Issue": "Climate Change",
   "Domain": "Science",
   "Item": "it is safe to eat genetically modified foods",
   "Agree": 37,
   "Disagree": 63,
   "Disagreement Level": "low",
   "Source": "https://www.pewresearch.org/science/2015/01/29/public-and-scientists-views-on-science-and-society/"
 },
 {
   "Issue": "Time Travel",
   "Domain": "Science",
   "Item": "humans will someday be able to travel through time",
   "Agree": 39,
   "Disagree": 56,
   "Disagreement Level": "low",
   "Source": "CBS News (2021). CBS News Poll, Question 3 [31118366.00002]. SSRS. Cornell University, Ithaca, NY: Roper Center for Public Opinion Research."
 },
 {
   "Issue": "Big Bang",
   "Domain": "Science",
   "Item": "the universe began with a huge explosion",
   "Agree": 39,
   "Disagree": 61,
   "Disagreement Level": "low",
   "Source": "https://www.nsf.gov/statistics/2018/nsb20181/assets/404/science-and-technology-public-attitudes-and-understanding.pdf#%5B%7B%22num%22%3A71%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C40%2C679.5%2C0%5D"
 },
 {
   "Issue": "Antibiotic Viral",
   "Domain": "Science",
   "Item": "antibiotics are not at all effective against viral infections",
   "Agree": 42,
   "Disagree": 58,
   "Disagreement Level": "low",
   "Source": "https://www.pewtrusts.org/~/media/assets/2012/11/12/abxpollsummarypdf.pdf"
 },
 {
   "Issue": "Specie Documentation",
   "Domain": "Science",
   "Item": "Scientists have not documented most of the species on Earth",
   "Agree": 46,
   "Disagree": 51,
   "Disagreement Level": "low",
   "Source": "https://www.pewtrusts.org/~/media/assets/2012/11/12/abxpollsummarypdf.pdf"
 }
  ]
console.log(stimuli)

//this is how to filter the items by specific properties
var subj_stimuli = stimuli.filter(function(item) {
  return item["Domain"] === subj_domain;
});
console.log(subj_stimuli)

//filtering down to the single domain for the subject
var subj_stimuli = stimuli.filter(function(item) {
  return item["Domain"] === subj_domain;
});

var agreement_levels = [
  { disagreement_lvl: 'low', selected_item: "None" },
  { disagreement_lvl: 'medium', selected_item: "None" },
  { disagreement_lvl: 'high', selected_item: "None" }
];

//////////////////
// Instructions //
//////////////////

var welcome_block = {
  type: "html-button-response",
  stimulus: `<div class="instructions-wrapper"><div class="instructions-dinos">
    Welcome to the experiment!<br>
  `,
  choices: ['Next'],
  on_start: function(){
    document.querySelector('#jspsych-progressbar-container').style.display = 'none';  //training progress bar keep for now
  },
  post_trial_gap: 250,
  button_html: `<button class="jspsych-btn" style="
    margin-top: 20px; position: relative;">
    %choice%</button>`
};

/* define instructions trial */
var welcome_instructions_block = {
  type: "html-button-response",
  stimulus: `
  [TODO: INTRO WRITTEN INSTRUCTIONS]
  `,
  choices: ['Next'],
  post_trial_gap: 250,
  button_html: button_display_html()
};

//////////////////////////////////////
//    Agreement Selection Trial    //
//////////////////////////////////////

var agreement_selexn_trial = {
  type: "survey-multi-select",
  // on_start: function(){
  //   var statement_options = subj_stimuli.map(function(item) {return item.Item;});
  // },
  questions: [
  {
    prompt: "Which of the following statements do you agree with? You may select multiple statements.", 
    options: function(){
                //filtering by disagreement level
                current_stimuli = subj_stimuli.filter(function(item) {
                                    return item["Disagreement Level"] === jsPsych.timelineVariable('disagreement_lvl');
                                  });
                console.log("current stim disagreement level:", jsPsych.timelineVariable('disagreement_lvl'))
                //randomizing order of presentation
                for (let i = current_stimuli.length - 1; i > 0; i--) {
                  const j = Math.floor(Math.random() * (i + 1));
                  [current_stimuli[i], current_stimuli[j]] = [current_stimuli[j], current_stimuli[i]];
                }
                //extracting only the item string from the data and returning the full array to populate "options"
                return current_stimuli.map(function(item) {return item.Item;})
              },
    required: false,
    name: 'Agreement Selection Trial'
  }],
    on_finish: function(data) { //storing information about subj response to give feedback in next trial
      var agreed_items = data.response['Agreement Selection Trial']
      var num_agreed = agreed_items.length
      if (num_agreed > 0) {
        var random_ind = Math.floor(Math.random() * agreed_items.length);
        data.selected_item = agreed_items[random_ind]
      } else {
        console.log("No response selected, skipping to next round")
        data.selected_item = "None"
        //jsPsych.endCurrentTimeline()
      }
      console.log(data.selected_item)
    }
}

//////////////////////////////////////
//    Agreement Confidence Trial    //
//////////////////////////////////////

var agreement_confidence_trial = {
  type: "survey-multi-choice",
  questions: [
  {
    prompt: function() {
      var prompt_html = ``
      var selected_item = jsPsych.data.get().last(1).select('selected_item').values[0]
      prompt_html += `You selected that you agreed with the following claim: <b>${selected_item}</b><br><br>`
      prompt_html += `How confident are you in this response?`
      return prompt_html
    },
    options: ["Very confident", "Moderately confident", "Somewhat confident", "Only slightly confident", "Not at all confident"],
    required: true,
    horizontal: false
  }
  ],
  data: function(){
    return {selected_item: jsPsych.data.get().last(1).select('selected_item').values[0]}
  }
}

//////////////////////////////////////
//    Agreement Estimation Trial    //
//////////////////////////////////////

var agreement_estim_trial = {
  type: "html-slider-response",
  stimulus: function(data){
    var selected_item = jsPsych.data.get().last(1).select('selected_item').values[0]
    console.log(selected_item)
    stim_html = `
      <br><br>Let's continue considering the claim that <b>${selected_item}.</b><br><br>
      What percentage of people in the United States do you think share your view about this claim? Please drag the bar to indicate a percentage.<br><br>`
    return stim_html
  },
  data: function(){
    return {selected_item: jsPsych.data.get().last(1).select('selected_item').values[0]}
  },
  labels: ["0%","10%","20%","30%","40%","50%","60%","70%","80%","90%","100%"],
  button_label: "Continue"
}

//////////////////////////////////
//     Question Views Trial     //
//////////////////////////////////

var question_views_trial = {
  type: "html-button-response",
  stimulus: function(data){
    var selected_item = jsPsych.data.get().last(1).select('selected_item').values[0]
    var last_response = jsPsych.data.get().last(1).values()[0].response;
    var selected_item_data = subj_stimuli.filter(function(item) {
      return item["Item"] === selected_item;
    })[0];
    console.log("selected statement: ", selected_item)
    console.log("pop agreement: ", last_response)
    console.log("all data on item: ", selected_item_data)
    stim_html = `
      <br><br>You previously indicated that ${last_response}% of the U.S. shares your view: ${selected_item}.<br>
      In fact, according to public opinion polls conducted by major research organizations, the actual percentage 
      of those who share your view is <b>${selected_item_data['Agree']}%</b>, and <b>${100-selected_item_data['Agree']}%</b> do not share your view.<br>
      The source for this particular estimate is: <a href="${selected_item_data['Source']}">${selected_item_data['Source']}</a><br><br>
      Does the fact that <b>${100-selected_item_data['Agree']}%</b> of the U.S. disagrees with you on this issue make you question your own view?<br><br>
    `
    return stim_html
  },
  choices: ["Yes, this makes me question my view.", "No, this does not make me question my view."]
}


///////////////////////////////////
//     Building the DV Block     //
///////////////////////////////////

//account for the fact that people may not select any statements.
//the logic is to display agreement_selexn_trial, then display the rest of the trials if something is chosen
var if_selection = {
    timeline: [agreement_confidence_trial, agreement_estim_trial, question_views_trial],
    conditional_function: function(){
        // get the data from the previous trial,
        // and check if there was a selection
        var selected_item = jsPsych.data.get().last(1).select('selected_item').values[0]
        if (selected_item === "None") {
          return false;
        } else {
          return true;
        }
    }
}

var dv_block = {
  timeline: [agreement_selexn_trial, if_selection], //will only run if_selection if participant chose a statement to agree with
  timeline_variables: agreement_levels,
  randomize_order: true
}

///////////////////////////
//   End of Experiment   //
///////////////////////////

var survey_transition = {
  type: "html-button-response",
  on_start: function(){
    document.querySelector('#jspsych-progressbar-container').style.display = 'none'},
  stimulus: function() {
    return `
    <div class="instructions-wrapper"><div class="instructions-dinos">
    You are now finished with the task! Thank you for your pariticpation.<br>
    You will now be directed to an anonymous demographic survey.
    `
  },
  choices: ['Click to continue to the anonymous demographic survey.'],
  button_html: button_display_html()
};

var survey = {
  type: "survey-multi-choice",
  questions: [
  {
    prompt: "What is your age?", 
    options: ["18-20", "21-30", "31-40", "41-50", "51-60", "60+", "Prefer not to say"], 
    required: true,
    name: 'Age'
  }, 
  {
    prompt: "Which most closely describes your gender identity?", 
    options: ["Woman ", "Man", "Non-binary", "Prefer not to say"], 
    required: true,
    name: 'Gender'
  }
  ], 
  preamble: `<div><br>This is a short survey to help us understand the demographics of our study.
  There is an option to not provide an answer to each question.</div>`,
  };

var thankyou = {
  type: "html-button-response",
  stimulus() {
    return `
    <div class="instructions-dinos"><p>Thank you for completing the survey! 
    Your answers help us understand the demographics of our samples for our studies.</p></div>
    `
  },
  choices: ['Click to finish.']
  };

var debrief = {
  type: "html-button-response",
  on_start: function(){
    document.querySelector('#jspsych-progressbar-container').style.display = 'none'},
  stimulus:
    `<div class="instructions-wrapper"><div class="instructions-dinos">
    Thank you for your participation.
    
    Feel free to contact us for more information about this study by [TODO: contact info]
    <br><br>
    <h3>Related Publications</h3>
      [TODO: add 3 related publication references]
      `,
  choices: ['Click to finish the study and submit to Prolific'],
  button_html: button_display_html()
  };

// wrote this but realized it's only compatible with jspsych 7.X and this exp is written in 6.3
// var survey = {
//   type: "survey",
//   pages: [
//     [
//       {
//         type: 'text',
//         prompt: "What is your age?", 
//         name: 'age', 
//         textbox_columns: 5,
//         required: true,
//       },
//       {
//       type: 'multi-choice',
//       prompt: "How would you describe your gender?", 
//       options: ["Woman ", "Man", "Non-binary", "Prefer not to say"], 
//       required: true,
//       name: 'Gender'
//       } 
//     ]
//   ],
//   preamble: `<div><br>This is a short survey to help us design further experiments. 
//   We would be most grateful if you could answer to the best of your ability. There is an option 
//   to not provide an answer to each question.</div>`,
//   };

/////////////////////////////////
//    Building the Timeline    //
/////////////////////////////////

var timeline = [
  welcome_block,
  dv_block,
  survey_transition,
  survey,
  thankyou,
  debrief
  ];



// if (searchParams.get('skip') != null) {
//   timeline.splice(0, parseInt(searchParams.get('skip')))
// }

return startExperiment({
  timeline,
  exclusions: {
    min_width: 800,
    min_height: 600
  },
});
};