//                         packages 
const express = require("express");
const cors = require("cors");
const multer = require("multer");
// const { createClient } = require("@supabase/supabase-js");  هنفعلها بعدين


//                       اعدادات التطبيق
const app = express();
app.use(cors());
app.use(express.json());


//          supabase     مش مفعّل حاليا
/*
const supabase = createClient(
  "your_supabase_url",
  "your_supabase_anon_key"
);
*/


//                     اعدادات الملف
const checkFile = (req, file, cb) => {
  const allowedTypes = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  ];

  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("only pdf and word files allowed"), false);
  }
};

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 }, // 10m
  fileFilter: checkFile
});


//                routes 

// اختبار السيرفر
app.get("/", (req, res) => {
  res.json({ message: "server is running" });
});


//                          رفع ملف
app.post("/api/upload", upload.single("file"), async (req, res, next) => {

  try {

    if (!req.file) {
      return res.status(400).json({ message: "file required" });
    }

    //         supabase upload هنتفعلها بعدين 
    /*
    const { data, error } = await supabase.storage
      .from("documents")                                                     // It is required in Supabase to create a bucket named documents
      .upload(Date.now() + "_" + req.file.originalname, req.file.buffer);

    if (error) {
      return res.status(500).json({ message: error.message });
    }
    */

    //                 رد مؤقت
    res.json({
      message: "file received successfully",
      fileName: req.file.originalname,
      size: req.file.size
    });

  } catch (error) {
    next(error);
  }

});


//             معالجه لاخطاء
app.use((err, req, res, next) => {
  res.status(400).json({ message: err.message });
});


//              تشغيل السيرفر
const port = 1200;

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});