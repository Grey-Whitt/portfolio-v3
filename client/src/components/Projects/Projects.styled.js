import styled from 'styled-components'

export const ProjectsContainer = styled.div`
  margin-top: 10rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.5em 2em;

  @media (max-width: 1000px) {
    grid-template-columns: auto;
  }
`

export const Project = styled.div`
  display: grid;
  grid-template-columns: 1fr 20px;
  grid-template-rows: auto;
  grid-gap: 10px;
  grid-template-areas:
    'image image'
    'title icon'
    'desc .';
  -ms-flex-line-pack: start;
  align-content: start;

  a {
    text-decoration: none;
    color: inherit;
  }

  h2 {
    font-family: 'IBM Plex Mono', monospace;
    font-weight: 600;
  }

  a:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  .ghIcon:hover {
    color: ${({ theme }) => theme.colors.accent};
    transform: scale(1.15);
    transition: 0.15s;
    cursor: pointer;
  }

  .picContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    background: linear-gradient(
      45deg,
      transparent 5%,
      ${({ theme }) => theme.colors.jet} 5%
    );
  }

  .picContainer:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    transform: scale(1.02);
    box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.34);
    transition: 0.2s;
  }

  .picContainerBackground {
    background-color: ${({ theme }) => theme.colors.davysGrey};
    border-radius: 20px;
  }

  img {
    padding: 10px;
    border-radius: 20px;
  }

  .grid1 {
    grid-area: image;
  }

  .grid2 {
    margin: 0;
    grid-area: title;
    align-self: center;
  }
  .grid3 {
    margin: 0;
    grid-area: icon;
    -ms-flex-item-align: center;
    align-self: center;
  }
  .grid4 {
    margin: 0;
    grid-area: desc;
    margin-bottom: 0;
  }
`

export const ButtonLink = styled.a`
  margin-top: 3rem;

  // Button style from getcssscan.com
  .button,
  .button:after {
    width: 150px;
    height: 76px;
    line-height: 78px;
    font-size: 20px;
    font-family: 'Bebas Neue', sans-serif;
    background: linear-gradient(
      45deg,
      transparent 5%,
      ${({ theme }) => theme.colors.jet} 5%
    );
    border: 0;
    color: #fff;
    letter-spacing: 3px;
    box-shadow: 6px 0px 0px ${({ theme }) => theme.colors.accent};
    outline: transparent;
    position: relative;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    cursor: pointer;
  }

  .button:after {
    --slice-0: inset(50% 50% 50% 50%);
    --slice-1: inset(80% -6px 0 0);
    --slice-2: inset(50% -6px 30% 0);
    --slice-3: inset(10% -6px 85% 0);
    --slice-4: inset(40% -6px 43% 0);
    --slice-5: inset(80% -6px 5% 0);

    content: 'REDACTED';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      transparent 3%,
      ${({ theme }) => theme.colors.davysGrey} 3%,
      #00e6f6 5%,
      ${({ theme }) => theme.colors.davysGrey} 5%
    );
    text-shadow: -3px -3px 0px #f8f005, 3px 3px 0px #00e6f6;
    clip-path: var(--slice-0);
  }

  .button:hover:after {
    animation: 1s glitch;
    animation-timing-function: steps(2, end);
  }

  @keyframes glitch {
    0% {
      clip-path: var(--slice-1);
      transform: translate(-20px, -10px);
    }
    10% {
      clip-path: var(--slice-3);
      transform: translate(10px, 10px);
    }
    20% {
      clip-path: var(--slice-1);
      transform: translate(-10px, 10px);
    }
    30% {
      clip-path: var(--slice-3);
      transform: translate(0px, 5px);
    }
    40% {
      clip-path: var(--slice-2);
      transform: translate(-5px, 0px);
    }
    50% {
      clip-path: var(--slice-3);
      transform: translate(5px, 0px);
    }
    60% {
      clip-path: var(--slice-4);
      transform: translate(5px, 10px);
    }
    70% {
      clip-path: var(--slice-2);
      transform: translate(-10px, 10px);
    }
    80% {
      clip-path: var(--slice-5);
      transform: translate(20px, -10px);
    }
    90% {
      clip-path: var(--slice-1);
      transform: translate(-10px, 0px);
    }
    100% {
      clip-path: var(--slice-1);
      transform: translate(0);
    }
  }

  @media (min-width: 100px) {
    .button,
    .button:after {
      width: 200px;
      height: 86px;
    }
  }
`
