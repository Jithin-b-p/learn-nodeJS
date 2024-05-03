const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("response", () => {
  console.log("responding hi!!");
});

emitter.emit("response");
