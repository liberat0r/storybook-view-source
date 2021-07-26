import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import lightTheme from 'prism-react-renderer/themes/github';
import darkTheme from 'prism-react-renderer/themes/dracula';
import { styled } from '@storybook/theming';
import { useStorybookState } from '@storybook/api';

const ScrollableCodeWrap = styled.div(({ theme }) => ({
    height: 'calc(100% - 71px)',
    overflow: 'auto'
}));

const StyledCodeWrap = styled.pre(({ theme }) => ({
    margin: 0,
    borderRadius: 0,
    backgroundColor: `${theme.background.content} !important`,
    padding: 15
}));

function CodeViewer({ source, language }) {

    const { theme } = useStorybookState();

    return <ScrollableCodeWrap>
        <Highlight {...defaultProps}
                   code={source}
                   theme={theme.base === 'light' ? lightTheme : darkTheme}
                   language={language}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <StyledCodeWrap
                    className={className}
                    style={style}>
                    {tokens.map((line, i) => (
                        <div {...getLineProps({ line, key: i })}>
                            {line.map((token, key) => (
                                <span {...getTokenProps({ token, key })} />
                            ))}
                        </div>
                    ))}
                </StyledCodeWrap>
            )}
        </Highlight>
    </ScrollableCodeWrap>;
}

export default CodeViewer;