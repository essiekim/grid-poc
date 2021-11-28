/* eslint-disable react/no-unescaped-entities */
import React, { Fragment } from "react";
import styles from "../styles/grid.module.css";

const Body = () => {
  // futurama lorem ipsum, heck yeah
  const loremIpsum = () => {
    return (
      <Fragment>
        <p>
          I usually try to keep my sadness pent up inside where it can fester
          quietly as a mental illness. Morbo can't understand his teleprompter
          because he forgot how you say that letter that's shaped like a man
          wearing a hat.
        </p>
        <p>
          Please, Don-Bot… look into your hard drive, and open your mercy file!
          Noooooo! I love this planet! I've got wealth, fame, and access to the
          depths of sleaze that those things bring. <strong> Dr.</strong>{" "}
          <em> Zoidberg, that doesn't make sense.</em> But, okay!
        </p>
        <p>
          You guys realize you live in a sewer, right? I was having the most
          wonderful dream. Except you were there, and you were there, and you
          were there! Pansy. Can I use the gun? And I'd do it again! And perhaps
          a third time! But that would be it.
        </p>
        <p>
          OK, this has gotta stop. I'm going to remind Fry of his humanity the
          way only a woman can. I'm sure those windmills will keep them cool. I
          barely knew Philip, but as a clergyman I have no problem telling his
          most intimate friends all about him.
        </p>
        <p>
          I just told you! You've killed me! Isn't it true that you have been
          paid for your testimony? Maybe I love you so much I love you no matter
          who you are pretending to be. I was having the most wonderful dream.
          Except you were there, and you were there, and you were there!
        </p>
        <p>
          Check it out, y'all. Everyone who was invited is here. Yeah, I do that
          with my stupidness. We're also Santa Claus! Oh, how I wish I could
          believe or understand that! There's only one reasonable course of
          action now: kill Flexo!
        </p>
      </Fragment>
    );
  };
  return (
    <div className={`${styles.content} ${styles.article}`}>{loremIpsum()}</div>
  );
};

export default Body;
