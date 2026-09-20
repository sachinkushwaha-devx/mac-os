import MacWindow from "./MacWindow";
import TerminalModule from "react-console-emulator";
import "./cli.scss";

const Terminal = TerminalModule?.default ?? TerminalModule;

const Cli = () => {
  const commands = {
   
    about: {
      description: "Show a short bio.",
      usage: "about",
      fn: () =>
        "Hi, I’m Sachin Kushwaha — a front-end developer building modern, responsive, and user-friendly web experiences.",
    },
    skills: {
      description: "Show skills and tools.",
      usage: "skills",
      fn: () =>
        "Skills:\n" +
        " Frontend- React, Vite, JavaScript, HTML5, CSS3, SCSS, Git, UI/UX, Responsive Design \n" +
        " Backend- Node.js, Express, MongoDB \n" +
        " Tools- VS Code, GitHub, Figma, Chrome DevTools, NPM, Postman \n" +
        " Other- REST APIs, JSON, Webpack, Babel, Agile/Scrum, Testing (Jest, React Testing Library) \n" +
        "Cloud- AWS, Firebase, Heroku, Netlify, Vercel\n"+       
        " I am passionate about creating seamless user experiences and writing clean, maintainable code.",
        
    },
    projects: {
      description: "Show featured projects.",
      usage: "projects",
      fn: () =>
        "Featured work:\n" +
        "  - Portfolio website\n" +
        "  - Dashboard UI\n" +
        "  - Productivity tool\n" +
        "  - Creative web experiments",
    },
    experience: {
      description: "Show work experience summary.",
      usage: "experience",
      fn: () =>
        "Experience:\n" +
        "  - Front-end developer\n" +
        "  - Building React-based interfaces\n" +
        "  - Creating responsive and clean user experiences",
    },
    resume: {
      description: "Show quick resume summary.",
      usage: "resume",
      fn: () =>
        "Resume:\n" +
        "  Front-end Developer\n" +
        "  Specializing in React and modern UI development",
    },
    contact: {
      description: "Show contact details.",
      usage: "contact",
      fn: () =>
        "Contact:\n" +
        "  Email: hello@example.com\n" +
        "  Phone: +91 98765 43210\n" +
        "  Location: India",
    },
    socials: {
      description: "Show social links.",
      usage: "socials",
      fn: () =>
        "Socials:\n" +
        "  LinkedIn: linkedin.com/in/your-name\n" +
        "  GitHub: github.com/your-username\n" +
        "  Instagram: instagram.com/your-handle",
    },
    github: {
      description: "Show GitHub profile link.",
      usage: "github",
      fn: () => "GitHub: https://github.com/your-username",
    },
    echo: {
      description: "Echo a passed string.",
      usage: "echo <string>",
      fn: (...args) => args.join(" "),
    },
  };

  return (
    <MacWindow>
      <div className="cli-window">
        <Terminal
          commands={commands}
          welcomeMessage={
            "Welcome to Sachin Kushwaha's portfolio terminal.\n\n" +
            "Type 'help' to see all available commands.\n\n" +
            "Available commands:\n" +
            "  help  -      Show all commands\n" +
            "  about   -    Learn about me\n" +
            "  skills  -    View my tech stack\n" +
            "  projects  -  See featured work\n" +
            "  experience - Work history\n" +
            "  resume   -   Resume summary\n" +
            "  contact  -   Contact details\n" +
            "  socials  -   Social profiles\n" +
            "  github   -   GitHub profile"
          }
          promptLabel={"sachinkushwaha~$"}
          promptLabelStyle={{ color: "green" }}
        />
      </div>
    </MacWindow>
  );
};

export default Cli;
