const qA = 'I make use of my abilities.';
const qB = 'I would be treated fairly by the company.';
const qC = 'I could be busy all the time.';
const qD = 'The job would provide an opportunity for advancement.';
const qE = 'I could give directions and instructions to others.';
const qF = 'The work could give me a feeling of accomplishment.';
const qG = 'My pay would compare well with that of other workers.';
const qH = 'My co-workers would be easy to get along with.';
const qI = 'I could try out my own ideas.';
const qJ = 'I could work alone.';
const qK = 'I would never be pressured to do things that go against my sense of right and wrong.';
const qL = 'I could receive recognition for the work I do.';
const qM = 'I could make decisions on my own.';
const qN = 'The job would provide for steady employment.';
const qO = 'I could do things for other people.';
const qP = 'I have supervisors who would back up their workers with management.';
const qQ = 'I have supervisors who train their workers well.';
const qR = 'I could do something different every day.';
const qS = 'The job would have good working conditions.';
const qT = 'I could plan my work with little supervision.';
const qU = 'I would be looked up to by others in my company and my community.';

// This is an object literal (key-value pairs).
const initialData = {
    tasks: {
        'option-1': { id: 'option-1', content: qC },
        'option-2': { id: 'option-2', content: qD },
        'option-3': { id: 'option-3', content: qG },
        'option-4': { id: 'option-4', content: qI },
        'option-5': { id: 'option-5', content: qO },
    },
    columns: {      // Used to store the columns in our system.
        'column-1': {
            id: 'column-1',
            title: 'Drag and drop to rank options.',
            taskIds: ['option-1', 'option-2', 'option-3', 'option-4', 'option-5'],
        },
    },
    // Facilitate reordering of the columns.
    columnOrder: ['column-1'],
};

export default initialData;