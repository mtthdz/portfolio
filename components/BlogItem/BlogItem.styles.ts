import styled from "styled-components";

export const BlogItemStyles = styled.li`
  width: 100%;

  .flex-parent {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    font-size: 1.4rem;
    color: var(--white);
    padding: 12px 0;

    div {
      height: 1px;
      flex: 1;
      margin: 0 10px;
      background-color: var(--darkGrey);
    }

    .item-date {
      color: var(--grey);
    }
  }

  .flex-parent:hover,
  .flex-parent:focus {
    color: var(--lightGrey)
  }
`;