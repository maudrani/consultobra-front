import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { GET_ROUTE_TYPE, ROUTE_TYPES } from 'constants/routes';

import { useSnapshot } from 'valtio';
import { layoutStates, restoreLayout, setAppLayout } from './states';

import PageHeader from 'components/Header';
import PageFooter from 'src/components/footer'

const PageLayout = ({ children }) => {
    const { header, footer } = useSnapshot(layoutStates)
    const Router = useRouter()

    useEffect(() => {
        restoreLayout()
        if (GET_ROUTE_TYPE[Router.pathname] === ROUTE_TYPES.APP) setAppLayout()
    }, [Router.pathname])



    return (<>
        {header.show && <PageHeader fixed={header.fixed} />}

        {children}

        {footer.show && <PageFooter />}
    </>);
}

export default PageLayout;