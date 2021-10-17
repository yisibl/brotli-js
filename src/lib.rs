#![deny(clippy::all)]

use brotli;
use napi::bindgen_prelude::*;
use napi_derive::napi;

#[napi]
pub fn compress(buffer: Buffer) -> Buffer {
  let mut output = Vec::<u8>::new();
  let mut params = brotli::enc::BrotliEncoderParams::default();
  params.quality = 11 as i32;

  match brotli::BrotliCompress(&mut buffer.as_ref(), &mut output, &params) {
    Ok(_) => (),
    Err(_) => todo!(),
  }

  Buffer::from(output)
}

#[napi]
pub fn decompress(buffer: Buffer) -> Buffer {
  let mut output = Vec::<u8>::new();

  match brotli::BrotliDecompress(&mut buffer.as_ref(), &mut output) {
    Ok(_) => (),
    Err(_) => todo!(),
  }

  Buffer::from(output)
}
