import React from "react";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
  > & { 
    label: string,
  };

const onFocus = (e: any) => {
  e.target.parentElement.classList.add('my-lib-ui-input-text-focus');
};

const onBlur = (e: any) => {
  e.target.parentElement.classList.remove('my-lib-ui-input-text-focus');
}

const showPassword = (e:any) => {
  let icon = e.currentTarget;
  let input = icon.parentNode.querySelector('input');
  if("password" === input.type ){
    input.type = "text";
    icon.innerHTML  = "<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M13.7427 6.14544C13.1744 6.05169 12.5923 6 12 6C7.26799 6 3.20088 9.29883 1.41401 11.0043C0.861996 11.5313 0.861996 12.4688 1.41401 12.9957C2.2621 13.8053 3.62405 14.9737 5.32705 15.9781L8.66263 12.0808C8.66227 12.054 8.66191 12.027 8.66191 12C8.66191 9.84607 10.1564 8.09996 12 8.09996C12.0231 8.09996 12.0462 8.10017 12.0691 8.1008L13.7427 6.14544ZM11.9308 15.8992C11.9537 15.8998 11.9768 15.9 11.9999 15.9C13.8435 15.9 15.338 14.1539 15.338 12C15.338 11.973 15.3379 11.946 15.3373 11.9192L18.6731 8.02188C20.3759 9.02613 21.738 10.1947 22.5861 11.0043C23.138 11.5312 23.138 12.4687 22.5861 12.9957C20.7993 14.7012 16.7317 18 11.9997 18C11.4074 18 10.8255 17.9483 10.257 17.8546L11.9308 15.8992Z' fill='#5A5A5A'/><path fill-rule='evenodd' clip-rule='evenodd' d='M21.6145 0.462598C22.1285 1.07917 22.1285 2.07874 21.6145 2.69554L4.24629 23.5374C3.73229 24.1542 2.89931 24.1542 2.3855 23.5374C1.8715 22.9208 1.8715 21.9213 2.3855 21.3045L19.7537 0.462598C20.2677 -0.154199 21.1007 -0.154199 21.6145 0.462598V0.462598Z' fill='#5A5A5A'/></svg>";
  }else{
    input.type = "password";
    icon.innerHTML  = "<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M11.9998 18C16.7318 18 20.7993 14.7012 22.5861 12.9957C23.138 12.4688 23.138 11.5312 22.5861 11.0043C20.7993 9.29882 16.7318 6 11.9998 6C7.26792 6 3.20086 9.29882 1.41401 11.0043C0.861997 11.5312 0.861997 12.4688 1.41401 12.9957C3.20081 14.7012 7.26838 18 11.9998 18ZM13.7972 12C13.7972 13.1597 12.9924 14.0999 11.9998 14.0999C11.0072 14.0999 10.2025 13.1597 10.2025 12C10.2025 10.8403 11.0072 9.90005 11.9998 9.90005C12.9924 9.90005 13.7972 10.8403 13.7972 12ZM15.3379 12C15.3379 14.1539 13.8434 15.9001 11.9998 15.9001C10.1563 15.9001 8.66177 14.1539 8.66177 12C8.66177 9.84605 10.1563 8.09995 11.9998 8.09995C13.8434 8.09995 15.3379 9.84605 15.3379 12Z' fill='#5A5A5A'/></svg>";
  }
}
const focusInput = (e:any) => {
  let input = e.currentTarget.querySelector('input')
  if(document.activeElement !== input){
    input.focus();
  }
}

const InputComponent: React.FC<Props> = ({className ,...props}) => {
  return (
    <div onClick={focusInput} className={["my-lib-ui-form-field", className].join(" ")}>
      <input onBlur={onBlur} onFocus={onFocus} id={props.id} {...props} className="my-lib-ui-input" />
      <label htmlFor={props.id} className={"my-lib-ui-label"}>{props.label}</label>
      { props.type == "password" &&
        <div onClick={showPassword} className="show-password-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9998 18C16.7318 18 20.7993 14.7012 22.5861 12.9957C23.138 12.4688 23.138 11.5312 22.5861 11.0043C20.7993 9.29882 16.7318 6 11.9998 6C7.26792 6 3.20086 9.29882 1.41401 11.0043C0.861997 11.5312 0.861997 12.4688 1.41401 12.9957C3.20081 14.7012 7.26838 18 11.9998 18ZM13.7972 12C13.7972 13.1597 12.9924 14.0999 11.9998 14.0999C11.0072 14.0999 10.2025 13.1597 10.2025 12C10.2025 10.8403 11.0072 9.90005 11.9998 9.90005C12.9924 9.90005 13.7972 10.8403 13.7972 12ZM15.3379 12C15.3379 14.1539 13.8434 15.9001 11.9998 15.9001C10.1563 15.9001 8.66177 14.1539 8.66177 12C8.66177 9.84605 10.1563 8.09995 11.9998 8.09995C13.8434 8.09995 15.3379 9.84605 15.3379 12Z" fill="#5A5A5A"/>
          </svg>
        </div>
      }
    </div>
  );
};

export default InputComponent;
