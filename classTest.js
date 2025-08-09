const fs = require("fs");
const path = require("path");

// CONFIG - fișierul CSS
const cssFile = "./css/style.css";
const outputFile = "./unused-classes.txt";

// Funcție pentru a parcurge recursiv folderele și a colecta toate fișierele .html
function getAllHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      getAllHtmlFiles(filePath, fileList);
    } else if (file.toLowerCase().endsWith(".html")) {
      // <- acum ia orice .html, nu doar index.html
      fileList.push(filePath);
    }
  });
  return fileList;
}

// Funcție pentru a extrage clasele din HTML
function extractClassesFromHTML(content) {
  const classRegex = /class\s*=\s*["']([^"']+)["']/g;
  const classes = new Set();
  let match;
  while ((match = classRegex.exec(content)) !== null) {
    match[1].split(/\s+/).forEach((cls) => classes.add(cls.trim()));
  }
  return classes;
}

// Funcție pentru a extrage clasele din CSS
function extractClassesFromCSS(content) {
  const cssClassRegex = /\.([a-zA-Z0-9_-]+)\s*[{,]/g;
  const classes = new Set();
  let match;
  while ((match = cssClassRegex.exec(content)) !== null) {
    classes.add(match[1].trim());
  }
  return classes;
}

// 1. Citește toate fișierele .html din proiect
const htmlFiles = getAllHtmlFiles("./");
if (htmlFiles.length === 0) {
  console.log("Nu s-au găsit fișiere .html!");
  process.exit(1);
}

// 2. Citește CSS-ul
if (!fs.existsSync(cssFile)) {
  console.log(`Fișierul CSS '${cssFile}' nu există!`);
  process.exit(1);
}
const cssContent = fs.readFileSync(cssFile, "utf8");
const cssClasses = extractClassesFromCSS(cssContent);

// 3. Citește toate HTML-urile și colectează clasele
const htmlClasses = new Set();
htmlFiles.forEach((file) => {
  const content = fs.readFileSync(file, "utf8");
  extractClassesFromHTML(content).forEach((cls) => htmlClasses.add(cls));
});

// 4. Găsește clasele care NU sunt folosite în niciun HTML
const unusedClasses = [...cssClasses].filter((cls) => !htmlClasses.has(cls));

// 5. Scrie rezultatul într-un fișier
fs.writeFileSync(outputFile, unusedClasses.length > 0 ? unusedClasses.join("\n") : "Toate clasele sunt folosite!");
console.log(`Gata! Am salvat rezultatul în '${outputFile}'.`);
