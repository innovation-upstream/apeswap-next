import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { Card, CardBody, Heading } from '@apeswapfinance/uikit'
import { Nft } from 'config/constants/types'
import InfoRow from '../InfoRow'
import Image from '../Image'

interface NftCardProps {
  nft: Nft
}

const Header = styled(InfoRow)`
  min-height: 28px;
`

const NftCard: React.FC<NftCardProps> = ({ nft }) => {
  const { index, name, image, attributes } = nft

  const pad = (n, width) => {
    return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n
  }

  return (
    <Link href={`/nft/${index}`}>
      <a>
        <Card>
          <Image src={image} alt={name} originalLink={image} rarityTier={attributes.rarityTierNumber} />
          <CardBody>
            <Header>
              <Heading>
                {name} - #{pad(`${index}`, '4')}
              </Heading>
            </Header>
          </CardBody>
        </Card>
      </a>
    </Link>
  )
}

export default NftCard
