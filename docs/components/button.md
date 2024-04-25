# Button

This document details the `Button` component, a reusable element providing interactive user controls.

## Functionality

Buttons serve as crucial elements for initiating user actions within an interface. They offer a visual representation of triggers for specific functionalities.

## Properties

The `Button` component accepts a single argument, a configuration object named `config`. This object provides customization options for the button's appearance and behavior.

| Parameter | Type   | Description                                   |
|-----------|--------|-----------------------------------------------|
| `config`  | object | Configuration object for the Button component |

### Configuration Parameters

Within the `config` object, you can define various properties to tailor the button:

| Parameter    |       Type        | Description                                                       |      Optional       |
|--------------|:-----------------:|-------------------------------------------------------------------|:-------------------:|
| `type`       |     `string`      | Button type                                                       |         Yes         |
| `icon`       |     `string`      | Path or name of the icon to display on the button (if applicable) | Yes, in some case*  |
| `text`       |     `string`      | Text content displayed within the button                          | Yes, in some case** |
| `events`     | `Array<Function>` | An array of functions to execute when the button is clicked       |         No          |
| `attributes` |     `object`      | Additional attributes for further customization                   |         Yes         |

- \* -  `icon` is required for the `rounded-square` type, but not for the `slab` type or the `transparent` type (unless `text` is presented). (See the [[Types]](#types))
- \** - `text` is required for the `slab` type, but not for the `transparent` type (unless `icon` is presented). (See the [[Types]](#types))

#### Types

The type determines the visual design of the button, aiding in customizing its appearance:

- `transparent` (default)
  - This is the default, initially added and will work without explicit calling
  - Useful for components that need button such as modals, cards, and tab
  - Requirements: At least one of the following: `text`, `icon`, or both.
- `slab`
  - A button with icon and text.
  - Requirements: `text` (mandatory), `icon` (optional).
- `rounded-square`
  - A button with only an icon.
  - Requirements: `icon` (mandatory).

#### Attributes

Within the attributes property of the config object, you can define custom attributes to further personalize the button's appearance or behavior. Here's a breakdown of the commonly used attributes:

| Attribute | Type     | Description                       | Optional |
|-----------|----------|-----------------------------------|:--------:|
| `id`      | `string` | Unique identifier for the button  |    No    |
| `class`   | `string` | CSS class(es) to style the button |   Yes    |

## Usage

The `Button` component thrives in scenarios where:

- Users need to initiate specific actions (e.g., submitting forms, triggering updates, navigating)
- A clear visual cue is preferred to guide user interaction

Here's an example of how you can use the `Button` component:

```javascript
// Import the Button class from its location.
import { Button } from './path/to/button.js'

// Define functions to handle the button events.
const handleClick = () => {
  console.log('Button clicked!')
}

const handleHover = () => {
  console.log('Button hovered!')
}

/* 
  Create a configuration object (config) for the button, specifying 
  its type, text (if applicable), icon (if applicable), event handler function(s), 
  parent element where it should be appended, and any additional attributes.
*/
const config = {
  type: 'slab',
  text: 'Submit!',
  icon: 'check', 
  events: [handleClick, handleHover],
  attributes: {
    'class' : 'primary'
    'id' : 'button#1'
  }
}

/*
  Create a new Button instance using the config object.
  Call the createNode method on the button instance to return node 
*/
const button = new Button(config).createNode()

/*
  Append it somewhere to make it visible
*/
document.body.appendChild(button)
```

## Methods

- `createNode()`: This method generates the button's HTML structure based on the provided configuration.
- `removeNode()`: This method removes the previously created button element from the DOM, likely using the button's ID from the `attributes` property.
