import React from "react";
import GitHubCalendar from "react-github-calendar";

function Github() {
  return (
    <div className="flex flex-col items-center pb-2">
      <h1 className="text-3xl font-bold mb-5">
        Days I <strong className="dark:text-purple-300 text-purple-600">Code</strong>
      </h1>
      <GitHubCalendar
        username="vamshi-2003"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </div>
  );
}

export default Github;
