function App() {

  const text = "Welcome to my portfolio site! I am a front-end developer with a passion for building beautiful and functional web applications. On this site, you will find a selection of my past projects, showcasing my skills and experience in front-end development. Each project includes a brief description, as well as links to live demos and source code. Thank you for visiting and I hope you enjoy exploring my portfolio. Feel free to contact me if you have any questions or would like to work together on a project.";

  return (
    <div >
      <header>
        <div className="m-4">
          <nav className=" sticky top-0 gap-8 flex text-sm font-normal leading-loose">
            <a>ABOUT</a>
            <a>PROJECTS</a>
            <a>CONTACT</a>
          </nav>
        </div>
      </header>


      <div className="grid grid-cols-2 gap-8 h-96">
        <div className="bg-gray-400">

        </div>
        <div>
          <p>
            {text}
          </p>
        </div>

      </div>

    </div>
  );
}

export default App;
