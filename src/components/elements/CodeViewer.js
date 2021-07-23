import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import lightTheme from 'prism-react-renderer/themes/github';
import { styled } from '@storybook/theming';

const StyledCodeWrap = styled.pre(({ theme }) => ({
    margin: 0,
    borderRadius: 0,
    backgroundColor: `${theme.background.content} !important`,
    padding: 15
}));

function CodeViewer({ source, language }) {
    return <Highlight {...defaultProps} code={source} theme={lightTheme} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <StyledCodeWrap className={className} style={style}>
                {tokens.map((line, i) => (
                    <div {...getLineProps({ line, key: i })}>
                        {line.map((token, key) => (
                            <span {...getTokenProps({ token, key })} />
                        ))}
                    </div>
                ))}
            </StyledCodeWrap>
        )}
    </Highlight>;
}

export default CodeViewer;