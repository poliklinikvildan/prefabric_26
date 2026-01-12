import { spawn } from 'child_process';

console.log("Starting Python FastAPI app via shim...");

const pythonProcess = spawn('python', ['-m', 'uvicorn', 'app.main:app', '--reload', '--host', '0.0.0.0', '--port', '5000'], {
  stdio: 'inherit',
  shell: true
});

pythonProcess.on('error', (err) => {
  console.error('Failed to start Python process:', err);
});

pythonProcess.on('close', (code) => {
  console.log(`Python process exited with code ${code}`);
});
