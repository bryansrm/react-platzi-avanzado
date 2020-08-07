import React, { useState } from 'react'

export function useLocalStorage(key, initialValue){

  const [ storedValue, setValue ] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item != null ? JSON.parse(item) : initialValue
    } catch (error) {
      console.log(`error: ${error}`)
    }
  }) 

  const setLocalStorage = value => {
    try{
      window.localStorage.setItem(key, JSON.stringify(value))
      setValue(value)
    }
    catch(e){
      console.error('Error: '+ e);
    }
  }

  return [ storedValue, setLocalStorage ]

}