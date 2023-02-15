// import type { HandleClientError } from "@sveltejs/kit"
//  : HandleClientError 
console.log(`Hooks client`)
export const handleError = ({ error, event}) => {
    console.log(`Handling client hook`)

    return {message: error.toString()}
}