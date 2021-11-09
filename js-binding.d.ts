export function compress(data: Buffer): Buffer
export function compressAsync(data: Buffer, signal?: AbortSignal | undefined | null): Promise<Buffer>
export function decompress(buffer: Buffer): Promise<Buffer>
