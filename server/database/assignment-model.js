const pool = require("./index")

const assignModel = {}

assignModel.getAssignment = async function (req, res, next) {
  try {
    const data = await pool.query(
      "SELECT * FROM public.assignment ORDER BY assignment_id"
    )
    // return data
    res.status(200).send(data.rows);
  } catch (error) {
    // return new Error("No matching message found")
    res
      .status(500)
      .json({ message: 'Error retrieving assignments', error: error.message });
  }
}

module.exports = assignModel