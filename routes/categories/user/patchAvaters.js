const Jimp = require("jimp");
const fs = require("fs/promises");
const path = require("path");

const { User } = require("../../../models");

const userDir = path.join(__dirname, "../../../public/avatars");

const patchAvaters = async (req, res) => {
  const { path: tempFile, filename } = req.file;
  const { _id } = req.user;

  const uploadPath = path.join(userDir, _id.toString(), filename);
  const avatarFile = path.join(userDir, _id.toString());

  try {
    const files = await fs.readdir(avatarFile);

    const file = await Jimp.read(tempFile);
    await file.resize(250, 250).write(tempFile);

    await fs.rename(tempFile, uploadPath);

    await fs.unlink(path.join(avatarFile, `${files[0]}`));

    const avatarURL = `/public/avatars/${_id.toString()}/${filename}`;

    await User.findByIdAndUpdate(_id, { avatarURL });

    res.status(200).json({
      ResponseBody: {
        image: avatarURL,
      },
    });
  } catch (error) {
    await fs.unlink(tempFile);
    throw error;
  }
};

module.exports = patchAvaters;
