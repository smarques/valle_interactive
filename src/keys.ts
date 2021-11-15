import { keyz } from "./constants"
export const resetKeys = (keymap)=>{
  // console.log("Resetting keys...")
  const keys = keymap.getKeys();
  keys.forEach((key)=>{
    if(key != keyz.CENTER){ 
      const handlers = keymap.getHandlers(key);
      handlers.forEach((handler)=>{
        keymap.unbind(key, handler);
      })
    }
  })
}