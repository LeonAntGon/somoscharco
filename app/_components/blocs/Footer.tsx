import React from 'react'

function Footer() {
  return (
    <footer className='flex flex-col flex-wrap content-center md:justify-around md:flex-row my-6'>
        
            <div><p>Somos Charco © All rights reserved.</p></div>
            <div className='flex justify-center gap-x-2'>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <svg width="22px" height="22px" stroke-width="1.7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8Z" stroke="#000000" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 17V13.5V10" stroke="#000000" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11 17V13.75M11 10V13.75M11 13.75C11 10 17 10 17 13.75V17" stroke="#000000" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 7.01L7.01 6.99889" stroke="#000000" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <svg width="22px" height="22px" stroke-width="1.7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="#000000" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16Z" stroke="#000000" stroke-width="1.7"></path><path d="M17.5 6.51L17.51 6.49889" stroke="#000000" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </a>
            </div>
        
    </footer>
  )
}

export default Footer