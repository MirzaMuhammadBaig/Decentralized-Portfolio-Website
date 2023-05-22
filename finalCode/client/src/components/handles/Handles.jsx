import React from 'react'
import './Handles.css'
import { AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';
import { FaGithubSquare } from 'react-icons/fa';
import fiverr from "../../assets/fiverr.png"
import linkedin from "../../assets/linkedin.png"
import github from "../../assets/github.png"


const Handles = () => {
  return (
    <section className='socials'>
      <a href="https://www.linkedin.com/in/mmb-blockchain-developer/" target='_blank' rel="noopener noreferrer"><img src={linkedin} alt="LinkedIn Icon" className="icon" /></a>
      <a href="https://www.fiverr.com/mirzamuhammad68/provide-you-web3-wallet-tokens-nfts-and-smart-contract" target='_blank' rel="noopener noreferrer"><img src={fiverr} alt="Fiverr Icon" className="icon" /></a>
      <a href="https://github.com/MirzaMuhammadBaig" target='_blank' rel="noopener noreferrer"><img src={github} alt="Github Icon" className="icon" />
      </a>


    </section>
  )
}

export default Handles
