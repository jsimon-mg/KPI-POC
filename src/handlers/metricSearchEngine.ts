import { S3Client, PutObjectCommand, PutObjectCommandInput } from '@aws-sdk/client-s3';

const s3Client = new S3Client({ region: 'us-east-1' });
exports.handler = async (event: any) => {
    // const { metric, value } = event; => could fire this lambda an event with the name of the metric and its value
    const currentDate = new Date();
    const date = `${currentDate.getFullYear()}${('0' + (currentDate.getMonth() + 1)).slice(-2)}${('0' + currentDate.getDate()).slice(-2)}-${currentDate.getHours()}${currentDate.getMinutes()}${currentDate.getSeconds()}`;

    const metricsTestCoverage = [
        {
            metricName: "testCoverage",
            project: "radar",
            date: currentDate,
            percentage: "78"
        },
        {
            metricName: "testCoverage",
            project: "labels",
            date: currentDate,
            percentage: "64"
        },
        {
            metricName: "testCoverage",
            project: "rates",
            date: currentDate,
            percentage: "50"
        },
        {
            metricName: "testCoverage",
            project: "landing page",
            date: currentDate,
            percentage: "50"
        },
        {
            metricName: "testCoverage",
            project: "shopify",
            date: currentDate,
            percentage: "82"
        },
        {
            metricName: "testCoverage",
            project: "tracking page",
            date: currentDate,
            percentage: "89"
        },
    ];

    const jsonmetricsTestCoverage = JSON.stringify(metricsTestCoverage);

    const params: PutObjectCommandInput = {
        Bucket: process.env.BUCKET_NAME,
        Key: `skydropx-metrics-testCoverage-${date}.json`,
        Body: jsonmetricsTestCoverage,
        ContentType: 'application/json',
        ContentEncoding: 'utf8',
    };

    const command = new PutObjectCommand(params);
    const result = await s3Client.send(command);

    return {
        statusCode: 200,
        body: `result put object en bucket s3 - status: ${result.$metadata.httpStatusCode} - attempts: ${result.$metadata.attempts}`
    };
}