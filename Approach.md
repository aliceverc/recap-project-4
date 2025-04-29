Approach:

1. Create a useState hook in App.jsx that holds the array of colors > once the colors are in state, we can afterwards call a setter from the form and see the new card appear. Without state we'd have nowhere to "push" the newly entered color.

2. Create an empty form component 'ColorForm.jsx' and give the form its own little memory and one role input. React re-renders the UI based on state: if the state never changes, nothing on the screen can react to what the user typed > we must store the most recent text in state to make an input controlled:
    * make the 'role' input controlled (build a new state object on every keystroke instead of mutating the old one) > typing in the 'role' field now updates formValues.role in real time.