import S3 from 'aws-sdk/clients/s3.js'
import fs from 'fs'
import dotenv from 'dotenv'
dotenv.config()

const bucketName = process.env.AWS_BUCKET_NAME
const region = process.env.AWS_BUCKET_REGION
const accessKeyId = process.env.AWS_ACCESS_KEY
const secretAccessKey = process.env.AWS_SECRET_KEY

const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey,
})

// uploads to s3
const uploadFile = (file) => {
  const fileStream = fs.createReadStream(file.path)

  const uploadParams = {
    Bucket: bucketName,
    Body: fileStream,
    Key: file.filename,
  }

  return s3.upload(uploadParams).promise()
}

// downloads from s3
const getFileStream = async (fileKey) => {
  const params = {
    Key: fileKey,
    Bucket: bucketName,
  }

  // return s3.getObject(downloadParams).createReadStream()
  const url = await s3.getSignedUrlPromise('getObject', params)

  return url
}

export { uploadFile, getFileStream }
