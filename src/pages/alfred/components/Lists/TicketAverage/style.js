import Styled from 'styled-components';

const CardGroup = Styled.div`
    .forcast-overview{
        .ant-card-body{
            padding: 0 24px !important;
            @media only screen and (max-width: 1199px){
                padding: 24px 24px 0 24px !important;
            }
        }
    }
    .card-radio{
        .ant-radio-button-wrapper{
            height: 30px;
            line-height: 28px;
            font-size: 12px;
            font-weight: 500;
            padding: 0 10.5px;
            color: ${({ theme }) => theme['gray-color']};
            border-color: ${({ theme }) => theme['border-color-light']};
            &:before{
                display: none;
            }
            &:focus-within{
                box-shadow: 0 0;
            }
            &:first-child{
                border-radius: 3px 0 0 3px;
            }
            &:last-child{
                border-radius: 0 3px 3px 0;
            }
            &.ant-radio-button-wrapper-checked{
                color: #fff !important;
                background: ${({ theme }) => theme['primary-color']} !important;
                &:hover{
                    color: #fff !important;
                    background: ${({ theme }) => theme['primary-color']} !important;
                }
            }
            &:hover{
                background: ${({ theme }) => theme['bg-color-normal']} !important;
            }
        }
    }
    .focard-wrapper{
        margin: 0 -12px;
        ${({ theme }) => (theme.rtl ? 'padding: 24px 24px 25px 0;' : 'padding: 24px 0 25px 24px;')};
        ${({ theme }) => (theme.topMenu ? 'padding-bottom: 0px' : 'padding-bottom: 25px')};
        
        @media only screen and (max-width: 1350px){
            padding: 24px 0 25px 10px;
        }
        @media only screen and (max-width: 1199px){
            margin: 0;
        }
        .ant-col-md-12{
            ${({ theme }) => (theme.rtl ? 'padding: 0 12px 0 18px;' : 'padding: 0 18px 0 12px;')}
            
            @media only screen and (max-width: 1350px){
                ${({ theme }) => (theme.rtl ? 'padding: 0 6px 0 14px;' : 'padding: 0 14px 0 6px;')}                
            }
            @media only screen and (max-width: 575px){
                &:not(:last-child){
                    margin-bottom: 20px;
                }
            }
            &:first-child{
                @media only screen and (max-width: 1350px){
                    ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 20px;
                }
                @media only screen and (max-width: 1199px){
                    padding: ${({ theme }) => (theme.rtl ? '0 0 0 12px' : '0 12px 0 0')};
                    @media only screen and (max-width: 575px){
                        padding: 0;
                    }
                }
            }
            &:last-child{
                padding: 0 14px 0 18px;
                @media only screen and (max-width: 1350px){
                    &:last-child{
                        padding: 0 10px 0 14px;
                    }
                }
                @media only screen and (max-width: 1199px){
                    &:last-child{
                        padding: 0 0 0 12px;
                        @media only screen and (max-width: 575px){
                            padding: 0;
                        }
                    }
                }
            }
        }

        &.focard-divider{
            ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 0;
            ${({ theme }) => (theme.rtl ? 'padding-left' : 'padding-right')}: 15px;
            ${({ theme }) => (!theme.rtl ? 'border-right' : 'border-left')}: 1px solid ${({ theme }) =>
  theme['border-color-light']} !important;
            @media only screen and (max-width: 1199px){
                ${({ theme }) => (theme.rtl ? 'padding-left' : 'padding-right')}: 0 none !important;
                padding: ${({ theme }) => (theme.rtl ? '0 10px 0 0' : '0 0 0 10px')};
            }
            .ant-col-md-12{
                &:first-child{
                    padding: 0 16px 0 24px;
                    @media only screen and (max-width: 1350px){
                        padding: ${({ theme }) => (theme.rtl ? '0 20px 0 10px' : '0 10px 0 20px')};
                    }
                    @media only screen and (max-width: 1199px){
                        padding: ${({ theme }) => (theme.rtl ? '0 0 0 12px' : '0 12px 0 0')};
                    }
                    @media only screen and (max-width: 575px){
                        padding: 0;
                    }
                }
                &:last-child{
                    padding: ${({ theme }) => (theme.rtl ? '0 18px 0 10px' : '0 10px 0 18px')};
                    @media only screen and (max-width: 1350px){
                        padding: ${({ theme }) => (theme.rtl ? '0 20px 0 4px' : '0 4px 0 20px')};
                    }
                    @media only screen and (max-width: 1199px){
                        padding: ${({ theme }) => (theme.rtl ? '0 12px 0 0px' : '0 0 0 12px')};
                    }
                    @media only screen and (max-width: 575px){
                        padding: 0;
                    }
                }
            } 
        }
    }

    .cardAlfred {
        width: 520px;
        height: 495px;

        display: flex:
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .traffic-table{
        min-height: 438px;
        .ant-table{
            border-radius: 10px;
        }
        table{
            color: #333;
            thead{
                th{
                    background-color: ${({ theme }) => theme['bg-color-light']};
                    padding: 11.5px 16px;
                    &:nth-child(2){
                        border-left: 1px solid ${({ theme }) => theme['border-color-light']};
                    }
                    &:nth-child(4){
                        border-right: 1px solid ${({ theme }) => theme['border-color-light']};
                    }
                }
            }
            tbody{
                tr{
                    &:hover{
                        td{
                            background: ${({ theme }) => theme['bg-color-light']};
                            .social-name{
                                color: ${({ theme }) => theme['primary-color']};
                            }
                        }
                    }
                }
                td{
                    padding: 14.5px 15px;
                    text-align: ${({ theme }) => (theme.rtl ? 'left' : 'right')};;
                    ${({ theme }) => (theme.rtl ? 'border-left' : 'border-right')};: 1px solid ${({ theme }) =>
  theme['border-color-light']};
                    color: ${({ theme }) => theme['gray-color']};
                    &:first-child{
                        ${({ theme }) => (!theme.rtl ? 'border-left' : 'border-right')};: 0 none;
                        text-align: ${({ theme }) => (!theme.rtl ? 'left' : 'right')};;
                        ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')};: 25px;
                    }
                    &:last-child{
                        ${({ theme }) => (theme.rtl ? 'border-left' : 'border-right')};: 0 none;
                        ${({ theme }) => (theme.rtl ? 'padding-left' : 'padding-right')};: 25px;
                    }
                    .traffic-title{
                        font-weight: 500;
                        color: ${({ theme }) => theme['dark-color']};
                    }
                    .social-name{
                        color: ${({ theme }) => theme['info-color']};
                    }
                }
            }
        }
    }
`;

