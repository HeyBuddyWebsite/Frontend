const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'components', 'servicescomp');

function walk(directory) {
  let results = [];
  const list = fs.readdirSync(directory);
  list.forEach(file => {
    file = path.join(directory, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.jsx')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk(dir);
let changedCount = 0;

files.forEach(file => {
  const filename = path.basename(file);
  // Do not touch main Hero sections. Assuming Section1 and HeroSection are heroes.
  if (filename === 'Section1.jsx' || filename === 'HeroSection.jsx') {
    return;
  }
  
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('<h1') || content.includes('<H1')) {
    // Replace <h1 and </h1 with <h2 and </h2 (case insensitive)
    content = content.replace(/<h1/gi, '<h2').replace(/<\/h1>/gi, '</h2>');
    fs.writeFileSync(file, content, 'utf8');
    console.log('Fixed:', file);
    changedCount++;
  }
});

console.log('Total files fixed:', changedCount);
