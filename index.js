var myName = "autotelico";
function handleResponse(response) {
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
            var status_1 = response.status;
            throw new Error("Unknown status: " + status_1);
    }
}
handleResponse({ status: "ONLINE" });
