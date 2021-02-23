function QuestionList(props) {
  const { index } = props;

  const questions = [
    {text: 'I make use of my abilities.', label: 'optA'},
    {text: 'I would be treated fairly by the company.', label: 'optB'},
    {text: 'I could be busy all the time.', label: 'optC'},
    {text: 'The job would provide an opportunity for advancement.', label: 'optD'},
    {text: 'I could give directions and instructions to others.', label: 'optE'},
    {text: 'The work could give me a feeling of accomplishment.', label: 'optF'},
    {text: 'My pay would compare well with that of other workers.', label: 'optG'},
    {text: 'My co-workers would be easy to get along with.', label: 'optH'},
    {text: 'I could try out my own ideas.', label: 'optI'},
    {text: 'I could work alone.', label: 'opt'},
    {text: 'I would never be pressured to do things that go against my sense of right and wrong.', label: 'optK'},
    {text: 'I could receive recognition for the work I do.', label: 'optL'},
    {text: 'I could make decisions on my own.', label: 'optM'},
    {text: 'The job would provide for steady employment.', label: 'optN'},
    {text: 'I could do things for other people.', label: 'optO'},
    {text: 'I have supervisors who would back up their workers with management.', label: 'optP'},
    {text: 'I have supervisors who train their workers well.', label: 'optQ'},
    {text: 'I could do something different every day.', label: 'optR'},
    {text: 'The job would have good working conditions.', label: 'optS'},
    {text: 'I could plan my work with little supervision.', label: 'optT'},
    {text: 'I would be looked up to by others in my company and my community.', label: 'optU'},
  ];

  return (
    <div>
      {/* {questions[0]} */}
      {/* {console.log(questions[index].text)}; */}
    </div>
  )
}

export default QuestionList
