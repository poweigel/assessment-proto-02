import styled from 'styled-components'
import Task from './Task.js'
import { Droppable } from 'react-beautiful-dnd'

const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
`;
const Title = styled.h3`
    padding: 8px;
`;
const TaskList = styled.div`
    padding: 8px;`;

function Column(props) {
  const { droppableId, column, tasks, type } = props;

    return (
        <Container>
            <Title>{column.title}</Title>
            <Droppable droppableId={column.id}>
                {(provided) => (
                    <TaskList
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {/* {Object.keys(props.tasks).map(taskNum => props.tasks[taskNum].content)} */}
                        {/* {Object.keys(props.tasks).map(taskNum => <Task key={taskNum} props={props} taskNum={taskNum} />)} */}
                        {/* {Object.keys(props.tasks).map((taskNum, index) => <Task key={taskNum} props={props} taskNum={taskNum} index={index} />)} */}
                        {tasks.map((val, index) => {
                          return (
                            <Task id={val.id} key={val.id} index={index} content={val.content} />
                          );
                        })}
                        {provided.placeholder}
                    </TaskList>
                )}
            </Droppable>
        </Container>
    )
}

export default Column
