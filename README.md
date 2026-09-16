# QVAC On-Device Chat

A minimal CLI chatbot that runs entirely on-device using Tether's QVAC SDK - no API key, no server, no data leaving your machine.

## What it does
Loads a local LLM (Llama 3.2 1B, quantized) via QVAC and runs a streaming chat loop in the terminal using QVAC's completion function.

## Install
npm install

## Run
QVAC_CONFIG_PATH=./qvac.config.json node app.js

First run downloads the model automatically. Type messages, type exit to quit.

## License
MIT
