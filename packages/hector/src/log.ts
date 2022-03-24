interface LogStatus {
    name: string;
    style: string;
}

export namespace Status {

    export const Error: LogStatus = {
        name: "ERROR",
        style: "color: red"
    };


    export const Warning: LogStatus = {
        name: "WARN",
        style: "color: yellow"
    };


    export const Success: LogStatus = {
        name: "SUCCECSS",
        style: "color: green"
    };

    export const Debug: LogStatus = {
        name: "DEBUG",
        style: "color: #046a92"
    }
};


export function log(status: LogStatus | null, ...message: any[]): void {
    status
        ? console.log("%c" + status.name, status.style, ...message)
        : log(Status.Debug, ...message);
}
