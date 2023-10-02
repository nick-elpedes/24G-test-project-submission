# 24G Test Project
Submission for 24G test project by Nicholas Elpedes

## Project Description
This project is a two window application that consists of a display window and a controller window. The controller (meant to be used on an iPad) allows the user to select a color and send it to the display window. The display window displays the color sent by the controller window. Any number of controllers and any number of displays can exist, with each controller being able to update the color across all the displays.

## How to run
1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `npm run start` or `npm start` to start the server on port 3000

## How to use
- http://localhost:3000 will open the display window
  - This window will display the color set by the controller.
- http://localhost:3000/controls will open the controller window
  - This window allows you to set the shown color across all display windows. Click the color you want to set and it will be sent to all display windows.

