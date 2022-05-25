# Midient Todolist

Welcome to the awesome Midient Todolist app. The app you will develop is the last missing step in human development. After this app, humanity can rest peacefully as our purpose will be fulfilled. Even if we go extinct, we need not worry as this app has accomplished our objectives to the last!

However, the app at its current state is very messy (a repo of crap we may say). And you as a Midient Developer and Uncle Bob's disciple, follow the boy scout rule which says

```
Always leave the code you are editing a little better than you found it. - Robert Martin (Uncle Bob)
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
![Going with best practices may slow you down a bit in the beginning, but will boost you later on](https://user-images.githubusercontent.com/23580433/165930655-474d40bb-aad0-40a7-a47d-5c60202e2ece.jpeg)

This graph shows productivity for two people. One following best practices and the other not. The one following best practices is slow initially in adding features because he is busy setting up, while the other one is fast in adding features initially. But soon, the circumstances change. The code has grown and entangled and the situation reverses.

It is very much like preparing dinner. If you don't care about the kitchen and use whatever you can get your hands on and not clean the kitchen after dinner, it will get a little more difficult and slower to cook dinner the second day as all the unwashed and dirty dishes will stand in your way. If you don't come to your senses the second dinner and not clean, it will be a little more difficult the third time. If you never clean, eventually it will be impossible to cook dinner in your kitchen because there will be no clean tool to cook it with!

This is precisely the thing that happens with so many companies. Sadly, it even happened to us. Although we thought we knew these, we did not actually practice them for a time under the justification of increasing market demand! However, we have learned our lesson and never again will we abandon high coding standards!

This why you have to follow best practices. You don't intend your awesome Todolist app to be in stores for a day, you see it as the pinnacle of human development that all humanity will use for the coming decades!

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

### 3. Adding Prettier

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

### 4. Inspecting the code

Now you go checkout `App.tsx`. cht bini oh cht bini!! All the app is in one 90 liner file! Application code (the logic of our app) is right next to styling code, which is right next to third party storage code (we consider `localStorage` third party) which is right next to IO code (buttons and inputs). There is no structure given to a `Todo` item! There is no separation of responsibilities and there is no abstractions! UNACCEPTABLE!

This code is bad because it is hard to change. Say for example we want to advance the application and add remote storage for todo items instead of using local storage and fetch them over an API. There is no clear class that we can replace to handle the job without change to the whole application. Or we want to add categories, it will be be very difficult again. They are doable, but instead of being able to do it in 10 minutes, it would take an hour or so. And believe me, real life is FULL of these changes! Marketing demands a change they think is simple for their upcoming campaign. Sales demands a change they think is trivial to satisfy their precious customer. End users want something else. Life is full of changes you will have to make. So the bottom line is, code needs to be easy to change. As easy as you can make it!

Uncle Bob asks this question about a hypothetical situation. If you had to decide between a code that works but is very hard to change and a code that does not work but is very easy to change, which one would you choose?

The answer should be the code that is not working but is easy to change. Because by definition the code's easiness to change will make it work in the future even if its not working now! But the code that is hard to change, even if its working, is useless. Because real life is characterized by change. They say the only thing that is constant and does not change in the universe is change itself (I know Pie does not change as well you nerd! It is metaphorical, you get the point).

"At least it must have been tested" you think to yourself. So you check out `App.test.tsx`. WHAT? it renders?? Is that all the testing??

There are many improvements you will have to make to this code. So get excited. We will do TDD baby!

For a quick introduction to testing in general read [this excellent article](https://martinfowler.com/articles/practical-test-pyramid.html) by Martin Fowler (really read it, we are in no hurry). When you finish that, to see the power of TDD and Pair Programming in designing (and refactoring) an application, read [even more legendary article](https://sites.google.com/site/unclebobconsultingllc/home/articles/the-bowling-game-an-example-of-test-first-pair-programming) by Uncle Bob. Read them both, these guys are the legends of our world! They are the Khalidi kuri Waleeds, the supermen, spidermen (and all the other Marvel heros) of the software world. PS: before reading the article by Uncle Bob, you would want to have a solid grasp on the rules of Bowling game. So watch some youtube videos on it first.

The above articles are mainly tell you why you need to test. To know how you can actually run unit testing in jest, read the following guides

- [Mock Functions](https://jestjs.io/docs/mock-functions)
- [Manual Mocks](https://jestjs.io/docs/manual-mocks)
- [ES6 Class Mocks](https://jestjs.io/docs/es6-class-mocks)

### 5. Improve the Code

Before continuing to the next section, try to improve the code on your own (if you think it needs improvement). Give it half an hour, see how you can improve the code. Any improvement you deem needed is welcome. However, do the changes in a new branch so you can come back to the original code.

### 5. The New Architecture

We will refactor the code to adopt the principles of 'Clean Architecture'. Clean Architecture is formulated by Uncle Bob and describes it thoroughly in his book 'Clean Architecture'. Since it is a 400-page book, it is not required for this article. But it is definitely a must read by every software engineer. However, you still need to have an introduction to what Clean Architecture is. So you must read [this article](https://dev.to/bespoyasov/clean-architecture-on-frontend-4311) before you continue. Read [this article](https://herbertograca.com/2017/11/16/explicit-architecture-01-ddd-hexagonal-onion-clean-cqrs-how-i-put-it-all-together/) as well.

After refreshing your knowledge with the above articles, you take a peek at the code again. You notice that the code has the following components to it

1. A `Todo` item.
2. Persistence (uses localStorage, but can change in the future to say, a remote API).
3. A todo item store.
4. An introduction logic
5. React components.

So now, you picture this architecture in your head;
![Todo Architecure](https://user-images.githubusercontent.com/23580433/166101370-272ac2d6-59fb-4837-95db-890cf9b2a304.png)

### 6. Starting Action

Now you decide to get your hands dirty. This is the strategy

- You need domain level entities first. So add `Todo` entity in domain.
- You need a way to generate ids for todos. So add ports and implementations for an `idGenerator`.
- You need to have persistence. So add `persistencePort` and implement it using `localStoragePersistenceAdapter`.
- You need `todoStorageService`. So implement it in application with dependency on persistence.
- You need `introductionService`. It can be implemented in application with dependency on persistence and todo storage.

Add the following folders in `src` to reflect the different architectural layers;

- `domain`
- `application`
- `services`
- `io`

#### Adding domain entities

Add `todo.ts` in `domain` with the following

```
export interface Todo {
  text: string;
  id: string;
}
```

You also decided to add `id` to `Todo` because it is much better to work with todos by id rather than their text or index like now.

#### Add ID generator

As we will TDD, we will start with tests first. Create `idGeneratorAdapter.test.ts` in `services/__tests__` folder and add the following boilerplate to prepare the file;

```
describe('ID Generator', () => {
  // tests go here
});
```

Run `yarn test` to run the jest. You will see that the test suite fails to run as you have no test in ID Generator describe block.

When we say 'testing' in TDD, we mean testing behavior. To test behavior, our code should have a clear input and output. We change the input, and expect a desired output. If a certain input does not produce our desired output, the test will fail and we can fix the issue.

For testing id generator, we need a function that generates an id. In the case of id generation, we have no input. But we clearly want an output which will be the id. So the only test case for id generator that comes to mind is;

- `it returns a string id when its called`

We will add others when they come to mind. Lets implement that test case. Add the following to `idGeneratorAdapter.test.ts`

```
  test('it returns a string id when its called', () => {
    // Act
    const id = idGenerator();

    // Assert
    expect(id).toBeDefined();
    expect(typeof id).toBe('string');
  });
