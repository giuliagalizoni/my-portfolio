---
title: 'Organize.me'
summary: 'Planner app focused on helping people with ADHD'
tech: ['Javascript', 'React.js', 'Nodejs', 'Express.js', 'MongoDB']
date: 'July, 2022'
---

Organize.me is a special project to me because there was a lot of collaboration during its whole development until it was finally up and running. Initially, the app was designed by my colleague Bianca Nascimento, for her final project in the UX/UI Bootcamp at Ironhack. As we had to deliver a full-stack application for our final project, my teammate Junior Vilarino and I decided to work with a designer to make our experience more alike what our work would be in real life, and Organize.me was the chosen one, not only because we thought it looked cool, but also because of its purpose: to help people with ADHD organize their tasks and be more productive without overwhelming themselves.

## How it works

People with ADHD tend to struggle with defining priorities for their tasks: they often begin many tasks at the same time and end up completing nothing. Another issue that they can face is not knowing how to start a complicated task. Organize.me is architecture to help with those issues.

Users can create tasks and break them into little steps, marking the start time and the end time. The tasks are displayed on Home, below the calendar which shows only the current week, so they can focus on the present. By clicking on each day of the calendar, users can see the tasks that are due on that day organized by time. They must start the most urgent task first ‒‒ the next task can only be started when the previous task is done. When starting a task, the user should check-mark the steps after they did it and keep track of their progress. When all the steps are done, it’s time to finish by clicking on “End Task”.

This way, Organize.me makes it easier to organize deadlines, define priorities and break tasks into little steps to avoid procrastination and get things done

## Development

For the final project of the Bootcamp, the task was to create a full-stack application with a functional CRUD — where users can create something, read (or visualize) it, update (or edit) it and delete it ‒‒ using Express.js and MongoDB in the back-end and React in the front-end. We created two separate repositories to keep things organized and started with the back-end.

The first step was designing an entity-relationship diagram, in which we defined 3 entities: User, Task and Step. With those defined, we used Mongoose to create models and routes for all entities, so our users would be able to sign up, login, and log out, create tasks with steps that are safely stored, and edit and delete them if necessary.

Most of the back-end ready, it was time to create a functional interface for our users following the mock-up. We chose to use pure CSS this time to have a chance to practice it and also to make it more aligned with the design. For every page and component, we created a .css file in order to keep things organized and reuse as much as we could. We also used Axios to handle API requests and date-fns to format dates.

One particular challenge was guaranteeing interface responsibility for different devices while using the space in the best possible way. Our designer created a web version where two pages were displayed at the same time, so we had to make adjustments to show CreateTask, StartTask, and EditTask on the home page next to the calendar and the task list.

Although we tested it extensively using Postman, we also had to review the back-end routes and models quite a few times while working on the components because we noticed that some things were not working properly with the interface. This made me realize how important team alignment and planning is, but also how useful for such problems can be automated testing ‒‒ so I decided to study it as soon as possible when the Bootcamp was finished.

## Final thoughts

This project was, without a doubt, the greatest challenge I had since I started learning programming. Building a full-stack application with a CRUD fully working is an extremely complex process and involves many details. The most valuable lesson I learned is that teamwork and collaboration is crucial for success in such projects.
