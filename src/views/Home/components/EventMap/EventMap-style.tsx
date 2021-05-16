import styled from "styled-components";


export const MapWrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
export const MapElement = styled.div`
  width: 100%;
  height: 100%;

  & {
    .ol-zoom {
      position: absolute;
      right: 0;
      display: flex;
      flex-direction: column;
      margin: 0.5rem;
      gap: 2px;
    }

    .ol-rotate {
      display: none;
    }

    button {
      width: 30px;
      height: 30px;
      background-color: rgba(63, 81, 181, 0.9);
      color: white;
      font-weight: 700;
      font-size: 16px;
      border: none;
      outline: none;
      border-radius: 5px;
      cursor: pointer;
    }
  }
`;