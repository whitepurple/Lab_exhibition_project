import SuperPage from "./page5"
import styled from "styled-components";
import theme from "../theme";
import Grid from '@material-ui/core/Grid';
import backSvg from "../../resource/BTN-18.svg"
import Image1 from '../../resource/page8_1.png';
import Image2 from '../../resource/page8_2.png';
import Image3 from '../../resource/page8_3.png';
import BTN1 from '../../resource/BTN-12.svg';
import BTN2 from '../../resource/BTN-13.svg';
import BTN3 from '../../resource/BTN-14.svg';

const ContentStyle = styled.div`
    width:1550px;
    height:100%;
    &>div>div{
        text-align:center;
    }
    &>div>div:nth-child(1){
        text-align:center;
        padding-top:30px;
        &>div{
            width: 745px;
            height: 39px;
            background: rgb(255,210,181) 0% 0% no-repeat padding-box;
            display:inline-block;
            margin-bottom:-67px;
        }
        &>h1{
            font: normal normal normal 47px/42px ${theme.GmarketFontMedium};
            letter-spacing: 0px;
            color: #3B3B3B;
            opacity: 1;
            margin-top:0;
        } 
    }
    &>div>div:nth-child(2){
        img{
            width: 470px;
            height: 470px;
            margin-top:115px;
        }
    }
    &>div>div:nth-child(3){
        img{
            width: 470px;
            height: 470px;
            margin-top:115px;
        }
    }
    &>div>div:nth-child(4){
        img{
            width: 470px;
            height: 470px;
            margin-top:115px;
        }
    }
    
    &>div>div:nth-child(5){
        img{
            ${theme.BubbleButton}
            margin-top:53px;
        }
    }
    &>div>div:nth-child(6){
        img{
            ${theme.BubbleButton}
            margin-top:53px;
        }
    }
    &>div>div:nth-child(7){
        img{
            ${theme.BubbleButton}
            margin-top:53px;
        }
    }
    &>div>div:nth-child(8){
        img{
            width: 74px;
            height: 74px;
            margin-top:60px;
        }
    }
    p{
        font: normal normal normal 22px/42px ${theme.GmarketFontMedium};
        letter-spacing: 0px;
        color: #3B3B3B;
        opacity: 1;
        margin:53px 0px 0px 0px;
    }
`;
class Page extends SuperPage{
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    content() {
        return (
            <ContentStyle>
                <Grid container>
                    <Grid item xs={12}>
                        <div></div>
                        <h1>[]를 선택하였습니다</h1>
                    </Grid>
                    <Grid item xs={4}
                        alignItems="center"
                    >
                        <img src={Image1} alt="#"></img>
                    </Grid>
                    <Grid item xs={4}
                        alignItems="center"
                    >
                        <img src={Image2} alt="#"></img>    
                    </Grid>
                    <Grid item xs={4}
                        alignItems="center"
                    >
                        <img src={Image3} alt="#"></img>    
                    </Grid>

                    <Grid item xs={4}
                        alignItems="center"
                    >
                        <p>리듬들(1934)</p>
                        <img src={BTN1} alt="#" />
                    </Grid>
                    <Grid item xs={4}
                        alignItems="center">
                        <p>삶의 기쁨(1930)</p>
                        <img src={BTN2} alt="#" />
                    </Grid>
                    <Grid item xs={4}
                        alignItems="center">
                        <p>무한리듬(1934)</p>
                        <img src={BTN3} alt="#" />
                    </Grid>
                </Grid>
            </ContentStyle>
        )
    }

    backButton(){
        return(
            <img src={backSvg} alt="#" />
        )
    }
}

export default Page;

