## Code Quiz! Add Checkbox Functionality

- When checkbox is checked, button should be disabled

  - How do you think you could change the checkbox to checked in tests?
  - fireEvent.click
  - 2x in test: once to disable, once to re-enable

- Assertions on button

  - expect(button).toBeEnabled()
  - expect(button).toBeDisabled()

- New test or use existing test?

- Guidance on React code:
  - Checkbox controls button via booleans state
    - state determines value of <code>disabled</code> attribute on button
    - I recommend calling state <code>disabled</code>, defaulting to <code>false</code>
  - <code>onChange</code>for checkbox
    - (e) => setDisabled(e.target.checked)
