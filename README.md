# Fitness Tracker

 The fitness tracker allows the user to create a workout where they enter various exercises associated to the workout.  The data can then be analyzed with an included stats page that provides insights into the details of latest seven of their workouts.  The challenge is to connect the included frontend with a backend that is to be built using MongoDB, Mongoose and Express.

## Table of Contents
- [Fitness Tracker](#fitness-tracker)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Features](#features)
  - [Screenshots](#screenshots)

## Installation
1. Clone this GitHub repository

   ```
   git@github.com:mayuripendyala/fitness-tracker.git
   ```

2. Install all dependent npm packages

   ```
   npm install 
   node seeders/seed.js 
   npm start

   ```
3. Create a MongoDB database
4. If running locally update the MONGODB_URI with your connection string in a .env file
5. If running on a server or hosting platform add the MONGODB_URI with connection string to the environment variables
6. If needed seed the MongoDB database by running `node seeders/seed.js`


## Usage
1. Run `npm start` to start the application
2. Choose **Continue Workout** to continue the last workout or **New Workout** to create a new workout.
3. At the **Add Your Exercise** page select your **Exercise Type**
4. Enter the details of your exercise and click **Complete** to complete the workout or **Add Exercise** continue to add other exercises
5. Click the **Dashboard** on the top navigation bar to see stats.

A demo of the application is available at: https://mayuri-fitness-tracker.herokuapp.com

## Features
* Add a workout
* Add a resistance workout
* Add a cardio workout
* See a snapshot of the last workout
* See stats with charts and graphs on the latest seven workouts


## Screenshots
**Home Page**

![home](/assets/home.png?raw=true)

**New Workout**

![newworkout](/assets/newworkout.png?raw=true)

**Add Exercise**

![addexercise](/assets/addexercise.png?raw=true)

**Stats**

![stats](/assets/stats.png?raw=true)