```

As you see, we call the `idGenerator` function. It must have a return value which we capture in the variable `id`. Then we make sure that `id` is defined (i.e. it has a value, its not null) and that its type is string.You may also have noticed that there are two comments, Act and Assert. The structure of a unit test is like the following;

```
test('test case description', () => {
  // Arrange

  // Act

  // Assert
})
```

The different components are separated by vertical spacing. You do not have to write the comments, the spaces are enough. This how it generally should be because that is the most readable. PS: We needed no arrangement in the test case for id generation.

When you click save, jest will run the test. The test will fail with;

`ReferenceError: idGenerator is not defined`

That is right. This is TDD. You first make it fail, then make it pass, then refactor. Red, Green, then refactor. Remember, compiler errors due type errors also count as failures.

We now failed the tests. Now you have to write the minimum code to make it pass. Before implementing the adapter in services, first implement the port in application (because remember id generator will be used in application, and application can not import from services).

Implementing the port in application is as simple as a typescript type declaration. Write the following in `application/idGeneratorService.ts`;

```
export type idGeneratorService = () => string;
```

That is all. `idGeneratorService` is just a simple function with no parameters and a string output.

Now, lets implement it in `services/idGeneratorAdapter.ts`

```
import {idGeneratorService} from '../application/idGeneratorService';

