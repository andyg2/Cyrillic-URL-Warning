# Cyrillic URL Detector

A browser extension that helps protect against phishing attempts by detecting Cyrillic characters in URLs.

## Features

- Automatically detects Cyrillic characters in the URL
- Shows a prominent warning bar at the top of the page
- Works with both static pages and Single Page Applications (SPAs)
- Warning can be dismissed with a close button

## Installation

1. Clone or download this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked" and select this directory

## How it works

The extension monitors the URL of the current page and checks for the presence of Cyrillic characters (Unicode range U+0400 to U+04FF). If any are detected, a red warning bar appears at the top of the page to alert the user of potential phishing attempts.
