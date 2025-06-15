import  styled from "@emotion/styled";

export const StyledSpeedChart = styled.div`
  #description {
    font-style: italic;
    text-align: left;
    line-height: 1.5;
    margin-bottom: 50px;
    padding: 12px 16px;
    background-color: #f7f7f7;
    border: 1px solid #ccc;
  }

  #result {
    display: flex;
    justify-content: center;
  }

  .container {
    text-align: center;
  }

  .circle {
    width: 180px;
    height: 150px;
    background-color: teal;
    clip-path: circle(50px);
    transition: clip-path 0.3s ease;
  }
`;
