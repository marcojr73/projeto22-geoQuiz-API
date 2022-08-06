import multer from "multer";
import crypto from "crypto"
import path from "path";

const multerConfig = {
    dest: 'uploads/',
    destination: (req, file, cb) => {
        cb(null, path.resolve(__dirname, "..", "..", "tmp", "uploads"));
      },
      filename: (req, file, cb) => {
        crypto.randomBytes(16, (err, hash) => {
          if (err) cb(err);
  
          file.key = `${hash.toString("hex")}-${file.originalname}`;
  
          cb(null, file.key);
        });
    },

    fileFilter: (req, file, cb) => {
        const allowedMimes=[
            "image/jpeg",
            "image/pjpeg",
            "image/png",
            "image/gif",
        ]
        if(allowedMimes.includes(file.mimetype)){
            cb(null, true)
        } else {
            throw {
                status: 422,
                message: "invalid file type"
            }
        }
    }

}

export default multerConfig