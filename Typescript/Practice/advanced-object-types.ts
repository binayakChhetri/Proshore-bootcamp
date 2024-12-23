// Interfaces and Types

interface Run {
  miles: number;
}

function updateRunGoal(run: Run) {
  console.log(`
  Miles left:       ${50 - run.miles}
  Percent of goal:  ${(run.miles / 50) * 100}% complete
    `);
}

updateRunGoal({
  miles: 5,
});

// Interfaces and Classes
// Write an interface here
/* 
interface Directory {
  addFile: (name: string) => void;
}

class DesktopDirectory implements Directory {
  addFile(name: string) {
    console.log(`Adding file: ${name}`);
  }

  showPreview(name: string) {
    console.log(`Opening preview of file: ${name}`);
  }
}

const Desktop = new DesktopDirectory();

Desktop.addFile("lesson-notes.txt");
Desktop.showPreview("lesson-notes.txt");
*/

// Deep types
interface Directory {
  addFile: (name: string) => void;
  // Define a config type member here
  config: {
    default: {
      encoding: string;
      permissions: string;
    };
  };
}

class DesktopDirectory implements Directory {
  config = {
    default: {
      encoding: "utf-8",
      permissions: "drw-rw-rw-",
    },
  };

  addFile(name: string) {
    console.log(`Adding file: ${name}`);
  }

  showPreview(name: string) {
    console.log(`Opening preview of file: ${name}`);
  }
}

const Desktop = new DesktopDirectory();

console.log(Desktop.config);
