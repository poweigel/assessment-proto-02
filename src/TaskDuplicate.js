import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'

const Container = styled.div`
    // border: 1px solid lightgrey;
    border-radius: 2px;
    padding: 8px;
    margin-bottom: 8px;
    background-color: #041E3A;
    color: #FDD198;
    font-size: 18px;
`;

function TaskDuplicate(props) {
  const { id, index, content } = props;

    return (
        <Draggable draggableId={id} index={index} type="TASK">
          {(provided) => (
            <Container
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
            >
              {content}
            </Container>
          )}
        </Draggable>
    );
}

export default TaskDuplicate
