import styled from 'styled-components';


export const MapBox = styled.div`
  height: 100%;
  width: 100%;

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