export interface FormData {
  status: boolean;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  nationality: string;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: FormData) => void;
  data: FormData;
}

