const core = require("@actions/core");
const github = require("@actions/github");

try {
  const message = core.getInput("message");
  console.log("message", message);

  const payload = JSON.stringify(github.context.payload, undefined, 2);
  console.log("payload", payload);
} catch (error) {
  core.setFailed(error.message);
}
