import fs from 'fs';
import path from 'path';

const logsDir = path.resolve('logs');

if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
}

export function logError(error) {

    const timestamp = new Date().toISOString();

    const message = `
[${timestamp}]
${error.stack || error.message}

--------------------------------------------------
`;

    fs.appendFileSync(
        path.join(logsDir, 'error.log'),
        message
    );
}

export function logInfo(message) {

    const timestamp = new Date().toISOString();

    fs.appendFileSync(
        path.join(logsDir, 'access.log'),
        `[${timestamp}] ${message}\n`
    );
}