const Focard = Styled.div`
    canvas{
        width: 100% !important;
        margin-top: 50px;
        @media only screen and (max-width: 1199px){
            margin-top: 15px;
        }
    }
    .focard-details{
        &.growth-downward{
            h1{                
                font-size: 30px;
                @media only screen and (max-width: 767px){
                    font-size: 24px;
                }
            }
            .focard-status{
                .focard-status__percentage{
                    color: ${({ theme }) => theme['danger-color']};
                    font-size: 16px;
                }
            }
        }
        &.growth-upward{
            .focard-status{
                .focard-status__percentage{
                    color: ${({ theme }) => theme['success-color']};
                    font-size: 16px;
                }
            }
        }
        h1{
            font-weight: 600;
            margin-bottom: 2px;
        }
        .subtitle{
            font-size: 14px;
            color: #868EAE;
            margin-bottom: 10px;
        }
        .focard-status{
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            margin: 0 -5px;
            span{
                display: inline-flex;
                align-items: center;
                margin: 0 5px;
                &.focard-status__percentage{
                    font-weight: 500;
                }
            }
            span + span{
                color: #868EAE;
                font-size: 13px;
            }
        }
        svg{
            width: 15px;
            ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 10px;
        }
    }

    .focard-chart{
        ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: -10px;
    }

    @media (max-width: 1300px){
        .focard-details{
            h1{
                font-size: 24px;
            }
            &.growth-downward{
                h1{
                    font-size: 24px;
                }
            }
        }
    }

    .forcast-card-box{
        .ant-card-body{
            padding: 0 !important;
            h1{
                padding: ${({ theme }) => (theme.rtl ? '25px 25px 0 0' : '25px 0 0 25px')};
                font-size: 16px;
                font-weight: 500;
                margin-bottom: 26px;
                @media only screen and (max-width: 767px){
                    margin-bottom: 16px;
                }
            }
        }

        .focard-details{
            margin-top: 15px;
            padding: 0 25px 22px;
            @media only screen and (max-width: 767px){
                padding: 0 25px 0;
            }
            h1{
                padding: 0;
                font-size: 30px;
                font-weight: 600;
                margin-bottom: 4px;
                @media only screen and (max-width: 767px){
                    font-size: 24px;
                }
            }
            p{
                margin-bottom: 0;
            }
        }
        canvas{
            margin-top: 0px;
            border-radius: 0 0 10px 10px;
        }
        .chart-label{
            display: none;
        }
    }
`;

const TextFooterCard = Styled.div`
    height: 50px;
    justify-content: center;
    align-items: center;

    span {
        font-size: 20px;
        color: #333;
    }
`;

export { Focard, CardGroup, TextFooterCard };
