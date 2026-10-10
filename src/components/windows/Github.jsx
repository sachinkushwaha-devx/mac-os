import React from 'react'
import MacWindow from './MacWindow'
import githubData from '../../assets/github.json'
import './github.scss'

const GitCard = ({
  data = {
    id: 1,
    image: '',
    title: '',
    description: '',
    tags: [],
    repoLink: '',
    demoLink: '',
  },
}) => {
  return (
    <div className="card">
      <img src={data.image} alt={data.title} />
      <h1>{data.title}</h1>
      <p className="description">{data.description}</p>
      <div className="tags">
        {data.tags.map((tag, index) => (
          <p className="tag" key={`${data.id}-${tag}-${index}`}>
            {tag}
          </p>
        ))}
      </div>
      <div className="urls">
        <a href={data.repoLink} target="_blank" rel="noreferrer noopener">
          Repository
        </a>
        {data.demoLink && (
          <a href={data.demoLink} target="_blank" rel="noreferrer noopener">
            Demo Link
          </a>
        )}
      </div>
    </div>
  )
}

const Github = ({ windowName, setWindowsState, closeWindow, activeWindow, setActiveWindow }) => {
  return (
    <MacWindow
      windowName={windowName}
      setWindowsState={setWindowsState}
      closeWindow={closeWindow}
      activeWindow={activeWindow}
      setActiveWindow={setActiveWindow}
      title="sachinkushwaha - projects"
    >
      <div className="cards">
        {githubData.map((project) => (
          <GitCard key={project.id} data={project} />
        ))}
      </div>
    </MacWindow>
  )
}

export default Github
