/* eslint-disable @next/next/no-sync-scripts */
/*!

=========================================================
* NextJS Material Kit PRO v1.2.0 based on Material Kit PRO - v2.0.2 (Bootstrap 4.0.0 Final Edition) and Material Kit PRO React v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/ct-nextjs-material-kit-pro
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react'
import ReactDOM from 'react-dom'
import App from 'next/app'
import Head from 'next/head'
import Router from 'next/router'
import Layout from 'page-sections/layout/index'
import PageChange from 'components/PageChange/PageChange.js'
import 'styles/scss/nextjs-material-kit-pro.scss?v=1.2.0'
import 'styles/css/react-demo.css'
import 'animate.css/animate.min.css'

import { CssBaseline } from '@material-ui/core'

import { ThemeProvider } from '@material-ui/styles'
import { theme } from 'styles/jss/custom-theme'

Router.events.on('routeChangeStart', url => {
  document.body.classList.add('body-page-transition')
  ReactDOM.render(
    <PageChange path={url} />,
    document.getElementById('page-transition')
  )
})
Router.events.on('routeChangeComplete', () => {
  ReactDOM.unmountComponentAtNode(document.getElementById('page-transition'))
  document.body.classList.remove('body-page-transition')
})
Router.events.on('routeChangeError', () => {
  ReactDOM.unmountComponentAtNode(document.getElementById('page-transition'))
  document.body.classList.remove('body-page-transition')
})


/* TEMPORARY FIX */

const routeChange = () => {
  // Temporary fix to avoid flash of unstyled content
  // during route transitions. Keep an eye on this
  // issue and remove this code when resolved:
  // https://github.com/vercel/next.js/issues/17464

  const tempFix = () => {
    const allStyleElems = document.querySelectorAll('style[media="x"]');
    allStyleElems.forEach((elem) => {
      elem.removeAttribute("media");
    });
  };


  tempFix();
};

Router.events.on("routeChangeComplete", routeChange);
Router.events.on("routeChangeStart", routeChange);

export default class MyApp extends App {
  componentDidMount() {
    let comment = document.createComment(`

=========================================================
* NextJS Material Kit PRO v1.2.0 based on Material Kit PRO - v2.0.2 (Bootstrap 4.0.0 Final Edition) and Material Kit PRO React v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-material-kit-pro
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

`)
    document.insertBefore(comment, document.documentElement)
  }


  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }


  render() {
    const { Component, pageProps } = this.props

    return (
      <React.Fragment>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"></script>
          <title>Consultobra</title>
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout >
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </React.Fragment>
    )
  }
}