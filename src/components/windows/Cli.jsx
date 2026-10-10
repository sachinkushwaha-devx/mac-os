import React from 'react'
import MacWindow from './MacWindow'
import TerminalModule from 'react-console-emulator'
import './cli.scss'

const Terminal = TerminalModule?.default ?? TerminalModule

const Cli = ({ windowName, setWindowsState, closeWindow, activeWindow, setActiveWindow }) => {
  const commands = {
    about: {
      description: 'Show a short bio.',
      usage: 'about',
      fn: () =>
        "Hi, I’m Sachin Kushwaha — a front-end developer focused on building polished, responsive digital experiences.",
    },
    skills: {
      description: 'Show skills and tools.',
      usage: 'skills',
      fn: () =>
        'Skills:\n' +
        ' Frontend: React, Vite, JavaScript, HTML5, CSS3, SCSS, UI/UX\n' +
        ' Backend: Node.js, Express, MongoDB\n' +
        ' Tools: VS Code, GitHub, Figma, Chrome DevTools, Postman\n' +
        ' Other: REST APIs, Git, Responsive Design, Accessibility',
    },
    projects: {
      description: 'Show featured projects.',
      usage: 'projects',
      fn: () =>
        'Featured work:\n' +
        '  - Portfolio dashboard\n' +
        '  - Productive workflow tools\n' +
        '  - Modern frontend experiments',
    },
    experience: {
      description: 'Show work experience summary.',
      usage: 'experience',
      fn: () =>
        'Experience:\n' +
        '  - Front-end developer\n' +
        '  - Building React-driven interfaces\n' +
        '  - Creating clean, scalable user experiences',
    },
    resume: {
      description: 'Show quick resume summary.',
      usage: 'resume',
      fn: () =>
        'Resume:\n' +
        '  Front-end Developer\n' +
        '  Specializing in React and modern UI development',
    },
    contact: {
      description: 'Show contact details.',
      usage: 'contact',
      fn: () =>
        'Contact:\n' +
        '  Email: sachinkushwaha8606@gmail.com\n' +
        '  Location: India',
    },
    socials: {
      description: 'Show social links.',
      usage: 'socials',
      fn: () =>
        'Socials:\n' +
        '  LinkedIn: linkedin.com\n' +
        '  GitHub: github.com/sachinkushwaha-devx\n' +
        '  E-mail: sachinkushwaha8606@gmail.com',
    },
    github: {
      description: 'Show GitHub profile link.',
      usage: 'github',
      fn: () => 'GitHub: https://github.com/sachinkushwaha-devx',
    },
    echo: {
      description: 'Echo a passed string.',
      usage: 'echo <string>',
      fn: (...args) => args.join(' '),
    },
  }

  return (
    <MacWindow
      windowName={windowName}
      setWindowsState={setWindowsState}
      closeWindow={closeWindow}
      activeWindow={activeWindow}
      setActiveWindow={setActiveWindow}
      title="sachinkushwaha - zsh"
    >
      <div className="cli-window">
        <Terminal
          commands={commands}
          welcomeMessage={
            "Welcome to Sachin Kushwaha's portfolio terminal.\n\n" +
            "Type 'help' to see all available commands.\n\n" +
            'Available commands:\n' +
            '  help     - Show all commands\n' +
            '  about    - Learn about me\n' +
            '  skills   - View my tech stack\n' +
            '  projects - See featured work\n' +
            '  resume   - Resume summary\n' +
            '  contact  - Contact details\n' +
            '  socials  - Social profiles\n' +
            '  github   - GitHub profile'
          }
          promptLabel={'sachinkushwaha~$'}
          promptLabelStyle={{ color: '#7cf88d' }}
        />
      </div>
    </MacWindow>
  )
}

export default Cli
