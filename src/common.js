export const isEmpty = (term) => {
    if(!term || term === "" || term?.length === 0 || Object.keys(term).length === 0) {
        return true;
    } 
    return false;
};