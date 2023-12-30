import React from "react";

function About() {
  return (
    <div className="flex flex-wrap items-center justify-center mb-5 mt-4 border rounded p-2 w-3/4 md:w-2/5">
      <p className="text-yellow-400 text-center text-xl font-semibold">
        Hello! I'm AmirHossein. I'm a Junior(slightly senior) web developer.
        <br />
        <a
          className="text-yellow-600 font-bold"
          href="https://github.com/AmirSenpai"
        >
          {" "}
          Here's my gitHub Page
        </a>
        <br />i hope you like this little portfolio project i made with react -
        vite and tailwind 🤍
      </p>
    </div>
  );
}
export default About;
