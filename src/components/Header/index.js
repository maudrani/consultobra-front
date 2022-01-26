import React from 'react';

import Header from 'components/Header/Header.js'
import HeaderLinks from 'components/Header/HeaderLinks.js'

const PageHeader = ({ rest, fixed }) => {
    return (<Header
        color="transparent"
        links={<HeaderLinks dropdownHoverColor="primary" />}
        fixed={fixed}
        changeColorOnScroll={{
            height: 300,
            color: 'white'
        }}
        {...rest}
    />);
}

export default PageHeader;