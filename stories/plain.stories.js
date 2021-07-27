import React from 'react';

function DemoComponent() {

    return (
        <div>
            empty story
        </div>
    );
}

export default {
    title: 'Hooks/plain',
    component: DemoComponent,
    decorators: [],
    parameters: {
        sources: [
            // {
            //     name: 'Story',
            //     source: require('!!raw-loader!./useLoadScript.stories.js'),
            //     language: 'jsx'
            // },
            // {
            //     name: 'useLoadScript.js',
            //     source: require('!!raw-loader!./hooks/useLoadScript.js'),
            //     language: 'jsx'
            // }
        ]
    }
};

const Template = (args) => <DemoComponent {...args}/>;

export const Default = Template.bind({});