import jwt from 'jsonwebtoken'

const generateJwtToken = (userId,res) =>{
    const token = jwt.sign({userId}, process.env.JWT_SECRET,{expiresIn:"15d"} )
res.cookie("jwt",token,{
    maxAge:15*24*60*60*1000,
    httpOnly:true,
    sameSite:"None",
    secure:true
})
}

export default generateJwtToken