const { stdin, stdout } = process;
const fs = require('fs');
const path = require('path');

const output = fs.createWriteStream(path.join(__dirname, 'text.txt'));
fs.writeFile(path.join(__dirname, 'text.txt'), '', (err) => {
  if (err) throw err;
});

stdout.write('Hello! Write text:\n');
stdin.on('data', (data) => {
  const dataStr = data.toString();
  if (dataStr.includes('exit')) {
    process.exit();
  }
  output.write(dataStr);
});
process.on('SIGINT', () => {
  process.exit();
});
process.on('exit', () => {
  stdout.write('Goodbye!');
});
