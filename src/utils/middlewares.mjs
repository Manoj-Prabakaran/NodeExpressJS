import { users } from "./constants.mjs"

export const getUsersByIndex = (req, res, next)=>{
    const id = parseInt(req.params.id)
    if(isNaN(id)){
        return res.status(400).send({msg: "Bad Request, Invalid Id"})
    }
    const userIndex = users.findIndex(user=> user.id === id)
    if(userIndex === -1){
        return res.status(404).send({msg: "Index not found"})
    }
    req.userIndex = userIndex
    req.id = id
    next()
}

export const getParamsId = (req, res, next)=>{
    const id = parseInt(req.params.id)
    if(isNaN(id)){
        return res.status(400).send({msg: "Bad Request, Invalid Id"})
    }
    req.id = id
    next()
}