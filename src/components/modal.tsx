"use client"
// module
import { FC, SetStateAction, useCallback, useEffect, useMemo, useState } from "react";
import { AxiosResponse } from "axios";
// custom
import AddressEntity from "../models/entity/address";
import useCrudService from "../services/crud-service";
import api from "../services/api";
import Btn from "../style/btn";
import i18 from "../i18/i18";
import {
    CloseBtn,
    CloseBtnWrapper,
    Item,
    ItemDetail,
    ItemLeftHand,
    ItemName,
    ItemRightHand,
    ItemsWrapper,
    LoadingOrErrorWrapper,
    ModalBackDrop,
    ModalFooter,
    ModalHeader,
    ModalWrapper,
    Title
} from "../style/modal";

interface ModalProps {
    onClose: () => void
    onSelect: (data: AddressEntity) => void
}

interface ModalState {
    loading: boolean
    error: boolean
    data: Array<AddressEntity>
    index: number | null
}

type StateSituation = 'loading' | 'error' | 'data'

const Modal: FC<ModalProps> = ({ onClose, onSelect }) => {
    const { Get: getAddresses } = useCrudService()
    const [state, setState] = useState<ModalState>({ loading: true, error: false, data: [], index: null })

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { getList(getAddresses, setState) }, [])

    const situation: StateSituation = useMemo(() => {
        if (state.loading) return 'loading'
        if (state.error || !state.data.length) return 'error'
        return 'data'
    }, [state])

    const disabled: boolean = useMemo(() => {
        if (state.loading || state.error || !state.data.length || state.index === null) return true
        return false
    }, [state])

    const onSelectItem = useCallback(() => {
        if (disabled) return
        onSelect(state.data[state.index!])
    }, [state, disabled, onSelect])

    return (
        <ModalBackDrop>
            <ModalWrapper>
                <ModalHeader>
                    <Title>{i18.modalHint}</Title>
                    <CloseBtnWrapper onClick={onClose}>
                        <CloseBtn />
                    </CloseBtnWrapper>
                </ModalHeader>
                {situationSwitcher(state, situation, getList, getAddresses, setState)}
                <ModalFooter>
                    <Btn
                        width='100%'
                        height='2.5rem'
                        backgroundColor="#000"
                        color="#FFF"
                        disabled={disabled}
                        onClick={onSelectItem}
                    >
                        {i18.modalBtn}
                    </Btn>
                </ModalFooter>
            </ModalWrapper>
        </ModalBackDrop >
    )
}

export default Modal

const situationSwitcher = (
    state: ModalState,
    situation: StateSituation,
    getList: (getAddresses: (apiUri: string) => Promise<AxiosResponse<Array<AddressEntity>, any>>, setState: (value: SetStateAction<ModalState>) => void) => Promise<void>,
    getAddresses: (apiUri: string) => Promise<AxiosResponse<Array<AddressEntity>, any>>,
    setState: (value: SetStateAction<ModalState>) => void
) => {
    switch (situation) {
        case 'loading':
            return <LoadingOrErrorWrapper><span>{i18.loading}</span></LoadingOrErrorWrapper>
        case 'error':
            return <LoadingOrErrorWrapper>
                <Btn
                    width='100%'
                    height='3rem'
                    backgroundColor="red"
                    color="white"
                    onClick={() => getList(getAddresses, setState)}
                >
                    {i18.retry}
                </Btn>
            </LoadingOrErrorWrapper>
        default:
            return <ItemsWrapper>
                {
                    state.data.map((item: AddressEntity, index: number) => (
                        <Item
                            key={item.id}
                            onClick={() => setState({ ...state, index })}
                        >
                            <ItemRightHand isSelected={!!(state.index === index)}></ItemRightHand>
                            <ItemLeftHand>
                                <ItemName>{item.name}</ItemName>
                                <ItemDetail>{item.details}</ItemDetail>
                            </ItemLeftHand>
                        </Item>
                    ))
                }
            </ItemsWrapper>
    }
}

const getList = async (
    getAddresses: (apiUri: string) => Promise<AxiosResponse<Array<AddressEntity>, any>>,
    setState: (value: SetStateAction<ModalState>) => void
) => {
    setState({ loading: true, error: false, data: [], index: null, })
    try {
        const res = await getAddresses(api.getAddresses)
        setState({ loading: false, error: false, data: res.data, index: null, })
    } catch (error) {
        setState({ loading: false, error: true, data: [], index: null, })
    }
}