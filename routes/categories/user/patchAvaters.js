const fs = require("fs/promises");
const fs1 = require("fs");
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
