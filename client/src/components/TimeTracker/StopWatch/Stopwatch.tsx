import { useEffect, useState } from 'react';
import { calculateTimer } from '../../../utils/timer';
import Controls from '../Controls/Controls';
import EditableInput from '../EditableInput/EditableInput';
import { Folder } from '../../icons/Folder';
import ProjectsDropDown from '../../ProjectsDropdown/ProjectsDropDown';
import { Dot } from '../../icons/Dot';
import { ProjectSelect } from '../ProjectSelect/ProjectSelect';
import Clock from '../Clock/Clock';

export interface ISelectedProject {
  id: string;
  name: string;
  client: string;
  color: string;
}

const Stopwatch = () => {
  const [timeInSeconds, setTimeInSeconds] = useState<number>(0);
  const [timerArray, setTimerArray] = useState<Array<number | string>>([]);
  // const [isProjectDropwdownOpen, setIsProjectDropwdownOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ISelectedProject>({
    id: '',
    name: '',
    client: '',
    color: '',
  });

  useEffect(() => {
    let timeArray: Array<number | string> = calculateTimer(timeInSeconds);
    setTimerArray(timeArray);
  }, [timeInSeconds]);

  return (
    <header className='header'>
      <div className='Stopwatch'>
        <EditableInput />
        <ProjectSelect
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
        />
        <div className='clock-controls'>
          <Clock timerArray={timerArray} />

          {/* Change name to ClockControls */}
          <Controls
            setTimeInSeconds={setTimeInSeconds}
            timeInSeconds={timeInSeconds}
            selectedProject={selectedProject}
          />
        </div>
      </div>
    </header>
  );
};

export default Stopwatch;
