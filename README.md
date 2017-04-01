[![Build Status](https://travis-ci.org/pld/calculon.svg?branch=master)](https://travis-ci.org/pld/calculon)

## Calculon

![calculon](https://raw.githubusercontent.com/pld/calculon/master/docs/calculon.jpg)

Create s-Values (surprise values) for JSON files by URL and Ona datasets. Example output:

![screenshot](https://raw.githubusercontent.com/pld/calculon/master/docs/screenshot.png)

Algorithm is a modified version of [outlier-detect](https://github.com/benb111/outlier-detect), which removes nil values earlier.

Sketch is `s(e_i) = sum_{x \in D}(|f_{i,x} - median_x|)`
