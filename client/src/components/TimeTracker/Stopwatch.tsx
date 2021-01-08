import React, { useEffect, useState } from "react";
import { calculateTimer } from "../../utils/timer";
import Controls from "./Controls";
import EditableInput from "./EditableInput";
import { Calendar3 } from "../icons/Calendar3";
import { Folder } from "../icons/Folder";
import { useGetProjects } from "../../hooks/useGetProjects";
import {
  Listbox,
  ListboxInput,
  ListboxButton,
  ListboxPopover,
  ListboxList,
  ListboxOption,
} from "@reach/listbox";
import "@reach/listbox/styles.css";
import ProjectsDropDown from "../ProjectsDropdown/ProjectsDropDown";

const Stopwatch = () => {
  const [timeInSeconds, setTimeInSeconds] = useState<number>(0);
  const [timerArray, setTimerArray] = useState<Array<number | string>>([]);
  const [isProjectDropwdownOpen, setIsProjectDropwdownOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<string>("");

  useEffect(() => {
    let timeArray: Array<number | string> = calculateTimer(timeInSeconds);
    setTimerArray(timeArray);
  }, [timeInSeconds]);

  return (
    <div className='Stopwatch'>
      <EditableInput />
      {/* <Listbox value={selectedProject} onChange={setSelectedProject}>
        <ListboxOption value='No Project'>No Project</ListboxOption>
        {isSuccess && projects
          ? projects.map((project) => (
            <ListboxOption key={project._id} value={project.name}>
            {project.name}
            </ListboxOption>
            ))
            : null}
          </Listbox> */}
      <div className='projects-icon'>
        {selectedProject ? (
          <span
            onClick={() => setIsProjectDropwdownOpen(!isProjectDropwdownOpen)}
          >
            {selectedProject}
          </span>
        ) : (
          <i onClick={() => setIsProjectDropwdownOpen(!isProjectDropwdownOpen)}>
            <Folder size='24' color='white' />
          </i>
        )}
        {isProjectDropwdownOpen && (
          <ProjectsDropDown
            setSelectedProject={setSelectedProject}
            setIsProjectDropwdownOpen={setIsProjectDropwdownOpen}
          />
        )}
      </div>
      <div className='clock-controls'>
        <section className='clock'>
          <p className='time-text'>{timerArray[0]}</p>
          <span>:</span>
          <p className='time-text'>{timerArray[1]}</p>
          <span>:</span>
          <p className='time-text'>{timerArray[2]}</p>
        </section>

        <Controls
          setTimeInSeconds={setTimeInSeconds}
          timeInSeconds={timeInSeconds}
          selectedProject={selectedProject}
        />
      </div>
    </div>
  );
};

export default Stopwatch;
