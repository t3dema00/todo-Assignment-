const emptyOrRows = (result) => {
        if (!result) {
            return [];
        } else {
            return result.rows;
        }
    }
    
    export {emptyOrRows};