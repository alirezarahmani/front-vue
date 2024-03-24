export const generateDate = (index) => {
    const today = new Date();
    const priorDate = new Date(new Date().setDate(today.getDate() - index));
    return  priorDate.toLocaleDateString("en-US", {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};