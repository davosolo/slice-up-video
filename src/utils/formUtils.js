export const validateTimeInput = timeInput => {
    const TWO_DIGITS_NUMBER = /^\d{1,2}$/;
    return TWO_DIGITS_NUMBER.test(timeInput);
};
