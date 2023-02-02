export interface FormData {
  status: boolean;
  firstname: string;
  lastname: string;
  email: string;
  phoneNumber: string;
  nationality: string;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave?: (data: FormData) => void;
  data: FormData;
}

