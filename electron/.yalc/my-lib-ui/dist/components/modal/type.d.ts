export interface UserFormData {
    status: boolean;
    firstname: string;
    lastname: string;
    email: string;
    phoneNumber: string;
    nationality: string;
}
export interface CarFormData {
    id: number;
    brand: string;
    model: string;
    price: number;
    image: string;
}
export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave?: (data: UserFormData) => void;
    data: UserFormData;
}
