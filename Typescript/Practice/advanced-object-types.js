"use strict";
// Interfaces and Types
function updateRunGoal(run) {
    console.log(`
  Miles left:       ${50 - run.miles}
  Percent of goal:  ${(run.miles / 50) * 100}% complete
    `);
}
updateRunGoal({
    miles: 5,
});
class DesktopDirectory {
    constructor() {
        this.config = {
            default: {
                encoding: "utf-8",
                permissions: "drw-rw-rw-",
            },
        };
    }
    addFile(name) {
        console.log(`Adding file: ${name}`);
    }
    showPreview(name) {
        console.log(`Opening preview of file: ${name}`);
    }
}
const Desktop = new DesktopDirectory();
console.log(Desktop.config);
