import React from 'react';
import { styled } from '@storybook/theming';

const NoSourcesWarningWrap = styled.div(({ theme }) => {
    console.log(theme);
    return {
        background: theme.background.warning,
        color: theme.color.darkest,
        padding: '10px 15px',
        lineHeight: '20px',
        boxShadow: `${theme.appBorderColor} 0 -1px 0 0 inset`,

        '& a': {
            color: theme.color.secondary
        },

        '& svg': {
            display: 'inline-block',
            height: '0.7em',
            width: '0.7em',
            marginRight: 0,
            marginLeft: '0.25em',
            bottom: 'auto',
            verticalAlign: 'inherit',

            '& path': {
                fill: 'currentColor'
            }
        }
    };
});

function NoSourcesWarning() {
    return <NoSourcesWarningWrap>
        This story has no sources defined. <a
        href="https://github.com/liberat0r/storybook-view-source#usage"
        target="_blank">
        <span>Learn how add sources<svg
            viewBox="0 0 1024 1024">
            <path
                d="M768.072 514.022c0 10.236-3.904 20.47-11.712 28.282l-344.098 344.156c-15.62 15.624-40.946 15.624-56.568 0.006-15.622-15.622-15.624-40.948-0.006-56.568l315.82-315.876-315.868-315.922c-15.618-15.624-15.618-40.952 0.004-56.568 15.624-15.62 40.95-15.618 56.57 0.006l344.144 344.204c7.81 7.81 11.714 18.044 11.714 28.28z"/>
        </svg></span></a>
    </NoSourcesWarningWrap>;
}

export default NoSourcesWarning;