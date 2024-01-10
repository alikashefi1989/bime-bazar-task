// custom
import AddressEntity from "../entity/address"
import OrderEntity from "../entity/order"

interface Store {
    form: Omit<OrderEntity, 'addressId'> & { address: AddressEntity }
    setForm: (form: Store['form']) => void
}

export default Store
