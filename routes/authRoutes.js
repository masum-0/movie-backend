import express from 'express'
import { register,login,getProfile,logout,getUsers,updateProfile,deleteProfile } from "../controllers/auth&userController.js"
import { adminOnly, authenticate } from "../middlewares/authMiddleware.js" 

const router=express.Router()

router.post("/register",register)
router.post("/login",login)
router.get("/profile",authenticate,getProfile)
router.post("/logout",authenticate,logout)
router.get("/users",authenticate,adminOnly,getUsers)
router.put("/profile", authenticate,updateProfile)
router.delete("/profile", authenticate,deleteProfile)


export default router
