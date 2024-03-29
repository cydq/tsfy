declare const __phantom__: unique symbol;

/**
 * Phantom property used for type resolution.
 * **Not valid at runtime!**
 * @see https://doc.rust-lang.org/std/marker/struct.PhantomData.html
 */
export type __phantom__ = typeof __phantom__;
