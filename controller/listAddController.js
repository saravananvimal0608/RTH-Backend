import ListAdd from "../model/listAddModel.js";

//add property
export const addProperty = async (req, res) => {
  try {
    const newProperty = new ListAdd(req.body);
    await newProperty.save();
    return res.status(201).json({ success: true, data: newProperty });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message, stack: err.stack });
  };
}

// get all properties
export const getProperties = async (req, res) => {
  try {
    const properties = await ListAdd.find();
    return res.status(200).json({ success: true, data: properties });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
}
// get a single property
export const getSingleProperty = async (req, res) => {
  try {
    const property = await ListAdd.findById(req.params.id);
    if (!property) return res.status(404).json({ success: false, message: "Property not found" });
    return res.status(200).json({ success: true, data: property });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
}

// update a property
export const updateProperty = async (req, res) => {
  try {
    const updated = await ListAdd.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ success: false, message: "Property not found" });
    return res.status(200).json({ success: true, data: updated });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
}

// delete property
export const deleteProperty = async (req, res) => {
  try {
    const deleted = await ListAdd.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ success: false, message: "Property not found" });
    return res.status(200).json({ success: true, message: "Property deleted successfully" });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
}

// search filter api 
export const search = async (req, res) => {
  try {
    const { q } = req.query;

    const results = await ListAdd.find({
      propertyTitle: { $regex: q, $options: "i" }
    });

    return res.json({ success: true, data: results });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

// pagination api 
export const pagination = async (req, res) => {
  try {
    let { page = 1, limit = 10 } = req.query;
    page = parseInt(page);
    limit = parseInt(limit);

    const total = await ListAdd.countDocuments();
    const properties = await ListAdd.find()
      .skip((page - 1) * limit)
      .limit(limit);

    return res.json({
      success: true,
      data: properties,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      totalItems: total,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}