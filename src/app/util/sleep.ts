export async function sleep(timeInSeconds: number) {
    return new Promise<void>((resolve, reject) => {
        setTimeout(() => resolve(), timeInSeconds * 1000)
    })
}