import React from 'react'
import type { AppProps } from 'next/app'
import { StaticRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { Providers } from "components/Providers"
import { ResetCSS } from '@apeswapfinance/uikit'
import GlobalStyle from 'style/Global'
import ToastListener from 'components/ToastListener'
import MarketingModalCheck from 'components/MarketingModalCheck'
import { PageWrapper } from "components/PageWrapper"
import Menu from 'components/Menu'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Providers>
      <ResetCSS />
      <GlobalStyle />
      <MarketingModalCheck />
      <PageWrapper>
        <Menu />
        <Component {...pageProps} />
      </PageWrapper>
      <ToastListener />
    </Providers>
  )
}

export default MyApp
