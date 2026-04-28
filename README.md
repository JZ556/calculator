# Calculator App (React Native + Expo)

A simple calculator app built with Expo and React Native.

## Features

- Basic calculator operations (`+`, `-`, `x`, `÷`, `%`)
- Light and dark theme support
- Responsive keypad sizing for different iPhone screen sizes
- Safe area support for modern devices

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npx expo start
```

3. Run on device/simulator:

- Press `i` for iOS simulator
- Press `a` for Android emulator
- Scan QR code with Expo Go

## Scripts

- `npm run start` - start Expo
- `npm run ios` - run iOS
- `npm run android` - run Android
- `npm run web` - run web
- `npm run lint` - run linter
- `npm run test` - run tests

## Project Structure

- `app/` - route screens (Expo Router)
- `Components/` - reusable UI components
- `context/` - theme context provider
- `utils/` - calculator logic and shared values
