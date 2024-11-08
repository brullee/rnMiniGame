# Mini Game: Number Guessing Game

This is a mini game I built using **React Native** and **Expo** where you pick a number, and the app tries to guess it, see how quickly the app can guess the number you chose.

## Key Learnings & Concepts Applied:

While building this game, I learned and revisited the following React Native concepts:

- **Constants**: Using constant files (like `Colors.js`) to manage values such as colors, text sizes, or other static data
- **Project Structure**: Organizing files effectively for readability and scalability
- **Fonts**: Using `useFonts` from `expo-fonts` to load custom fonts
- **Safe Area**: Implementing `SafeAreaView` and `SafeAreaProvider` from `react-native-safe-area-context` for proper display on all devices
- **Screen Layout Adaptability**: Using `Dimensions` and `useWindowDimensions` to adapt layouts for different screen sizes, and orientations
- **UI Components**: Learned how to utilize `ImageBackground`, `LinearGradient` from `expo-linear-gradient` for visually appealing backgrounds andor gradients
- **Dynamic Screen Rendering**: Changing the screen content based on state. For example, using conditional rendering to switch between different screens
- **User Input**: Using `TextInput` for user interaction
- **Alerts**: Triggering `Alert` for feedback and notifications
- **Data Handling**: Using `isNaN()` for number validation
- **Icons**: Adding icons using `Ionicons`
- **Side Effects**: Managing side effects with `useEffect`
- **Performance Optimization**: Implementing `useCallback` to optimize functions that depend on specific state values, minimizing unnecessary re-renders
- **Splash Screen**: Implementing a launch screen with `SplashScreen` from `expo-splash-screen` for a smooth startup experience
- **Platform API**: Using `Platform` to apply specific styles and functionality based on the operating system (iOS or Android)
- **List Rendering**: Revising `FlatList` and key handling for lists
- **Keyboard Management**: Implementing `KeyboardAvoidingView` to handle the keyboard properly, ensuring it doesn’t overlap important UI elements
- **Nested Styling**: Sending custom styles through props in custom components, enabling nested styling for flexible component design
- **Min/Max Styling Values**: Setting minimum and maximum values for certain styles to maintain consistent layouts across different screen sizes
- **Platform-Specific Code**: Learned to write platform-specific files (e.g., `Title.ios.js` and `Title.android.js`) to separate code for each platform without needing conditional statements.

This project helped me reinforce key concepts in React Native and further improved my understanding of state management, and handling user interactions.
