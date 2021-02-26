import styled from 'styled-components'

const Container = styled.div`
  margin: 8px;
  // border: 1px solid lightgrey;
  border-radius: 2px;
  height: 375px;
  background-color: #B2B2B2;
`;
const Title = styled.h3`
  padding: 8px;
  color: #000000;
  font-weight: 500;
  font-size: 24px;
`;
const TaskList = styled.div`
  padding: 8px;
  color: black;
  font-size: 18px;
  `;
const TaskContainer = styled.div`
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: #041E3A;
  color: #FDD198;
  font-size: 18px;
`;

function WIP_MultiChoice(props) {
  // Read in props.
  const { numDNDQuestions, count, onChange, value, state } = props;

  // List of all the questions and their answer choices.
  const questions = [
		{ questionText: 'For my IDEAL JOB it is important that: I have supervisors who train their workers well.',
			answerOptions: [{ answerText: 'Yes' },{ answerText: 'No' }] },
		{ questionText: 'For my IDEAL JOB it is important that: I could try out my own ideas.',
			answerOptions: [{ answerText: 'Yes' },{ answerText: 'No' }] },
		{ questionText: 'For my IDEAL JOB it is important that: I would never be pressured to do things that go against my sense of right and wrong.',
			answerOptions: [{ answerText: 'Yes' },{ answerText: 'No' }] },
    { questionText: 'For my IDEAL JOB it is important that: I could work alone.',
			answerOptions: [{ answerText: 'Yes' },{ answerText: 'No' }] },
    { questionText: 'For my IDEAL JOB it is important that: My co-workers would be easy to get along with.',
			answerOptions: [{ answerText: 'Yes' },{ answerText: 'No' }] },
    { questionText: 'For my IDEAL JOB it is important that: I could be busy all the time.',
			answerOptions: [{ answerText: 'Yes' },{ answerText: 'No' }] },
    { questionText: 'For my IDEAL JOB it is important that: I would be treated fairly by the company.',
			answerOptions: [{ answerText: 'Yes' },{ answerText: 'No' }] },
  	{ questionText: 'For my IDEAL JOB it is important that: I make use of my abilities.',
			answerOptions: [{ answerText: 'Yes' },{ answerText: 'No' }] },
    { questionText: 'For my IDEAL JOB it is important that: My pay would compare well with that of other workers.',
			answerOptions: [{ answerText: 'Yes' },{ answerText: 'No' }] },
    { questionText: 'For my IDEAL JOB it is important that: The job would have good working conditions.',
			answerOptions: [{ answerText: 'Yes' },{ answerText: 'No' }] },
    { questionText: 'For my IDEAL JOB it is important that: I could give directions and instructions to others.',
			answerOptions: [{ answerText: 'Yes' },{ answerText: 'No' }] },
    { questionText: 'For my IDEAL JOB it is important that: I could do things for other people.',
			answerOptions: [{ answerText: 'Yes' },{ answerText: 'No' }] },
    { questionText: 'For my IDEAL JOB it is important that: I could make decisions on my own.',
			answerOptions: [{ answerText: 'Yes' },{ answerText: 'No' }] },
    { questionText: 'For my IDEAL JOB it is important that: I could plan my work with little supervision.',
			answerOptions: [{ answerText: 'Yes' },{ answerText: 'No' }] },
    { questionText: 'For my IDEAL JOB it is important that: I could receive recognition for the work I do.',
			answerOptions: [{ answerText: 'Yes' },{ answerText: 'No' }] },
    { questionText: 'For my IDEAL JOB it is important that: The job would provide an opportunity for advancement.',
			answerOptions: [{ answerText: 'Yes' },{ answerText: 'No' }] },
    { questionText: 'For my IDEAL JOB it is important that: I would be looked up to by others in my company and my community.',
			answerOptions: [{ answerText: 'Yes' },{ answerText: 'No' }] },
    { questionText: 'For my IDEAL JOB it is important that: The job would provide for steady employment.',
			answerOptions: [{ answerText: 'Yes' },{ answerText: 'No' }] },
    { questionText: 'For my IDEAL JOB it is important that: The work could give me a feeling of accomplishment.',
			answerOptions: [{ answerText: 'Yes' },{ answerText: 'No' }] },
    { questionText: 'For my IDEAL JOB it is important that: I could do something different every day.',
			answerOptions: [{ answerText: 'Yes' },{ answerText: 'No' }] },
    { questionText: 'For my IDEAL JOB it is important that: I have supervisors who would back up their workers with management.',
			answerOptions: [{ answerText: 'Yes' },{ answerText: 'No' }] },
	];

  const currentQuestion = count-numDNDQuestions;
  const title = questions[currentQuestion].questionText;
  let options = [];
  for(let i = 0; i < 2; i++) {
    options[i] = questions[currentQuestion].answerOptions[i].answerText;
  }

  return (
    <div>
      <Container>
        <Title>{title}</Title>
        <TaskList>
          <TaskContainer>
          <input type='radio' value={'Yes'} checked={true} onChange={onChange} name='wip' /> Yes
          </TaskContainer>
          <TaskContainer>
          <input type='radio' value={'No'} onChange={onChange} name='wip' /> No
          </TaskContainer>
        </TaskList>
      </Container>
    </div>
  )
}

export default WIP_MultiChoice
