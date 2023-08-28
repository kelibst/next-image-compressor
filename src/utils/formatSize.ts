const formatSize = (sizeInBytes: number) => {
  let formattedSize = "";

  switch (true) {
    case sizeInBytes >= 1000000000:
      formattedSize = `${(sizeInBytes / 1000000000).toFixed(2)} GB`;
      break;
    case sizeInBytes >= 1000000:
      formattedSize = `${(sizeInBytes / 1000000).toFixed(2)} MB`;
      break;
    case sizeInBytes >= 1000:
      formattedSize = `${(sizeInBytes / 1000).toFixed(2)} KB`;
      break;
    default:
      formattedSize = `${sizeInBytes} Bytes`;
  }

  return formattedSize;
};
export default formatSize;
