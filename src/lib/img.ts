/**
 * Image attribute presets.
 *
 * Below-the-fold art loads lazily and decodes off the main thread. The width and height
 * are the art's usual pixel size, so the browser reserves the right box before the file
 * arrives and the page does not jump. CSS still sets the rendered size.
 */

type Size = readonly [width: number, height: number]

/** 3:4 portraits and blades (Game of Thrones stills cropped upright). */
export const PORTRAIT: Size = [864, 1152]
/** 3:2 landscapes: keeps, seats, places of the far north. */
export const LANDSCAPE: Size = [1248, 832]
/** 4:3 council scenes and chairs. */
export const SCENE: Size = [1152, 864]
/** 16:9 screen stills: chapters, heroes of the page, closing plates. */
export const WIDE: Size = [1280, 720]

export function lazyImg(size: Size) {
  return {
    loading: 'lazy',
    decoding: 'async',
    width: size[0],
    height: size[1],
  } as const
}

/** The first, largest image on a page: fetch it ahead of everything else. */
export function heroImg(size: Size = WIDE) {
  return {
    fetchPriority: 'high',
    width: size[0],
    height: size[1],
  } as const
}
