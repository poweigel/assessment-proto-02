import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'

const Container = styled.div`
    border: 1px solid lightgrey;
    border-radius: 2px;
    padding: 8px;
    margin-bottom: 8px;
    background-color: white;
`;

// function Task(props, taskNum) {
function TaskDuplicate(props) {
  const { id, index, content } = props;
  // console.log(id);

    return (
        // <Draggable draggableId={props.props.tasks[props.taskNum].id} index = {props.index}>
        <Draggable draggableId={id} index={index} type="TASK">
            {(provided) => (
                <Container
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    {/* {props.props.tasks[props.taskNum].content} */}
                  {content}
                </Container>
            )}
        </Draggable>
    );
}

export default TaskDuplicate
