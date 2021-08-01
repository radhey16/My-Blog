const articles = [
    {
        name: 'learn-react',
        title: 'The Fastest Way to Learn React',
        content: [
            `Welcome! Today we're going to be talking about the fastest way to
            learn React. First and foremost: make sure you know JavaScript well! Having a solid foundation in JavaScript (especially ES6+) will really making learning React a lot easier. Get super comfortable with objects and arrays… and with the map, filter, and reduce methods - and then you’ll have very little trouble with React.`,
            `From there, start with the official docs. Everyone says that about [insert library], but the React docs are really well done! Plus, they’re always current… and there is a lot of outdated “learn React” stuff out there. (And things move/change fast in the land of JS, so if you’re learning it you might as well learn the most current methods.)`,
            `Try building out some REALLY basic stuff to start, just to get a feel for how things work in React… things like JSX, props, and state… and how the React lifecycle methods work.
From that point… you will want to expand and build on this new knowledge base. (And you’ll probably be excited to do it. React is amazing!) How YOU do that really depends on your preferred learning method: try some online tutorials and/or online courses at places like Egghead or Udemy, find some tutorials on YouTube (be mindful of the date!), or find some interesting React-based projects on Github and look over the code, etc.`,
        ]
    },    {
        name: 'learn-node',
        title: 'How to Build a Node Server in 10 Minutes',
        content: [
            `In this article, we're going to be talking looking at a very quick way
            to set up a Node.js server. I presume that you already have your environment set up (i.e Node.js and MongoDB is installed).

Kindly run npm -v and mongo --version as these will show you the version of NPM and MongoDB installed on your machine.

If you don’t have it installed, kindly go through this link on how to install it in order for us to create a server in Node and Mongodb.

If you do have Node and MongoDB installed, let's begin the tutorial with the following basic steps.`,
            `Create a Folder name todoListApi - mkdir todoListApi

Navigate to the root of your newly created folder - cd todoListApi

Create a package.json file - npm init
Package.json is a file that gives the necessary information to npm which allows it to identify the project as well as handle the project's dependencies.
npm init will prompt you to enter some information such as the app name, description, version, author, keyword and also ask if what you see is what you like.
You should have something like this eventually. Press enter to complete the creation of our package.json. Having done all these, your folder structure should look like this:enter image description here
Create a file called server.js - touch server.js.
In this server, we will writing the protocols to create our server.
Create a folder called api - mkdir api
Inside this folder called api, create three separate folders called models, routes, and controllers by running mkdir api/controllers api/models api/routes
Create todoListController.js in the api/controller folder, todoListRoutes.js in the routes folder, and todoListModel in the model folder - touch api/controllers/todoListController.js api/models/todoListModel.js api/routes/todoListRoutes.js`,
            `Having done all these, what happens if we entered a wrong route? say you entered 'http://localhost:3000/task', It responds with a message “Cannot GET /task”. Let’s add express middleware which could be used to return more interactive messages.

Middlewares basically intercepts incoming http request and as such you can use them to perform several operations ranging from authentication to validations etc.`,
        ]
    },     {
        name: 'my-thoughts-on-resumes',
        title: 'My Thoughts on Resumes',
        content: [
            `Today is the day I talk about something which scares most people: resumes.
            When applying for jobs, it's important to be fearless and show employers that you are a confident and qualified candidate. These career quotes about being fearless may inspire you to confidently strive for bigger and better things:

“What would you do if you weren't afraid?” ― Sheryl Sandberg`,
            `Since your resume is the first step in finding a job, it's important to feel motivated from the beginning. These quotes about beginning may help you start your career journey:

﻿“Begin somewhere. You cannot build a reputation on what you intend to do.” ― Liz Smith

“The first step towards getting somewhere is to decide you're not going to stay where you are.” — J.P. Morgan

“The beginning is the most important part of the work.” — Plato

"A hard beginning maketh a good ending." — John Heywood

“It's never too late to become who you want to be. I hope you live a life that you're proud of, and if you find that you're not, I hope you have the strength to start over.” — F. Scott Fitzgerald`,
            `Finding your dream job requires determination to reach your goals and achieve great things. These quotes about determination may inspire you to stay focused during your job search:

"The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle." ― Steve Jobs

"When everything seems to be going against you, remember that the airplane takes off against the wind, not with it." ― Henry Ford

"If opportunity doesn't knock, build a door." ― Milton Berle

“The best way to not feel hopeless is to get up and do something. Don't wait for good things to happen to you. If you go out and make some good things happen, you will fill the world with hope, you will fill yourself with hope.” ― Barack Obama

“The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will.” ― Vince Lombardi`,
        ]
    },  
];

export default articles;
