import React from 'react'
import { useRouter } from 'next/router'
import { MarketingModal, useWalletModal } from '@apeswapfinance/uikit'
import useAuth from 'hooks/useAuth'

const MarketingModalCheck = () => {
  const router = useRouter()
  const { login, logout } = useAuth()

  const { onPresentConnectModal } = useWalletModal(login, logout)
  const correctDisplayRoute = router.query?.modal === '1'

  const onDismiss = () => {
    router.push({
      pathname: location.pathname,
    })
  }

  const openFarmsLink = () => {
    return window.open('https://apeswap.finance/farms', '_blank')
  }

  const openLiquidityLink = () => {
    return window.open('https://app.apeswap.finance/add', '_blank')
  }

  const openConnectModal = () => {
    onPresentConnectModal()
  }

  return (
    correctDisplayRoute && (
      <MarketingModal
        title="Welcome to ApeSwap's Farms"
        description="Start earning passive income with your cryptocurrency!"
        onDismiss={onDismiss}
        goToFarms={openFarmsLink}
        goToLiquidity={openLiquidityLink}
        connectWallet={openConnectModal}
        startEarning={onDismiss}
      />
    )
  )
}

export default React.memo(MarketingModalCheck)
