"use strict";
const { Path } = require("nice-path");

function windowsDriveLetterToCygwinDriveLetter(path) {
  let driveLetterMatches;
  if (
    path.segments[0] != null &&
    (driveLetterMatches = path.segments[0].match(/^([A-Za-z]):$/))
  ) {
    path.segments[0] = driveLetterMatches[1].toLowerCase();
    path.segments.unshift("");
  }
}

exports.toUnix = function toUnix(inputStr, { convertDriveLetter = true } = {}) {
  const path = new Path(inputStr);
  path.separator = "/";
  if (convertDriveLetter) {
    windowsDriveLetterToCygwinDriveLetter(path);
  }
  return path.toString();
};

function cygwinDriveLetterToWindowsDriveLetter(path) {
  let driveLetterMatches;
  if (
    path.segments[0] === "" &&
    path.segments[1] != null &&
    (driveLetterMatches = path.segments[1].match(/^([A-Za-z])$/))
  ) {
    path.segments[1] = driveLetterMatches[1].toUpperCase() + ":";
    path.segments.shift();
  }
}

exports.toWindows = function toWindows(
  inputStr,
  { convertDriveLetter = true } = {}
) {
  const path = new Path(inputStr);
  path.separator = "\\";
  if (convertDriveLetter) {
    cygwinDriveLetterToWindowsDriveLetter(path);
  }
  return path.toString();
};

exports.toMixed = function toMixed(
  inputStr,
  { convertDriveLetter = true } = {}
) {
  const path = new Path(inputStr);
  path.separator = "/";
  if (convertDriveLetter) {
    cygwinDriveLetterToWindowsDriveLetter(path);
  }
  return path.toString();
};
