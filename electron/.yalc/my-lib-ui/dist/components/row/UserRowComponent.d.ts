import React from 'react';
import { UserFormData } from "../modal/type";
interface UserRowProps {
    row: UserFormData;
    index: number;
    openModal: (index: number) => void;
}
declare const UserRowComponent: React.FC<UserRowProps>;
export default UserRowComponent;
