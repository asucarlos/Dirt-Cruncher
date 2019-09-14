# The Plan for the hackethon

## Getting Started

```
npm install
```

```
npm start
```

### Step 1 configuration

Configuration

expo init <app-name>
npm install cors
npm install express
npm install concurrently --save

package.json should look like this

```  
"scripts": {
    "start": "concurrently --kill-others \"expo start\" \"cd api && node server\"",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web",
    "eject": "expo eject"
  },
  ```

npm start will trigger both server and react native app

### Step 2 create a github

Send invites and setup github repo

Create a new project with 4 columns: Tasks, Work in progress, Stuck, Ready to merge, Completed

Split up the work process
