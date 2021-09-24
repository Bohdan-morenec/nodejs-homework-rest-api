const multer = require("multer");
const path = require("path");

const tempDir = path.join(__dirname, "../temp");

const multerConfig = multer.diskStorage({
  destination: (_, __, cd) => {
    cd(null, tempDir);
  },
  filename: (_, file, cd) => {
    cd(null, renameOriginalname(file.originalname));
  },
  limits: {
    fileSize: 1024,
  },
});

const renameOriginalname = (name) => {
  const [a, b] = name.split(".");
  return `${new Date().getTime()}.${b}`;
};

const upload = multer({
  storage: multerConfig,
});

module.exports = upload;
