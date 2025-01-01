# Cyrillic URL Detector

A browser extension that helps protect against phishing attempts by detecting Cyrillic characters in URLs.

## Features

- Automatically detects Cyrillic characters in URLs
- Shows a prominent warning bar at the top of the page
- Works with both static pages and Single Page Applications (SPAs)
- Warning can be dismissed with a close button

## Installation

1. Download the [extension](https://yourusername.github.io/Cyrillic-URL-Warning/Cyrillic-URL-Warning.crx) or [source code](https://yourusername.github.io/Cyrillic-URL-Warning/Cyrillic-URL-Warning.zip)
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked" and select this directory

## Project Structure

```
.
├── docs/               # GitHub Pages website
│   ├── index.html     # Landing page
│   └── assets/        # Web assets
├── src/               # Extension source code
│   ├── content.js     # Content script
│   └── manifest.json  # Extension manifest
└── README.md          # You are here
```

## How it works

The extension monitors the URL of the current page and checks for the presence of Cyrillic characters (Unicode range U+0400 to U+04FF). If any are detected, a red warning bar appears at the top of the page to alert the user of potential phishing attempts.

## Development

To work on this extension:

1. Clone this repository
2. Make your changes in the `src` directory
3. Load the extension in Chrome using Developer mode
4. Test your changes

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Security

If you discover a security vulnerability, please send an email to [your-email]. All security vulnerabilities will be promptly addressed.
