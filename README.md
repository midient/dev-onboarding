# Midient Todolist

Welcomet to the awesome Midient Todolist app. The app you will develop is the last missing step in human development. After this app, humanity can rest peacefully as our purpose will be fullfilled. Even if we go extinct, we need not worry as this app has accomplished our objectives to the last!

However, the app at its current state is very messy (a repo of crap we may say). And you as a Midient Developer and Uncle Bob's disciple, follow the boy scout rule which says

```
Always leave the code you are editting a little better than you found it. - Robert Martin (Uncle Bob)
```

So you make it your life's purpose to take this Todolist app to its fullest.

## Starting your Journey to Enlightenment

### 1. Running the app

1. Clone the github repo.
2. `yarn install` then `yarn start`
3. Checkout the the app at `http://localhost:3000`

You checkout the app. You find that the UX is so awesome that it has even provided you with a sample todo to get you started!

You can add other todos, remove them, and that is it! The sure way for 100% productivity!

Now you check the code. Waiting to be baffled by the complex machinery running the app. You take a look at the files and you don't see `.eslintrc`. "WHAT??, there is no linting config?" you think to yourself! How can we enforce style and fix other problems without linting?!! If we work on this as a team and linting is not configured, the app will be one huge pile of inconsistent code!

### 2. Add Linting

For Javascript projects, the standard linter is called `ESlint`. `ESlint` can be configured per your needs. And we in Midient have already prepared our default configuration to make your life easy.

1. Install the ESlint visual studio code plugin.
2. Install the required packages by

```
yarn add --dev eslint @typescript-eslint/parser eslint-config-google eslint-config-midient
```

Just as you are copy pasting the above command, Shaytan whispers in your ear "Leave it man, what are you concerning yourself with?! Linting??!! Are you kidding me?? Who has ever gotten anywhere because of linting??! Start doing some real shit!"

But haha Shaytan won't get to your enlightened mind! You immediately say to yourself "Investments made early in the beginning will multiply returns later on" and think visually of the this graph;
![Going with best practises may slow you down a bit in the beginning, but will boost you later on](https://user-images.githubusercontent.com/23580433/165930655-474d40bb-aad0-40a7-a47d-5c60202e2ece.jpeg)

This graph shows productivity for two people. One following best practises and the other not. The one following best practices is slow initially in adding features because he is busy setting up, while the other one is fast in adding features initially. But soon, the circumstances change. The code has grown and entangled and the situation reverses.

It is very much like preparing dinner. If you dont care about the kitchen and use whatever you can get your hands on and not clean the kitchen after dinner, it will get a little more difficult and slower to cook dinner the second day as all the unwashed and dirty dishes will stand in your way. If you dont come to your senses the second dinner and not clean, it will be a little more difficult the third time. If you never clean, eventually it will be impossible to cook dinner in your kitchen because there will be no clean tool to cook it with!

This is precisely the thing that happens with so many companies. Sadly, it even happened to us. Although we thought we knew these, we did not actually practice them for a time under the justification of increasing market demand! However, we have learned our lesson and never again will we abandon high coding standards!

This why you have to follow best practises. You don't intend your awesome Todolist app to be in stores for a day, you see it as the pinaccle of human development that all humanity will use for the coming decades!

Now that you have installed the packages, its time to add the eslint config.
Create a new file with the name `.eslintrc.yml` and add the following code inside;

```
env:
  # this is needed to enable the global variables in the browser environment such document, window, ...etc
  browser: true
extends:
  - midient # You are fond of Midient standards for linting
```

That is all! Adding linting was this easy!

Now you wander around again. You stumble upon the `index.tsx` file. Yuck! All those red lines are UGLY!
You hover on the imports, and you see this error

```
Strings must use singlequote. eslint(quotes)
```

Now you have two options;

1. You either override the Midient rule of `quotes`...
2. Or you enable a formatter, Prettier!

Going with option one is not the best choice as you would have to do this on all your projects that extend Midient's ESlint config. And you will definitely need a formatter, even if for other things. So now, you add Prettier.

### 2. Adding Prettier

1. Install the prettier VS Code plugin.
2. Install prettier and Midient's prettier config

```
yarn add --dev prettier @midient/prettier-config
```

3. Add the following line to `package.json`

```
...
"prettier": "@midient/prettier-config",
...
```

4. Go to VS Code preferences and enable format on save.

Now when you dummy edit `index.tsx` or any other file and save it, it will be linted and formatted according to Midient specifications!
