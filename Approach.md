# Approach

### 1. Lifted the colour list into React stateFile: App.jsx – lets the palette grow dynamically

Create a useState hook in App.jsx that holds the array of colors > once the colors are in state, we can afterwards call a setter from the form and see the new card appear. Without state we'd have nowhere to "push" the newly entered color.

### 2. Stubbed a form component (ColorForm)

Create an empty form component 'ColorForm.jsx' and give the form its own little memory and one role input. React re-renders the UI based on state: if the state never changes, nothing on the screen can react to what the user typed > we must store the most recent text in state to make an input controlled:

### 3. Added local form state and controlled Role input

- Make the 'role' input controlled (build a new state object on every keystroke instead of mutating the old one) > typing in the 'role' field now updates formValues.role in real time.

### 4. Introduced reusable ColorInput and wired it for Hex & ContrastText

- Create the 'ColorInput' component > a reusable 'ColorInput' shows two linked input. Changing either one updates the other and notifies the parent via onChange:
  - a small colour-picker (type="color")
  - a hex text box

### 5. Implemented the 'Add' Button flow

- Create a button. You don't need to create a separate component. Here is how it will work:
  - a color object is handed up to 'App.jsx'
  - the submit handler gathers the current Role / Hex / ContrastTex values
  - it wraps them (pluse some unique id value) in a plain object
  - it calls the function that 'App' passed down (onAddColor) and gives it that object
  - 'App.jsx' inserts the new object at the top f its 'colors' state > React re-renders, so a fresh colour card appears at the very top of the list
  - the form resets to its default values

### 6. Deleting colors

- In 'App.jsx', define a delete-handler 'handleDeleteColor' to filter out the color with the matching 'id' from state via 'setColors'
- in the colors.map(...) supply 'handleDeleteColor' as the 'onDelete' prop;
- update 'Color.jsx' to accept the delete callback. Change the function signature so it pulls in 'onDelete' alongside 'color';
- add <button onClick={() => onDelete(color.id)}>Delete</button> to trigger removal


