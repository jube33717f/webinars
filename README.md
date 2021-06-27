<h1 align="center">
  webinars
  <br>
  <br>
</h1>
<p align="center" style="font-size: 1.2rem;">Webinar page - coding test </p>

> Author: Jubi
> 
> Last edit date: 2021.6.27
>
> Description: Webinar page - coding test
>


# Installation
To run the app, run these commands in terminal windows from the root:

```bash
cd webinars && npm i && npm start
```

# Tech/framework used
* React JS
* Typescript
* SASS

# Functionality
## First 
* 1.implement the webinar page         ✅ 
* 2.create-react-app                   ✅ 
* 3.PC and mobile version              ✅ 
* 4,Did not use any UI framework       ✅ 
* 5.No third API                       ✅ 
* 6.typescript                         ✅ 
  
## Second: Header
[code](https://github.com/jubi33717f/webinars/blob/master/src/Components/Navigation/index.tsx)
* 1.add logout button----------------------✅
* 2.login functionality----------------------✅ [code](https://github.com/jubi33717f/webinars/blob/master/src/Pages/Login/index.tsx) 
    - login page / form                    ✔️ 
    - dispatch login action                ✔️ 
    - save user info on redux              ✔️ 
* 3.logout functionality---------------------✅ [code](https://github.com/jubi33717f/webinars/blob/master/src/Components/Navigation/index.tsx)
    - dispatch logout action               ✔️ 
    - clean cookies/redux                  ✔️ 
* 4.login check-----------------------------✅ [code](https://github.com/jubi33717f/webinars/blob/master/src/Route/index.tsx)
    - save token in cookie                 ✔️ 
    - save user info in redux              ✔️ 
    - validate cookie token when reopen    ✔️ 
* 5.Header is appeared on every page-------✅ [code](https://github.com/jubi33717f/webinars/blob/master/src/Container/index.tsx)
  
## Third: Webinar list
* 1.Webinar ------------------------------------------------✅ [code](https://github.com/jubi33717f/webinars/blob/master/src/Pages/Home/WebinarSelection/index.tsx)
    - webinar prosperities:                                  ✔️
        □ id                                                       
        □ created_at                                                
        □ title                                                    
        □ content                                                 
        □ course start time                                        
        □ favourited                                              
    - fetch posts data from api                              ✔️ 
    - save webinar list in redux store                       ✔️
    - only show unregistered courses                         ✔️
    - click register scroll down to the register form part   ✔️  
* 2.click button go to detail page---------------------------✅ [code](https://github.com/jubi33717f/webinars/blob/master/src/Pages/Post/index.tsx)
    - ❗️: cannot refresh as using the data from redux store (no specific api)
* 3.registered course link-----------------------------------✅ [code](https://github.com/jubi33717f/webinars/blob/master/src/Pages/Favourite/index.tsx)
    -  unregister functionality                              ✔️ 

## Fourth: Register form
[view] bottom
* 1.topic dropdown-------------------------------------------✅ [code](https://github.com/jubi33717f/webinars/blob/master/src/Components/Dropdown/index.tsx)
    -  click any place to close the drop down list           ✔️
* 2.verification-----------------------------------------------✅ [code](https://github.com/jubi33717f/webinars/blob/master/src/Pages/Home/RegisterSection/index.tsx)
    - first name/ last name/ email required                  ✔️
* 3.click the register button until pass all verification----------✅ [code](https://github.com/jubi33717f/webinars/blob/master/src/Pages/Home/RegisterSection/index.tsx)
    - trigger register action                                ✔️
* 4.YouTube video--------------------------------------------✅ [code](https://github.com/jubi33717f/webinars/blob/master/src/Pages/Home/AlistairSection/index.tsx)



# View
## Desktop view
- ![Home](https://imgur.com/m4u5muF.jpg)
- ![Home](https://imgur.com/ZAycF8h.jpg)
- ![Home](https://imgur.com/7eh7Uyy.jpg)
- ![Login](https://imgur.com/g5WLUUy.jpg)
- ![Detail](https://imgur.com/yhI7IOw.jpg)

## Phone view
- ![Home](https://i.ibb.co/vJQnj7Q/phone1.jpg)
- ![Home](https://i.ibb.co/PrvcQ26/phone3.jpg)
- ![Home](https://i.ibb.co/hRbP5hF/phone4.jpg)
- ![Login](https://i.ibb.co/VDGxjqF/phone2.jpg)
- ![Detail](https://i.ibb.co/GxwjTY7/phone5.jpg)

# Roadmap
```
src/
┣ Apis/
┃ ┣ config.tsx
┃ ┗ index.tsx
┣ Asserts/
┃ ┣ logo.png
┃ ┣ visible-filled.png
┃ ┗ visible.png
┣ Components/
┃ ┣ Alert/
┃ ┃ ┣ index.tsx
┃ ┃ ┗ style.module.scss
┃ ┣ Card/
┃ ┃ ┣ index.tsx
┃ ┃ ┗ style.module.scss
┃ ┣ Dropdown/
┃ ┃ ┣ index.tsx
┃ ┃ ┗ style.module.scss
┃ ┗ Navigation/
┃   ┣ DropdownButton/
┃ ┃ ┃ ┣ index.tsx
┃ ┃ ┃ ┗ style.module.scss
┃   ┣ index.tsx
┃   ┗ style.module.scss
┣ Container/
┃ ┣ index.tsx
┃ ┗ style.module.scss
┣ Hooks/
┃ ┗ useFetch.ts
┣ Pages/
┃ ┣ Favourite/
┃ ┃ ┣ index.tsx
┃ ┃ ┗ style.module.scss
┃ ┣ Home/
┃ ┃ ┣ AlistairSection/
┃ ┃ ┃ ┣ index.tsx
┃ ┃ ┃ ┗ style.module.scss
┃ ┃ ┣ RegisterSection/
┃ ┃ ┃ ┣ index.tsx
┃ ┃ ┃ ┗ style.module.scss
┃ ┃ ┣ WebinarSelection/
┃ ┃ ┃ ┣ index.tsx
┃ ┃ ┃ ┗ style.module.scss
┃ ┃ ┣ index.tsx
┃ ┃ ┗ style.module.scss
┃ ┣ Login/
┃ ┃ ┣ index.tsx
┃ ┃ ┗ style.module.scss
┃ ┗ Post/
┃   ┣ index.tsx
┃   ┗ style.module.scss
┣ Route/
┃ ┣ index.tsx
┃ ┗ style.module.scss
┣ Store/
┃ ┣ moduleUser/
┃ ┃ ┣ actions.ts
┃ ┃ ┣ reducer.ts
┃ ┃ ┣ saga.ts
┃ ┃ ┗ types.ts
┃ ┣ moduleWebinars/
┃ ┃ ┣ actions.ts
┃ ┃ ┣ reducer.ts
┃ ┃ ┗ types.ts
┃ ┣ rootReducer.ts
┃ ┣ rootSaga.ts
┃ ┗ rootStore.ts
┣ index.tsx
┣ react-app-env.d.ts
┣ reportWebVitals.ts
┣ setupTests.ts
┗ style.scss
```
