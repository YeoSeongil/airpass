import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade"; // Import react-reveal(Fade)
import "../src/test.css"

const IntroBlock = styled.div`
  @media (max-width: 768px) {
    padding: 25px;
  }

  h1 {
    margin: 0;
    font-weight: 300;
    font-size: 45px;
    @media (max-width: 768px) {
      font-size: 30px;
    }
  }
  h3 {
    font-weight: 200;
    font-size: 15px;
  }
`;

const Introduce = () => {
  return (
      <>
        <IntroBlock>
            <div className="bgImg">
                <h1>
                    행사 기획자에서 부터 <br />
                    퍼스널 트레이너, <br />
                    그리고 <strong>개발자</strong>를 꿈꾸기 까지
                </h1>
                <h3>
                    Lorem Ipsum is simply dummy text of the <br />
                    printing and typesetting industry. Lorem Ipsum has been <br />
                    the industry's standard dummy text ever since the 1500s
                </h3>
            </div>
        </IntroBlock>
        
        <Fade bottom> 
        <IntroBlock>
        <div className="bgImg2">
            <h1>
                행사 기획자에서 부터 <br />
                퍼스널 트레이너, <br />
                그리고 <strong>개발자</strong>를 꿈꾸기 까지
            </h1>
            <h3>
                Lorem Ipsum is simply dummy text of the <br />
                printing and typesetting industry. Lorem Ipsum has been <br />
                the industry's standard dummy text ever since the 1500s
            </h3>
        </div>
        </IntroBlock>
        </Fade>
    </>
  );
};

export default Introduce;