import * as fs from 'fs';
import * as path from 'path';

const subfolder = "nodes/"
const baseUrl = "https://docs.kaia.io/"+subfolder;
function getAllFiles(dirPath, arrayOfFiles) {
    let files = fs.readdirSync(dirPath);

    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function(file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
        } else {

            arrayOfFiles.push(path.join(dirPath, "/", file));


            let data = fs.readFileSync(path.join(dirPath, "/", file), 'utf8');
            let lines = data.split('\n');
            let flag = true;
            let linesCopy = JSON.parse(JSON.stringify(lines));
            let filePath = path.join(dirPath, "/", file);
            console.log(filePath)
            let i = 0;
            while(flag && i <= 7) {
                if(linesCopy[i] && linesCopy[i].indexOf("#") > -1) {
                    flag = false;
                } else {
                    lines.shift();
                    i++;
                }
            }
            let firstLine = lines[0];
            let linesData = firstLine.split("#");
            
            filePath = filePath.replace("characters/knowledge/kaiadocs/"+subfolder, baseUrl).replace(".mdx", "").replace(".md","");
            let paths = filePath.split("/");
            if(paths[paths.length-1] == paths[paths.length-2]) {
                paths.pop();
                filePath = paths.join("/")
            }
            lines[0] = `# [${linesData[1].trim()}](${filePath})`;
            // lines[0] =  path.join(dirPath, "/", file);
            fs.writeFileSync(path.join(dirPath, "/", file), lines.join('\n'), 'utf8');
        }
    });

    return arrayOfFiles;
}

const directoryPath = './characters/knowledge/kaiadocs/'+subfolder; // Replace with your directory path
const files = getAllFiles(directoryPath, []);

// files.forEach(file => console.log(file));