import React from 'react';

import Header from 'components/Header/Header.js'
import HeaderLinks from 'components/Header/HeaderLinks.js'

const PageHeader = ({ rest, fixed }) => {
    const scrollEffects = fixed ? {
        height: 300,
        color: 'white'
    } : {}

    return (<Header
        color="transparent"
        links={<HeaderLinks dropdownHoverColor="primary" />}
        fixed={fixed}
        changeColorOnScroll={scrollEffects}
        {...rest}
    />);
}

export default PageHeader;