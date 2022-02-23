import React from 'react'
import { ModalProvider } from '@apeswapfinance/uikit'
import { Web3ReactProvider } from '@web3-react/core'
import { HelmetProvider } from 'react-helmet-async'
import { Provider } from 'react-redux'
import { getLibrary } from 'utils/web3React'
import { ThemeContextProvider } from 'contexts/ThemeContext'
import { BlockContextProvider } from 'contexts/BlockContext'
import { RefreshContextProvider } from 'contexts/RefreshContext'
import store from 'state'
import NftProvider from 'views/Nft/contexts/NftProvider'
import { ThemeProvider } from 'theme-ui'
import { Apeswap } from '@isioma/uikit'
import { MenuContextProvider } from '@isioma/uikit'

const Providers: React.FC = ({ children }) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Provider store={store}>
        <HelmetProvider>
          <ThemeContextProvider>
            <ThemeProvider theme={Apeswap}>
              <NftProvider>
                <BlockContextProvider>
                  <RefreshContextProvider>
                    <ModalProvider>
                      <MenuContextProvider>
                        {children}
                       </MenuContextProvider>
                    </ModalProvider>
                  </RefreshContextProvider>
                </BlockContextProvider>
              </NftProvider>
            </ThemeProvider>
          </ThemeContextProvider>
        </HelmetProvider>
      </Provider>
    </Web3ReactProvider>
  )
}

export default Providers
