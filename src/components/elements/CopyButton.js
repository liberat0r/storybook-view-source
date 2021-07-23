import React from 'react';
import { Icons, IconButton } from '@storybook/components';
import { styled } from '@storybook/theming';
import { copyTextToClipboard } from '../../lib/functions.js';

const StyledCopyButtonWrap = styled.div(({ theme }) => ({
    marginLeft: 20,
    color: theme.color.mediumdark,

    '& button': {
        padding: 10
    }
}));

function CopyButton({ source }) {

    const handleClick = () => {
        copyTextToClipboard(source);
    };

    return <StyledCopyButtonWrap>
        <IconButton
            title="Copy source code"
            onClick={handleClick}>
            <Icons icon="copy"/>
        </IconButton>
    </StyledCopyButtonWrap>;
}

export default CopyButton;