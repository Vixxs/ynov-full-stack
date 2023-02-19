import React from 'react';
import { UserFormData } from "../modal/type";
interface UserTableProps {
    data: UserFormData[];
    onValidate?: (data: UserFormData) => void;
}
declare const UserTableComponent: React.FC<UserTableProps>;
export default UserTableComponent;
