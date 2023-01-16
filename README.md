# Quick Compo

<img src="/Users/enriquecoscarelli/Downloads/minilogo.png" alt="minilogo" style="zoom:75%;" />

## Description

***dataBASE*** is the resource for all BASE jumpers around the world to check the weather conditions of different jumps and cross referencing latitude and longitude of exit points with Windy API and map box topographyc features.

## User Stories

- **Admin sign up:** As an admin I can sign up in the platfor
- **Admin log in:** As an admin I can login to the platform
- **Admin log out:** As an admin I can logout from the platform so no one else can use it
- **User sign up:** As a user I can sign up in the platform
- **User Log in:** As a user I can login to the platform
- **User log out:** As a user I can logout from the platform so no one else can use it
- **Add Offers** As a user I can add an Offers
- **Edit Offers** As a user I can edit an Offers
- **Read Offers** As a user I can read an Offers
- **Delete Offers** As a user I can delete an Offers
- **Edit User** As a user I can edit my profile, add or substract Offers
- **Chat** As an anon I can chat with other people in the platfor

## Backlog

User profile:

- See my profile
- See Offers
- Create Offers



# Client / Frontend

## React Router Routes

| Path                      | Component            | Permissions                | Behavior                                                      |
| ------------------------- | -------------------- | -------------------------- | ------------------------------------------------------------- |
| `/`                       | Home                 | Public `<Route>`           | Home pag                                                      |
| `/SignIn`                 | SignupPage           | Public `<Route>`           | Sign up form, link to login, navigate to homepage after signup|
| `/ServicePage`            | SercivePage          | Public `<Route>`           | Shows all offers in a list                                    |
| `/Category/:category`     | CategoryPage         | Public `<Route>`           | Shows offers from the same category                           |
| '/ProductDetails/:id'     | ProductDetails       | Public `<Route>`           | Shows all details of the product                              |
| '/About`                  | AboutPage            | Public `<Route>`           | Details about the mission and the founders of the webpage     | 
| '/TeamSection'            | TeamSection          | Public `<Route>`           | Shows info and contact of the development team                | 
| '/Privacy'                | Privacy              | Public `<Route>`           | Privacy Policy                                                |  
| '/Profile`                | ProfilePage          | user only `<PrivateRoute>` | Shows all profile details, change and add details             |
| '/Select'                 | Select               | user only `<PrivateRoute>` | Select to post Offer or Request                               |
| `/Request'                | SelectRequest        | user only `<PrivateRoute>` | Request form                                                  |
| `/Offer'                  | SelectOffer          | user only `<PrivateRoute>` | Offer form                                                    |                 
| '/Dashboard'              | Dashboard            | user only `<PrivateRoute>` | Shows navbar to profile setting and chat, details about offers|


## Components

- Home
- SignupPage
- SercivePage
- CategoryPage
- ProductDetails
- AboutPage
- TeamSection
- Privacy
- ProfilePage
- Select
- SelectRequest
- SelectOffer 
- Dashboard 
- Nav
- Footer

## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()
  - auth.getUser() // synchronous
- Exit Point Service
  - exitPoint.list()
  - exitPoint.detail(id)
  - exitPoint.add(id)
  - exitPoint.delete(id)
- User Service
  - user.detail(id)



# Server / Backend

## Models

User model

```
{
  user: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  favorites: [{type: Schema.Types.ObjectId,ref:'Exit'}]
  userAgreement: {type: boolean, required: true, default: false}
}
```

Exit model

```
 {
   name: {type: String, required: true},
   img: {type: String},
   aproachLat: {type: Number, required: true}
   aproachLong: {type: Number, required: true}
   aproachDescription: {type: String}
   exitLat: {type: Number, required: true}
   exitLong: {type: Number, required: true}
   exitDescription: {type: String}
   landiZoneLat: {type: Number, required: true}
   landingZoneLong: {type: Number, required: true}
   landingZoneDescription: {type: String}
   creator: {type: Schema.Types.ObjectId,ref:'User'}
   altitud: {type: number}
   
 }
```



## Backend routes

| HTTP Method | URL            | Request Body                                                 | Success status | Error Status | Description                                                  |
| ----------- | -------------- | ------------------------------------------------------------ | -------------- | ------------ | ------------------------------------------------------------ |
| GET         | `/auth/me`     |                                                              | 200            | 404          | Check if user is logged in and return profile page           |
| POST        | `/auth/signup` | {name, email, password}                                      | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST        | `/auth/login`  | {username, password}                                         | 200            | 401          | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session |
| POST        | `/auth/logout` | (empty)                                                      | 204            | 400          | Logs out the user                                            |
| POST        | /api/exit      | {name, img, aproachLat, aproachLong, aproachDescription, exitLat, exitLong, exitDescription, landingZoneLat, landingZoneLong, landingZoneDescription, altitude} |                |              | Used to create one exit point document, using current logged in user id as a creator. |
| PUT         | /api/exit/:id  | {name, img, aproachLat, aproachLong, aproachDescription, exitLat, exitLong, exitDescription, landingZoneLat, landingZoneLong, landingZoneDescription, altitude} |                |              | Used to update one exit point document by id                 |
| GET         | /api/exit/:id  |                                                              |                |              | Used to get one exit point document by id                    |
| DELETE      | /api/exit/:id  |                                                              |                |              | Used to delete one exit point document by id                 |
| GET         | /api/user      |                                                              |                |              | Used to get current user's profile. Id of the user is coming form the req.session.currentUser |
| PUT         | /api/user      | {username, email, password}                                  |                |              | Used to update current user's profile. Id of the user is coming form the req.session.currentUser |

## Links

### Trello/Kanban

[Link to your trello board](https://trello.com/b/PBqtkUFX/curasan) or picture of your physical board

### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com/screeeen/project-client)

[Server repository Link](https://github.com/screeeen/project-server)

[Deployed App Link](http://heroku.com/)

### Slides

The url to your presentation slides

[Slides Link](http://slides.com/)

Wireframe

The url to your presentation slides

[Figma Link](http://www.figma.com/file/GNvDVBD1NPTydU2PJy4DDM/dataBASE?node-id=0%3A88)

https://www.figma.com/file/GNvDVBD1NPTydU2PJy4DDM/dataBASE?node-id=0%3A88
