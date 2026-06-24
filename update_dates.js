const fs = require('fs');
const path = require('path');

const directories = ['app', 'components', 'lib'];

const replacements = [
  // Names
  { regex: /Conference on Quantum Technologies and Computer Science/gi, replace: 'International Conference on Quantum Science and Technologies' },
  { regex: /Conference on Quantum Technologies and Cyber Security/gi, replace: 'International Conference on Quantum Science and Technologies' },
  { regex: /Conference on Quantum Technologies/gi, replace: 'International Conference on Quantum Science and Technologies' },
  { regex: /CQTCS/g, replace: 'ICQST' },
  { regex: /cqtcs/g, replace: 'icqst' },
  
  // Years
  { regex: /2026/g, replace: '2027' },

  // Pre-conference dates (was Oct 11, now Feb 16)
  { regex: /Oct 11/gi, replace: 'Feb 16' },
  { regex: /October 11/gi, replace: 'February 16' },
  { regex: /11th October/gi, replace: '16th February' },
  { regex: /10-11/gi, replace: '15-16' }, // fallback for pre-conf ranges
  
  // Main conference dates (was Nov 15-17, now Feb 17-19)
  { regex: /November 15(\s*[-–]\s*)17/gi, replace: 'February 17$119' },
  { regex: /Nov 15(\s*[-–]\s*)17/gi, replace: 'Feb 17$119' },
  { regex: /15(\s*[-–]\s*)17 November/gi, replace: '17$119 February' },
  { regex: /November 15/gi, replace: 'February 17' },
  { regex: /November 16/gi, replace: 'February 18' },
  { regex: /November 17/gi, replace: 'February 19' },
  { regex: /Nov 15/gi, replace: 'Feb 17' },
  { regex: /Nov 16/gi, replace: 'Feb 18' },
  { regex: /Nov 17/gi, replace: 'Feb 19' },
  { regex: /15th November/gi, replace: '17th February' },
  { regex: /16th November/gi, replace: '18th February' },
  { regex: /17th November/gi, replace: '19th February' },

  // "November" standing alone
  { regex: /November/gi, replace: 'February' },
  { regex: /Nov /g, replace: 'Feb ' },
];

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      walkDir(dirPath, callback);
    } else {
      if (dirPath.endsWith('.ts') || dirPath.endsWith('.tsx') || dirPath.endsWith('.md')) {
        callback(dirPath);
      }
    }
  });
}

let modifiedCount = 0;

directories.forEach(dir => {
  walkDir(dir, (filePath) => {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    replacements.forEach(r => {
      content = content.replace(r.regex, r.replace);
    });

    if (original !== content) {
      fs.writeFileSync(filePath, content, 'utf8');
      modifiedCount++;
      console.log(`Modified: ${filePath}`);
    }
  });
});

console.log(`\nUpdated ${modifiedCount} files successfully.`);
