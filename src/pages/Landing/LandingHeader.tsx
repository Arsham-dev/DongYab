/** @jsxImportSource @emotion/react */
import title from '../../assets/landing/title.svg'
import { css } from '@emotion/react'

const LandingHeader = () => {
  return (
    <>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          margin-top: 50px;
          margin-bottom: 55px;
          align-items: center;
        `}>
        <span
          css={css`
            font-weight: bold;
            font-size: 48px;
            color: #ffffff;
          `}>
          دنگ یاب
        </span>
        <img
          src={title}
          alt="title"
          css={css`
            transform: rotate(-3.79deg);
            position: relative;
            top: -23px;
          `}
        />
      </div>
      <span
        css={css`
          font-weight: 400;
          font-size: 24px;
          text-align: center;
          color: #ffffff;
          margin-bottom: 85px;
          text-align: center;
        `}>
        به راحتی مشکل حساب کتاب خود و دوستانتان را برطرف کنید
      </span>
    </>
  )
}
export default LandingHeader
