export const getAcademicYear = () => {
    const currentDate = new Date();
    return currentDate.getMonth() <= 5 ? currentDate.getFullYear() - 1 : currentDate.getFullYear();
}