// import EmployeeController
const EmployeeController = require("../controllers/EmployeeController");
// import express
const express = require("express");

// membuat object router
const router = express.Router();

/**
 * Membuat routing
 */
router.get("/", (req, res) => {
  res.send("Hello HRD API Express");
});

// Membuat routing employee
  // Mencari data secara keseluruhan
router.get("/employees", EmployeeController.index);
  // Menambahkan data
router.post("/employees", EmployeeController.store);
  // Mengubah data
router.put("/employees/:id", EmployeeController.update);
  // Menghapus data
router.delete("/employees/:id", EmployeeController.destroy);
  // Mencari data secara detail {id}
router.get("/employees/:id", EmployeeController.show);
  // Mencari data secara detail {name}
router.get('/search/:name', EmployeeController.search);


// export router
module.exports = router;
