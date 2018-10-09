# animare.cafe

## Optimize Images

Always optimize the image.

| Format | Tool                                             | Command                                                              |
|--------|--------------------------------------------------|----------------------------------------------------------------------|
| JPEG   | [mozjpeg](https://github.com/mozilla/mozjpeg)    | `jpegtran -copy none -optimize -progressive -outfile out.jpg in.jpg` |
| PNG    | [pngcrush](https://pmt.sourceforge.io/pngcrush/) | `pngcrush -brute -reduce -rem alla in.png out.png`                   |

## Convert Images

|             | Tool                                               | Command                                              |
|-------------|----------------------------------------------------|------------------------------------------------------|
| PNG -> JPEG | [ImageMagick](https://www.imagemagick.org/script/) | `convert in.png -quality 80 -interlace jpeg out.jpg` |
