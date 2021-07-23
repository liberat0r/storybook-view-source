import React from 'react';

import useLoadScript from './hooks/useLoadScript.js';

function DemoComponent({ src }) {

    const [scriptLoaded, scriptLoadError] = useLoadScript(src);

    return (
        <div>
            {scriptLoaded ? 'Finished loading' : 'File loading'} <br/>
            {scriptLoadError ? 'Script could not be loaded' : 'No errors'}
        </div>
    );
}

export default {
    title: 'Hooks/useLoadScript',
    component: DemoComponent,
    decorators: [],
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
    argTypes: {
        src: {
            control: 'text'
        }
    }
};

const Template = (args) => <DemoComponent {...args}/>;

export const Default = Template.bind({});
Default.args = {
    src: 'https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js'
};