# CS52 Workshops:  React Components

![](https://thumbs.gfycat.com/AchingPaltryCreature-small.gif)

React components are the foundation of every React application. To add beautiful UI, we will be using UI component libraries! These component libraries are React compatible and allow users to easily implement UI that is not only pleasing to look at but also functional.

## Overview

We are going to **redesign the assignments page of our beloved CS52 website with Material-UI!** We are all very familiar with this site, and now, we're going to make it *fun and fresh* by adding a card view for assignments, a progress bar and stepper for the current assignment, and more fun components (like a floating action button!). All of the assignments will be read in from a json file that we provide, so adding / deleting any assignments there will automatically be applied to the page.

## Setup

To begin, clone this repo. This repo contains our starterpack for the beginnings of a new CS52 website.

To work with Material UI, install it with ```yarn add @material-ui/core```.

We will be including Roboto as our default font and using icons from Material UI, so make sure your ```index.html``` file includes these two lines in the header (these should already be there, but check to make sure!):

```<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">```

```<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">```

 Also make sure to ```yarn add @material-ui/icons``` to get the icons from Material UI. 

## Instructions

### Index.js
We've included the App component for you since it doesn't directly contain any Material-UI components and will show the hierarchy of the web application you will be writing! We'll be writing some other specific components using Material-UI, which will then be added to App.

### Navigation Bar

Let’s create a navigation bar! We will add a bar at the top that includes the name of our page and buttons that should link to other pages in our site. For this workshop, our buttons won’t be functional (they don’t redirect you to another page), but feel free to implement this functionality on your own and build out the other pages. 

Our nav bar component is in a file called ```nav_bar.js``` in our ```components``` folder in ```src```.

You will need to import `React`, `AppBar`, `Toolbar`, `Typography`, `Button`, and `withStyles`. These will help us create our navigation bar with the necessary functionality and styles. 

```javascript
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
```

The navigation bar is an App Bar with a Tool Bar. The App Bar is an action bar that supports navigation, displaying the name or logo of the website, search functionality, and more. The Tool Bar is also an action bar, but it can support more features. In our case, we will be using it for a bit of styling. (Learn more about App Bars, check out Material-UI's demo [here](https://material-ui.com/demos/app-bar/).) Include the App Bar and Tool Bar code in the `return`. 

```javascript
<div className="navDiv">
    <AppBar position="static" color="default">
        <Toolbar>
            // add nav bar content here 
        </Toolbar>
    </AppBar>
</div>
```

Let’s add some content to our navigation bar! We added the name of our website, styled with `Typography` to add a different heading type, and buttons for each additional page in our website. However, feel free to customize this section and make it your own.

```javascript
 <Typography variant="h6" color="inherit" className={classes.header}>
    Dartmouth CS52 — 19S
</Typography>
<div className={classes.menu}>
    <Button color="inherit">About</Button>
    <Button color="inherit">Schedule</Button>
    <Button color="inherit">Assignments</Button>
</div>
```

#### Styling

Finally, let’s add some styling! We want to add our own styling by overriding some of Material-UI’s default ones. We will override with `withStyles()`, which is a higher-order component for adding styles into the DOM. (Learn more about overriding [here](https://material-ui.com/customization/overrides/).) To do this, we will include styles in JavaScript, not CSS, in ```const styles```. We have already provided these styles for each of the components, but feel free to add your own styles. 

But how do we actually include this into our navigation bar? We pass these styles’ class names via the `classes` property. Let’s do that by making sure we are passing in `props` as our parameter and adding this line to the top of our NavBar function, before `return`:

```const { classes } = props;```

Now, your component should be complete and look like this:

```javascript
const NavBar = (props) => {
  const { classes } = props;
  return (
    <div className="navDiv">
      <AppBar position="static" color="default" className={classes.nav}>
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.header}>
            Dartmouth CS52 — 19S
          </Typography>
          <div className={classes.menu}>
            <Button color="inherit">About</Button>
            <Button color="inherit">Schedule</Button>
            <Button color="inherit">Assignments</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
```

Before you move on to the next step, make sure you include ```export default withStyles(styles)(NavBar);``` at the bottom of ```nav_bar.js```! Remember that `withStyles()` is used to override default Material-UI styling. We’re passing in `styles`, which is where we defined our custom styling. From now on, when writing this last line of each component, we must include `withStyles(styles)`. You should now be able to see a navigation bar at `localhost:8080` when you run `yarn start`. 

### Current Assignment

The `CurrentAssignment` component will contain detailed information about the selected assignment. `CurrentAssignment` will have an `AssignmentStepper` and `ProgressBar` as children, and their display will depend on the "currentStep" we're in on the assignment, so we know we'll be wanting to keep that as a state variable here called 'activeStep'. We also want to be able to toggle display for `CurrentAssignment`, so we'll add that to state too. We've given you the bare component in `current_assignment.js`.

We'll be using several material ui components, such as `Card`, `CardHeader`, `CardContent`, `CardMedia` and more. Let's import these

``` javascript
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CardMedia from '@material-ui/core/CardMedia';
```

Let's update our render return:
```javascript
   return (
     <Card className={classes.root}>
       <CardHeader
         title="Current Assignment"
         subheader={assignment.title}
       />
       <CardMedia
         className={classes.media}
         image={assignment.image}
         title={assignment.title}
       />
       <CardContent>
         <div className={classes.descriptionContainer}>
           <p className={classes.description}>{assignment.description.long}</p>
           <IconButton
             className={classnames(classes.expand, {
               [classes.expandOpen]: this.state.expanded,
             })}
             onClick={this.handleExpandClick}
             aria-expanded={this.state.expanded}
             aria-label="Show more"
           >
             <ExpandMoreIcon />
           </IconButton>
         </div>
       </CardContent>
     </Card>
   );
```

Luckily, Material-UI components are well-named so it's pretty easy to see what's going on. We have a `Card` component that acts as a wrapper with some nice styling. `CardHeader` has a title and subtitle and `CardMedia` holds our image. `CardContent` is another nice wrapper for a description and icon that will toggle expansion of `AssignmentStepper`.

We already gave you our styling, feel free to edit it.

Once we write our `ProgressBar` and `AssignmentStepper`, we'll add those in here. Right now, you should be able to load the page and view some assignment details. However, there will be no progress bar and the expand button will do nothing.

### Progress Bar

We are going to continue building this page by creating the progress bar. This bar will show you your progress in your assignments.

Open the ```progress_bar.js``` in `src/components`

We are now going to try and make the progress bar component. First, we import the `LinearProgress` component

```javascript
import LinearProgress from '@material-ui/core/LinearProgress';
```

Let’s start off by declaring important variables. 

``` javascript 
 const MIN = 0;
 const MAX = props.steps.length;
 const normalise = activeStep => (activeStep - MIN) * 100 / (MAX - MIN);
```
We use `MIN` and `MAX` properties to create the bounds of the progress bar. By default, the `LinearProgress` component expects bounds from 0 to 100. Since our bounds are based on the assignment steps (not 0 to 100), we’ll have to normalise our current step to fall within these bounds. That’s what the `const normalise = activeStep => (activeStep - MIN) * 100 / (MAX - MIN);` line does! 
Now we'll create the progress bar and pass in these variables as props.
 
``` javascript
  <React.Fragment>
    <LinearProgress className={props.classes.progressBar} variant="determinate" value={normalise(props.activeStep)} />
  </React.Fragment>
```
Notice the other props we're passing in. The `variant` prop lets us define what kind of progress bar we want. You’ll typically use the `indeterminate` when you don’t know how long a process will take such as when processing a request. Hopefully, we know when our assignments will end so we’ll use the `determinate` type. We also pass in the style classes already defined for you as a `className` prop. Now you have a progress bar!

### Assignment Stepper

The assignment stepper will be an interface that allows you to view the current "steps" of the assignment and update which one of them you are on. Changes will be automatically reflected in the progress bar since the `CurrentAssignment` maintains which assignment and step we're on and can pass them as props to us and `ProgressBar`

We've given you a bare component in `assignment_stepper.js` in your `src/components` directory.


We'll be using a lot of the material ui Step related components, specifically `Stepper`, `Step`, `StepLabel` and `StepContent`. We'll also be using `Paper`, `Button`, and `Typography` which have some nice default styling. Let's import these.

```javascript
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
```

The `CurrentAssignment` component will be passing in our assignment to us, as well as which step we're on. At the top of our render, let's define some constants to make the rest of our render function clearer:

```javascript
   const stepTitles = this.props.steps.map(step => step.title);
   const stepContent = this.props.steps.map(step => step.content);
   const { activeStep } = this.props;
```

The bulk of the render is a little hairy. Basically, on the outside we have a `Stepper` component which wraps all the individual steps. We then map each assignment step to a `Step` component, just like we did for notes in Lab3. We give each step a `StepLabel`, a `StepContent` and some buttons that will handle moving to the next and previous steps. Once again, these are all coming from props passed down from `CurrentAssignment`. Paste this within the `div` of you render function:

```javascript
<Stepper activeStep={activeStep} orientation="vertical">
         {stepTitles.map((label, index) => (
           <Step key={label}>
             <StepLabel>{label}</StepLabel>
             <StepContent>
               <Typography>{stepContent[index]}</Typography>
               <div>
                 <div>
                   <Button
                     disabled={activeStep === 0}
                     onClick={this.handleBack}
                   >
                     Back
                   </Button>
                   <Button
                     variant="contained"
                     color="primary"
                     onClick={this.handleNext}
                   >
                     {activeStep === this.props.steps.length - 1 ? 'Finish' : 'Next'}
                   </Button>
                 </div>
               </div>
             </StepContent>
           </Step>
         ))}
       </Stepper>
       {activeStep === this.props.steps.length && (
         <Paper square elevation={0}>
           <Typography>All steps completed - you&apos;re finished</Typography>
           <Button onClick={this.handleReset}>
             Reset
           </Button>
         </Paper>
       )}
```

Since we want `CurrentAssignment` to be keeping track of what the current assignment is and which step we're on so that it can update the progress bar also, we want to pass in handlers as props to `AssignmentStepper`. Lets add these functions to `AssignmentStepper`:

``` javascript
 handleNext = () => {
   this.props.handleStepChange(this.props.activeStep + 1);
 };

 handleBack = () => {
   this.props.handleStepChange(this.props.activeStep - 1);
 };

 handleReset = () => {
   this.props.handleStepChange(0);
 };
``` 

We want to add the corresponding handlers to `CurrentAssignment` as well:
```javascript
 handleStepChange = (newStep) => {
   this.setState({
     activeStep: newStep,
   });
 }

 handleExpandClick = () => {
   this.setState(prevState => ({
     expanded: !prevState.expanded,
   }));
 }
```

Now let's add these new components to `CurrentAssignment`:

```javascript
import ProgressBar from './progress_bar';
import AssignmentStepper from './assignment_stepper';
```

Below the opening `CardContent` tag
```javascript
   <ProgressBar activeStep={this.state.activeStep} steps={assignment.steps} />
```

Below the closing `CardContent` tag
```javascript
   {this.state.expanded ? <AssignmentStepper activeStep={this.state.activeStep} steps={assignment.steps} handleStepChange={this.handleStepChange} /> : null}
```

Now when you load the page, you should be able to view the current assignment, and expand the stepper to view individual steps

### Other Assignment Card Components

We have now made a big component for the current assignemnt in CS52, but what about all of our other assignments? Let's make Material-UI Cards to display these assignments. Cards are flexible display containers that look quite like physical cards. 

Open the `other-assignments.js` file. Let's begin by making the necessary imports:

```javascript
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
```

Wow! That's a lot of imports - this is because the Card component is made up of several other smaller Material-UI components.

Look in the `constructor(props)` of the file, the `expanded: false` state represents whether or not the Card is expanded for more info about the assignment. How do we expand for more info? We click a button that would change this state, so here's the method:

```javascript
handleExpandClick = () => {
  this.setState(state => ({ expanded: !state.expanded }));
};
```
Remeber the Current Assignment Component? We want a feature to make any one of these Other Assignment Card Components _into_ the Current Assignment Component. This way, we can set it as the current assignment. Here's the method:

```javascript
setCurrentAssignment = () => {
  this.props.setCurrentAssignment(this.props.index);
}
```

Now, let's build the render function so we can determine how the card looks like:

```javascript
render() {
  const { classes } = this.props;
  const { assignment } = this.props;

  return (
    <Card className={classes.card}>
      <CardHeader
        title={assignment.title}
        subheader={assignment.date}
      />
      <CardMedia
        className={classes.media}
        image={assignment.image}
        title={assignment.title}
      />
      <CardContent>
        <Typography className={classes.short} component="p">
          {assignment.description.short}
        </Typography>
      </CardContent>
      <CardActions className={classes.actions} disableActionSpacing>
        <IconButton aria-label="Add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Button size="small" href={assignment.link}>View</Button>
        <Button size="small" onClick={this.setCurrentAssignment}>Set To Current</Button>
        <IconButton
          className={classnames(classes.expand, {
            [classes.expandOpen]: this.state.expanded,
          })}
          onClick={this.handleExpandClick}
          aria-expanded={this.state.expanded}
          aria-label="Show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            {assignment.description.long}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
```

Finally, we've made the component! Refresh the page the look at it!

## Floating Action Button (FAB) and Alert Dialogs

For the frustrating late night coding, we have added a 'Call Tim' button for help! The button will appear in front of all of the screen content and opens a Dialog that will give you information on how to contact Tim. 

A Dialog is used to inform users about critical information. It acts just like a modal.  Specifically, we are going to use a Dialog Alert. 

To begin, let's add all of our imports (there are quite a few so be careful!). We are going to need quite a few imports from material-ui. We need the fab class (yes they have already made the button for us!) and multiple Dialog classes.  In the file `Fab.js`, add to the imports:

```javascript 
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';
import CallIcon from '@material-ui/icons/Call';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
```

Great. Let's populate it now. Let's add methods to handle closing and clicking our button to open. When called, they should change our state. Under `state`, add:

```javascript 
handleClickOpen = () => {
   this.setState({ open: true });
 };

handleClose = () => {
   this.setState({ open: false });
};
```

Now let's build our render function. Inside of our render method, we are going to create a button that calls the handleOnClick method when it is clicked. 

```javascript 
<div>
<Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
    Open alert dialog
</Button>
</div>
```

Then, we are going to add our Dialog tag with particular styles directly underneath `</Button>` and before `</div>`.

```javascript   
<Dialog
    open={this.state.open}
    onClose={this.handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
>
     
</Dialog>
```

Afterwards, we are going to add our Dialog title, content, and buttons to close the Dialog once it's open.  Inside of `<Dialog>` add: 

```javascript 
<DialogTitle id="alert-dialog-title">{"Need Help?"}</DialogTitle>
<DialogContent>
    <DialogContentText id="alert-dialog-description">
        I would suggest calling him.
    </DialogContentText>
</DialogContent>
<DialogActions>
    <Button onClick={this.handleClose} color="primary">
        not helpful
    </Button>
    <Button onClick={this.handleClose} color="primary" autoFocus>
            SOS
    </Button>
</DialogActions>
```

You will notice that we are closing the alert with both of our buttons. We don't *quite* have the authority to put Tim's number on our public git repository, so your homework questions may need to wait until the next day. 

What about our FAB? Let's implement it! Material UI has already created the button for us. So we just need to add some style and our tag and we will be done! Now let's replace: 

```javascript 
<Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
    Open alert dialog
</Button>
```

with the Fab tag that we imported above. 

```javascript 
<Fab
    onClick={this.handleClickOpen}
    id="button"
    color="primary"
    style={style}
    size="large"
    variant="extended"
>
    <CallIcon />Call Tim
</Fab>
```

Perfect. Now we have overwritten Material UI's automatic styling. We implement it with the `withStyles()` method that calls the constant we just created! 

**Last step!**

In `index.js`, in the top of the file import our AlertDialog class by adding the following to the imports: 

```javascript 
import AlertDialog from './components/Fab';
```

And finally, add an AlertDialog tag right under the `<CurrentAssignments>` tag in our render method. 

```javascript 
<AlertDialog />
```

And you should see your beautiful button on our new CS52 website!



## What You Should Have
* [ ] A navigation bar
* [ ] An assignments page with cards on it
* [ ] A progress bar for the current assignment
* [ ] A stepper for the current assignment
* [ ] A floating action button to call Tim!

## Summary / What you Learned

* [ ] What React component libraries are and how you can use them to implement UI.
* [ ] How to use one of the most popular React component libraries (Material UI).
* [ ] How to use Material UI to implement a navigation bar, cards, progress bar, stepper, and floating action button.
* [ ] How to choose good components for your designs.

**Extra Credit:** Try and implement other components from Material UI (under component demos here: https://material-ui.com/demos/app-bar/) for other pages on the CS52 website! You can also try making the site persistent (notice how none of your progress saves). 

## Reflection

* [ ] What are some use cases for React Components?
* [ ] What are reasons why it wouldn’t be great to use React Component Libraries? 

## Resources

* https://material-ui.com/
* https://ant.design/docs/react/introduce
* https://hackernoon.com/the-coolest-react-ui-frameworks-for-your-new-react-app-ad699fffd651
* https://alligator.io/react/beautiful-uis-ant-design/
* https://medium.com/palantir/scaling-product-design-with-blueprint-25492827bb4a
* https://blueprintjs.com/docs/
