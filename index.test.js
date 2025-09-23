import { test, expect } from "vitest";
import { toUnix, toWindows, toMixed } from "./index";

test("toWindows", () => {
  expect(toWindows("blah1/blah2/blah3")).toBe("blah1\\blah2\\blah3");
  expect(toWindows("/blah1/blah2/blah3")).toBe("\\blah1\\blah2\\blah3");
  expect(toWindows("a/b/c")).toBe("a\\b\\c");
  expect(toWindows("/a/b/c")).toBe("A:\\b\\c");

  expect(toWindows("/c/Users/suchipi/AppData/Something/README.txt")).toBe(
    "C:\\Users\\suchipi\\AppData\\Something\\README.txt"
  );
  expect(toWindows("/c/Program Files (x86)/Steam/steamapps/common")).toBe(
    "C:\\Program Files (x86)\\Steam\\steamapps\\common"
  );

  // identity cases
  expect(toWindows("blah1\\blah2\\blah3")).toBe("blah1\\blah2\\blah3");
  expect(toWindows("\\blah1\\blah2\\blah3")).toBe("\\blah1\\blah2\\blah3");
  expect(toWindows("a\\b\\c")).toBe("a\\b\\c");
  expect(toWindows("A:\\b\\c")).toBe("A:\\b\\c");

  expect(toWindows("C:\\Users\\suchipi\\AppData\\Something\\README.txt")).toBe(
    "C:\\Users\\suchipi\\AppData\\Something\\README.txt"
  );
  expect(toWindows("C:\\Program Files (x86)\\Steam\\steamapps\\common")).toBe(
    "C:\\Program Files (x86)\\Steam\\steamapps\\common"
  );
});

test("toUnix", () => {
  expect(toUnix("blah1\\blah2\\blah3")).toBe("blah1/blah2/blah3");
  expect(toUnix("\\blah1\\blah2\\blah3")).toBe("/blah1/blah2/blah3");
  expect(toUnix("a\\b\\c")).toBe("a/b/c");
  expect(toUnix("\\a\\b\\c")).toBe("/a/b/c");
  expect(toUnix("A:\\b\\c")).toBe("/a/b/c");

  expect(toUnix("C:\\Users\\suchipi\\AppData\\Something\\README.txt")).toBe(
    "/c/Users/suchipi/AppData/Something/README.txt"
  );
  expect(toUnix("C:\\Program Files (x86)\\Steam\\steamapps\\common")).toBe(
    "/c/Program Files (x86)/Steam/steamapps/common"
  );

  // identity cases
  expect(toUnix("blah1/blah2/blah3")).toBe("blah1/blah2/blah3");
  expect(toUnix("/blah1/blah2/blah3")).toBe("/blah1/blah2/blah3");
  expect(toUnix("a/b/c")).toBe("a/b/c");
  expect(toUnix("/a/b/c")).toBe("/a/b/c");

  expect(toUnix("/c/Users/suchipi/AppData/Something/README.txt")).toBe(
    "/c/Users/suchipi/AppData/Something/README.txt"
  );
  expect(toUnix("/c/Program Files (x86)/Steam/steamapps/common")).toBe(
    "/c/Program Files (x86)/Steam/steamapps/common"
  );
});

test("toMixed", () => {
  expect(toMixed("blah1/blah2/blah3")).toBe("blah1/blah2/blah3");
  expect(toMixed("/blah1/blah2/blah3")).toBe("/blah1/blah2/blah3");
  expect(toMixed("a/b/c")).toBe("a/b/c");
  expect(toMixed("/a/b/c")).toBe("A:/b/c");

  expect(toMixed("/c/Users/suchipi/AppData/Something/README.txt")).toBe(
    "C:/Users/suchipi/AppData/Something/README.txt"
  );
  expect(toMixed("/c/Program Files (x86)/Steam/steamapps/common")).toBe(
    "C:/Program Files (x86)/Steam/steamapps/common"
  );

  expect(toMixed("blah1\\blah2\\blah3")).toBe("blah1/blah2/blah3");
  expect(toMixed("\\blah1\\blah2\\blah3")).toBe("/blah1/blah2/blah3");
  expect(toMixed("a\\b\\c")).toBe("a/b/c");
  expect(toMixed("\\a\\b\\c")).toBe("A:/b/c");
  expect(toMixed("A:\\b\\c")).toBe("A:/b/c");

  expect(toMixed("C:\\Users\\suchipi\\AppData\\Something\\README.txt")).toBe(
    "C:/Users/suchipi/AppData/Something/README.txt"
  );
  expect(toMixed("C:\\Program Files (x86)\\Steam\\steamapps\\common")).toBe(
    "C:/Program Files (x86)/Steam/steamapps/common"
  );
});
