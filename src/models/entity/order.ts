import AddressEntity from "./address"

interface OrderEntity {
    nationalId: string
    phoneNumber: string
    addressId: AddressEntity['id']
}

export default OrderEntity
