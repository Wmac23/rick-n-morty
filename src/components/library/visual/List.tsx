import React from "react";
import { motion } from "framer-motion"
import ListCSS from './List.module.css'

interface ListProps {
  specie: string;
  type: string;
  gender: string;
  origin: string;
  location: string;
  onClick?: () => void;
}

export default function List({ specie, type, gender, origin, location }: ListProps) {
  return (
    <div className={ListCSS.default} >
    <ul>
      <motion.li whileHover={{ scale: 1.2, backgroundColor: ['rgb(255,255,255)','rgba(245, 245, 245)', 'rgb(245, 245, 245)'] }}>
      <label> Specie:</label> <p>{specie}</p> </motion.li>
      <motion.li whileHover={{ scale: 1.2, backgroundColor: ['rgb(255,255,255)','rgba(245, 245, 245)', 'rgb(245, 245, 245)'] }}>
      <label>Type:</label> <p>{type}</p> </motion.li>
      <motion.li whileHover={{ scale: 1.2, backgroundColor: ['rgb(255,255,255)','rgba(245, 245, 245)', 'rgb(245, 245, 245)'] }}>
      <label> Gender:</label>  <p>{gender}</p></motion.li> 
      <motion.li whileHover={{ scale: 1.2, backgroundColor: ['rgb(255,255,255)','rgba(245, 245, 245)', 'rgb(245, 245, 245)'] }}>
      <label> Origin:</label>  <p>{origin}</p></motion.li> 
      <motion.li whileHover={{ scale: 1.2, backgroundColor: ['rgb(255,255,255)','rgba(245, 245, 245)', 'rgb(245, 245, 245)'] }}>
      <label>Location:</label> <p>{location}</p></motion.li>
    </ul>
  </div>
  );
}