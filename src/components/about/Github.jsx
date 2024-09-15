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
        blockSize={18}
        blockMargin={5}
        color="#c084f5"
        fontSize={20}
        theme={{
          light: ["#ebedf0", "#e4c1f9", "#c084f5", "#9a4ef0", "#6b23ff"], // Shades of purple for light theme
    dark: ["#1e1e1e", "#4b0082", "#6b23ff", "#9a4ef0", "#c084f5"] // 5 colors for dark theme
        }}
      />
    </div>
  );
}

export default Github;
