export default {
    loginAccount(emailValue){
    return fetch(`http://localhost:5002/users?email=${emailValue}`)
    .then(r => r.json())
    }
}