const S3 = require("aws-sdk/clients/s3");
const dotenv = require("dotenv");
dotenv.config();
const bucketname = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;

const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey,
});
async function getImageStream(imageKey) {
  return s3.getObject({ Bucket: bucketname, Key: imageKey }).createReadStream();
}
module.exports = { s3, getImageStream };
