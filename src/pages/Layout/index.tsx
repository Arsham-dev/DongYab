/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import React from 'react'
import leftImg from '../../assets/background/left-background-img.svg'
import rightImg from '../../assets/background/right-background-img.svg'
interface LayoutProps {
  children?: React.ReactNode
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div
      css={css`
        position: relative;
        width: 100%;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        background-color: #1cc976;
      `}>
      <img
        alt="left-part"
        src={leftImg}
        css={css({
          position: 'absolute',
          top: 0,
          left: 6
        })}
      />
      {children}
      <img
        alt="right-part"
        src={rightImg}
        css={css({
          position: 'absolute',
          top: 0,
          right: 6
        })}
      />
    </div>
  )
}
export default Layout
