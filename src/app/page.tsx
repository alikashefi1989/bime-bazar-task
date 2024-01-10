"use client"
// module
import { FC, useCallback, useMemo, useState } from "react"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import * as yup from 'yup'
// custom
import { AddressLabel, AddressName, AddressPlaceholder, Input, InputWrapper, OrderFormHint, OrderFormWrapper } from "../style/order-form"
import i18 from "../i18/i18"
import Btn, { AbsoluteBtnWrapper } from "../style/btn"
import Modal from "../components/modal"
import Error from "../components/error"
import AddressEntity from "../models/entity/address"
import useStore from "../state-management/store"
import Store from "../models/global/store"
import OrderEntity from "../models/entity/order";
import useCrudService from "../services/crud-service";
import api from "../services/api";

const OrderForm: FC = () => {
  const router = useRouter()
  const { Create: createOrder } = useCrudService()
  const [disabled, setDisabled] = useState<boolean>()
  const [show, setShow] = useState<boolean>(false)
  const initialForm = useStore((store: Store) => store.form)
  const setForm = useStore((store: Store) => store.setForm)
  const form = useForm<Store['form']>({ resolver: yupResolver(formValidation), mode: 'all', defaultValues: initialForm })

  const addressName = useMemo(() => {
    return form.getValues('address').name
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form, form.getValues()])

  const sendOrder = useCallback(async (data: Omit<OrderEntity, "addressId"> & { address: AddressEntity; }) => {
    if (disabled) return
    setDisabled(true)
    try {
      await createOrder(
        api.order,
        {
          nationalId: data.nationalId,
          phoneNumber: data.phoneNumber,
          addressId: data.address.id
        }
      )
      setForm(data)
      toast(i18.successMessage, { toastId: 'success', type: 'success', position: 'top-left' })
      router.push('/success')
    } catch (error) {
      toast(i18.formSendError, { toastId: 'formSendError', type: 'error', position: 'top-left' })
    } finally {
      setDisabled(false)
    }
  }, [disabled, router, createOrder, setForm])

  return (
    <OrderFormWrapper>
      <OrderFormHint>{i18.formHint}</OrderFormHint>
      <InputWrapper marginBottom='1.375rem'>
        <Input
          type='number'
          inputMode='numeric'
          placeholder={i18.nationalCodePlaceholder}
          error={!!(form.formState.errors && form.formState.errors['nationalId'])}
          {...form.register('nationalId')}
        />
        <Error errors={form.formState.errors} name="nationalId" />
      </InputWrapper>
      <InputWrapper marginBottom='2.4375rem'>
        <Input
          type='number'
          inputMode='numeric'
          placeholder={i18.cellphonePlaceholder}
          error={!!(form.formState.errors && form.formState.errors['phoneNumber'])}
          {...form.register('phoneNumber')}
        />
        <Error errors={form.formState.errors} name="phoneNumber" />
      </InputWrapper>
      <AddressLabel>{i18.addressLabel}</AddressLabel>
      {
        !!(addressName)
          ? <AddressName>{addressName}</AddressName>
          : <>
            <AddressPlaceholder>{i18.addressPlaceholder}</AddressPlaceholder>
            <Btn
              width='100%'
              height='3rem'
              backgroundColor="#FFC453"
              color="#000"
              onClick={() => setShow(true)}
            >
              {i18.addressBtn}
            </Btn>
          </>
      }
      <AbsoluteBtnWrapper bottom='2rem' left='1.25rem'>
        <Btn
          width='8.75rem'
          height='3rem'
          backgroundColor="#000"
          color="#FFF"
          disabled={disabled}
          onClick={() => {
            form.handleSubmit(
              (data: Omit<OrderEntity, "addressId"> & { address: AddressEntity; }) => sendOrder(data),
              () => toast(i18.formError, { toastId: 'error', type: 'error', position: 'top-left' })
            )()
          }}
        >
          {i18.formBtn}
        </Btn>
      </AbsoluteBtnWrapper>
      {
        show &&
        <Modal
          onClose={() => setShow(false)}
          onSelect={(data: AddressEntity) => {
            setShow(false)
            form.setValue('address', data)
          }}
        />
      }
    </OrderFormWrapper>
  )
}

export default OrderForm

const formValidation = yup.object({
  nationalId: yup
    .string()
    .required(i18.nationalCodeError)
    .test(
      'regex-check',
      i18.nationalCodeError1,
      (value: string) => {
        const regex = new RegExp('^[0-9]{10}$')
        return regex.test(value)
      }
    ),
  phoneNumber: yup
    .string()
    .required(i18.cellphoneError)
    .test(
      'regex-check',
      i18.cellphoneError1,
      (value: string) => {
        const regex = new RegExp('^(0)?((?:90|91|92|93|99)[0-9]{8})$')
        return regex.test(value)
      }
    ),
  address: yup
    .object()
    .shape({
      id: yup
        .string()
        .required(),
      name: yup
        .string()
        .required(),
      details: yup
        .string()
        .required()
    })
}).required()
