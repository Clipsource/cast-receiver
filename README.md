# ClipSource - Cast Receiver

## Requirements
- Node.js 20+ ( LTS )

## Development

1. `npm install`
2. `npm run dev`

### Sender

1. `cp .env.sample .env`
2. Edit .env add add the `JWPLAYER_KEY`
3. `npm run dev:sender`
4. Open `https://localhost:1337?url=<hls_master_url>`

## Build for production

1. `npm run build`
2. Host the `dist` folder on a web server

