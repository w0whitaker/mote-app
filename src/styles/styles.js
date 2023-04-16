import { css } from 'lit';

const vars = () => css`
  :root {
    --measure: 60ch;

    --step--2: clamp(0.44rem, calc(0.43rem + 0.1vw), 0.5rem);
    --step--1: clamp(0.67rem, calc(0.64rem + 0.14vw), 0.75rem);
    --step-0: clamp(1rem, calc(0.96rem + 0.22vw), 1.13rem);
    --step-1: clamp(1.5rem, calc(1.43rem + 0.33vw), 1.69rem);
    --step-2: clamp(2.25rem, calc(2.15rem + 0.49vw), 2.53rem);
    --step-3: clamp(3.38rem, calc(3.23rem + 0.73vw), 3.8rem);
    --step-4: clamp(5.06rem, calc(4.84rem + 1.1vw), 5.7rem);
    --step-5: clamp(7.59rem, calc(7.26rem + 1.65vw), 8.54rem);

    --space-3xs: clamp(0.25rem, calc(0.23rem + 0.11vw), 0.31rem);
    --space-2xs: clamp(0.5rem, calc(0.48rem + 0.11vw), 0.56rem);
    --space-xs: clamp(0.75rem, calc(0.71rem + 0.22vw), 0.88rem);
    --space-s: clamp(1rem, calc(0.96rem + 0.22vw), 1.13rem);
    --space-m: clamp(1.5rem, calc(1.43rem + 0.33vw), 1.69rem);
    --space-l: clamp(2rem, calc(1.91rem + 0.43vw), 2.25rem);
    --space-xl: clamp(3rem, calc(2.87rem + 0.65vw), 3.38rem);
    --space-2xl: clamp(4rem, calc(3.83rem + 0.87vw), 4.5rem);
    --space-3xl: clamp(6rem, calc(5.74rem + 1.3vw), 6.75rem);

    /* One-up pairs */
    --space-3xs-2xs: clamp(0.25rem, calc(0.14rem + 0.54vw), 0.56rem);
    --space-2xs-xs: clamp(0.5rem, calc(0.37rem + 0.65vw), 0.88rem);
    --space-xs-s: clamp(0.75rem, calc(0.62rem + 0.65vw), 1.13rem);
    --space-s-m: clamp(1rem, calc(0.76rem + 1.2vw), 1.69rem);
    --space-m-l: clamp(1.5rem, calc(1.24rem + 1.3vw), 2.25rem);
    --space-l-xl: clamp(2rem, calc(1.52rem + 2.39vw), 3.38rem);
    --space-xl-2xl: clamp(3rem, calc(2.48rem + 2.61vw), 4.5rem);
    --space-2xl-3xl: clamp(4rem, calc(3.04rem + 4.78vw), 6.75rem);

    /* Custom pairs */
    --space-s-l: clamp(1rem, calc(0.57rem + 2.17vw), 2.25rem);
    --space-s-2xl: clamp(1rem, calc(-0.22rem + 6.09vw), 4.5rem);

    --grid-max-width: var(--measure);
    --grid-gutter: var(
      --space-s-l,
      clamp(1rem, calc(0.51rem + 2.5vw), 2.25rem)
    );
    --grid-columns: 12;
  }
`;

const reset = () => css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }

  /* Prevent zooming when orientation changes on some iOS devices */
  html {
    text-size-adjust: none;
    -webkit-text-size-adjust: none;
  }

  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
`;

export { vars, reset };
