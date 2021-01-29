# Red_Rock
- An elite and luxary lifestyle service that provides the most highend and memorable expereinces for its members
### Core Features
- users may choose a Membership level of their choice and expereince the amazing luxary benefits that are provided to them via the applicatioin at discounted rates
- Companies my Choose certain elite and luxary packages/benefits that they wish to proivde via our platform
### Goals
- create a RESTful fullstack application with a React front end and rails backend
### Team
Created, designed, and develpoed by [Gary Grant](https://github.com/ggrant-fs?tab=repositories)
## MVP
- Application must be RESTful
- Must include at least 8 components
- Must use React.JS as frontend
- Must use Ruby on Rails as a Backend
- Must have full CRUD on both the front and backend
- Must include a wireframe
- Must include a componenet Hierarchy
- Must include a componenet estimate
- Must include a ERD Model
- Must include a Data Hierarchy
### Client (Front End)

#### Wireframes
!['Landing Page'](https://i.imgur.com/aWQPNDy.png)
!['Log in /Sign up Page'](https://i.imgur.com/s0F9ugl.png)
!['About Page'](https://i.imgur.com/mrCUXah.png)
!['Contact Page'](https://i.imgur.com/oW04MxL.png)
!['Pricing Page'](https://i.imgur.com/RpW6nlX.png)
!['Events Page'](https://i.imgur.com/bhME8sE.png)

#### Component Hierarchy
!['Component Hierarchy'](https://i.imgur.com/yrnNqy8.png)

#### Componenet Breakdown

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the navigation and logo._               |
|  Navigation  | functional |   n   |   n   | _The navigation will provide a link to each of the pages._       |
|  Sign in Form| functional   |   y   |   Y   | Members of the applications can enter via the sign in form      |
|  Regester Form| functional |   Y   |   y   | New Members can register via the Register form              |
|  Image Slider| functional |   Y   |   Y   | Provides a sliding affect to the images in the homepage |
|  Membership Type| functional| Y | Y| This componenet provides the choices of memberships|
|  Featured| functional | Y | Y| Provides users with most featured events/benefits |
|  Event | functional| Y | Y |The list of luxary events available to the user|
|  Service| function | Y | Y |description of all of the applications services|
|  Team Images | n | n| a component that displays the team member's photos|
 

#### component Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| backend Authorization  |    H     |     3 hrs      | pending    | pending  |
| backend CRUD        | H |  4 | pending | pending|
| frontend authorization | H |  3 hrs| pending | pending |
| frontend CRUD       | H| 3 hrs|pending|pending|
| fronend styling| H | 4 hrs | pending | pending | 
| TOTAL               |          |     14 hrs      |     pending     |     pending     |

### Server (Back End)

#### ERD Model
!['ERD'](https://i.imgur.com/mFib13i.png)
#### Data Hierarchy
 Red_Rock
 - users/
 - companys/
 - benefits/

### Dependencies
|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | React is an open-source, front end, JavaScript library for building user interfaces or UI components. |
|   React Router Dom |allows your application to navigate between different components, changing the browser URL, modifying the browser history, and keeping the UI state in sync                                          |
|   React Router   | a collection of navigational components that compose declaratively with your application.  |
|   Ruby on Rails  |  server-side web application framework written in Ruby |
|   Axios          | Promise based HTTP client for the browser and node.js |
|   fullPage.js.   | FullPage.js plugin by Alvaro Trigo. One page Scroll sections |

## Post MVP
- Have users make purchases directly on the site
- include Geoloaction 
