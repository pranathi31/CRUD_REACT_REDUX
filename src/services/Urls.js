export const LOCAL_HOST="https://jsonplaceholder.typicode.com";

export const ServiceEnum={
    get:"posts",
    post:"posts",
    put:"posts",
    delete:"posts"
}

export const urlFor =(services)=>{
    if(services){
        return `${LOCAL_HOST}/${services}`
    }
    return undefined;
}