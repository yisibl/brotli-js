use brotli;
use napi::bindgen_prelude::*;
use napi_derive::napi;

#[inline]
fn brotli_compress(data: &Buffer) -> Result<Vec<u8>> {
  let mut output = Vec::<u8>::new();
  let mut params = brotli::enc::BrotliEncoderParams::default();
  params.quality = 11 as i32;

  match brotli::BrotliCompress(&mut data.as_ref(), &mut output, &params) {
    Ok(_) => (),
    Err(_) => todo!(),
  }

  Ok(output) // output buffer
}

#[inline]
fn brotli_decompress(buffer: &Buffer) -> Result<Vec<u8>> {
  let mut output = Vec::<u8>::new();

  match brotli::BrotliDecompress(&mut buffer.as_ref(), &mut output) {
    Ok(_) => (),
    Err(_) => todo!(),
  }

  Ok(output) // output buffer
}

#[napi]
pub fn compress(data: Buffer) -> Result<Buffer> {
  let buffer = brotli_compress(&data)?;

  Ok(buffer.into())
}

#[napi]
pub fn decompress(data: Buffer) -> Result<Buffer> {
  let buffer = brotli_decompress(&data)?;

  Ok(buffer.into())
}
pub struct AsyncRenderer {
  data: Buffer,
}

#[napi]
impl Task for AsyncRenderer {
  type Output = Vec<u8>;
  type JsValue = Buffer;

  fn compute(&mut self) -> Result<Self::Output> {
    brotli_compress(&mut self.data)
  }

  fn resolve(&mut self, _env: napi::Env, result: Self::Output) -> Result<Self::JsValue> {
    Ok(result.into())
  }
}

pub struct AsyncRendererDecompress {
  data: Buffer,
}

#[napi]
impl Task for AsyncRendererDecompress {
  type Output = Vec<u8>;
  type JsValue = Buffer;

  fn compute(&mut self) -> Result<Self::Output> {
    brotli_decompress(&mut self.data)
  }

  fn resolve(&mut self, _env: napi::Env, result: Self::Output) -> Result<Self::JsValue> {
    Ok(result.into())
  }
}

#[napi]
pub fn compress_async(
  data: Buffer,
  signal: Option<AbortSignal>,
) -> AsyncTask<AsyncRenderer> {

  match signal {
    Some(s) => AsyncTask::with_signal(
      AsyncRenderer {
        data,
      },
      s,
    ),
    None => AsyncTask::new(AsyncRenderer {
      data,
    }),
  }
}

#[napi]
pub fn decompress_async(
  data: Buffer,
  signal: Option<AbortSignal>,
) -> AsyncTask<AsyncRendererDecompress> {

  match signal {
    Some(s) => AsyncTask::with_signal(
      AsyncRendererDecompress {
        data,
      },
      s,
    ),
    None => AsyncTask::new(AsyncRendererDecompress {
      data,
    }),
  }
}
