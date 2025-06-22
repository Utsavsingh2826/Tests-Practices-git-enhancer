const fs = require("fs");
const { execSync } = require("child_process");

// Total desired commits
const totalCommits = 60;

// First commit (Jan 1, 2025) - Initial setup
fs.writeFileSync("README.md", "# Dev Practice Logs\n\nStarted this repo to track daily JS/Node learning.");
execSync("git add README.md");
execSync(`git commit -m "Initial commit: Setup README and goal"`, {
  env: {
    ...process.env,
    GIT_AUTHOR_DATE: "2025-01-01T09:00:00",
    GIT_COMMITTER_DATE: "2025-01-01T09:00:00",
  }
});

// Remaining 59 commits (57 random before June 22 + 2 today)
const messages = [
  "Started reviewing JavaScript closures and scope",
  "Practiced array and object destructuring examples",
  "Completed Express.js route setup",
  "Explored middleware chaining in Node",
  "Studied callback hell solutions",
  "Documented event loop examples",
  "Created utility functions for objects",
  "Updated progress log",
  "Finished practice on arrow functions",
  "Practiced with async/await",
  "Fixed logic in promise chaining",
  "Studied file system module",
  "Created CLI for basic calculator",
  "Reviewed topics from JS course",
  "Wrote notes on REST vs GraphQL",
  "Tried coding a stopwatch in JS",
  "Added examples for debounce/throttle",
  "Explored Git workflows",
  "Logged today's learning session",
  "Did practice on map/filter/reduce",
  "Practiced destructuring arrays",
  "Created a sample portfolio page",
  "Built simple HTTP server in Node",
  "Worked on CRUD app backend",
  "Practiced error handling strategies",
  "Explored ES6 modules",
  "Tried solving a hard Leetcode",
  "Improved console log formatting",
  "Added JSON parsing examples",
  "Revised scope & context in JS",
  "Practiced object methods",
  "Explored npm script automation",
  "Documented setup process",
  "Refactored loops into array methods",
  "Mocked API data in JS",
  "Analyzed memory leaks in code",
  "Tested functions with edge cases",
  "Built mock user data generator",
  "Summarized new learning topics",
  "Cleaned and organized repo",
  "Practiced string manipulation",
  "Studied closures again today",
  "Created notes on hoisting",
  "Explored event delegation",
  "Tried building with DOM APIs",
  "Practiced recursion techniques",
  "Refreshed knowledge of call/apply/bind",
  "Tried fetch + async error handling",
  "Implemented sorting functions",
  "Prepared for coding test",
  "Simplified logic in handlers",
  "Explored advanced array methods",
  "Improved variable naming",
  "Fixed async flow issue",
  "Reviewed Node process object",
  "Built validation utility",
  "Worked on mini todo app",
  "Studied Express error middleware"
];

const getRandomDate = (start, end) => {
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  date.setHours(10 + Math.floor(Math.random() * 8));
  return date;
};

const commitDates = [];
const start = new Date("2025-01-02");
const end = new Date("2025-06-21");

// 57 random dates before today
for (let i = 0; i < totalCommits - 3; i++) {
  commitDates.push(getRandomDate(start, end));
}

// Add 2 commits for today
commitDates.push(new Date("2025-06-22T10:15:00"));
commitDates.push(new Date("2025-06-22T14:30:00"));

// Sort them chronologically
commitDates.sort((a, b) => a - b);

// Do the commits
for (let i = 0; i < commitDates.length; i++) {
  const date = commitDates[i];
  const msg = messages[i % messages.length];
  const file = "progress.md";

  fs.appendFileSync(file, `\n- ${msg} (${date.toDateString()})`);
  execSync(`git add ${file}`);
  execSync(`git commit -m "${msg}"`, {
    env: {
      ...process.env,
      GIT_AUTHOR_DATE: date.toISOString(),
      GIT_COMMITTER_DATE: date.toISOString(),
    },
  });

  console.log(`✅ Commit ${i + 2}: ${msg} on ${date.toDateString()}`);
}
