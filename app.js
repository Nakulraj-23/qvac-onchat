import { loadModel, LLAMA_3_2_1B_INST_Q4_0, completion, unloadModel } from '@qvac/sdk';
import readline from 'node:readline/promises';

console.log('Loading model on-device (first run downloads it)...');

const modelId = await loadModel({
  modelSrc: LLAMA_3_2_1B_INST_Q4_0,
  onProgress: (p) => {
    process.stderr.write(`\rDownloading ${p.percentage.toFixed(0)}%`);
    if (p.percentage >= 100) process.stderr.write('\n');
  }
});

console.log('Model loaded. Type a message (or "exit" to quit).\n');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const history = [];

while (true) {
  const userInput = await rl.question('You: ');
  if (userInput.trim().toLowerCase() === 'exit') break;

  history.push({ role: 'user', content: userInput });

  process.stdout.write('AI: ');
  const result = completion({ modelId, history, stream: true });
  let full = '';
  for await (const token of result.tokenStream) {
    process.stdout.write(token);
    full += token;
  }
  process.stdout.write('\n\n');
  history.push({ role: 'assistant', content: full });
}

rl.close();
await unloadModel({ modelId });
console.log('Model unloaded. Bye!');
