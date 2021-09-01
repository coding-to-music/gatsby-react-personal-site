import React from "react";
import styled from "styled-components";

const Container = styled.div`
  p:not(:last-child) {
    margin-bottom: 2rem;
  }

  ul {
    margin-bottom: 3rem;
    li {
      list-style-position: inside;

      font-size: 2rem;
      font-family: PoppinsRegular;
      font-weight: 600;
      color: #555454;
    }
  }

  a {
    text-decoration: none;
    color: var(--color-blue-special);
  }
`;

const ContentfulAboutExplodii = () => {
  return (
    <Container>
      <p>
        I took a javascript course in college which I enjoyed a lot, solving
        problems using algorithms was my favourite part. One day, I stumbled
        into{" "}
        <a
          href="https://weblog.jamisbuck.org/"
          target="_blank"
          rel="noreferrer"
        >
          Jamis Buck blog
        </a>{" "}
        about maze generation algorithms which I found fascinating. I decided to
        test my newly acquired React skills and make a project out of it.
      </p>

      <p>
        It was an enormous challenge, it turned out to be way more difficult
        that I tought. I learned that without practice all the skills I tought I
        learned through the internet were useless. I went to the basics, and
        went through JS functional programming and undertood react lifecycles.
      </p>

      <p>
        Throughout the project I switched from react class component to
        functional component using hooks which speeded up my code.
      </p>

      <p>
        I took a Sass & SCSS course in udemy, I redesigned the whole app to make
        it more appealing, I learned how to use good typography,colors and
        svgs/images. I learned how to use flexbox and grid as well as organize
        my SCSS code using the BEM notation.
      </p>

      <p>
        I also learned how to use react router dom, I created a lore route where
        I post in detail about the algorithms and data structures I used and how
        they work (still on progression). I did also started learning Git/Github
        and getting comfortable using it for this project and the future ones.
      </p>

      <p>Those are the pathfinding algorithms I implemented on the app : </p>

      <ul>
        <li>Depth-First Search Algorithm </li>
        <li>Dijkstra Algorithm</li>
        <li>A* Algorithm</li>
        <li>Bellman–Ford Algorithm</li>
        <li>IDDFS</li>
        <li>IDA*</li>
        <li>GreadyBFS</li>
        <li>Weighted Greedy BFS</li>
      </ul>

      <p>
        Here are the list of the perfect maze generation algorithms that were
        implemented :
      </p>

      <ul>
        <li>Recursive Backtracking Maze</li>
        <li>Kruskal's Algorithm Maze</li>
        <li>Prim's Algorithm Maze</li>
        <li>Aldous Broder Algorithm Maze</li>
        <li>Growing Tree Algorithm Maze</li>
        <li>Hunt And Kill Algorithm Maze</li>
        <li>Wilson Algorithm Maze</li>
        <li>Eller Algorithm Maze</li>
        <li>Recursive Division Maze</li>
        <li>Sidewinder Algorithm Maze</li>
        <li>Binary Tree Maze</li>
      </ul>
    </Container>
  );
};

export default ContentfulAboutExplodii;
