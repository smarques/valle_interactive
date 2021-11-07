export const resetKeys = (keymap)=>{
  const keys = keymap.getKeys();
  keys.forEach((key)=>{
    const handlers = keymap.getHandlers(key);
    handlers.forEach((handler)=>{
      keymap.unbind(key, handler);
    })
  })
}