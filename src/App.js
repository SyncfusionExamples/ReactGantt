import React from 'react';
import {
  GanttComponent, Inject, Sort, Filter, DayMarkers,
  Edit, Toolbar, ContextMenu, Selection
} from '@syncfusion/ej2-react-gantt';

function App() {
  const dataSource = [
    {
      taskID: 1,
      taskName: "Planning",
      startDate: new Date("02/06/2019"),
      subtasks: [
        {
          taskID: 2,
          taskName: "Plan timeline",
          startDate: new Date("02/05/2019"),
          duration: 3,
          progress: 50
        },
        {
          taskID: 3,
          taskName: "Plan budget",
          startDate: new Date("02/07/2019"),
          duration: 3,
          progress: 50
        },
        {
          taskID: 4,
          taskName: "Allocate resources",
          startDate: new Date("02/10/2019"),
          duration: 3,
          progress: 100
        },
        {
          taskID: 5,
          taskName: "Planning complete",
          startDate: new Date("02/13/2019"),
          duration: 0,
          progress: 0
        }
      ]
    }
  ];
  const taskFields = {
    id: 'taskID',
    name: 'taskName',
    startDate: 'startDate',
    duration: 'duration',
    child: 'subtasks',
    progress: 'progress'
  };
  const timelineSettings = {
    topTier: {
      unit: 'Day',
      format: 'dddd MMM yyyy'
    },
    bottomTier: {
      unit: 'Hour',
      count: 8,
      format: 'H'
    }
  };
  const holidays = [
    { 
      from: new Date(2019, 1, 7),
      label: 'HOLIDAY 1'
    }
  ];
  const eventMarkers = [
    {
      day: new Date(2019, 1, 4),
      label: 'Project Starts'
    }
  ];
  const editSettings = {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    mode: 'Dialog'
  };
  const toolbarItems = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'ExpandAll', 'CollapseAll'];
  const selectionSettings = {
    mode: 'Row',
    type: 'Multiple'
  };
  return (
   <div>
      <GanttComponent dataSource={dataSource} taskFields={taskFields} height="400px"
        projectStartDate={new Date(2019, 1, 3)}
        projectEndDate={new Date(2019, 1, 16)}
        timelineSettings={timelineSettings}
        allowSorting={true}
        allowFiltering={true}
        highlightWeekends={true}
        holidays={holidays}
        eventMarkers={eventMarkers}
        editSettings={editSettings}
        toolbar={toolbarItems}
        enableContextMenu={true}
        allowSelection={true}
        selectionSettings={selectionSettings}
      >
        <Inject services={[Sort, Filter, DayMarkers, Edit, Toolbar, ContextMenu, Selection]} />
      </GanttComponent>
   </div>
  );
}

export default App;
