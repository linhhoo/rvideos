/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

import {
  classNames,
  genEmailByName,
  getNameByEmail,
  youtubeParser,
} from "@/utils/helpers";

describe("Unit Test Application Code", () => {
  context("utils/helpers.ts", function () {
    it("merge the classNames", function () {
      expect(classNames("class-1", "class-2", "class-3")).to.eq(
        "class-1 class-2 class-3"
      );
    });

    it("gen the email by the username", function () {
      expect(genEmailByName("user1")).to.eq(
        `user1${`${process.env.NEXT_PUBLIC_USER_NAME_PREFIX}`}`
      );
    });

    it("get the username by the email", function () {
      expect(
        getNameByEmail(`user1${process.env.NEXT_PUBLIC_USER_NAME_PREFIX}`)
      ).to.eq("user1");
    });

    it("get the videoID from url", function () {
      expect(
        youtubeParser(`https://www.youtube.com/watch?v=48cLsri6WdI`)
      ).to.eq("48cLsri6WdI");

      expect(
        youtubeParser(
          `http://www.youtube.com/watch?v=48cLsri6WdI&feature=feedrec_grec_index`
        )
      ).to.eq("48cLsri6WdI");

      expect(youtubeParser(`http://www.youtube.com/v/48cLsri6WdI?t=62`)).to.eq(
        "48cLsri6WdI"
      );

      expect(youtubeParser(`https://youtu.be/48cLsri6WdI?t=62`)).to.eq(
        "48cLsri6WdI"
      );

      expect(youtubeParser(`http://youtu.be/48cLsri6WdI`)).to.eq("48cLsri6WdI");

      expect(youtubeParser(`example.com`)).to.eq(null);
    });
  });
});

// Prevent TypeScript from reading file as legacy script
export {};
