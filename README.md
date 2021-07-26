# storybook-view-source
View source of selected files in storybook panel.

![screenshot](screenshot.png?raw=true "screenshot")

Developed and tested in Storybook 6.3.5.

## Installation
Add `./src/register.js` in your `.storybook/main.js`. 

```
module.exports = {
  addons: ['./src/register.js'],
};
```

Create an `.eslintrc` file and add the following rule:
```
{
  "rules": {
    "import/no-webpack-loader-syntax": "off"
  }
}
```

## Usage
In your story's exported `parameters` add a `sources` array parameter. Each item in the array _must_ consist of the following:
- name: a unique identifier which wil appear in the select dropdown
- source: require call using `raw-loader`
- language: one of the accepted [languages](https://github.com/liberat0r/storybook-view-source/blob/master/src/config/langs.js)

```
export default {
    ...
    parameters: {
        sources: [
            {
                name: 'Story',
                source: require('!!raw-loader!./useLoadScript.stories.js'),
                language: 'jsx'
            },
            {
                name: 'useLoadScript.js',
                source: require('!!raw-loader!./hooks/useLoadScript.js'),
                language: 'jsx'
            }
        ]
    },
    ...
};
```

Full example [here](https://github.com/liberat0r/storybook-view-source/blob/master/stories/useLoadScript.stories.js).