function idGeneratorAdapter() {
  return 'random string'; // remember we just need to make the test pass
}

// the casting forces the adapter to conform to the type structure of the service
// e.g. if you return a number above, you will have a typescript error. Try it!
export default idGeneratorAdapter as idGeneratorService;
```

Then import your implementation in the test file;

```
import idGenerator from '../idGeneratorAdapter';
```

When you save this time, you will see that the tests pass! Great!

To early to celebrate! You see the flaw right? The id generator function always returns a `random string`! id generator should not always return the same thing. It should return a different id each time its called. So now we should another test case;

- `it returns a different id in subsequent calls`

You can write the test like this;

```
test('it returns a different id in subsequent calls', () => {
    const id1 = idGenerator();
    const id2 = idGenerator();

    expect(id1).not.toBe(id2);
  });
```

Upon pressing save, the test will fail again because both ids are the same. They must be different. Now lets make it pass! Refactor the id generator like so;

```
function idGeneratorAdapter() {
  return Math.random().toString();
}
```

Save, and the tests will pass! Now you have a random id generator that returns a different id each time its called.

PS: the probability of the javascript `Math.random()` to return the same number twice is not zero, but it is very very low.

You like the ids to be prettier. It is in the form of decimals now, you want to make it whole numbers. You can refactor it like so;

```
function idGeneratorAdapter() {
  return Math.floor(Math.random() * 10000000000000).toString();
}
```

Press save and it will pass again! That is the power of testing. You are now very confident that your function returns pretty whole numbers as string ids with no repetition in the result between different calls.

#### Add Persistence

So we wont go that into detail for adding persistence as its the same thing as above. We will need to write the tests first. Create `localStoragePersistenceAdapter.ts` in `services`, `localStoragePersistence.test.ts` in `services/__tests__` and `persistenceService.ts` in `application`. The test cases will be;

- `can save a string value associated to a key`
- `returns null for keys with no associated value`
- `can get back a value by its key`
- `can delete all values`

The test cases reflect the behavior we want from the implementation. Feel free to add test cases if you think they are necessary. This will be the test file;

```
import {LocalStoragePersistenceAdapter} from '../localStoragePersistenceAdapter';

describe('LocalStorage Persistence Adapter', () => {
  let lsp: LocalStoragePersistenceAdapter;

  beforeEach(() => {
    localStorage.clear();
    lsp = new LocalStoragePersistenceAdapter();
  });

  test('can save a string value associated to a key', async () => {
    await lsp.set('key', 'value');

    expect(localStorage.getItem('key')).toBe('value');
  });

  test('returns null for keys with no associated value', async () => {
    const result = await lsp.get('non existing key');

    expect(result).toBeNull();
  });

  test('can get back a value by its key', async () => {
    await lsp.set('key', 'value');

    const result = await lsp.get('key');

    expect(result).toBe('value');
  });

  test('can delete all values', async () => {
    await lsp.set('key', 'value');
    await lsp.set('key2', 'value2');

    await lsp.deleteAll();

    await expect(lsp.get('key')).resolves.toBeNull();
    await expect(lsp.get('key2')).resolves.toBeNull();
  });
});
```

You may notice some different things here. The `beforeEach` test hook runs before each test is run to setup the stage. Here, we always clean the localstorage so that each test begins on a new slate. We also reinitialize the `LocalStoragePersistenceAdapter` so that each test runs with a new instance of the class.

The second difference here is that the tests are async. We want the `PersistenceService` methods to be async so that we have the maximum flexibility. Say in the future we make the persistence remote. Remote persistence will 100% need to be async. To avoid redoing it all again in the future, we make it async now.

Now you will implement this one yourself. Make sure the tests pass!

#### Add TodoStorageService

After we have a functioning persistence service, we can go on to implement `TodoStorageService`.

`TodoStorageService` will need to keep the todos in local state so that changes to the todos are reflected in the react UI. This is its implementation needs to be in the form of a hook `useTodoStorageService`. This hooks returns the `TodoStorageService` attributes and methods i.e. implements the interface for the return value.

The behavior we are expecting from the implementation of `TodoStorageService` is as follows;

- `provides todos in the local state`
- `loads todos from persistence into local state upon initializing`
- `creates todos with automatically added ids and persistence`
- `deletes todos by id`

You will need the [`testing-library/react-hooks`](https://react-hooks-testing-library.com/installation) to test it. So go ahead and install it.

These are the tests for `TodoStorageService`. Copy the tests and make them pass. Start from the test one. When you work on your tests, it is good to increase your focus by isolating your tests by `test.only(...)` while you are working on them.

```
const persistence = new LocalStoragePersistenceAdapter() as PersistenceService;
let idGen: idGeneratorService;

