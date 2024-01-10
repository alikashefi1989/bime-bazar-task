// module
import { create } from "zustand";
// custom
import Store from "../models/global/store";

const persistedStoreName = 'app-global-store'

const useStore = create<Store, any>(
    (set, _) =>
    ({
        form: {
            nationalId: '',
            phoneNumber: '',
            address: {
                id: '',
                name: '',
                details: ''
            }
        },
        setForm: (form: Store['form']) => {
            set({ form });
        },
    })
);

export default useStore;