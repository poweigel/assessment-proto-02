import styled from 'styled-components'
import Task from './Task.js'
import TaskDuplicate from './TaskDuplicate.js'
import { Droppable } from 'react-beautiful-dnd'
import { useState } from 'react'

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
    font-weight: 700;
    font-size: 28px;
`;
const TaskList = styled.div`
    padding: 8px;
    color: black;
  `;

function Column(props) {
  const { droppableId, count, order } = props;

  let options = [2, 3, 6, 8, 14];
  if (count === 0) {
    options = [2, 3, 6, 8, 14];
  } else if (count === 1) {
    options = [1, 5, 14, 16, 17];
  } else if (count === 2) {
    options = [0, 2, 5, 10, 18];
  } else if (count === 3) {
    options = [0, 4, 7, 13, 14];
  } else if (count === 4) {
    options = [8, 13, 17, 18, 19];
  } else if (count === 5) {
    options = [0, 3, 9, 16, 19];
  } else if (count === 6) {
    options = [3, 4, 10, 15, 17];
  } else if (count === 7) {
    options = [0, 1, 8, 12, 15];
  } else if (count === 8) {
    options = [9, 11, 14, 15, 18];
  } else if (count === 9) {
    options = [10, 12, 14, 19, 20];
  } else if (count === 10) {
    options = [2, 13, 15, 16, 20];
  } else if (count === 11) {
    options = [5, 6, 7, 15, 19];
  } else if (count === 12) {
    options = [0, 6, 11, 17, 20];
  } else if (count === 13) {
    options = [2, 7, 9, 12, 17];
  } else if (count === 14) {
    options = [4, 5, 8, 9, 20];
  } else if (count === 15) {
    options = [4, 6, 12, 16, 18];
  } else if (count === 16) {
    options = [1, 2, 4, 11, 19];
  } else if (count === 17) {
    options = [1, 3, 7, 18, 20];
  } else if (count === 18) {
    options = [3, 5, 11, 12, 13];
  } else if (count === 19) {
    options = [1, 6, 9, 10, 13];
  } else if (count === 20) {
    options = [7, 8, 10, 11, 16];
  } else {
    options = null;
  }

  const optionList = [
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

  // Set option order.
  let outOptions = [];
  for(let i = 0; i < order.length; i++){
    outOptions[i] = options[order[i]];
  }
  
  return (
    <Container>
        <Title>{droppableId}</Title>
        <Droppable droppableId='column-1'>
          {(provided) => (
            <TaskList
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {outOptions.map((val, index) => {
                return (
                  <TaskDuplicate id={optionList[val].label} key={optionList[val].label} index={index} content={optionList[val].text} />
                )
              })
              }
              {provided.placeholder}
            </TaskList>
          )}
        </Droppable>
    </Container>
  )
}

export default Column
