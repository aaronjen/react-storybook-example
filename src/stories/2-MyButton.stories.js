import React from 'react';

import MyButton from "../components/MyButton";

export default {
  title: 'MyCustomButton',
  component: MyButton
}

export const MyButton1= () => {
  return (
    <MyButton/>
  )
}

export const MyButton2 = () => {
  return (
    <MyButton
      title="MyButton2"
    />
  )
}