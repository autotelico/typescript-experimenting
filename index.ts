type Name = string;

const myName: Name = "autotelico";

interface StreamResponse {
  status: StreamStatus;
}

type StreamStatus = "ONLINE" | "OFFLINE" | "IDLE";

function handleResponse(response: StreamResponse): void {
  switch (response.status) {
    case "ONLINE":
      console.log("You are online!");
      break;
    case "OFFLINE":
      console.log("You are offline.");
      break;
    case "IDLE":
      console.log("a");
      break;
    default:
      const status: never = response.status;
      throw new Error("Unknown status: " + status);
  }
}

handleResponse({ status: "ONLINE" });

function logSomething(value: string): void {
  console.log(value);
}

console.log(logSomething("hey"));
