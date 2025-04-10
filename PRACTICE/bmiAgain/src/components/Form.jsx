import React, { useState } from 'react'
import boy from '../assets/images/boy.png'
import women from '../assets/images/woman.png'
import { IoIosArrowDown } from "react-icons/io";
import PopUp from './PopUp';
const Form = () => {
    //Define hooks
    const [bgColor, setBgColor] = useState('bg-mainGreen');
    const [weight, setWeight] = useState(0)
    const [height, setHeight] = useState(0)
    const [bmi, setBmi] = useState([
        {
            bmiValue: '',
            bmiMessage: '',
        }
    ])
    const [isPopUp , setIsPopUp] = useState(false)
    // Functions Below ⇩⇓
    const calcBmi = (e) => {
        e.preventDefault();
        let message = ''
        let bmiResult = (weight / (height * height))
        
        if (height === 0 || weight === 0) {
            message = 'Enter valid inputs'
        }
        else if (bmiResult < 18.5) {
            message = "You are Under-Weight"
        }
        else if (bmiResult < 24.9) {
            message = "Ideal Bmi"
        }
        else if(bmiResult < 29.9) {
            message = 'Over-Weight'
        }
        else{
            message="Your are Motu(Kitna Khayega)"
        }
        setBmi({ bmiValue: bmiResult.toFixed(3), bmiMessage: message })
    }
    const handelManClick = () => {
        setBgColor('bg-blue-200')
        console.log(bgColor);

    }
    const handelWomenClick = () => {
        setBgColor('bg-pink-200')
        console.log(bgColor);
    }
    return (
        <div className={`h-[100vh] ${bgColor}`}>
            {/* Top gender Section */}
            <div className='flex justify-center gap-15 pt-16'>
                <div className='flex gap-3.5'>

                    <img
                        src={boy}
                        alt="user1Img"
                        id='man'
                        className='h-40' />

                    <input
                        onClick={handelManClick}
                        className='h-auto scale-150'
                        type="radio"
                        name="radioBtn"
                        id="manBtn" />
                </div>
                <div className='flex gap-3.5'>

                    <input
                        onClick={handelWomenClick}
                        className='h-auto scale-150'
                        type="radio"
                        name="radioBtn"
                        id="womenBtn" />

                    <img
                        src={women}
                        alt="user2Img"
                        id='woman'
                        className='h-40' />
                </div>
            </div>

            {/* Imperial matric btn section */}
            <div className='flex gap-0.5 justify-center items-center mt-10'>
                <div>
                    <button
                        onClick={() => {
                            document.getElementById('metricBtn').style.backgroundColor = 'white';
                            document.getElementById('imperialBtn').style.backgroundColor = '#afd8d7';
                        }
                        }
                        id='metricBtn'
                        className='text-2xl px-8 py-1.5 font-bold shadow-lg bg-btnBgGreen text-btnHoverTextGreen border-white hover:bg-white '>Metric</button>
                </div>
                <div>
                    <button
                        onClick={() => {
                            document.getElementById('metricBtn').style.backgroundColor = '#afd8d7';
                            document.getElementById('imperialBtn').style.backgroundColor = 'white';
                        }
                        }
                        id='imperialBtn'
                        className='text-2xl px-8 py-1.5 shadow-lg font-bold bg-btnBgGreen text-btnHoverTextGreen border-white hover:bg-white'>Imperial</button>
                </div>
            </div>

            {/* Form Section */}
            <div className='mt-5 p-10 flex justify-center'>
                <form
                    action="submit"
                    onSubmit={calcBmi}>
                    <div className='flex gap-10 justify-center items-center'>
                        <div className='flex gap-5'>
                            <label
                                className='text-2xl font-bold text-formInputTextColor'
                                htmlFor="height" >Height(m)</label>
                            <input
                                required
                                className='w-25 bg-formInputColor rounded-lg py-2 text-center'
                                type="tel"
                                name="height"
                                id="height"
                                placeholder='Enter Height'
                                value={height}
                                onChange={(e) => setHeight(e.target.value)}
                            />
                        </div>
                        <div className='flex gap-5'>
                            <label
                                className='text-2xl font-bold text-formInputTextColor'
                                htmlFor="weight">Weight(Kg)</label>
                            <input
                                required
                                className='w-25 bg-formInputColor rounded-lg py-2 text-center'
                                type="tel"
                                name="weight"
                                id="weight"
                                placeholder='Enter Weight'
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className='flex justify-between gap-5 items-center text-center mt-8'>
                        <div className='flex text-center gap-0.5'>
                            <select
                                className='bg-white text-gray-500 appearance-none rounded-s-xl w-60 text-2xl py-1.5 text-center'
                                name="country"
                                id="Con">
                                <option value="con">Country</option>
                                <option value="con">India</option>
                                <option value="con">China</option>
                                <option value="con">Canada</option>
                                <option value="con">USA</option>
                                <option value="con">Japan</option>
                            </select>
                            <IoIosArrowDown className='text-5xl text-gray-500 bg-white rounded-e-xl  py-0.5' />
                        </div>
                        <div className='flex text-center gap-0.5'>
                            <select
                                className='bg-white text-gray-500 appearance-none rounded-s-xl w-60 text-2xl py-1.5 text-center'
                                name="age"
                                id="Age">
                                <option value="con">Age</option>
                                <option value="con">16</option>
                                <option value="con">17</option>
                                <option value="con">18</option>
                                <option value="con">19</option>
                                <option value="con">20</option>
                            </select>
                            <IoIosArrowDown className='text-5xl text-gray-500 bg-white rounded-e-xl  py-0.5' />
                        </div>
                        <div className='flex text-center gap-0.5'>
                            <select
                                className='bg-white text-gray-500 appearance-none rounded-s-xl w-60 text-2xl py-1.5 text-center'
                                name="loc"
                                id="location">
                                <option value="con">Urban</option>
                                <option value="con">Rural</option>
                            </select>
                            <IoIosArrowDown className='text-5xl text-gray-500 bg-white rounded-e-xl  py-0.5' />
                        </div>

                    </div>

                    <div className='mt-10 flex justify-center'>
                        <input
                            className='h-auto scale-150'
                            type="checkbox"
                            required />
                        <p
                            className='text-xl text-white'>
                            <span className='text-tncColor pe-0.5'>
                                I accept the
                            </span>
                            terms and conditions.
                        </p>
                    </div>

                    <div className='mt-10 flex justify-center'>
                        <button
                        onClick={()=>setIsPopUp(!isPopUp)}
                            type='submit'
                            className="px-15 py-2 text-calcColor rounded-md text-2xl bg-white transition duration-200 hover:bg-white border-2 border-transparent hover:border-teal-500">
                            Calculate
                        </button>
                    </div>
                </form>
            </div>    
            {isPopUp && <PopUp PopClose={()=>setIsPopUp(!isPopUp)} popValue={bmi.bmiValue} popMessage={bmi.bmiMessage} />}
        </div>
    )
}

export default Form