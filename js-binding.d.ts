export function compress(data: Buffer): Buffer
export function decompress(data: Buffer): Buffer
export function compressAsync(data: Buffer, signal?: AbortSignal | undefined | null): Promise<Buffer>
export function decompressAsync(data: Buffer, signal?: AbortSignal | undefined | null): Promise<Buffer>
