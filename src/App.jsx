import logo from './images/logo.png'
import LaptopImage from './images/LaptopImage.png'
import EyeIcon from './images/EyeIcon.png'
import './App.css'

function App() {

  return (
    <div className='flex h-screen flex-col md:flex-row'>
      <div className='bg-white w-100 md:w-2/5 '>
        <div className='flex justify-center mt-10'>
          <img src={logo} alt="" className="w-40 h-40 ml-30  flex-items-center object-contain" />
        </div>
        <div className='flex flex-col items-left m-8 mt-0 lg:m-16 lg:mt-0'>
          <h1 className='text-[#FFAA17] mb-4 font-medium text-base' >Login</h1>
          <div>
            <div>
              <label className='block text-black-700 mb-1 font-medium text-sm' htmlFor="email">Email or Mobile</label>
              <input id='email' className="w-full p-2 border border-slate-300 rounded mb-3 placeholder:text-sm" type="text" placeholder='Enter registered email or mobile ' />
            </div>
            <div >
              <label className='block text-black-700 mb-1 font-medium text-sm' htmlFor='password'>Password</label>
              <div className='relative '>
                <input id='password' className="w-full p-2 border rounded placeholder:text-sm border-slate-300 relative" type="password" placeholder='Enter password' />
                <img src={EyeIcon} alt="Group 80" className='w-[20px] cursor-pointer absolute top-0 right-0 mr-4 mt-3' />
              </div>
            </div>
            <a href='#' className='block text-right uppercase text-xs font-medium text-[#5A5B5F] mt-2'>forgot password?</a>
            <button className='bg-[#FFAA17] rounded mt-3 text-[#3a3838] font-semibold uppercase w-full text-sm p-3'>Submit</button>
          </div>
          <div className='flex gap-1 items-center justify-center mt-16'>
            <p className='text-sm'>Not have an account?</p>
            <a href='#' className='text-[#2954c0] text-sm'>Register Here</a>
          </div>
        </div>
        <div>
        </div>
      </div>
      <div className='bg-orange-100 w-100 md:w-3/5 flex items-center justify-center '>
        <img src={LaptopImage} alt="Group 80" className='w-[550px] 2xl:w-[800px]' />
      </div>
    </div>
  )
}

export default App;
