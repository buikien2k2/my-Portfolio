const images = require.context("./", false, /\.(png|jpe?g|svg)$/);

const imageMap = images.keys().reduce((acc, path) => {
  const key = path.replace("./", ""); // Xóa "./" khỏi tên file
  acc[key] = images(path);
  return acc;
}, {});

export default imageMap;
