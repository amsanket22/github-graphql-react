# React + Graphql along with typescript

this project uses github graphql api to pull react related popular libraries

## set up
1. clone the repo
2. set up . env - 
Create .env in project's root folder and add you github's access token against ```REACT_APP_GITHUB_TOKEN``` key
3. install dependacies - `npm i`
4. run `npm start`


--------------------------------
## main features
#### react with typescript

#### Tailwindcss
#### Graphql with Apollo Client

--------------------------------

In the project directory, you can run:

```bash
npm start
```

By default application start on port 3000

## Test

use following commands to test the application

```bash
npm test
```

## Docker Image

use following command to run a docker image

```bash
docker run -p 3005:3000 -e REACT_APP_GITHUB_TOKEN={your-github-token} -it amsainfotech/react-github-graphql:1.0.3
```

other versions are availble for ARM platform as well




