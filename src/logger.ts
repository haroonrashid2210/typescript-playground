export function logProgress(percent: number) {
  // Move to start of line and rewrite progress
  process.stdout.clearLine(0);
  process.stdout.cursorTo(0);
  process.stdout.write(`Progress: ${percent}%`);
}

export function logMessage(msg: string, currentPercent?: number) {
  // First, clear progress line so message prints cleanly
  process.stdout.clearLine(0);
  process.stdout.cursorTo(0);
  console.log(msg);

  // Then re-print the progress so it stays visible
  if (currentPercent !== null) {
    process.stdout.write(`Progress: ${currentPercent}%`);
  }
}

export function logOverWrite(message: any) {
  // Move to start of line and rewrite progress
  process.stdout.clearLine(0);
  process.stdout.cursorTo(0);
  process.stdout.write(message);
}
