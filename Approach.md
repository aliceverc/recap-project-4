# Approach

### 1. Lift the colour list into React stateFile: App.jsx – lets the palette grow dynamically

Create a useState hook in App.jsx that holds the array of colors > once the colors are in state, we can afterwards call a setter from the form and see the new card appear. Without state we'd have nowhere to "push" the newly entered color.

### 2. Stub a form component (ColorForm)

Create an empty form component 'ColorForm.jsx' and give the form its own little memory and one role input. React re-renders the UI based on state: if the state never changes, nothing on the screen can react to what the user typed > we must store the most recent text in state to make an input controlled:

### 3. Add local form state and controlled Role input

- Make the 'role' input controlled (build a new state object on every keystroke instead of mutating the old one) > typing in the 'role' field now updates formValues.role in real time.

### 4. Introduce reusable ColorInput and wired it for Hex & ContrastText

- Create the 'ColorInput' component > a reusable 'ColorInput' shows two linked input. Changing either one updates the other and notifies the parent via onChange:
  - a small colour-picker (type="color")
  - a hex text box

### 5. Implement the 'Add' Button flow

- Create a button. You don't need to create a separate component. Here is how it will work:
  - a color object is handed up to 'App.jsx'
  - the submit handler gathers the current Role / Hex / ContrastTex values
  - it wraps them (pluse some unique id value) in a plain object
  - it calls the function that 'App' passed down (onAddColor) and gives it that object
  - 'App.jsx' inserts the new object at the top f its 'colors' state > React re-renders, so a fresh colour card appears at the very top of the list
  - the form resets to its default values

### 6. Deleting colors and tracking "Are you sure?" in each card with local state

- In 'App.jsx', define a delete-handler 'handleDeleteColor' to filter out the color with the matching 'id' from state via 'setColors'
- in the colors.map(...) supply 'handleDeleteColor' as the 'onDelete' prop;
- update 'Color.jsx' to accept the delete callback. Change the function signature so it pulls in 'onDelete' alongside 'color';
- add <button onClick={() => onDelete(color.id)}>Delete</button> to trigger removal

Before showing the "Are you sure?" prompt, each card needs to remember whether it's waiting for confirmation or not. Add a piece of state inside the 'Color' component:

- import the state hook ('useState') inside 'Color.jsx'
- inside the 'Color' function (before the return), call that hook with false as the initial value
- instead of calling 'onDeleate(color.id)' immediately on click, change the button so that its click simply flips 'isConfirming' to true

Now that clicking "Delete" flips the 'isConfirming' flag, let's show the actual "Are you sure?" UI whenever the flag is true:

- wrap the string of code showing the button in a simple if/ternary based on 'isConfirming':
  - under the 'true' path, render the confirmation text plus two new button-elements
  - hook their 'onClick'-events to 'setIsConfirming(false)' fo No, and to 'onDelete(color.id) for Yes

Once this is working, clicking Delete shows the question, No closes the prompt, and Yes actually removes the card.

f there are no colours left in the theme after deletion, display a message encouraging users to add new colours:
- in 'App.jsx' insert this check > if 'colors.length' is 0, render a message that says "Your theme is empty. Add some colours to get started!". Otherwise, render the existing colors.map(...) as before.
