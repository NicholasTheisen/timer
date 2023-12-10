  const args = process.argv.slice(2);

  for (const arg of args) {
    const time = Number(arg);
    if (!isNaN(time) && time > 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, time * 1000);
    }
  }