import Master from '../model/masterModel.js'

export const masterDropDown = async (req, res) => {
    try {
        const newOption = await Master.create(req.body)
        return res.status(201).json({
            message: "data saved"
        })
    } catch (error) {
        res.status(500).json({ message: error.message, stack: error.stack })
    }
}

export const masterDropDownGet = async (req, res) => {
    try {
        const newOption = await Master.find()
        return res.status(200).json({
            message: "data fetched",
            result: newOption
        })
    } catch (error) {
        res.status(500).json({ message: error.message, stack: error.stack })
    }
}
