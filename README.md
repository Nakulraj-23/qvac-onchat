# QVAC On-Device Chat

A minimal CLI chatbot that runs **entirely on-device** using Tether's QVAC SDK: no API key, no server, no data leaving your machine.

## What it does

Loads a local, quantized LLM (Llama 3.2 1B) through QVAC and runs a streaming chat loop in the terminal using QVAC's `completion` function. The model downloads automatically on first run, and runtime settings live in `qvac.config.json`.

## Features

- Fully local inference: no cloud calls and no external data transfer
- Streaming token output in the terminal
- Automatic model download on first run
- Config-driven setup via `qvac.config.json`
- Type `exit` to quit

## Tech stack

Node.js, Tether QVAC SDK, Llama 3.2 1B (quantized)

## Install

```bash
npm install
```

## Run

```bash
QVAC_CONFIG_PATH=./qvac.config.json node app.js
```

On Windows PowerShell:

```powershell
$env:QVAC_CONFIG_PATH="./qvac.config.json"; node app.js
```

## Project structure

| File | Purpose |
|---|---|
| `app.js` | Chat loop and streaming output |
| `qvac.config.json` | QVAC runtime and model configuration |

## License

MIT
