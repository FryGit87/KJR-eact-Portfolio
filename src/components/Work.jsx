import React from 'react'
import Sitlo from '../assets/work/sitlo.jpg'
import Chuchu from '../assets/work/chuchu.jpg'
import Rps from '../assets/work/rps.jpg'
import Pwgen from '../assets/work/pwgen.jpg'
import Quiz from '../assets/work/quiz.jpg'
import Weather from '../assets/work/weather.jpg'


const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
          <p className='py-6'>Some of my previous work</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          <div style={{ backgroundImage: `url(${Sitlo})`}}className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
 
            {/* {Hover effects} */}
             <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
SIT LO VIETNAMESE
              </span>
              <div className='pt-8 text-center'>
                <a href="http://sitlo.com.au/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button>
                </a>
                {/* <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a> */}
              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${Chuchu})`}}className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
 
            {/* {Hover effects} */}
             <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
CHU CHU JAPANESE
              </span>
              <div className='pt-8 text-center'>
                <a href="https://www.chuchuadl.com.au/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button>
                </a>
                {/* <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-boldt text-lg'>Code</button>
                </a> */}
              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${Rps})`}}className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
 
            {/* {Hover effects} */}
             <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
Rock - Paper - Scissors
              </span>
              <div className='pt-8 text-center'>
                <a href="https://frygit87.github.io/RockPaperScissors/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button>
                </a>
                <a href="https://github.com/FryGit87/RockPaperScissors">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${Pwgen})`}}className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
 
            {/* {Hover effects} */}
             <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
Password Generator
              </span>
              <div className='pt-8 text-center'>
                <a href="https://frygit87.github.io/Vault-Company_Password-Generator/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button>
                </a>
                <a href="https://github.com/FryGit87/Vault-Company_Password-Generator">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${Quiz})`}}className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
 
            {/* {Hover effects} */}
             <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
Kids Quiz Whiz
              </span>
              <div className='pt-8 text-center'>
                <a href="https://frygit87.github.io/Quiz_Whiz/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button>
                </a>
                <a href="https://github.com/FryGit87/Quiz_Whiz">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${Weather})`}}className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
 
            {/* {Hover effects} */}
             <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
Weather Forecaster
              </span>
              <div className='pt-8 text-center'>
                <a href="https://frygit87.github.io/Weather-Forecaster/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button>
                </a>
                <a href="https://github.com/FryGit87/Weather-Forecaster">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Work