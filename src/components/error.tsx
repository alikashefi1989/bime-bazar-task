"use client"
// module
import { FC } from "react"
// custom
import { InputError } from "@/style/order-form"

interface ErrorPorps {
    errors: any
    name: string
}

const Error: FC<ErrorPorps> = ({ errors, name }) => {

    if (!errors || !errors[name] || !errors[name]?.message) return null

    return (
        <InputError>
            {errors[name]?.message}
        </InputError>
    )
}

export default Error