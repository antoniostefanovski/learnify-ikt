const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validateName = (value) => {
    if (!value.trim()) return "Name is required.";
    return "";
};

const validateEmail = (value) => {
    if (!value.trim()) return "Email is required.";
    if (!emailPattern.test(value)) return "Please enter a valid email address.";
    return "";
};

const validatePassword = (value) => {
    if (!value) return "Password is required.";
    if (value.length < 6) return "Password must be at least 6 characters long.";
    return "";
};

const validateConfirmPassword = (value, password) => {
    if (!value) return "Confirm password is required.";
    if (value !== password) return "Passwords do not match.";
    return "";
};

const validatePhoneNumber = (value) => {
    if (!value.trim()) return "Phone number is required.";
    return "";
};

const validateAddress = (value) => {
    if (!value.trim()) return "Address is required.";
    return "";
};

const validateCity = (value) => {
    if (!value.trim()) return "City is required.";
    return "";
};

const validateGender = (value) => {
    if (!value.trim()) return "Gender is required.";
    if (!["Male", "Female"].includes(value)) return "Please select a valid gender.";
    return "";
};

const validateInputs = (dto) => {
    let errors = {};

    errors.name = validateName(dto.name);
    errors.email = validateEmail(dto.email);
    errors.password = validatePassword(dto.password);
    errors.confirmPassword = validateConfirmPassword(dto.confirmPassword, dto.password);
    errors.phoneNumber = validatePhoneNumber(dto.phoneNumber);
    errors.address = validateAddress(dto.address);
    errors.city = validateCity(dto.city);
    errors.gender = validateGender(dto.gender);

    return errors;
};

export {
    validateInputs,
    validateName,
    validateEmail,
    validatePassword,
    validateConfirmPassword,
    validatePhoneNumber,
    validateAddress,
    validateCity,
    validateGender
};
