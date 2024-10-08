



# BoxerMatch - A Tinder for Boxers

## Overview

**BoxerMatch** is a simple React.js application that allows users to match boxers based on their locality and weight class. It simulates a "Tinder-like" experience for boxers, helping them find potential sparring partners or match-ups based on shared geographical location and weight class.

This project is beginner-friendly and focuses entirely on frontend functionality without a backend.

## Features

- Filter boxers by **location** and **weight class**.
- Display boxer profiles with relevant details such as name, location, and weight class.
- Simulate matching based on user input.
- Responsive layout and simple UI.

## Demo

A live demo of this project can be provided if hosted, or you can clone the repository and run it locally (instructions below).

## Technologies Used

- **React.js**: Front-end framework for building the user interface.
- **HTML5** & **CSS3**: Used for basic structure and styling.
- **JavaScript (ES6+)**: Logic for filtering and handling UI state.
- **Create React App**: Project setup.

## Installation and Setup

To get started with this project, follow these instructions:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/vinithroy/Myntra-Clone.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd boxing-match-app
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm start
   ```

   The application will start running at `http://localhost:3000`.

## File Structure

```plaintext
src/
  components/
    BoxerCard.js      # Component to display individual boxer profiles
    MatchBoxers.js    # Main component for filtering and matching boxers
  data.js             # Simulated boxer data (names, location, weight class)
  App.js              # Root component that renders the application
  index.css           # Styling for the app
  index.js            # Entry point for React app
```

## How It Works

- The **MatchBoxers** component is responsible for filtering the list of boxers based on the user’s input (location and weight class).
- The **BoxerCard** component displays individual boxer profiles.
- The data for the boxers is stored in `data.js` as an array of objects and is filtered based on the user’s search criteria.

### Example Boxer Data

```javascript
export const boxers = [
  { id: 1, name: "John Doe", location: "New York", weightClass: "Heavyweight" },
  { id: 2, name: "Mike Tyson", location: "Los Angeles", weightClass: "Heavyweight" },
  { id: 3, name: "Manny Pacquiao", location: "Manila", weightClass: "Welterweight" },
  { id: 4, name: "Floyd Mayweather", location: "Las Vegas", weightClass: "Welterweight" },
  { id: 5, name: "Tyson Fury", location: "Manchester", weightClass: "Heavyweight" },
];
```

### Core Components

1. **BoxerCard**: Displays a card for each boxer with their details (name, location, weight class).
2. **MatchBoxers**: Handles filtering logic based on user input and displays matched boxers.

## Usage

- Enter a **location** in the search bar to find boxers in that region.
- Select a **weight class** from the dropdown to filter boxers by their weight category.
- Boxer profiles will dynamically update based on your selections.

## Future Enhancements

- **Add a backend**: Integrate with a backend API to fetch real-time boxer data.
- **Profile pictures**: Include profile images for boxers to enhance the user interface.
- **User Authentication**: Allow users to create accounts and save their match preferences.
- **Geolocation**: Implement geolocation services to automatically detect a user's location.



#   B o x e r - M a t c h  
 