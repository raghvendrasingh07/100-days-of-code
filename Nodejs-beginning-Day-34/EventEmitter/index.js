const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on("start", () => {
  console.log("started");
});

eventEmitter.emit("start");

// Multiple arguments passed to the event handler by passing them as additional arguments to emit()

eventEmitter.on("start", (start, end) => {
  console.log(`started from ${start} to ${end}`);
});

eventEmitter.emit("start", 1, 100);

// Error events

eventEmitter.on("error", (err) => {
  console.error("whoops! there was an error");
});
eventEmitter.emit("error", new Error("whoops!"));
