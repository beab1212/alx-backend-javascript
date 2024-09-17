process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (data) => {
  // const chunk = process.stdin.read();

  // if (chunk) {
  //   process.stdout.write(`Your name is: ${chunk}`);
  // }
  process.stdout.write(`Your name is: ${data}`);
  process.exit();
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
