import './App.css';
import Column from './Column';
import '@atlaskit/css-reset';
import { DragDropContext } from 'react-beautiful-dnd'
import initialData from './initialData';
import QuestionList from './QuestionList';
import { useState, onClick } from 'react'
import Question_1 from './components/Question_1'

function App() {
  // Create question number counter.
  const [count, setCount] = useState(0);
  const numQuestions = 21;
  const [wipAnswers, setAnswers] = useState([]);

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const [state, setState] = useState({Question_1});    // Maybe this works? --> Yes, it does!
  // Pull the column out of state.
  const columnId = 'column-1';
  // const column = state.initialData.columns[columnId];
  const column = state.Question_1.columns[columnId];
  // Get tasks associated with that column.
  const taskIds = column.taskIds;
  // const tasks = taskIds.map(taskId => state.initialData.tasks[taskId]);
  const tasks = taskIds.map(taskId => state.Question_1.tasks[taskId]);

  const [order, setOrder] = useState([0, 1, 2, 3, 4]);

  const onDragEnd = result => {
      const { destination, source, draggableId } = result;

      // If there is no destination, do nothing.
      if (!result.destination) {
        return;
      }

      // If the draggable ends in the same place that it started, do nothing.
      if (
        result.destination.droppableId === result.source.droppableId &&
        result.destination.index === result.source.index
      ) {
        return;
      }

      // const column2 = state.initialData.columns.[source.droppableId];
      const column2 = state.Question_1.columns.[source.droppableId];
      const newTaskIds = column2.taskIds;
      newTaskIds.splice(source.index, 1); // From this index we want to remove one item.
      newTaskIds.splice(destination.index, 0, draggableId); // Remove nothing and insert draggableId (which is the taskId).

      const newColumn = {
        ...column2,
        taskIds: newTaskIds,
      };

      const newState = {
        ...state,
        columns: {
          ...state.columns2,
          [newColumn.id]: newColumn,
        },
      };

      setState(newState);

      const newOrder = reorder(order, result.source.index, result.destination.index);
      setOrder(newOrder);
  };

  const handleIncrement = (e) => {
    e.preventDefault();
    if (count >= numQuestions-1) {
      alert('No more questions!');
      // TODO: Go to next section.
    } else {
      // Save 'order' for this question so we know what the answers were.
      // Has to be check against the 'options' array. For example, an indexed array
      // in wipAnswers may read [1, 3, 0, 2, 4]. This means the 0th element of
      // 'options' at this particular index is in the third position, etc.
      setAnswers([
        ...wipAnswers,
        {
          id: wipAnswers.length,
          values: order
        }
      ]);
      // Increment 'count'.
      setCount(prevCount => prevCount + 1);      
    }
  };

  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
          <div>
              {/* <Column key={column.id} column={column} tasks={tasks} type="TASK" /> */}
              {/* <Column droppableId={column.title} column={column} tasks={tasks} type="TASK" /> THIS WORKS WITH 'initialData.js' */}
              {<Column droppableId={column.title} count={count} order={order} />}
          </div>
      </DragDropContext>
      <form style={{ float: 'right' }}>
        <label className="numbers">{count+1}/21</label>
        <button className="button" onClick={handleIncrement}>Next Question</button>
        {/* <QuestionList index={questionIndex} /> */}
      </form>
    </div>
  );
}

export default App;
