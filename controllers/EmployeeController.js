// import Model Employee

const Employee = require("../models/Employee");

// buat class EmployeeController
class EmployeeController {
    async index(req, res) {
        const employee = await Employee.all();
        // data array lebih dari 0
        if (employee.length>0){
            const data = {
                message: "Menampilkan data pegawai",
                data:employee
            };

            res.status(200).json(data);
        }
        else{
            const data = {
                massage : "Pegawai is empety",
            };
            res.status(200).json(data);
        }
    }

    async store(req, res) {

        // destructing object req.boyd
        const { name, gender, phone, address, email, status, hired_on } = req.body

        //jika data unfined maka kirim response error
        if (!name || !gender || !phone || !address || !email || !status ||!hired_on){
            const data = {
                message : "Semua data harus dikirim"
            };

            return res.status(422).json(data);
        }
        //else
        const employee = await Employee.create(req.body);
        
        const data = {
            message: "Menambahkan data pegawai",
            data: employee
        };

        res.status(201).json(data);
    }


    async update(req, res) {
        /**
         * check id students
         * jika ada, lakukan update
         * jika tidak, kirim data tidak ada
         */
        const { id } = req.params;

        const employee = await Employee.find(id);

        if (employee) {
            // update data
            const employeeUpdated = await Employee.update(id, req.body);
            const data = {
                message: "Mengupdate data pegawai",
                data: employeeUpdated,
            };

            res.status(200).json(data);
        }
        else {
            // kirim data tidak ada
            const data = {
                message: "Data tidak ada",
            };

            res.status(404).json(data);
        }



    }

    async destroy(req, res) {
        const { id } = req.params;

        /**
         * cari id
         * jika ada, hapus data
         * jika tidak, kirim data tidak ada
         */

        const employee = await Employee.find(id);

        if (employee) {
            // hapus data
            await Employee.delete(id);
            const data = {
                message: "Menghapus data pegawai",
            };

            res.status(200).json(data);
        }
        else {
            // data tidak ada
            const data = {
                message: "Data tidak ada",
            };

            res.status(404).json(data);
        }
    }

    async show(req, res) {
        /**
         * cari id
         * jika ada, kirim datanya
         * jika tidak, kirim data tidak ada
         */
        const { id } = req.params;

        const employee = await Employee.find(id);

        if (employee) {
            const data = {
                message: "Menampilkan detail data employees",
                data: employee,
            };

            res.status(200).json(data);
        }
        else {
            const data = {
                message: "Data tidak ada",
            };

            res.status(404).json(data);
        }

    }

    async search(req, res) {
    /**
     * cari nama
     * jika ada, kirim datanya
     * jika tidak, kirim data tidak ada
     */
    const nama = req.params;

    const employee = await Employee.find({name:nama});

    if (employee) {
        const data = {
            message: "Menampilkan detail data employees",
            data: employee,
        };

        res.status(200).json(data);
    }
    else {
        const data = {
            message: "Data tidak ada",
        };

        res.status(404).json(data);
    }

    }

    async status(req, res) {
    /**
     * cari status
     * jika ada, kirim datanya
     * jika tidak, kirim data tidak ada
     */
    const status = req.params;

    const employee = await Employee.find({status});

    if (employee) {
        const data = {
            message: "Menampilkan detail data employees",
            data: employee,
        };

        res.status(200).json(data);
    }
    else {
        const data = {
            message: "Data tidak ada",
        };

        res.status(404).json(data);
    }

    }

    async search(req, res) {
    /**  
    cari id
    jika ada, kirim datanya
    jika tidak, kirim data tidak ada*/
    const { name } = req.params;
    
        const employee = await Employee.find(name);
    
        if (employee) {
            const data = {
                message: "Menampilkan detail data pegawai berdasarkan nama",
                data: employee,
            };
    
            res.status(200).json(data);
        }
        else {
            const data = {
                message: "Data tidak ditemukan",
            };
    
            res.status(404).json(data);
        }
    
    }
}

// membuat object EmployeeController
const object = new EmployeeController();

// export object EmployeeController
module.exports = object;
