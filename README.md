# Browser Technologies
For the course "Browser Technologies" we were tasked to look into what Progressive Enhancement is and how we can apply it to create good and accessible websites. The web is for everyone, and for our assignement we learned how to ensure that.

I ended up creating an online web survey.
|Landing screen|
|:---:|
|![First Image](/public/images/enquete1.png)|

## Core features
Before actually starting to creating the online survey I was tasked to define some core functionality. The core functionality are listed down below

* The user needs to be able fill his/her information before starting the survey (name, studentnumber, email)

* All the necessary information needs to filled in before the user can proceed to the next course

* No visible radio buttons (look for a way to style the radio buttons)

* Dark and light mode

* Give the user feedback when an input field is filled in.

## Progressive Enhancement :gear:
Progressive enhancement is a web development approach that focuses on creating a baseline experience that works for all users, regardless of their device, browser, or network capabilities. It involves building the core functionality of a web application with basic HTML, CSS, and JavaScript, and then gradually enhancing it with additional features and interactions for more capable devices and browsers.

The key principle of progressive enhancement is to start with a solid foundation that provides essential content and functionality, accessible to all users. This ensures that even users with older browsers, limited JavaScript support, or slower network connections can still access and use the website.

**How did I apply it?**
1. I made sure that my survey had a good foundation. So I first started off with html and css in order to get there. I was able to create most of the core functionality with that.

2. Next I decided to enhance some of the functionality with JavaScript. Notice how I said "enhance" what I am trying to say by this is that my application still works even if the JavaScript is turned off.

3. Website is respose :telephone:

I choose to seperate the each course in a survey this means that whenever a user were to click on the submit button the data would get send to the server and with some magic would be saved in the database. If the student wanted to continue the server the server would retrieve the answers saved in the database and show it to the user.

## Testing :electric_plug:
I decided to test my application in different browsers

### Google Chrome :white_check_mark:
* No issues in google chrome because I started making the application in this browser. So everything works as intended :)

### Safari :large_orange_diamond:
* The input type week is not supported in safari to combat this I added a placeholder on the input field so that knows how to format the date
![Datum](/public/images/datum.png)
Everything works as intended.

### Firefox :large_orange_diamond:
* Firefox sadly does not support the has psuedo selector because of this the styling for my radio buttons dissappeared. The form does still work but the user gets no feedback when an radio button is clicked.

* Firefox also does not support the week input type.

### Flow :interrobang:
Flow is a web browser with a proprietary browser engine that claims to "dramatically improve rendering performance". Its JavaScript engine is the SpiderMonkey component of Firefox.

Flow is developed by the Ekioh company, which has made simpler browsers for set-top boxes and other embedded systems. Flow has no documentation (kinda weird ngl) but I was able to succesfully install it

### Results
* Dark mode does not work on flow 
* The validation on the client side does work but the valid psuedo selector does not work 

![flow](/public/images/flow.png)

* The pattern and max attribute does not work on flow
* The submission of the form does not work at all. When clicked nothing happens
