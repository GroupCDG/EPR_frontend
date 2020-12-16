import React, { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return null
}

export default function OnRoute() {
  return (
    <>
      <ScrollToTop />
    </>
  )
}
