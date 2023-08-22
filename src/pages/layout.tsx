import React from 'react'

const Layout: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <>
        <header>Nav Bar</header>
        <main>{children}</main>
        <footer>Footer</footer>
    </>
  )
}

export default Layout
