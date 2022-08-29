export const texts = {
  homeMain: [
    `Hello there! I'm David. I'm passionate about software development with a focus on full stack development. I have 2+ years of full-time, co-op, and self-employment work experience as a software engineer developing on the entire stack. That includes component-based front-end development in React, RESTful API back-end development in Express & Flask, and database management in SQL with RDBMS such as PostgreSQL and MySQL. Most of my experience is in the JavaScript ecosystem, but I have experiences in other languages such as Python, C#, and Java.`,
  ],
  aboutMain: [
    `I graduated from the University of Alberta June 2021 with a bachelors in computer engineering. The courses I took served a strong foundation for my knowledge in software engineering. That includes data structures and algorithms, object-oriented design, operating systems, database management systems, computer architecture, computer networking, and parallel and distributed systems.`,
    `I am early on in my career; I am looking to grow professionally as a software engineer and as a team player. I am open to learning and exposing myself to new ideas and methodologies. I take on challenges with a can-do attitude and an eagerness to dive into complex problems. I am always looking to improve myself and find better ways to do things.`,
    `Outside of software, I'm an outdoorsy person. In my free time, I like to go walking, running, swimming, biking, hiking, and snowboarding.`,
  ],
  projects: {
    tourloop: [
      `TourLoop is a route-finding web app that generates routes based on a target distance. This is in contract to typical route-finding apps such as Google Maps that seek the shortest or fastest path between two points. Generated routes may also favour a specified pathway type from bike path, paved road, or dirt trail. On the app, a user can click on the map for their start and end location, enter their target distance in kilometers, and select their specified pathway type to generate a route based on those parameters. If there is no end location selected, a generated route will loop back to the starting location.`,
      `The inspiration for this app came from the idea of leisurely exploring a city without having any particular place to visit or direction to go. The target audience for this app is for anyone looking to walk, run, or bike around their area from athletes to causal outdoor-goers. For example, a runner might want to do a trail run that is 5 km and could use this app to find such route.`,
      `Working with a team of 3, we went through several stages of development. During the planning phase, we wrote a software requirements specification (SRS) to outline the scope, features, and characteristics of the software. We created a UML use-case diagram for illustrating how various actors interface with the system. For the design phase, we demonstrated OO design by creating a UML class diagram to illustrate classes and the relationship between them. I worked on creating a component hierarchy diagram to engineer the UI structure. Then for the implementation phase, we used React on the front-end, Python on the back-end, and Neo4j as our graph-based DBMS. We used OpenStreetMap dataset for geospatial data and Google Maps API for the map itself. We containerized the application using Docker and deployed in the cloud using Cybera’s Rapid Access Cloud service. There were three different algorithms used to generate routes and they were all based on the A* algorithm. Each algorithm had a different heuristic: first one aimed to get accurate target distance being pathway agnostic, second one greedily favoured specified pathway, and the third one was somewhere in the middle. The third algorithm also included a random factor so that it didn’t generate the same route each time. My main responsibility in this project was to implement the front-end.`,
      `This was my capstone project.`,
    ],
    vibes: [
      `Vibes is an Android app that lets users post, share, and track moods. Users can create an account and make public or private posts that include a mood, description, photo, and tags. Users can follow other users to see their public mood posts.`,
      `Working with a team of 6, we developed the Android app using Java. We used Firebase Authentication for authenticating users and Cloud Firestore, a key-value NoSQL database, for storing user related data such as mood posts and followers. I was responsible for implementing sign-up/login functionality and handling user data. I also created UI/UX prototypes using InVision which guided the interface implementation.`,
      `This was for a course project.`,
    ],
    igemUalberta2019: [
      `Attributed for designing and developing the wiki for the UAlberta iGEM team in 2019.`,
    ],
    igemUalberta2018: [
      `Attributed for designing and developing the wiki for the UAlberta iGEM team in 2018.`,
    ],
    igemUalberta2017: [
      `In 2017, I participated in the University of Alberta’s iGEM team as a student researcher to assist in develop a buoyancy-based screening system with E. coli. The team had to showcase its research on an online wiki. I took responsibility in designing and developing the wiki with JQuery, HTML, and CSS. Similarly, I was attributed for developing the wikis for the 2018 and 2019 as well.`,
    ],
  },
};
