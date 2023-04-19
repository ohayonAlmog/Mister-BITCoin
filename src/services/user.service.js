import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'

export const userService = {
     getUser,
     signUp,
     signIn,
     addMove,
     getMoves,
}

const USER_KEY = 'user'
const gUsers = utilService.loadFromStorage(USER_KEY) || _DemoUser()
let loggedInUser = gUsers[gUsers.length - 1]

async function _saveUser(user) {
     if (!user._id) {
          storageService.post(USER_KEY, user)
          return user
     }
     storageService.put(USER_KEY, user)
     return user
}

function _DemoUser () {
    const users = [{
        _id: "u100",
        name: "Almog Ohayon",
        coins: 100,
        moves: []
   }]
   utilService.saveToStorage(USER_KEY, users)
   return users
}

function getUser() {
     return loggedInUser
}

function getMoves(number, contact = null) {
     let moves = loggedInUser.moves.slice(0, number + 1)
     if (contact) moves.map(move => move.toId === contact._id)
     return moves
}

async function signUp(fullname, username, password) {
    console.log('im in signUp userService');
     const user = {
          name: fullname,
          username,
          password,
          coins: 100,
          moves: [],
     }
     gUsers.push(user)
     loggedInUser = await _saveUser(user)
}

async function signIn (username, password) {
     console.log('username', username);
     console.log('password', password);
     loggedInUser = gUsers.find(user => user.username === username && user.password === password)
     console.log('loggedInUser', loggedInUser);
}

async function addMove(contact, amount) {
     const move = {
          toId: contact._id,
          to: contact.name,
          at: Date.now(),
          amount
     }
     loggedInUser.moves.unshift(move)
     loggedInUser.coins -= amount
     return await _saveUser(loggedInUser)
}
