type RequestMsgs = { 
    200: 'OK'; 
    400: 'Bad Request'; 
    404: 'Not Found'; 
    500: 'Internal Server Error'; 
}

export const handleHttpStatus = (res: any, status: number | undefined, customSend: any = null) => {
    const requestMsgs: RequestMsgs= {
        200: "OK",
        400: "Bad Request",
        404: "Not Found",
        500: "Internal Server Error",
    }

    return res.status(status).json(
        customSend ?? {
            status: status,
            msg: requestMsgs[status as keyof typeof requestMsgs],
        }
    )
}