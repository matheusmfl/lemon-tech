'use client'
import { useEffect } from 'react'

import TagManager from 'react-gtm-module'

export function Analitycs() {
  useEffect(() => {
    const tagManagerArgs = {
      gtmId: 'GTM-WJ8B4JL',
    }

    TagManager.initialize(tagManagerArgs)
  }, [])

  return <></>
}
