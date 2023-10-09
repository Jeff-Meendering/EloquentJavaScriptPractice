/*
Write a function that computes the dominant writing direction in a string of text. Remember that
each script object has a direction property that can be "ltr" left to right, "rtl" right to left, "ttp" 
top to bottom. The dominant direction is the direction of a majority of the characters that have a 
script associated with them. The characterScript and countBy functions defined earlier in the chapter 
are probably useful here.
*/

const SCRIPTS = [
    {
        name: "Latin",
        ranges: [[65, 91], [97, 123]],
        direction: "ltr",
        usedBy: ["English", "German", "Spanish", "French"]
      },
      {
        name: "Arabic",
        ranges: [[1536, 1541], [1542, 1548]],
        direction: "rtl",
        usedBy: ["Arabic", "Persian", "Urdu"]
      },
      {
        name: "Cyrillic",
        ranges: [[1024, 1280]],
        direction: "ltr",
        usedBy: ["Russian", "Bulgarian", "Serbian"]
      },
      {
        name: "Han",
        ranges: [[19968, 40870], [13312, 19904], [131072, 173791]],
        direction: "ltr",
        usedBy: ["Chinese", "Japanese", "Korean"]
      }
]

const characterScript = (code) => {
    for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => {
            return code >= from && code < to;
        })) {
            return script;
        }
    }
    return null;
}

const countBy = (items, groupName) => {
    let counts = [];
    for (let item of items) {
      let name = groupName(item);
      let known = counts.findIndex(c => c.name == name);
      if (known == -1) {
        counts.push({name, count: 1});
      } else {
        counts[known].count++;
      }
    }
    return counts;
  }
  

const dominantDirection = (text) => {
    let scripts = [];
    for (let i = 0; i < text.length; i++) {
        let script = characterScript(text.codePointAt(i));
        if (script) {
            scripts.push(script.direction);
        }
    }

    let counted = countBy(scripts, dir => dir);

    if (counted.length === 0) {
         return "No dominant direction found.";
    }

    counted.sort((a, b) => b.count - a.count);
    return counted[0].name;
}

let testString = "Hello World!";

console.log("The most dominant writing direction is: " + dominantDirection(testString));