describe('Todo Storage Adapter', () => {
  beforeEach(async () => {
    idGen = jest.fn().mockReturnValue('mock-id');
    await persistence.deleteAll();
  });

  test('loads todos from persistence into local state upon initializing', async () => {
    const todos = [
      {id: '1', text: 'todo1'},
      {id: '2', text: 'todo2'},
    ];
    await persistence.set('todos', JSON.stringify(todos));

    const {result, waitForNextUpdate} = renderHook(() => useTodoStorageService(persistence, idGen));
    await waitForNextUpdate();

    expect(result.current.todos).toStrictEqual(todos);
  });

  test('provides todos in the local state', async () => {
    const {result, waitForNextUpdate} = renderHook(() => useTodoStorageService(persistence, idGen));
    await waitForNextUpdate();

    expect(result.current.todos).toStrictEqual([]);
  });

  test('creates todos with automatically added ids and persistence', async () => {
    const {result, waitForNextUpdate} = renderHook(() => useTodoStorageService(persistence, idGen));
    await waitForNextUpdate();

    act(() => {
      result.current.addTodo({text: 'sample todo'});
    });

    expect(result.current.todos).toStrictEqual([{id: 'mock-id', text: 'sample todo'}]);
    await expect(persistence.get('todos')).resolves.toBe(JSON.stringify([{id: 'mock-id', text: 'sample todo'}]));
  });

  test('deletes todos by id', async () => {
    const {result, waitForNextUpdate} = renderHook(() => useTodoStorageService(persistence, idGen));
    await waitForNextUpdate();
    act(() => {
      result.current.addTodo({text: 'sample todo'});
    });

    act(() => {
      result.current.deleteTodo('mock-id');
    });

    expect(result.current.todos).toStrictEqual([]);
    await expect(persistence.get('todos')).resolves.toBe(JSON.stringify([]));
  });
});
```

#### Refactor `App.tsx`

Refactor `App.tsx` to use the new services (persistence and todo storage services). Make it functional with the new services.

### 7. CI/CD

In 2017, a big survey was conducted and the results were published in '2017 State of DevOps Report'. A large number of companies were surveyed with a wide range of performance. According to the results of the survey, CI/CD had a huge impact on a companies performance and culture. If you would like to read a summary on the report, you can read [this article](https://techbeacon.com/app-dev-testing/state-devops-2017-5-key-takeaways).

CI/CD are more like practices than tools or techniques. They are very important for working in a 'Lean' way. They especially promote working in very small chunks and shortening the feedback loops across developers. CI/CD is very big subject and we can barely scratch the surface here. Watch [this five-minute youtube video](https://www.youtube.com/watch?v=1er2cjUq1UI&ab_channel=IBMTechnology) by IBM to get a little more understanding on the backgrounds of CI.

Now you need to implement a CI/CD pipeline using Github Actions which tests and deploys all push events on your github repo to heroku. After this step, you will have deployed the Midient Todolist app on heroku for all the world to enjoy!

To learn about Github Actions, watch this 30 minute [video](https://www.youtube.com/watch?v=R8_veQiYBjI).

### 8. Back to Code

After you have deployed and hosted the app on heroku and implemented a complete CI/CD pipeline, you can start building the last missing part of the complete app, which is the introduction service. The introduction service does the following;

- If its the first time the user opens the app, it introduces the app by inserting a sample todo.
- If it is not the users first time, do nothing.
  That simple!

We will leave all the development of the introduction service up to you. Don't forget to TDD!

### 9. Bringing it All Together

After you are done implementing the introduction service, its time to bring it all together in the `App.tsx`. The introduction service and the todo storage services. `App.tsx` which is in IO layer will just map the users actions to commands for our services and show back the results to the user.

For backend apps, testing the IO layer is usually less important than testing the application layer as there is no complicated logic happening in them. However, for frontend apps the IO logic, which includes the UI and its functionality can get pretty complicated. That is why it is a good practice to also test the app from the entry point which is `App.tsx` to see if its working from the users perspective.

React by default has created a file for you called `App.test.tsx`. It contains only one simple test by default. No you can go ahead and test all the different user actions and behaviors that are intended for the app. Some of them are;

- User can see a list of todos.
- User can add a todo.
- User can delete a todo.
- User gets an onboarding todo on first open.

Feel free to add others if you think they are necessary.

This is called an integration test. In unit testing, you make sure that a particular piece of your app is working perfectly. In integration testing, you make sure that the different pieces throughout your app all work together to achieve the desired results.

### 10. Going to Over to the Backend

Just after you are done with the first version of the Todo list app running like charm locally and are just about to celebrate, someone over at marketing makes a company wide rhetorical call for our app to save todos on remotely! Why GOD WHY?! Just when you finished! Why couldn't they have known sooner??!

No need to be afraid my friend. Remember all these services you put in the app? They come to the rescue now. You just need another implementation of the `PersistenceService` which persists the key and values remotely over an API.

Create a new project to code your backend in. We use NestJS as framework for Node. Read these guides to from their documentation for an introduction;

- [Introduction](https://docs.nestjs.com/)
- [First Steps](https://docs.nestjs.com/first-steps)
- [Controllers](https://docs.nestjs.com/controllers)
- [Providers](https://docs.nestjs.com/providers)
- [Modules](https://docs.nestjs.com/modules)

Don't go the next step unless you have created a working bare bones server hosted on heroku and uses Github Actions for as a CI pipeline.

### 11. Adding the `KeyValueStorage` API

Configure the file structure in the backend just like the frontend with each of the layers in Clean Architecture represented by a different folder. Everything belonging to NestJs goes to `io` as Nest is a framework and the framework is considered a detail, not core, in the Clean Architecture.

1. Create `key.value.storage.service.ts` in `application`.

```
interface KeyValueStorageService {
  set(key: string, value: unknown): Promise<void>;
  get(key: string): Promise<string>;
  deleteAll(): Promise<void>;
}
```

2. Create `key.value.storage` folder in `io` and add `key.value.controller.ts`;

```
export const KEY_VALUE_STORAGE_SERVICE = 'KeyValueStorageService'

@Controller('key')
export class KeyValueController {
  constructor(@Inject(KEY_VALUE_STORAGE_SERVICE) private keyValueStorage: KeyValueStorageService) {}

  @Get(':key')
  async get(@Param('key') key: string) {
    return this.keyValueStorage.get(key);
  }

  @Post(':key')
  async set(@Param('key') key: string, @Body('value') value: unknown) {
    await this.keyValueStorage.set(key, value);
  }

  @Delete('')
  async deleteAll() {
    return this.keyValueStorage.deleteAll();
  }
}

```

and `key.value.module.ts`

```
@Module({
    controllers: [KeyValueController],
    // InProcessKeyValueStorageAdapter is an implementation of KeyValueStorageService, which you will implement next
    providers: [{ provide: KEY_VALUE_STORAGE_SERVICE, useClass: InProcessKeyValueStorageAdapter }]
})
export class KeyValueModule {}
```
