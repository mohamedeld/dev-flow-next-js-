import { ReactNode, createContext, useContext, useEffect, useState } from "react"
interface IProps{
  children:ReactNode
}
interface IProvider{
  mode:string;
  setMode:(n:string)=> void;
}

export const ThemeContext = createContext<IProvider | undefined>(undefined);
const ThemeProvider = ({children}:IProps) => {
  const [mode,setMode] = useState('');
  function handleMode(){
    if(mode === "light"){
      setMode("dark");
      document?.documentElement?.classList?.add('dark');
    }else{
      setMode("light");
      document?.documentElement?.classList?.add('light');
    }
  }
  useEffect(()=>{
    handleMode();
  },[mode])
  return (
    <ThemeContext.Provider value={{mode,setMode}}>{children}</ThemeContext.Provider>
  )
}

export default ThemeProvider;

export function useTheme(){
  const context = useContext(ThemeContext);
  if(context === undefined){
    throw new Error("useTheme must be used within a Theme provider")
  }
  return context;
}