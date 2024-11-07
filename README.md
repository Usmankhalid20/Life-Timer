

# Life Timer

**Life Timer** is a JavaScript-based web application that calculates your age in real-time, down to the exact number of years, months, days, hours, minutes, and seconds. Enter your date of birth, and the Life Timer displays your entire age in a detailed and dynamic format.

## Features

- **Real-Time Age Calculation**: Updates age every second to display accurate time lived.
- **Local Storage Support**: Automatically saves your date of birth and retrieves it on page reload.
- **Intuitive UI**: Shows age in an easy-to-read format, separating years, months, days, hours, minutes, and seconds.
- **Toggling Interface**: Toggle date input visibility for a cleaner interface.

## Demo

Here's how the app works:
1. Enter your date of birth.
2. The Life Timer will calculate and display your age in the following format:
   - **Years**
   - **Months**
   - **Days**
   - **Hours**
   - **Minutes**
   - **Seconds**

## How It Works

### Core JavaScript Functions

1. **setDOBhandler**: This function handles date input, saving it to local storage and calculating the age.
2. **updateAge**: Calculates the current age based on the date stored in local storage, updating every second.
3. **loadDOBFromStorage**: Checks local storage for a saved date of birth and retrieves it, if available, to maintain consistency across sessions.

### Local Storage

The Life Timer saves your date of birth in local storage under three keys:
- **Year**: Birth year
- **Month**: Birth month
- **Date**: Birth date

On each visit, the app retrieves these values to calculate the age without re-entering your date of birth.

## Getting Started

To use or modify the Life Timer:
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/life-timer.git
   ```
2. **Open the HTML file**: Open `index.html` in your preferred browser to run the Life Timer.

## Technologies Used

- **HTML**: For the structure of the app.
- **CSS**: For styling the user interface.
- **JavaScript**: For age calculations, UI updates, and local storage management.

## Contributing

Contributions are welcome! Please feel free to open issues or submit pull requests for improvements and bug fixes.

---

This `README.md` gives an overview of your project, its functionality, and instructions for usage and contribution. Let me know if you'd like any more details added!
