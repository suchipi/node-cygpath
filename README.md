# node-cygpath

Module for Node.js which converts between Windows (Win32) and Cygwin/Mingw/MSYS2 path styles, similar to the `cygpath` utility program found in Cygwin and MSYS2.

## API documentation

### toUnix (exported function)

Convert any path to a unix-style path. For example,

`C:\Program Files (x86)\Steam\steamapps` would get converted to
`/c/Program Files (x86)/Steam/steamapps`.

`options.convertDriveLetter` defaults to true. When true, drive letters (eg
`C:`) will be converted to an fs-root single-character path component
(eg `/c/`). This behavior is modeled after that of Cygwin, MSYS2, etc. To
skip this behavior and only convert path separators (ie. slashes), pass
`{ convertDriveLetter: false }`.

```ts
function toUnix(
  inputStr,
  options?: {
    convertDriveLetter?: boolean;
  }
): string;
```

### toWindows (exported function)

Convert any path to a Win32-style path. For example,

`/c/Program Files (x86)/Steam/steamapps` would get converted to
`C:\Program Files (x86)\Steam\steamapps`.

`options.convertDriveLetter` defaults to true. When true, an fs-root
single-character path component (eg `/c/`) will be treated as (and converted
to) a drive letter (eg `C:`). This behavior is modeled after that of Cygwin,
MSYS2, etc. To skip this behavior and only convert path separators (ie.
slashes), pass `{ convertDriveLetter: false }`.

```ts
function toWindows(
  inputStr,
  options?: {
    convertDriveLetter?: boolean;
  }
): string;
```

### toMixed (exported function)

Convert any path to a Win32-style path but with forward slashes. For example,

`/c/Program Files (x86)/Steam/steamapps` would get converted to
`C:/Program Files (x86)/Steam/steamapps`.

`options.convertDriveLetter` defaults to true. When true, an fs-root
single-character path component (eg `/c/`) will be treated as (and converted
to) a drive letter (eg `C:`). This behavior is modeled after that of Cygwin,
MSYS2, etc. To skip this behavior and only convert path separators (ie.
slashes), pass `{ convertDriveLetter: false }`.

```ts
function toMixed(
  inputStr,
  options?: {
    convertDriveLetter?: boolean;
  }
): string;
```

## License

MIT
