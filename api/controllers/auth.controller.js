import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";
// const { jwt } = pkg;


export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(200).json({ message: "User created successfully" });
    console.log(req.body);
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    // findone is mongoes method to find user email inside the database.
    const validUser = await User.findOne({ email });

    //* Now check if the user is valid or not, if user isn't valid return the
    //  error 404. with the help of middleware and custome errorhandler.
    if (!validUser) return next(errorHandler(404, "User not found"));

    //* Now check the password with bcrypt.js.campareSync method because the 
    // passward is bcrypt password not the normal password and the password 
    // inside the database is hash and encrpted , It impossible to compare it directly.
    const validPassword = bcryptjs.compareSync(password, validUser.password);

    // Set the validition if the password isn't correct return the error 401.
    if (!validPassword) return next(errorHandler(401, "wrong credentials"));
    
    //* Now set the token to the cookies of the browser its hash value of 
    // the unique things from the user it's use later to verify the user.
    //* After install jwtwebtoken get unique id of the user from the database _id 
    const token = jwt.sign({ id: validUser._id }, (process.env.JWT_SECRET));

    //* For good practise remove the password from the data which sended to the 
    // client site for this use password:hashpassword, ...rest sepearte password
    //from the rest and sended to the doc.
    const { password: hashedPassword, ...rest } = validUser._doc;
    const expiryDate = new Date(Date.now() + 3600000); // 1 hour

    //* Add token in cookie added cookie in browser access_token httpOnly 
    // true help to prevent the third party application to modify this cookie or change it.
    res
      .cookie("access_token", token, { httpOnly: true, expires: expiryDate})
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};
