# ItsQuiz test task
<ol>
  <li><a href="https://github.com/AndriiPindiura/ItsQuiz/archive/master.zip">Clone repository</a></li>
  <li>npm i</li>
  <li><a href="https://www.mongodb.com/download-center?jmp=nav">Istall and run MongoDB</a></li>
  <li><a href="src/config.js">Edit config.js (object mongo)</a></li>
  <li>npm run start</li>
  <li><a href="http://localhost:3001/">use</a></li>
</ol>


.
├── /build/                     # The folder for compiled output
├── /docs/                      # Documentation files for the project
├── /node_modules/              # 3rd-party libraries and utilities
├── /src/                       # The source code of the application
├── ├── /actions/               # Redux actions 
├── ├── /api/                   # Express Rest API 
│   ├── /components/            # React components
│   ├── /constants/             # Constants for Redux actions and reducers
│   ├── /content/               # Static pages like About Us, Privacy Policy etc.
│   ├── /core/                  # Core framework and utility functions
│   ├── /data/                  # GraphQL server schema and data models
│   ├── /public/                # Static files which are copied into the /build/public folder
│   ├── /reduces/               # Redux reducers
│   ├── /routes/                # Page/screen components along with the routing information
│   ├── /store/                 # Redux store configure
│   ├── /theme/                 # Fonts React components images and sass functions
│   ├── /client.js              # Client-side startup script
│   ├── /config.js              # Global application settings
│   └── /server.js              # Server-side startup script
├── /test/                      # Unit and end-to-end tests
├── /tools/                     # Build automation scripts and utilities
│   ├── /lib/                   # Library for utility snippets
│   ├── /build.js               # Builds the project from source to output (build) folder
│   ├── /bundle.js              # Bundles the web resources into package(s) through Webpack
│   ├── /clean.js               # Cleans up the output (build) folder
│   ├── /copy.js                # Copies static files to output (build) folder
│   ├── /deploy.js              # Deploys your web application
│   ├── /run.js                 # Helper function for running build automation tasks
│   ├── /runServer.js           # Launches (or restarts) Node.js server
│   ├── /start.js               # Launches the development web server with "live reload"
│   └── /webpack.config.js      # Configurations for client-side and server-side bundles
└── package.json                # The list of 3rd party libraries and utilities
