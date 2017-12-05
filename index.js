const  AWS = require('aws-sdk');

const  s3 = new AWS.S3();

const s3bucket  = 'replication-lambda-push';

const fileKey = 'brand/project/local/s3-json-push.json';

const fileData = {
    windows: 'rocks'
};

const s3Params = {
    Bucket: s3bucket,
    Key: fileKey,
    Body: JSON.stringify(fileData),
    ACL: 'public-read',
    ContentType: 'application/json',
    Metadata: {}
};

s3.putObject(s3Params, function (err, data) {
    if (err) {
        console.log('Error', err);
    } else {
        console.log('Success', data);
    }
});
