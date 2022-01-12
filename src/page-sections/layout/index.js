import React from 'react';
import Header from 'components/Header/Header.js'
import HeaderLinks from 'components/Header/HeaderLinks.js'
import PageFooter from 'src/components/footer'

const PageLayout = ({ children, rest }) => {
    return (<>
        <Header
            color="transparent"
            links={<HeaderLinks dropdownHoverColor="primary" />}
            fixed
            changeColorOnScroll={{
                height: 300,
                color: 'white'
            }}
            {...rest}
        />

        {children}

        <PageFooter />
    </>);
}

export default PageLayout;