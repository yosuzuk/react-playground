import React from 'react';
import CodeToggle from 'react-code-toggle';

import One from './One';
import Two from './Two';
import Three from './Three';
import Four from './Four';
import Five from './Five';

const OneTwoThreeApp = () => (
    <CodeToggle>
        <One>
            <Two myProp="something" />
            <Three>
                <Four />
                <Five myProp="whatever" />
            </Three>
        </One>
    </CodeToggle>
);

export default OneTwoThreeApp;
