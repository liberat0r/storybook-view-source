import React, { useState, useEffect, useMemo } from 'react';
import { AddonPanel } from '@storybook/components';
import { useParameter, useStorybookState } from '@storybook/api';
import CodeViewer from './elements/CodeViewer.js';
import SelectSource from './elements/SelectSource.js';
import NoSourcesWarning from './elements/NoSourcesWarning.js';
import { validateSource } from '../lib/functions.js';
import langs from '../config/langs.js';

function Panel({ active }) {

    const { path } = useStorybookState();
    const [selectedSourceIndex, setSelectedSourceIndex] = useState(0);
    const sources = useParameter('sources', []);

    useEffect(() => {
        return () => {
            setSelectedSourceIndex(0);
        };
    }, [path]);

    const sourceValues = useMemo(() => {
        if (!sources || !Array.isArray(sources) || sources.length === 0) return [];
        const values = [];
        for (let i = 0; i < sources.length; i++) {
            const errMessage = validateSource(sources[i]);
            if (errMessage) {
                console.error(errMessage);
            } else {
                values.push({
                    value: i,
                    label: sources[i].name
                });
            }
        }
        return values;
    }, [sources]);

    const handleSourceChange = e => {
        setSelectedSourceIndex(parseInt(e.target.value));
    };

    const activeSource = sources[selectedSourceIndex]?.source?.default;

    return <AddonPanel
        active={active}>
        {!sources || !Array.isArray(sources) || sources.length === 0 ? <NoSourcesWarning/> : <>
            <SelectSource
                value={selectedSourceIndex}
                values={sourceValues}
                onChange={handleSourceChange}
                source={activeSource}/>
            {sources[selectedSourceIndex] && langs[sources[selectedSourceIndex].language] ?
                <CodeViewer
                    source={activeSource}
                    language={langs[sources[selectedSourceIndex].language]}/> : ''}
        </>}
    </AddonPanel>;
}

export default Panel;