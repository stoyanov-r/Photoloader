export const CreateControls = (config, validation) => {
    return {
        ...config,
        validation,
        valid: !validation,
        errorMessage: 'Required field',
    }
}

export const validateControl = (value, validation) => {
    if(!validation) {
        return true
    }

    let isValid = true;

    if (validation.required) {
        isValid = value.trim() !== '' && isValid
    }
    return isValid

}