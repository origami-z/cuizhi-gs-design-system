const yargs = require("yargs");

const argv = yargs
  // .command("lyr", "Tells whether an year is leap year or not", {
  //   year: {
  //     description: "the year to check for",
  //     alias: "y",
  //     type: "number",
  //   },
  // })
  .option("watch", { alias: "w", description: "Watch mode", type: "boolean" })
  .option("verbose", {
    alias: "v",
    description: "Verbose mode",
    type: "boolean",
  })
  .help()
  .alias("help", "h").argv;

// https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/
// if (argv._.includes("lyr")) {
//   const year = argv.year || new Date().getFullYear();
//   if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
//     console.log(`${year} is a Leap Year`);
//   } else {
//     console.log(`${year} is NOT a Leap Year`);
//   }
// }

const build = () => {
  const esbuild = require("esbuild");
  const entry = "src/index.ts";
  console.log("Build with esbuild", entry);
  esbuild.buildSync({
    entryPoints: [entry],
    bundle: true,
    // loader: { ".js": "jsx" },
    // minify: true,
    sourcemap: true,
    // format: "esm",
    target: ["chrome58", "firefox57", "safari11", "edge16"],
    outfile: "esout/index.js",
    external: ["react", "react-dom"],
    define: {
      // TODO: Switch below to support arg
      "process.env.NODE_ENV": '"production"',
    },
  });
};

if (argv.watch) {
  build();
  console.log("Running esbuild.js in watch mode");
  const chokidar = require("chokidar");
  chokidar.watch("./src").on("change", (event, path) => {
    if (argv.verbose) {
      console.log(event, path);
    }
    build();
  });
} else {
  build();
}
