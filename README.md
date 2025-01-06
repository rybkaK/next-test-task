This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Next test task


### Install 
```bash
npm install
```

### Run application
```bash
npm run dev
```

### Docker build 
```bash
docker build -t my-next-app .
```
### Docker run container 
```bash
docker run -p 3000:3000 -p 4000:4000 my-next-app
```
### Docker stop container 
```bash
docker stop <container_id>
```

### Technical decision
The project is built with TypeScript for development and Docker for deployment. I used JSON-Server to mock the backend and simulate a REST API. Docker ensures that the app and API run in separate containers, making it easy to deploy and manage. I also implemented search functionality without using JSON Placeholder, as it does not handle partial name searches correctly. Instead, I used a custom solution to ensure that the search works as expected with product names. The application is designed to be responsive, with a focus on SEO best practices and a user-friendly interface. 

### Time spent
4.5 hours

