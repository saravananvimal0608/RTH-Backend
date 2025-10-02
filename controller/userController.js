import User from '../model/userModel.js'

// dummy login for sample usage
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        res.json({
            message: "Login Successful"
        });
    } catch (error) {
        res.status(500).json({ message: error.message, stack: error.stack });
    }
}