"use client"
// module
import { FC } from "react"
// custom
import i18 from "../../i18/i18"
import { SuccessMsgHint, SuccessMsgWrapper } from "../../style/success-msg"
import Btn, { AbsoluteBtnWrapper } from "../../style/btn"
import Link from "next/link"

const SuccessMsg: FC = () => {

  return (
    <SuccessMsgWrapper>
      <SuccessMsgHint>{i18.successMessage}</SuccessMsgHint>
      <AbsoluteBtnWrapper
        bottom='2rem'
        left='1.25rem'
      >
        <Link href='/'>
          <Btn
            width='8.75rem'
            height='3rem'
            backgroundColor="#000"
            color="#FFF"
          >
            {i18.returnBtn}
          </Btn>
        </Link>
      </AbsoluteBtnWrapper>
    </SuccessMsgWrapper>
  )
}

export default SuccessMsg
