"use client"
import NumberTicker from '@/components/ui/number-ticker';
import React from 'react';
import styled from 'styled-components';

const CardXp = () => {
  return (
    <StyledWrapper>
      <div className="outer mx-auto mt-10">
        <div className="dot" />
        <div className="card">
          <div className="ray" />
          {/*<div><p className='text-xs font-semibold'>Más de</p></div>*/}
            <p className="inline whitespace-pre-wrap text text-2xl font-medium tracking-tighter text-white mx-2">
                +<NumberTicker value={30} />
            </p>
            
            <p className='text-[0.60rem] font-semibold'><span className='text-[0.60rem]'> años</span> en el mercado</p>
          <div className="line topl" />
          <div className="line leftl" />
          <div className="line bottoml" />
          <div className="line rightl" />
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .outer {
    width: 160px;
    height: 80px;
    border-radius: 10px;
    padding: 1px;
    background: radial-gradient(circle 230px at 0% 0%, #ffffff, #0c0d0d);
    position: relative;
  }

  .dot {
    width: 3.5px;
    aspect-ratio: 1;
    position: absolute;
    background-color: #fff;
    box-shadow: 0 0 10px #ffffff;
    border-radius: 100px;
    z-index: 2;
    right: 10%;
    top: 10%;
    animation: moveDot 6s linear infinite;
  }

  @keyframes moveDot {
    0%,
    100% {
      top: 10%;
      right: 10%;
    }
    25% {
      top: 10%;
      right: calc(100% - 15px);
    }
    50% {
      top: calc(100% - 20px);
      right: calc(100% - 15px);
    }
    75% {
      top: calc(100% - 20px);
      right: 10%;
    }
  }

  .card {
    z-index: 1;
    width: 100%;
    height: 100%;
    border-radius: 9px;
    border: solid 1px #202222;
    background-size: 20px 20px;
    background: radial-gradient(circle 280px at 0% 0%, #444444, #0c0d0d);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    flex-direction: column;
    color: #fff;
  }
  .ray {
    width: 160px;
    height: 40px;
    border-radius: 100px;
    position: absolute;
    background-color: #c7c7c7;
    opacity: 0.4;
    box-shadow: 0 0 50px #fff;
    filter: blur(10px);
    transform-origin: 10%;
    top: 0%;
    left: 0;
    transform: rotate(20deg);
  }

  .card .text {
    font-weight: bolder;
    background: linear-gradient(45deg, #000000 4%, #fff, #000);
    background-clip: text;
    color: transparent;
  }

  .line {
    width: 100%;
    height: 1px;
    position: absolute;
    background-color: #2c2c2c;
  }
  .topl {
    top: 8%;
    background: linear-gradient(90deg, #888888 30%, #1d1f1f 70%);
  }
  .bottoml {
    bottom: 8%;
  }
  .leftl {
    left: 8%;
    width: 1px;
    height: 100%;
    background: linear-gradient(180deg, #747474 30%, #222424 70%);
  }
  .rightl {
    right: 8%;
    width: 1px;
    height: 100%;
  }`;

export default CardXp;
