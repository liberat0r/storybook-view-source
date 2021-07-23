import React from 'react';
import { styled } from '@storybook/theming';
import CopyButton from './CopyButton.js';

const StyledSelectWrap = styled.div(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 15
}));

const StyledSelect = styled.select(({ theme }) => ({
    padding: 7,
    color: theme.barSelectedColor,
    border: `1px solid ${theme.appBorderColor}`,
    fontWeight: 'bold',
    fontSize: 13,
    outline: 0,
    backgroundColor: theme.barBg,

    '&:focus': {
        borderColor: theme.color.secondary
    },

    '& option': {
        color: theme.barTextColor
    }
}));

function SelectSource({ onChange, value, values, source }) {

    const handleChange = e => {
        onChange(e);
    };

    return <StyledSelectWrap>
        <StyledSelect
            name="source-select"
            id="source-select"
            value={value}
            onChange={handleChange}>
            {values && values.map((val, valIndex) =>
                <option
                    key={valIndex}
                    value={val.value}>
                    {val.label}
                </option>)}
        </StyledSelect>
        {source ? <CopyButton source={source}/> : ''}
    </StyledSelectWrap>;
}

export default SelectSource;