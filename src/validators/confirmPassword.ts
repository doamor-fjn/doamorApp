import { AbstractControl } from "@angular/forms";
// Valida se as senhas do cadastro são iguais
export function ValidateConfirmPassword(control: AbstractControl) {
    if (!control.root.value) {
        return null;
    }

    if (control.value === control.root.value.password) {
        return null;
    } else {
        return { validConfirmPassword: true };
    }
}